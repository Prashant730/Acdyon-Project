import ScrollReveal from '../reactbits/ScrollReveal';
import Magnet from '../reactbits/Magnet';

const CTASection = () => {
  return (
    <section className="px-6 py-24 relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Background depth glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/10 blur-[100px]" aria-hidden="true" />
      
      <ScrollReveal>
        <div className="glass-panel mx-auto max-w-3xl rounded-2xl p-10 text-center sm:p-16">
          <h2 id="cta-heading">
            <ScrollReveal textClassName="text-3xl font-bold text-brand-text sm:text-4xl">
              Stop staring at stack traces.
            </ScrollReveal>
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Turn errors into actionable fixes with DevPilot.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Magnet padding={30} magnetStrength={3}>
              <a
                href="#product"
                className="block rounded-lg bg-brand-accent px-8 py-3.5 text-sm font-semibold text-brand-bg transition-opacity hover:opacity-90"
              >
                Try DevPilot Now
              </a>
            </Magnet>
            <a
              href="https://github.com/Prashant730/Acdyon-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-brand-border-strong bg-brand-bg/50 px-8 py-3.5 text-sm font-medium text-brand-text transition-colors hover:border-brand-muted"
            >
              View Source Code
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default CTASection;
