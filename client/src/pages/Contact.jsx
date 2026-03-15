import { useState } from 'react';
import api from '../services/api';
import toast from 'react-hot-toast';
import SectionHeader from '../components/SectionHeader';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/contact', form);
      toast.success('Message sent');
    } catch {
      toast.error('Unable to send');
    }
  };
  return (
    <section className="page">
      <SectionHeader title="Contact" />
      <div className="two-col">
        <form className="card-3d" style={{ padding: 16, display: 'grid', gap: 10 }} onSubmit={handleSubmit}>
          <input required placeholder="Name" name="name" onChange={handleChange} />
          <input required type="email" placeholder="Email" name="email" onChange={handleChange} />
          <input required placeholder="Phone" name="phone" onChange={handleChange} />
          <textarea required placeholder="Message" name="message" onChange={handleChange}></textarea>
          <button className="btn-primary" type="submit">Send Message</button>
        </form>
        <div className="card-3d" style={{ padding: 16 }}>
          <h4 style={{ marginTop: 0 }}>Reach Us</h4>
          <p>Academy of Martial Arts & Sports Zone, Bihar sharif</p>
          <p>+91-98765-12345</p>
          <p>support@amas.zone</p>
          <a className="btn-secondary" href="https://wa.me/919876512345" target="_blank" rel="noreferrer">WhatsApp</a>
          <div style={{ marginTop: 12, height: 220, background: 'var(--color-gray)', display: 'grid', placeItems: 'center', borderRadius: 12 }}>
            Google Maps Embed Placeholder
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
