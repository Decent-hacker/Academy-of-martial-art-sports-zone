import Razorpay from 'razorpay';
import crypto from 'crypto';

const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

const instance = razorpayKeyId && razorpayKeySecret
  ? new Razorpay({
      key_id: razorpayKeyId,
      key_secret: razorpayKeySecret,
    })
  : null;

const PAYMENT_CONFIG_ERROR = 'Razorpay is not configured. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in server environment variables.';

export const createRazorpayOrder = async (amount, currency = 'INR') => {
  if (!instance) {
    throw new Error(PAYMENT_CONFIG_ERROR);
  }
  const order = await instance.orders.create({ amount: amount * 100, currency });
  return { orderId: order.id, amount: order.amount, currency: order.currency };
};

export const verifyPayment = (orderId, paymentId, signature) => {
  if (!razorpayKeySecret) {
    throw new Error(PAYMENT_CONFIG_ERROR);
  }
  const body = orderId + '|' + paymentId;
  const expected = crypto.createHmac('sha256', razorpayKeySecret).update(body).digest('hex');
  return expected === signature;
};

