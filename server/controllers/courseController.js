import Course from '../models/Course.js';
import Student from '../models/Student.js';

export const getCourses = async (_req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

export const getCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ message: 'Not found' });
  res.json(course);
};

export const createCourse = async (req, res) => {
  const course = await Course.create(req.body);
  res.status(201).json(course);
};

export const updateCourse = async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(course);
};

export const deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

export const enroll = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ message: 'Course missing' });
  course.enrolledStudents.push(req.user._id);
  await course.save();
  await Student.findOneAndUpdate({ userId: req.user._id }, { courseEnrolled: course._id });
  res.json({ message: 'Enrolled', course });
};

