import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  const order = await Order.create({ ...req.body, userId: req.user._id });
  res.status(201).json(order);
};

export const myOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user._id });
  res.json(orders);
};

export const allOrders = async (_req, res) => res.json(await Order.find());

export const updateStatus = async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(order);
};

