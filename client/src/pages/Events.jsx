import EventCard from '../components/EventCard';
import toast from 'react-hot-toast';
import SectionHeader from '../components/SectionHeader';

const eventList = [
  { name: 'Cyber Kumite League', date: '2025-04-10', venue: 'Holo Arena', registrationDeadline: '2025-03-25', prize: '?50k + Gear' },
  { name: 'Samurai Workshop', date: '2025-05-12', venue: 'Dojo Hall', registrationDeadline: '2025-04-30', prize: 'Katana Replica' },
  { name: 'Night Kata Gala', date: '2025-06-05', venue: 'Skydeck', registrationDeadline: '2025-05-20', prize: 'Trophies' },
];

const past = ['2024 Mumbai Open', '2023 State Champs', '2022 National Finals'];

const Events = () => (
  <section className="page">
    <SectionHeader title="Events" />
    <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
      {eventList.map((e) => <EventCard key={e.name} event={e} onRegister={() => toast.success('Event registered')} />)}
    </div>
    <SectionHeader title="Past Events" />
    <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
      {past.map((p) => <div key={p} className="card-3d">{p}</div>)}
    </div>
  </section>
);
export default Events;
