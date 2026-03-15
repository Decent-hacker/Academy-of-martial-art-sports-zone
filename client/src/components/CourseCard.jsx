import { motion } from 'framer-motion';
import { BsShieldFillCheck } from 'react-icons/bs';

const CourseCard = ({ course, onEnroll }) => (
  <motion.div whileHover={{ scale: 1.01 }} className="card-3d animate-on-scroll">
    <span className="badge">{course.beltLevel}</span>
    <div className="course-icon"><BsShieldFillCheck size={20} /></div>
    <h3 style={{ margin: '8px 0', fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{course.title}</h3>
    <p style={{ minHeight: 64, color: '#4a4a5e' }}>{course.description}</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, color: 'var(--color-text)' }}>
      <span>Duration: {course.duration}</span>
      <span>?{course.price}</span>
    </div>
    <div style={{ color: '#4a4a5e', marginBottom: 12 }}>Schedule: {course.schedule}</div>
    <button className="btn-primary" style={{ width: '100%' }} onClick={() => onEnroll?.(course)}>
      Enroll Now
    </button>
  </motion.div>
);

export default CourseCard;
