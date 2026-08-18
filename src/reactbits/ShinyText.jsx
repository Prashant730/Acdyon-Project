import './ShinyText.css';

/**
 * ShinyText — adapted from React Bits (reactbits.dev)
 * A subtle shimmering gradient effect on text.
 * Customized: emerald color scheme, CSS-only (no framer-motion dependency).
 */
const ShinyText = ({ text, className = '', disabled = false }) => {
  return (
    <span
      className={`shiny-text ${disabled ? 'shiny-text--disabled' : ''} ${className}`}
    >
      {text}
    </span>
  );
};

export default ShinyText;
