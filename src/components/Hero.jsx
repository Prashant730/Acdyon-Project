import ShinyText from '../reactbits/ShinyText';
import BlurText from '../reactbits/BlurText';
import DotGrid from '../reactbits/DotGrid';
import TiltedCard from '../reactbits/TiltedCard';

const HeroMockUI = () => (
  <div
    className="glass-panel relative w-full max-w-md overflow-hidden rounded-xl border border-brand-border-strong shadow-2xl"
    aria-hidden="true"
  >
    {/* Header */}
    <div className="flex items-center gap-2 border-b border-brand-border bg-brand-bg/50 px-4 py-3">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
      </div>
      <span className="text-xs font-medium text-brand-muted">DevPilot AI</span>
    </div>

    {/* Body */}
    <div className="p-4 sm:p-5">
      {/* Input */}
      <div className="mb-4 rounded border border-red-500/20 bg-red-500/5 p-3">
        <code className="font-mono text-xs text-red-400">
          TypeError: Cannot read properties of undefined (reading 'toUpperCase')
        </code>
      </div>

      {/* Analysis */}
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-brand-accent/10">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#19E68C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-brand-accent">Root Cause Found</h4>
          <p className="mt-1 text-xs leading-relaxed text-brand-muted">
            fetch() returns a Promise. Missing await causes response.json() to fail.
          </p>
        </div>
      </div>

      {/* Code snippet */}
      <div className="mt-4 rounded border border-brand-border bg-brand-bg p-3">
        <pre className="font-mono text-xs text-brand-text">
          <span className="text-brand-muted line-through">const data = response.json();</span>
          <br />
          <span className="text-brand-accent">const data = await response.json();</span>
        </pre>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-20 overflow-hidden">
      {/* Interactive DotGrid Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <DotGrid
          dotSize={4}
          gap={24}
          baseColor="#09100c"
          activeColor="#19E68C"
          proximity={150}
          shockRadius={300}
        />
      </div>

      <div className="mx-auto flex max-w-content flex-col items-center gap-12 lg:flex-row lg:gap-8 relative z-10">
        
        {/* Left Column: Copy */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-4 py-1.5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-brand-accent" aria-hidden="true" />
            <ShinyText
              text="AI-Powered Developer Tool"
              className="text-xs font-medium tracking-wide uppercase"
              color="#8A9A91"
              shineColor="#19E68C"
            />
          </div>

          {/* Headline with BlurText */}
          <div className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-brand-text sm:text-5xl lg:text-6xl">
            <BlurText
              text="Understand Code Faster."
              delay={100}
              animateBy="words"
              direction="bottom"
            />
            <BlurText
              text="Debug Smarter."
              delay={200}
              animateBy="words"
              direction="bottom"
              className="text-brand-accent"
            />
          </div>

          {/* Subtext */}
          <p className="mt-6 max-w-lg text-base text-brand-muted sm:text-lg">
            Paste your error or code, get an instant root cause analysis and
            actionable fix. Built for developers who ship.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#product"
              className="rounded-lg bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-bg transition-opacity hover:opacity-90"
            >
              Try DevPilot
            </a>
            <a
              href="https://github.com/Prashant730/Acdyon-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-brand-border bg-brand-surface px-6 py-3 text-sm font-medium text-brand-muted transition-colors hover:border-brand-border-strong hover:text-brand-text"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>

        {/* Right Column: Visual Product Preview */}
        <div className="flex w-full flex-1 justify-center lg:justify-end">
          <TiltedCard
            containerWidth="100%"
            containerHeight="400px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
          >
            <div className="w-full flex justify-center lg:justify-end px-4">
              <HeroMockUI />
            </div>
          </TiltedCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;
