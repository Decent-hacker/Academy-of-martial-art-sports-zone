import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
  venue: String,
  registrationDeadline: Date,
  entryFee: Number,
  maxParticipants: Number,
  registeredParticipants: [{ type: mongoose.Schema.Types.ObjectId }],
  prizes: String,
  image: String,
  status: { type: String, enum: ['upcoming','ongoing','completed'], default: 'upcoming' },
});

export default mongoose.model('Event', eventSchema);

