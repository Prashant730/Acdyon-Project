import SpotlightCard from '../reactbits/SpotlightCard';

const icons = {
  search: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  globe: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
};

const FeatureCard = ({ feature }) => {
  return (
    <SpotlightCard className="h-full p-6">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
        {icons[feature.icon]}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-brand-text">
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed text-brand-muted">
        {feature.description}
      </p>
    </SpotlightCard>
  );
};

export default FeatureCard;
