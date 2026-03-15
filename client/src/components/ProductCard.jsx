import { motion } from 'framer-motion';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ProductCard = ({ product, onAdd }) => {
  const img = product.image || `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 20) + 1}`;
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Number(product.price) || 0);

  return (
    <motion.div whileHover={{ scale: 1.01 }} className="card-3d animate-on-scroll">
      <div className="product-image">
        <img src={img} alt={product.name} loading="lazy" />
        <div className="product-overlay">ADD TO CART</div>
      </div>
      <h4 style={{ margin: '6px 0', color: 'var(--color-text)' }}>{product.name}</h4>
      <p style={{ color: '#4a4a5e' }}>{product.description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <div className="badge">{formattedPrice}</div>
        <button className="btn-primary" style={{ display: 'flex', gap: 8, alignItems: 'center' }} onClick={() => onAdd?.(product)}>
          <AiOutlineShoppingCart /> Add
        </button>
      </div>
    </motion.div>
  );
};
export default ProductCard;
