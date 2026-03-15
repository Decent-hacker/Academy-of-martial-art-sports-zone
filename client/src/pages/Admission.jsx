import { useState } from 'react';
import api from '../services/api';
import toast from 'react-hot-toast';
import SectionHeader from '../components/SectionHeader';

const Admission = () => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
    email: '',
    beltLevel: 'white',
    courseSelection: '',
    medicalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...form, age: form.age ? Number(form.age) : undefined };
      await api.post('/students/register', payload);
      toast.success('Admission submitted');
      setForm({ name: '', age: '', gender: '', contact: '', email: '', beltLevel: 'white', courseSelection: '', medicalInfo: '' });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Submission failed');
    }
  };

  return (
    <section className="page" id="admission">
      <SectionHeader title="Admission" />
      <div className="two-col">
        <form className="card-3d" style={{ padding: 16, display: 'grid', gap: 10 }} onSubmit={handleSubmit}>
          <input required placeholder="Name" name="name" value={form.name} onChange={handleChange} />
          <input required type="number" placeholder="Age" name="age" value={form.age} onChange={handleChange} />
          <select name="gender" value={form.gender} onChange={handleChange} required>
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input required placeholder="Contact" name="contact" value={form.contact} onChange={handleChange} />
          <input required type="email" placeholder="Email" name="email" value={form.email} onChange={handleChange} />
          <select name="beltLevel" value={form.beltLevel} onChange={handleChange}>
            {['white','yellow','orange','green','blue','brown','black'].map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
          <input placeholder="Course Selection" name="courseSelection" value={form.courseSelection} onChange={handleChange} />
          <textarea placeholder="Medical Info" name="medicalInfo" value={form.medicalInfo} onChange={handleChange}></textarea>
          <button className="btn-primary" type="submit">Submit Admission</button>
        </form>
        <div className="card-3d" style={{ padding: 16 }}>
          <h4>Admission Process</h4>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))' }}>
            {['Online Form', 'Counseling Call', 'Dojo Visit', 'Assessment', 'Enrollment'].map((step, i) => (
              <div key={step} className="card-3d" style={{ padding: 12 }}>
                <div className="badge">Step {i+1}</div>
                <div>{step}</div>
              </div>
            ))}
          </div>
          <h4 style={{ marginTop: 16 }}>Fee Structure</h4>
          <div className="card-3d" style={{ padding: 0 }}>
            <table className="table">
              <thead>
                <tr><th>Program</th><th>Duration</th><th>Fee</th></tr>
              </thead>
              <tbody>
                <tr><td>Beginner</td><td>3 months</td><td>?4,999</td></tr>
                <tr><td>Advanced</td><td>6 months</td><td>?8,999</td></tr>
                <tr><td>Mastery</td><td>12 months</td><td>?11,999</td></tr>
              </tbody>
            </table>
          </div>
          <h4 style={{ marginTop: 12 }}>Documents</h4>
          <ul>
            <li>ID Proof</li>
            <li>Age Proof</li>
            <li>Medical Declaration</li>
            <li>Passport Photo</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Admission;
