import SectionHeader from '../components/SectionHeader';
import { PunchFigure } from '../components/KarateAnimations';

const masters = Array.from({ length: 12 }).map((_, i) => ({
  name: `Master ${i + 1}`,
  rank: 'Black Belt',
  years: 10 + i,
  achievements: 'Multiple championships & coaching accolades',
}));

const HallOfFame = () => (
  <section className="page" style={{ position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', opacity: 0.05, pointerEvents: 'none' }}>
      <PunchFigure className="large" />
    </div>
    <SectionHeader title="Hall of Fame" />
    <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
      {masters.map((m) => (
        <div key={m.name} className="card-3d" style={{ position: 'relative' }}>
          <div className="badge">{m.rank}</div>
          <h4 style={{ margin: '8px 0', color: 'var(--color-text)' }}>{m.name}</h4>
          <div style={{ color: '#4a4a5e' }}>{m.years} years</div>
          <p style={{ color: '#4a4a5e' }}>{m.achievements}</p>
        </div>
      ))}
    </div>
  </section>
);
export default HallOfFame;
