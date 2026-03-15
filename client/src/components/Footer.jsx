import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { KataFigure } from './KarateAnimations';

const Footer = () => (
  <footer className="footer animate-on-scroll">
    <div className="footer-grid">
      <div style={{ display: 'grid', gap: 10 }}>
        <div className="navbar-logo-small" style={{ color: 'white' }}>
          <span className="logo-icon">??</span>
          <div>
            <span className="logo-text">AMAS</span>
            <span className="logo-sub" style={{ color: '#9fb4ff' }}>Academy of Martial Arts & Sports Zone</span>
          </div>
        </div>
        <p>Master the Art. Forge the Future. Training warriors with discipline, honor, and innovation.</p>
        <KataFigure className="small" />
      </div>
      <div>
        <h4>Quick Links</h4>
        {['Home','About','Courses','Events','Contact'].map((link) => (
          <div key={link} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ color: 'var(--color-red)' }}>?</span>
            <Link to="/">{link}</Link>
          </div>
        ))}
      </div>
      <div>
        <h4>Courses</h4>
        {['Beginner Karate','Advanced Combat','Self Defense Pro','Kids Karate'].map((c, i) => (
          <div key={c} style={{ color: '#9fb4ff' }}>{i + 1}. {c}</div>
        ))}
      </div>
      <div>
        <h4>Contact</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><FaMapMarkerAlt color="#3d5afe" /> Neo Dojo Street, Mumbai</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><FaPhone color="#3d5afe" /> +91-98765-12345</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><FaEnvelope color="#3d5afe" /> admissions@amas.zone</div>
        <div className="social-row">
          <FaFacebook color="#3d5afe" />
          <FaInstagram color="#e5000a" />
          <FaYoutube color="#e5000a" />
          <FaWhatsapp color="#25D366" />
        </div>
      </div>
    </div>
    <div className="footer-bottom">� 2025 Academy of Martial Arts & Sports Zone | All Rights Reserved</div>
  </footer>
);

export default Footer;
