import ShinyText from '../reactbits/ShinyText';

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[400px] w-[600px] rounded-full bg-brand-accent/5 blur-[120px]" />
      </div>

      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-bg-secondary px-4 py-1.5">
        <span className="h-2 w-2 rounded-full bg-brand-accent" aria-hidden="true" />
        <ShinyText
          text="AI-Powered Developer Tool"
          className="text-xs font-medium tracking-wide uppercase"
        />
      </div>

      {/* Headline */}
      <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-brand-text sm:text-5xl lg:text-6xl">
        Understand Code Faster.{' '}
        <span className="text-brand-accent">Debug Smarter.</span>
      </h1>

      {/* Subtext */}
      <p className="mx-auto mt-6 max-w-xl text-base text-brand-muted sm:text-lg">
        Paste your error or code, get an instant root cause analysis and
        actionable fix. Built for developers who ship.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
          className="flex items-center gap-2 rounded-lg border border-brand-border px-6 py-3 text-sm font-medium text-brand-muted transition-colors hover:border-brand-muted hover:text-brand-text"
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

      {/* Scroll indicator */}
      <div className="mt-16 animate-bounce" aria-hidden="true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-brand-muted"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
