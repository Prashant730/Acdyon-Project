import SpotlightCard from '../reactbits/SpotlightCard';

const FeatureCard = ({ feature }) => {
  return (
    <SpotlightCard className="flex h-full flex-col justify-between rounded-xl border border-brand-border bg-brand-surface p-6">
      
      {/* Mini Visual Demo */}
      <div className="mb-6 flex min-h-[120px] w-full items-center justify-center rounded-lg bg-brand-surface/50 p-4 border border-brand-border-strong/50">
        {feature.visual}
      </div>
      
      {/* Content */}
      <div>
        <h3 className="mb-2 text-lg font-semibold text-brand-text">
          {feature.title}
        </h3>
        <p className="text-sm leading-relaxed text-brand-muted">
          {feature.description}
        </p>
      </div>
      
    </SpotlightCard>
  );
};

export default FeatureCard;
