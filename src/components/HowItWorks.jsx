import ScrollReveal from '../reactbits/ScrollReveal';

const steps = [
  {
    step: '01',
    title: 'Paste',
    description: 'Drop in your error message or stack trace.',
    active: true,
  },
  {
    step: '02',
    title: 'Analyze',
    description: 'DevPilot scans for the root cause instantly.',
    active: false,
  },
  {
    step: '03',
    title: 'Fix',
    description: 'Apply the suggested code and ship.',
    active: false,
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="px-6 py-20 bg-brand-surface border-y border-brand-border-strong"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-content flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          <ScrollReveal>
            <h2
              id="how-it-works-heading"
              className="text-3xl font-bold text-brand-text sm:text-4xl"
            >
              How It Works
            </h2>
            <p className="mt-4 text-brand-muted max-w-md mx-auto lg:mx-0">
              Stop context switching. Fix bugs directly from the error output in three simple steps.
            </p>
          </ScrollReveal>
        </div>

        {/* Right: Steps */}
        <div className="flex-1 w-full max-w-md">
          <ScrollReveal delay={100}>
            <div className="flex flex-col gap-0">
              {steps.map((item, index) => (
                <div key={item.step} className="group flex items-start gap-6">
                  {/* Visual Timeline */}
                  <div className="flex flex-col items-center">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-colors ${
                      item.active 
                        ? 'bg-brand-accent/10 border-brand-accent text-brand-accent shadow-[0_0_15px_rgba(25,230,140,0.2)]'
                        : 'bg-brand-bg border-brand-border-strong text-brand-muted group-hover:border-brand-accent/50'
                    }`}>
                      {item.step}
                    </div>
                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <div className="my-2 h-10 w-px bg-gradient-to-b from-brand-border-strong to-brand-border-strong/30 group-hover:from-brand-accent/30" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pt-1.5 ${index < steps.length - 1 ? 'pb-8' : ''}`}>
                    <h3 className={`text-lg font-semibold transition-colors ${item.active ? 'text-brand-text' : 'text-brand-text/70'}`}>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-brand-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
