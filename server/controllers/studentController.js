import Student from '../models/Student.js';
import { generateStudentId } from '../utils/helpers.js';

export const registerStudent = async (req, res) => {
  const studentId = generateStudentId();
  const student = await Student.create({ ...req.body, studentId });
  res.status(201).json({ student });
};

export const getStudents = async (_req, res) => {
  const students = await Student.find();
  res.json(students);
};

export const getStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) return res.status(404).json({ message: 'Not found' });
  res.json(student);
};

export const updateStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(student);
};

export const deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

export const attendance = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student?.attendance || []);
};

