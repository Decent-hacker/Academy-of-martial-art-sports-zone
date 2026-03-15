import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { AuthContext } from '../context/AuthContext';

const photos = Array.from({ length: 12 }).map((_, i) => `https://picsum.photos/120/60?random=${i + 1}`)
const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/courses', label: 'Courses' },
  { to: '/events', label: 'Events' },
  { to: '/shop', label: 'Shop' },
  { to: '/contact', label: 'Contact' },
];

const LogoBlock = () => (
  <div className="navbar-logo-small">
    <span className="logo-icon">??</span>
    <div>
      <span className="logo-text">AMAS</span>
      <span className="logo-sub">Academy of Martial Arts & Sports Zone</span>
    </div>
  </div>
);

const Navbar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const tickerItems = [...photos, ...photos];

  return (
    <nav className="navbar">
      <div className="navbar-ticker-row">
        <LogoBlock />
        <div className="ticker-container">
          <span className="ticker-label">?? Recent Highlights</span>
          <div className="ticker-track">
            <div className="ticker-inner" id="tickerInner">
              {tickerItems.map((src, idx) => (
                <img src={src} alt={`highlight-${idx}`} key={idx} loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-main-row">
        <LogoBlock />
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>{l.label}</NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="btn-primary">Login</Link>
              <Link to="/login" className="btn-secondary">Register</Link>
            </>
          ) : (
            <>
              <span className="badge">{user?.name || 'Member'}</span>
              <button className="btn-primary" onClick={logout}>Logout</button>
            </>
          )}
        </div>
        <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setOpen((p) => !p)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
      {open && (
        <div className="mobile-menu">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</NavLink>
          ))}
          {!isAuthenticated ? (
            <>
              <NavLink to="/login" onClick={() => setOpen(false)}>Login</NavLink>
              <NavLink to="/login" onClick={() => setOpen(false)}>Register</NavLink>
            </>
          ) : (
            <span onClick={() => { logout(); setOpen(false); }}>Logout</span>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
