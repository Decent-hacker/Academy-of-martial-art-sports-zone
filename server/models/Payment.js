import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  razorpayOrderId: String,
  razorpayPaymentId: String,
  razorpaySignature: String,
  amount: Number,
  currency: { type: String, default: 'INR' },
  status: { type: String, enum: ['created','paid','failed'], default: 'created' },
  type: { type: String, enum: ['course_fee','event_registration','shop_order'] },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Payment', paymentSchema);

