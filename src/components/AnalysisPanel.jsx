import { motion } from 'framer-motion';
import CodeBlock from './CodeBlock';

const AnalysisPanel = ({ result }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex h-full flex-col overflow-y-auto"
      aria-live="polite"
    >
      {/* Header */}
      <div className="flex shrink-0 items-center gap-2 border-b border-brand-border bg-brand-surface px-4 py-2">
        <span className="text-xs font-semibold tracking-wider text-brand-accent uppercase">
          Analysis
        </span>
      </div>

      <div className="flex-1 p-4 space-y-4">
        {/* Root Cause */}
        <div className="rounded border border-red-500/10 bg-red-500/5 p-3">
          <div className="mb-1.5 flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <h4 className="text-xs font-semibold text-red-400">Root Cause</h4>
          </div>
          <p className="text-sm font-medium text-brand-text">{result.rootCause}</p>
          <p className="mt-1 text-xs leading-relaxed text-brand-muted">
            {result.explanation}
          </p>
        </div>

        {/* Suggested Fix */}
        <div className="rounded border border-brand-accent/10 bg-brand-accent/5 p-3">
          <div className="mb-1.5 flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#19E68C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <h4 className="text-xs font-semibold text-brand-accent">Suggested Fix</h4>
          </div>
          <p className="text-xs leading-relaxed text-brand-text">
            {result.suggestedFix}
          </p>
        </div>

        {/* Code Fix */}
        <CodeBlock code={result.codeFix} />
      </div>
    </motion.div>
  );
};

export default AnalysisPanel;
