import ScrollReveal from '../reactbits/ScrollReveal';

const CTASection = () => {
  return (
    <section className="px-6 py-24" aria-labelledby="cta-heading">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl rounded-2xl border border-brand-border bg-brand-bg-secondary p-8 text-center sm:p-12">
          <h2
            id="cta-heading"
            className="text-2xl font-bold text-brand-text sm:text-3xl"
          >
            Ready to Debug Smarter?
          </h2>
          <p className="mt-3 text-brand-muted">
            Stop guessing. Start understanding your code.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#product"
              className="rounded-lg bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-bg transition-opacity hover:opacity-90"
            >
              Try DevPilot Now
            </a>
            <a
              href="https://github.com/Prashant730/Acdyon-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-brand-border px-6 py-3 text-sm font-medium text-brand-muted transition-colors hover:border-brand-muted hover:text-brand-text"
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
