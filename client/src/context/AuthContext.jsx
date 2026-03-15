import { createContext, useEffect, useState } from 'react';
import api from '../services/api';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('amas_token'));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token && !user) {
      api
        .get('/auth/profile', { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => setUser(res.data.user))
        .catch(() => logout());
    }
  }, [token, user]);

  const login = async (payload) => {
    try {
      setLoading(true);
      const res = await api.post('/auth/login', payload);
      setToken(res.data.token);
      localStorage.setItem('amas_token', res.data.token);
      setUser(res.data.user);
      toast.success('Welcome back, warrior!');
      return true;
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (payload) => {
    try {
      setLoading(true);
      await api.post('/auth/register', payload);
      toast.success('Registration successful. Please login.');
      return true;
    } catch (err) {
      toast.error(err.response?.data?.message || 'Could not register');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('amas_token');
    toast('Session cleared', { icon: '??' });
  };

  const value = {
    user,
    token,
    isAuthenticated: !!token,
    isAdmin: user?.role === 'admin',
    loading,
    login,
    register,
    logout,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
