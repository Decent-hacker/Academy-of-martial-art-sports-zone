import { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';
import toast from 'react-hot-toast';
import api from '../services/api';
import SectionHeader from '../components/SectionHeader';

const products = [
  { _id: '1', name: 'Karate Gi (White/Black)', description: 'Premium breathable gi', price: 1299, category: 'uniform' },
  { _id: '2', name: 'Black Belt', description: 'Certified grade', price: 499, category: 'accessories' },
  { _id: '3', name: 'Focus Mitts', description: 'Shock absorbent', price: 899, category: 'equipment' },
  { _id: '4', name: 'Shinai Bamboo Sword', description: 'Lightweight practice sword', price: 1499, category: 'equipment' },
  { _id: '5', name: 'Training Bag', description: 'Durable with vents', price: 2999, category: 'accessories' },
  { _id: '6', name: 'Protective Gear Set', description: 'Head + shin + gloves', price: 3499, category: 'equipment' },
  { _id: '7', name: 'Academy T-Shirt', description: 'Dry-fit tee', price: 699, category: 'uniform' },
  { _id: '8', name: 'Training DVD/Course Access', description: 'On-demand library', price: 999, category: 'media' },
];

const Shop = () => {
  const { cart, addToCart, updateQty, removeFromCart, totals } = useContext(CartContext);

  const checkout = async () => {
    try {
      const payload = {
        items: cart.map((c) => ({ productId: c._id, name: c.name, price: c.price, quantity: c.qty })),
        totalAmount: totals.subtotal,
        shippingAddress: 'TBD',
      };
      await api.post('/orders/create', payload);
      toast.success('Order created, proceed to payment');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Checkout failed');
    }
  };

  return (
    <section className="page">
      <SectionHeader title="Shop" />
      <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
        {products.map((p) => <ProductCard key={p._id} product={p} onAdd={addToCart} />)}
      </div>
      <SectionHeader title="Cart" />
      <div className="card-3d" style={{ padding: 14 }}>
        {cart.length === 0 && <p>No items yet.</p>}
        {cart.map((item) => (
          <div key={item._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <div>{item.name} (?{item.price})</div>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <input type="number" min="1" value={item.qty} onChange={(e) => updateQty(item._id, Number(e.target.value))} style={{ width: 60 }} />
              <button className="btn-secondary" onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          </div>
        ))}
        {cart.length > 0 && (
          <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>Total: ?{totals.subtotal}</div>
            <button className="btn-primary" onClick={checkout}>Checkout</button>
          </div>
        )}
      </div>
    </section>
  );
};
export default Shop;
