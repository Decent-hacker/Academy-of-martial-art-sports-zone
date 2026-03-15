import CourseCard from '../components/CourseCard';
import toast from 'react-hot-toast';
import SectionHeader from '../components/SectionHeader';
import { RoundhouseFigure } from '../components/KarateAnimations';

const courseList = [
  { title: 'White Belt Foundation (Beginner)', duration: '3 months', beltLevel: 'White', price: 2999, schedule: 'Mon/Wed', description: 'Basics of stance, strikes, etiquette.' },
  { title: 'Yellow-Orange Belt Program', duration: '6 months', beltLevel: 'Yellow-Orange', price: 5499, schedule: 'Tue/Thu', description: 'Kata forms, sparring introduction.' },
  { title: 'Green-Blue Combat Training', duration: '9 months', beltLevel: 'Green-Blue', price: 7999, schedule: 'Mon/Wed/Fri', description: 'Advanced kumite, endurance.' },
  { title: 'Brown-Black Belt Mastery', duration: '12+ months', beltLevel: 'Brown-Black', price: 11999, schedule: 'Daily', description: 'Mastery curriculum and teaching prep.' },
  { title: 'Kids Karate (Age 5-12)', duration: '6 months', beltLevel: 'Kids', price: 3999, schedule: 'Weekend', description: 'Confidence, agility, discipline.' },
  { title: 'Self Defense Crash Course', duration: '4 weeks', beltLevel: 'All', price: 2499, schedule: 'Weekend intensive', description: 'Urban safety tactics.' },
  { title: "Women's Safety Program", duration: '8 weeks', beltLevel: 'All', price: 2999, schedule: 'Sun mornings', description: 'Situational awareness & escapes.' },
];

const Courses = () => (
  <section className="page" style={{ position: 'relative' }}>
    <SectionHeader title="Our Courses" />
    <div style={{ position: 'absolute', right: -10, top: 40, opacity: 0.2 }}>
      <RoundhouseFigure className="small" />
    </div>
    <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
      {courseList.map((c) => (
        <CourseCard key={c.title} course={c} onEnroll={() => toast.success('Enroll flow coming soon')} />
      ))}
    </div>
  </section>
);
export default Courses;
