import { motion } from 'framer-motion';
import CodeBlock from './CodeBlock';

const AnalysisPanel = ({ result }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="space-y-4"
      aria-live="polite"
    >
      {/* Root Cause */}
      <div className="rounded-lg border border-brand-border bg-brand-bg p-4">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-brand-border">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </div>
          <h4 className="text-sm font-semibold text-brand-text">Root Cause</h4>
        </div>
        <p className="text-sm font-medium text-brand-text">{result.rootCause}</p>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">
          {result.explanation}
        </p>
      </div>

      {/* Suggested Fix */}
      <div className="rounded-lg border border-brand-border bg-brand-bg p-4">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-brand-border">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 20V10M18 20V4M6 20v-4" />
            </svg>
          </div>
          <h4 className="text-sm font-semibold text-brand-text">Suggested Fix</h4>
        </div>
        <p className="text-sm leading-relaxed text-brand-muted">
          {result.suggestedFix}
        </p>
      </div>

      {/* Code Fix */}
      <CodeBlock code={result.codeFix} />
    </motion.div>
  );
};

export default AnalysisPanel;
