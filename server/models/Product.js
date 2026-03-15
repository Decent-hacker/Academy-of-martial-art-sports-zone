import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: { type: String, enum: ['uniform','equipment','accessories','media'] },
  stock: { type: Number, default: 0 },
  image: String,
  isActive: { type: Boolean, default: true },
});

export default mongoose.model('Product', productSchema);

