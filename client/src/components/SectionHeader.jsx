const SectionHeader = ({ title, tag = 'Martial Arts Excellence', highlight }) => (
  <div className="section-header animate-on-scroll">
    <span className="section-tag">[ {tag.toUpperCase()} ]</span>
    <h2 className="section-title">{title} {highlight && <span>{highlight}</span>}</h2>
    <div className="section-divider">
      <div className="divider-line red"></div>
      <div className="divider-diamond"></div>
      <div className="divider-line blue"></div>
    </div>
  </div>
);

export default SectionHeader;
