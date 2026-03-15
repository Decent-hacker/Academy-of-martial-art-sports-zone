import { createContext, useMemo, useState } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p._id === product._id);
      if (existing) {
        return prev.map((p) => (p._id === product._id ? { ...p, qty: p.qty + 1 } : p));
      }
      toast.success(`${product.name} added to cart`);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => setCart((prev) => prev.map((p) => (p._id === id ? { ...p, qty } : p)));
  const removeFromCart = (id) => setCart((prev) => prev.filter((p) => p._id !== id));

  const totals = useMemo(() => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    return { subtotal };
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeFromCart, totals }}>
      {children}
    </CartContext.Provider>
  );
};

