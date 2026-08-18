import ScrollReveal from '../reactbits/ScrollReveal';
import { howItWorksSteps } from '../data/mockData';

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="px-6 py-24"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-content">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2
              id="how-it-works-heading"
              className="text-2xl font-bold text-brand-text sm:text-3xl"
            >
              How It Works
            </h2>
            <p className="mt-3 text-brand-muted">
              Three steps. No setup required.
            </p>
          </div>
        </ScrollReveal>

        <ol className="mx-auto grid max-w-3xl gap-8 lg:grid-cols-3 lg:gap-12">
          {howItWorksSteps.map((item, index) => (
            <ScrollReveal key={item.step} delay={index * 120}>
              <li className="relative text-center lg:text-left">
                {/* Step number */}
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-accent/30 bg-brand-accent/10 text-sm font-bold text-brand-accent">
                  {item.step}
                </div>

                {/* Connector line — desktop only */}
                {index < howItWorksSteps.length - 1 && (
                  <div
                    className="absolute top-5 left-[calc(50%+28px)] hidden h-px w-[calc(100%-56px)] bg-brand-border lg:block"
                    aria-hidden="true"
                  />
                )}

                <h3 className="mb-2 text-lg font-semibold text-brand-text">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-muted">
                  {item.description}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
