import { useAuth } from '../hooks/useAuth';
import api from '../services/api';
import toast from 'react-hot-toast';

const StudentDashboard = () => {
  const { user } = useAuth();

  const payFee = async () => {
    try {
      const { data } = await api.post('/payments/razorpay/create-order', { amount: 5000, type: 'course_fee' });
      toast.success(`Order created: ${data.orderId}`);
    } catch {
      toast.error('Payment init failed');
    }
  };

  return (
    <section className="page">
      <div className="section-title">Student Dashboard</div>
      <div className="two-col">
        <div className="glass-card" style={{ padding: 14 }}>
          <h4>{user?.name}</h4>
          <div className="badge">{user?.role}</div>
          <div>Belt: {user?.beltLevel || 'white'}</div>
          <button className="neon-button" style={{ marginTop: 12 }} onClick={payFee}>Pay Fee</button>
        </div>
        <div className="glass-card" style={{ padding: 14 }}>
          <h4>Progress</h4>
          <div>Course: Advanced Combat</div>
          <div>Completion: 60%</div>
          <div>Attendance: 92%</div>
        </div>
      </div>
      <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', marginTop: 18 }}>
        <div className="glass-card" style={{ padding: 12 }}>Fee history</div>
        <div className="glass-card" style={{ padding: 12 }}>Events registered</div>
        <div className="glass-card" style={{ padding: 12 }}>Certificates</div>
      </div>
    </section>
  );
};
export default StudentDashboard;

