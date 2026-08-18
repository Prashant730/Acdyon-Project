import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ErrorInput from './ErrorInput';
import AnalysisPanel from './AnalysisPanel';
import { defaultErrorInput, analysisResult } from '../data/mockData';
import ScrollReveal from '../reactbits/ScrollReveal';
import SpotlightCard from '../reactbits/SpotlightCard';
import AnimatedContent from '../reactbits/AnimatedContent';

const ProductShowcase = () => {
  const [input, setInput] = useState(defaultErrorInput);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasResult, setHasResult] = useState(false);

  const handleAnalyze = () => {
    if (!input.trim() || isAnalyzing) return;

    setIsAnalyzing(true);
    setHasResult(false);

    // Frontend simulation: 2s delay then show pre-written result
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasResult(true);
    }, 2000);
  };

  const handleReset = () => {
    setInput(defaultErrorInput);
    setIsAnalyzing(false);
    setHasResult(false);
  };

  return (
    <section id="product" className="px-6 py-24" aria-labelledby="product-heading">
      <div className="mx-auto max-w-content">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2
              id="product-heading"
              className="text-3xl font-bold text-brand-text sm:text-4xl"
            >
              The DevPilot Interface
            </h2>
            <p className="mt-4 text-brand-muted">
              Built to feel like the tools you already use.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          {/* Main App Window */}
          <SpotlightCard
            className="glass-panel mx-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-brand-border-strong shadow-2xl"
            spotlightColor="rgba(25, 230, 140, 0.15)"
          >
            
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-brand-border-strong bg-brand-surface/80 px-4 py-3">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-brand-border-strong" />
                  <span className="h-3 w-3 rounded-full bg-brand-border-strong" />
                  <span className="h-3 w-3 rounded-full bg-brand-border-strong" />
                </div>
                <span className="text-sm font-medium text-brand-muted">
                  DevPilot Workspace
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${
                    isAnalyzing ? 'animate-pulse bg-yellow-400' : hasResult ? 'bg-brand-accent' : 'bg-brand-muted'
                  }`}
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-brand-muted uppercase tracking-wider">
                  {isAnalyzing ? 'Analyzing...' : hasResult ? 'Result Ready' : 'Ready'}
                </span>
              </div>
            </div>

            {/* Window Body (Split Pane) */}
            <div className="flex flex-col lg:flex-row lg:h-[500px]">
              
              {/* Left Pane (Input) */}
              <div className="flex flex-1 flex-col border-b border-brand-border-strong lg:border-b-0 lg:border-r">
                <div className="flex-1 overflow-hidden">
                  <ErrorInput
                    value={input}
                    onChange={setInput}
                    disabled={isAnalyzing}
                  />
                </div>
                
                {/* Action Bar */}
                <div className="flex items-center justify-between border-t border-brand-border-strong bg-brand-surface/50 p-4">
                  {hasResult ? (
                    <button
                      onClick={handleReset}
                      className="text-sm font-medium text-brand-muted transition-colors hover:text-brand-text"
                    >
                      Clear Editor
                    </button>
                  ) : (
                    <span className="text-xs text-brand-muted">Paste error to begin</span>
                  )}
                  
                  <button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing || !input.trim()}
                    className="flex items-center gap-2 rounded bg-brand-accent px-6 py-2 text-sm font-bold text-brand-bg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isAnalyzing ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Analyzing
                      </>
                    ) : (
                      'Analyze Code'
                    )}
                  </button>
                </div>
              </div>

              {/* Right Pane (Analysis) */}
              <div className="flex flex-1 flex-col bg-brand-surface/30 relative">
                <AnimatePresence mode="wait">
                  {hasResult ? (
                    <AnimatedContent
                      key="result"
                      distance={50}
                      direction="horizontal"
                      reverse={true}
                      duration={0.6}
                      className="flex-1 h-full w-full absolute inset-0"
                    >
                      <AnalysisPanel result={analysisResult} />
                    </AnimatedContent>
                  ) : isAnalyzing ? (
                    <motion.div
                      key="analyzing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex h-full flex-col items-center justify-center p-8 text-center"
                    >
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-surface border border-brand-border">
                        <span className="absolute h-full w-full animate-ping rounded-full border border-brand-accent opacity-20" />
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#19E68C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        </svg>
                      </div>
                      <p className="mt-4 text-sm font-medium text-brand-muted">
                        Scanning stack trace...
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex h-full flex-col items-center justify-center p-8 text-center"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-surface border border-brand-border border-dashed">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-muted">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <line x1="9" y1="3" x2="9" y2="21" />
                        </svg>
                      </div>
                      <p className="mt-4 text-sm font-medium text-brand-muted">
                        Analysis will appear here
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
            </div>
          </SpotlightCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProductShowcase;
