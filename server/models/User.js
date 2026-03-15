import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'trainer', 'admin'], default: 'student' },
  phone: String,
  profileImage: String,
  beltLevel: { type: String, enum: ['white','yellow','orange','green','blue','brown','black'], default: 'white' },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (pwd) {
  return bcrypt.compare(pwd, this.password);
};

export default mongoose.model('User', userSchema);

