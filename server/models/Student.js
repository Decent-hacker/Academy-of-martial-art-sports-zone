import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  date: Date,
  status: String,
});

const studentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  email: String,
  contact: String,
  age: Number,
  courseSelection: String,
  photo: String,
  studentId: String,
  beltLevel: { type: String, enum: ["white", "yellow", "orange", "green", "blue", "brown", "black"] },
  courseEnrolled: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  dateOfBirth: Date,
  gender: String,
  guardianName: String,
  guardianPhone: String,
  address: String,
  medicalInfo: String,
  feeStatus: { type: String, enum: ["paid", "pending", "partial"], default: "pending" },
  admissionDate: { type: Date, default: Date.now },
  attendance: [attendanceSchema],
});

export default mongoose.model("Student", studentSchema);
