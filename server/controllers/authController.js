import jwt from "jsonwebtoken";
import User from "../models/User.js";

const ensureJwtSecret = () => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }
  return process.env.JWT_SECRET;
};

const signToken = (id, role) => jwt.sign({ id, role }, ensureJwtSecret(), { expiresIn: process.env.JWT_EXPIRES_IN || "7d" });

const sanitizeUser = (userDoc) => {
  const safe = userDoc?.toObject ? userDoc.toObject() : { ...userDoc };
  delete safe.password;
  return safe;
};

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: "Email already used" });

  const user = await User.create({ name, email, password, role });
  res.status(201).json({ user: { id: user._id, email: user.email } });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const match = await user.comparePassword(password);
  if (!match) return res.status(401).json({ message: "Invalid credentials" });

  const token = signToken(user._id, user.role);
  res.json({ token, user: sanitizeUser(user) });
};

export const profile = async (req, res) => res.json({ user: req.user });

export const updateProfile = async (req, res) => {
  const allowedFields = ["name", "phone", "profileImage", "beltLevel", "password"];
  const updates = Object.fromEntries(Object.entries(req.body || {}).filter(([key]) => allowedFields.includes(key)));

  const user = await User.findById(req.user._id);
  if (!user) return res.status(404).json({ message: "User not found" });

  Object.assign(user, updates);
  await user.save();

  res.json({ user: sanitizeUser(user) });
};

export const logout = (_req, res) => res.json({ message: "Logged out" });
