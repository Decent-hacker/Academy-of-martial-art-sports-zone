import { useState } from 'react';

const tabs = ['Students', 'Courses', 'Events', 'Shop', 'Payments', 'Analytics'];

const AdminDashboard = () => {
  const [active, setActive] = useState('Students');
  return (
    <section className="page">
      <div className="section-title">Admin Dashboard</div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {tabs.map((t) => (
          <button key={t} className="neon-button" style={{ background: active === t ? 'rgba(255,31,77,0.5)' : 'transparent' }} onClick={() => setActive(t)}>
            {t}
          </button>
        ))}
      </div>
      <div className="glass-card" style={{ padding: 16, marginTop: 14 }}>
        Manage {active} (CRUD placeholders with tables)
      </div>
    </section>
  );
};
export default AdminDashboard;

