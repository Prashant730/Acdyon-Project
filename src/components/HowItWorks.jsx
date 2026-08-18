import ScrollReveal from '../reactbits/ScrollReveal';
import Stepper, { Step } from '../reactbits/Stepper';

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
          <h2 id="how-it-works-heading">
            <ScrollReveal textClassName="text-3xl font-bold text-brand-text sm:text-4xl">
              How It Works
            </ScrollReveal>
          </h2>
          <p className="mt-4 text-brand-muted max-w-md mx-auto lg:mx-0">
            Stop context switching. Fix bugs directly from the error output in three simple steps.
          </p>
        </div>

        {/* Right: Stepper Component */}
        <div className="flex-1 w-full max-w-md">
          <Stepper
            initialStep={1}
            disableStepIndicators={false}
          >
            <Step>
              <div className="pt-2">
                <h3 className="text-xl font-semibold text-brand-text">Paste</h3>
                <p className="mt-2 text-brand-muted leading-relaxed">
                  Drop in your error message or stack trace directly into the DevPilot interface. No need to format it or remove line numbers.
                </p>
              </div>
            </Step>
            <Step>
              <div className="pt-2">
                <h3 className="text-xl font-semibold text-brand-text">Analyze</h3>
                <p className="mt-2 text-brand-muted leading-relaxed">
                  Our intelligence engine scans your stack trace, identifying the exact root cause of the error in milliseconds.
                </p>
              </div>
            </Step>
            <Step>
              <div className="pt-2">
                <h3 className="text-xl font-semibold text-brand-text">Fix</h3>
                <p className="mt-2 text-brand-muted leading-relaxed">
                  Apply the suggested drop-in code fix, verify it works, and ship your product faster.
                </p>
              </div>
            </Step>
          </Stepper>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
