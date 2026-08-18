import { useRef } from 'react';
import './SpotlightCard.css';

/**
 * SpotlightCard — adapted from React Bits (reactbits.dev)
 * Mouse-tracking spotlight effect on hover.
 * Customized: emerald spotlight color, integrated with Tailwind classes.
 */
const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(255, 255, 255, 0.08)',
}) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--spotlight-x', `${x}px`);
    card.style.setProperty('--spotlight-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
      style={{ '--spotlight-color': spotlightColor }}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
