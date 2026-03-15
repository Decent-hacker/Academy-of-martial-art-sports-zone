import HeroSection from '../components/HeroSection';
import CounterSection from '../components/CounterSection';
import BeltProgressBar from '../components/BeltProgressBar';
import CourseCard from '../components/CourseCard';
import EventCard from '../components/EventCard';
import TestimonialCard from '../components/TestimonialCard';
import SectionHeader from '../components/SectionHeader';
import { KataFigure } from '../components/KarateAnimations';
import { motion } from 'framer-motion';

const courses = [
  { title: 'Beginner Karate', description: 'Foundation stances, strikes, discipline.', duration: '3 months', price: 4999, schedule: 'Mon/Wed/Fri', beltLevel: 'White-Yellow' },
  { title: 'Advanced Combat', description: 'Kumite drills, weapons intro, sparring IQ.', duration: '6 months', price: 8999, schedule: 'Tue/Thu/Sat', beltLevel: 'Green-Blue' },
  { title: 'Self Defense Pro', description: 'Urban defense, situational awareness.', duration: '8 weeks', price: 5999, schedule: 'Weekend intensive', beltLevel: 'All Levels' },
];

const events = Array.from({ length: 9 }).map((_, idx) => ({
  name: 'Neon Championship',
  description: 'High-octane kumite & kata faceoff.',
  date: '2025-03-15',
  venue: 'Cyber Dojo Arena',
  registrationDeadline: '2025-03-01',
  prize: 'Trophies + Gear Kits',
}));

const testimonials = [
  { name: 'Aarav M.', role: 'Black Belt', quote: 'The holo-training rigs and masters here changed my game.' },
  { name: 'Keiko S.', role: 'Champion', quote: 'Discipline of tradition with the precision of tech.' },
  { name: 'Liam R.', role: 'Parent', quote: 'Kids program built confidence and respect.' },
];

const features = ['Certified Masters', 'Modern Dojo', 'Championship Training', 'Flexible Timings'];

const Home = () => (
  <>
    <HeroSection />

    <section className="page" id="stats" style={{ background: 'var(--color-gray)', borderRadius: 20 }}>
      <SectionHeader title="Impact Metrics" />
      <CounterSection />
    </section>

    <section className="page" id="journey">
      <SectionHeader title="Belt Journey" />
      <p style={{ textAlign: 'center', color: '#4a4a5e', maxWidth: 720, margin: '0 auto 22px' }}>
        Track your ascent from White to Black with a guided roadmap and mentors at every step.
      </p>
      <BeltProgressBar />
    </section>

    <section className="page" id="courses" style={{ background: 'var(--color-gray)', borderRadius: 20 }}>
      <SectionHeader title="Our Courses" />
      <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
        {courses.map((c) => <CourseCard key={c.title} course={c} />)}
      </div>
    </section>

    <section className="page">
      <SectionHeader title="Why Choose Us" />
      <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))' }}>
        {features.map((f) => (
          <motion.div key={f} className="card-3d animate-on-scroll" whileHover={{ scale: 1.02 }}>
            <h4 style={{ margin: '0 0 6px', color: 'var(--color-text)' }}>{f}</h4>
            <p style={{ color: '#4a4a5e' }}>Built for warriors who demand excellence.</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="page" id="events" style={{ background: 'var(--color-gray)', borderRadius: 20 }}>
      <SectionHeader title="Upcoming Events" />
      <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
        {events.map((e, i) => <EventCard key={i} event={e} />)}
      </div>
    </section>

    <section className="page">
      <SectionHeader title="Testimonials" />
      <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
        {testimonials.map((t) => <TestimonialCard key={t.name} testimonial={t} />)}
      </div>
    </section>

    <section className="page" style={{ position: 'relative', overflow: 'hidden', background: 'var(--color-gray)', borderRadius: 20 }}>
      <SectionHeader title="Begin Your Journey" />
      <p style={{ textAlign: 'center', color: '#4a4a5e' }}>Join a tribe of futuristic martial artists.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 12 }}>
        <a href="#admission" className="btn-primary">Join Now</a>
        <a href="#contact" className="btn-secondary">Talk to Us</a>
      </div>
      <div style={{ position: 'absolute', right: 30, bottom: -10, opacity: 0.3 }}>
        <KataFigure className="large" />
      </div>
    </section>
  </>
);

export default Home;
