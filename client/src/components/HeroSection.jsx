import { FrontKickFigure, RoundhouseFigure } from './KarateAnimations';

const HeroSection = () => (
  <section className="hero animate-on-scroll">
    <div className="hero-hex" aria-hidden>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <polygon points="200,20 360,110 360,290 200,380 40,290 40,110" fill="none" stroke="rgba(229,0,10,0.2)" strokeWidth="2" />
        <polygon points="200,60 320,130 320,270 200,340 80,270 80,130" fill="none" stroke="rgba(10,47,255,0.15)" strokeWidth="2" />
        <polygon points="200,100 280,150 280,250 200,300 120,250 120,150" fill="none" stroke="rgba(229,0,10,0.1)" strokeWidth="2" />
      </svg>
    </div>
    <div className="hero-grid">
      <div className="hero-figure">
        <FrontKickFigure className="large" />
      </div>
      <div className="hero-content">
        <span className="hero-badge">EST. 2000 � MARTIAL EXCELLENCE</span>
        <h1 className="hero-title">ACADEMY OF MARTIAL ARTS </h1>
        <h2 className="hero-sub">FORGE THE FUTURE</h2>
        <p className="hero-text">Academy of Martial Arts & Sports Zone � where ancient discipline meets futuristic training.</p>
        <div className="hero-ctas">
          <a href="#admission" className="btn-primary">Join Now</a>
          <a href="#courses" className="btn-secondary">Explore Courses</a>
        </div>
      </div>
      <div className="hero-figure">
        <RoundhouseFigure className="large" />
      </div>
    </div>
    <div className="hero-ticker-bar">
      <div className="hero-ticker-text">
        ?? BEGINNER BATCH STARTS MARCH 2025 � ?? STATE CHAMPIONS 2024 � ?? 50+ NATIONAL MEDALS � ?? ENROLL NOW: +91-XXXXXXXXXX � ?? BEGINNER BATCH STARTS MARCH 2025 � ?? STATE CHAMPIONS 2024 � ?? 50+ NATIONAL MEDALS � ?? ENROLL NOW: +91-XXXXXXXXXX �
      </div>
    </div>
  </section>
);

export default HeroSection;
