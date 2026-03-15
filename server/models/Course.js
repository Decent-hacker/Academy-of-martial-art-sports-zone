import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  beltLevel: String,
  duration: String,
  price: Number,
  schedule: String,
  maxStudents: Number,
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId }],
  instructor: String,
  image: String,
  isActive: { type: Boolean, default: true },
});

export default mongoose.model('Course', courseSchema);

