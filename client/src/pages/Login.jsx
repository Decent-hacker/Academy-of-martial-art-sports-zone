import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const { login, register, loading } = useAuth();
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const nav = useNavigate();
  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = isRegister ? await register(form) : await login(form);
    if (success) nav('/dashboard');
  };

  return (
    <section className="page">
      <div className="section-title">{isRegister ? 'Register' : 'Login'}</div>
      <form className="glass-card" style={{ padding: 16, maxWidth: 400, display: 'grid', gap: 10 }} onSubmit={handleSubmit}>
        {isRegister && <input required placeholder="Name" name="name" onChange={handleChange} />}
        <input required type="email" placeholder="Email" name="email" onChange={handleChange} />
        <input required type="password" placeholder="Password" name="password" onChange={handleChange} />
        <button className="neon-button" type="submit" disabled={loading}>{loading ? '...' : isRegister ? 'Register' : 'Login'}</button>
        <span onClick={() => setIsRegister((p) => !p)} style={{ cursor: 'pointer', color: 'var(--color-blue)' }}>
          {isRegister ? 'Have an account? Login' : 'New here? Register'}
        </span>
      </form>
    </section>
  );
};
export default Login;

