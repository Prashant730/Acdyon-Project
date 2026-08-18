import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ErrorInput from './ErrorInput';
import AnalysisPanel from './AnalysisPanel';
import { defaultErrorInput, analysisResult } from '../data/mockData';

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
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2
            id="product-heading"
            className="text-2xl font-bold text-brand-text sm:text-3xl"
          >
            See It in Action
          </h2>
          <p className="mt-3 text-brand-muted">
            Paste an error, hit Analyze, and get a fix — that simple.
          </p>
        </div>

        {/* Demo container */}
        <div className="mx-auto max-w-2xl rounded-xl border border-brand-border bg-brand-bg-secondary p-4 shadow-2xl sm:p-6">
          {/* Input */}
          <ErrorInput
            value={input}
            onChange={setInput}
            disabled={isAnalyzing}
          />

          {/* Actions */}
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !input.trim()}
              className="flex items-center gap-2 rounded-lg bg-brand-accent px-5 py-2.5 text-sm font-semibold text-brand-bg transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isAnalyzing ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Analyzing...
                </>
              ) : (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                  Analyze
                </>
              )}
            </button>

            {hasResult && (
              <button
                onClick={handleReset}
                className="text-sm text-brand-muted transition-colors hover:text-brand-text"
              >
                Reset
              </button>
            )}
          </div>

          {/* Result */}
          <AnimatePresence>
            {hasResult && (
              <div className="mt-6">
                <AnalysisPanel result={analysisResult} />
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
