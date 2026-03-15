import Payment from '../models/Payment.js';
import Order from '../models/Order.js';
import { createRazorpayOrder, verifyPayment } from '../services/paymentService.js';
import { sendMail } from '../services/emailService.js';

export const createOrder = async (req, res) => {
  try {
    const { amount, type } = req.body;
    const { orderId, currency } = await createRazorpayOrder(amount);
    const payment = await Payment.create({ userId: req.user._id, amount, currency, razorpayOrderId: orderId, type });
    res.json({ orderId, amount, currency, paymentId: payment._id });
  } catch (error) {
    res.status(503).json({ message: error.message || 'Payment service unavailable' });
  }
};

export const verify = async (req, res) => {
  try {
    const { orderId, paymentId, signature, relatedOrderId } = req.body;
    const valid = verifyPayment(orderId, paymentId, signature);
    if (!valid) return res.status(400).json({ message: 'Invalid signature' });
    const payment = await Payment.findOneAndUpdate({ razorpayOrderId: orderId }, { status: 'paid', razorpayPaymentId: paymentId, razorpaySignature: signature }, { new: true });
    if (relatedOrderId) await Order.findByIdAndUpdate(relatedOrderId, { paymentStatus: 'paid' });
    await sendMail({ to: req.user.email, subject: 'Payment Confirmed', html: `<p>Payment ${paymentId} confirmed.</p>` });
    res.json({ success: true });
  } catch (error) {
    res.status(503).json({ message: error.message || 'Payment service unavailable' });
  }
};

export const history = async (req, res) => {
  const payments = await Payment.find({ userId: req.user._id });
  res.json(payments);
};

