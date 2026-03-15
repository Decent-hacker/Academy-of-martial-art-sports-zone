import Product from '../models/Product.js';

export const getProducts = async (_req, res) => res.json(await Product.find());
export const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Not found' });
  res.json(product);
};
export const addProduct = async (req, res) => res.status(201).json(await Product.create(req.body));
export const updateProduct = async (req, res) => res.json(await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }));
export const deleteProduct = async (req, res) => { await Product.findByIdAndDelete(req.params.id); res.json({ success: true }); };

