import CountUp from 'react-countup';
import { PunchFigure } from './KarateAnimations';

const counters = [
  { label: 'Students', value: 500 },
  { label: 'Years Experience', value: 25 },
  { label: 'Championship Wins', value: 50 },
  { label: 'Certified Trainers', value: 10 },
];

const CounterSection = () => (
  <div className="counter-section animate-on-scroll">
    <div className="counter-grid">
      {counters.map((c) => (
        <div key={c.label} className="counter-box">
          <div className="counter-number"><CountUp end={c.value} duration={2} suffix="+" /></div>
          <div className="counter-label">{c.label}</div>
        </div>
      ))}
    </div>
    <div className="counter-decoration">
      <PunchFigure className="small" />
    </div>
  </div>
);

export default CounterSection;
