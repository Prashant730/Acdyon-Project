const ErrorInput = ({ value, onChange, disabled }) => {
  return (
    <div className="rounded-lg border border-brand-border bg-brand-bg">
      {/* Editor header */}
      <div className="flex items-center gap-2 border-b border-brand-border px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="text-xs text-brand-muted">input.js</span>
      </div>

      {/* Textarea */}
      <label htmlFor="error-input" className="sr-only">
        Paste your code or error message
      </label>
      <textarea
        id="error-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        rows={8}
        spellCheck={false}
        className="w-full resize-none bg-transparent p-4 font-mono text-sm leading-relaxed text-brand-text placeholder-brand-muted focus:outline-none disabled:opacity-50"
        placeholder="Paste your code or error message here..."
      />
    </div>
  );
};

export default ErrorInput;
