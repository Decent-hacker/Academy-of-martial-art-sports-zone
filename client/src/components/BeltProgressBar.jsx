import { useEffect, useRef } from 'react';

const beltColors = {
  White: '#ffffff',
  Yellow: '#f5d020',
  Orange: '#f5a623',
  Green: '#2ecc71',
  Blue: '#3498db',
  Brown: '#8b4513',
  Black: '#000000',
};
const belts = ['White', 'Yellow', 'Orange', 'Green', 'Blue', 'Brown', 'Black'];

const BeltProgressBar = () => {
  const ref = useRef(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll('.belt-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="belt-bar animate-on-scroll" ref={ref}>
      {belts.map((belt, idx) => (
        <div
          key={belt}
          className="belt-item"
          style={{ animationDelay: `${idx * 0.1}s` }}
        >
          <div className="belt-dot" style={{ background: beltColors[belt] }} />
          <div className="belt-label">{belt}</div>
        </div>
      ))}
    </div>
  );
};

export default BeltProgressBar;
