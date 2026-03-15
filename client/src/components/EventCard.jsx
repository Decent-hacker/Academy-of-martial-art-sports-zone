import { motion } from 'framer-motion';
import { BsCalendarEvent } from 'react-icons/bs';

const EventCard = ({ event, onRegister }) => (
  <motion.div whileHover={{ scale: 1.01 }} className="card-3d animate-on-scroll" style={{ paddingLeft: 24 }}>
    <span className="event-accent" aria-hidden></span>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h4 style={{ margin: 0, color: 'var(--color-text)' }}>{event.name}</h4>
      <span className="event-date"><BsCalendarEvent /> {event.date}</span>
    </div>
    <p style={{ margin: '6px 0', color: '#4a4a5e' }}>{event.description}</p>
    <div style={{ display: 'grid', gap: 6, color: '#4a4a5e' }}>
      <span>Venue: {event.venue}</span>
      <span>Register by: {event.registrationDeadline}</span>
      <span>Prize: {event.prize || event.prizes}</span>
    </div>
    <button className="btn-primary" style={{ marginTop: 12, width: '100%' }} onClick={() => onRegister?.(event)}>
      Register
    </button>
  </motion.div>
);

export default EventCard;
