import FeatureCard from './FeatureCard';
import ScrollReveal from '../reactbits/ScrollReveal';

const VisualAnalysis = () => (
  <div className="flex w-full flex-col items-center gap-2 rounded bg-brand-bg p-3 border border-brand-border font-mono text-[10px]">
    <div className="w-full rounded border border-red-500/20 bg-red-500/10 p-2 text-red-400">
      TypeError: undefined
    </div>
    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-border">
      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-brand-muted"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
    </div>
    <div className="w-full rounded border border-brand-accent/20 bg-brand-accent/10 p-2 text-brand-accent">
      Missing await
    </div>
  </div>
);

const VisualDiff = () => (
  <div className="flex w-full flex-col gap-1 rounded bg-brand-bg p-3 border border-brand-border font-mono text-[10px]">
    <div className="flex w-full items-center justify-between rounded bg-red-500/10 px-2 py-1.5 text-red-400">
      <span className="line-through opacity-70">data = res.json()</span>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </div>
    <div className="flex w-full items-center justify-between rounded bg-brand-accent/10 px-2 py-1.5 text-brand-accent">
      <span>data = await res.json()</span>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </div>
  </div>
);

const VisualLanguages = () => (
  <div className="flex w-full items-center justify-center gap-3 rounded bg-brand-bg p-4 border border-brand-border">
    {['JS', 'TS', 'PY'].map((lang) => (
      <div key={lang} className="flex h-10 w-10 flex-col items-center justify-center rounded border border-brand-border-strong bg-brand-surface shadow-sm">
        <span className="text-[10px] font-bold text-brand-text">{lang}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#19E68C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-1"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
    ))}
  </div>
);

const features = [
  {
    id: 'error-analysis',
    title: 'Smart Error Analysis',
    description: 'Paste any error or stack trace and get a clear root cause explanation — no more guessing.',
    visual: <VisualAnalysis />,
  },
  {
    id: 'code-fixes',
    title: 'Contextual Code Fixes',
    description: 'Get actionable fixes that address the actual problem, not generic suggestions.',
    visual: <VisualDiff />,
  },
  {
    id: 'multi-language',
    title: 'Multi-Language Support',
    description: 'Works with JavaScript, TypeScript, Python, and more. One tool for your whole stack.',
    visual: <VisualLanguages />,
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="px-6 py-24" aria-labelledby="features-heading">
      <div className="mx-auto max-w-content">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2
              id="features-heading"
              className="text-3xl font-bold text-brand-text sm:text-4xl"
            >
              Built for Real Debugging
            </h2>
            <p className="mt-4 text-brand-muted">
              Capabilities that actually matter to your workflow.
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
