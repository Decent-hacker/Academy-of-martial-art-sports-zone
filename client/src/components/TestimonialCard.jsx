import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => (
  <motion.div whileHover={{ scale: 1.02 }} className="card-3d animate-on-scroll">
    <p style={{ color: '#4a4a5e' }}>"{testimonial.quote}"</p>
    <div style={{ marginTop: 8, fontWeight: 700, color: 'var(--color-text)' }}>{testimonial.name}</div>
    <div className="badge">{testimonial.role}</div>
  </motion.div>
);

export default TestimonialCard;
