import SectionHeader from '../components/SectionHeader';

const timeline = [
  { year: 2025, title: 'Interstate Champions', detail: '50 medals across kumite & kata' },
  { year: 2024, title: 'National Top 3', detail: 'Brown & Black belts dominated finals' },
  { year: 2023, title: 'International Debut', detail: 'Team India qualifiers from academy' },
];

const Achievements = () => (
  <section className="page">
    <SectionHeader title="Achievements" />
    <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
      {['Championship Medals', 'Trophy Showcase', 'Student Success Stories'].map((c) => (
        <div key={c} className="card-3d">{c}</div>
      ))}
    </div>
    <SectionHeader title="Timeline" />
    <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
      {timeline.map((t) => (
        <div key={t.year} className="card-3d">
          <div className="badge">{t.year}</div>
          <div style={{ color: 'var(--color-text)', fontWeight: 700 }}>{t.title}</div>
          <p style={{ margin: 0, color: '#4a4a5e' }}>{t.detail}</p>
        </div>
      ))}
    </div>
  </section>
);
export default Achievements;
