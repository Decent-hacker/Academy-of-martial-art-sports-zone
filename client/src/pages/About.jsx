import SectionHeader from '../components/SectionHeader';
import { FrontKickFigure } from '../components/KarateAnimations';

const About = () => {
  const trainers = Array.from({ length: 12 }).map((_, i) => ({
    name: Sensei ,
    rank: ['Black', 'Brown', 'Blue'][i % 3],
    years: 5 + i,
  }));
  const values = ['Discipline', 'Respect', 'Excellence', 'Perseverance'];
  return (
    <section className="page" style={{ position: 'relative', overflow: 'hidden' }}>
      <SectionHeader title="About The Academy" />
      <div style={{ position: 'absolute', left: -20, top: 80, opacity: 0.2 }}>
        <FrontKickFigure className="small" />
      </div>
      <p style={{ color: '#4a4a5e', maxWidth: 760 }}>
        Founded in 2000, AMAS Zone fused Japanese martial arts lineage with cyber-era training rigs. We forge resilient warriors with the heart of tradition and the mind of innovation.
      </p>
      <div className="two-col" style={{ marginTop: 20 }}>
        <div className="card-3d">
          <h3 style={{ marginTop: 0, color: 'var(--color-text)' }}>Mission</h3>
          <p style={{ color: '#4a4a5e' }}>Forge resilient warriors with heart of tradition and mind of innovation.</p>
        </div>
        <div className="card-3d">
          <h3 style={{ marginTop: 0, color: 'var(--color-text)' }}>Vision</h3>
          <p style={{ color: '#4a4a5e' }}>Be Asia’s leading futuristic dojo ecosystem for competition and self-mastery.</p>
        </div>
      </div>
      <SectionHeader title="Trainer Profiles" />
      <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))' }}>
        {trainers.map((t) => (
          <div key={t.name} className="card-3d">
            <div className="badge">{t.rank} Belt</div>
            <h4 style={{ margin: '8px 0', color: 'var(--color-text)' }}>{t.name}</h4>
            <div style={{ color: '#4a4a5e' }}>{t.years} yrs service</div>
          </div>
        ))}
      </div>
      <SectionHeader title="Facilities" />
      <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
        {['Holo-Kata Studio', 'VR Sparring Pods', 'Strength Lab', 'Meditation Dome'].map((f) => (
          <div key={f} className="card-3d">{f}</div>
        ))}
      </div>
      <SectionHeader title="Values" />
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {values.map((v) => <span key={v} className="badge">{v}</span>)}
      </div>
    </section>
  );
};
export default About;
