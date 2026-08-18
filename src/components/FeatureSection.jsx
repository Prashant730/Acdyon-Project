import FeatureCard from './FeatureCard';
import ScrollReveal from '../reactbits/ScrollReveal';
import { features } from '../data/mockData';

const FeatureSection = () => {
  return (
    <section id="features" className="px-6 py-24" aria-labelledby="features-heading">
      <div className="mx-auto max-w-content">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2
              id="features-heading"
              className="text-2xl font-bold text-brand-text sm:text-3xl"
            >
              Built for Real Debugging
            </h2>
            <p className="mt-3 text-brand-muted">
              Three capabilities that actually matter.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.id} delay={index * 100}>
              <FeatureCard feature={feature} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
