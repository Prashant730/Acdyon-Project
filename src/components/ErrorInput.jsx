const ErrorInput = ({ value, onChange, disabled }) => {
  return (
    <div className="flex h-full flex-col">
      {/* Editor Header */}
      <div className="flex items-center gap-2 border-b border-brand-border bg-brand-bg/50 px-4 py-2">
        <span className="text-xs font-semibold tracking-wider text-brand-muted uppercase">
          Input.js
        </span>
      </div>

      {/* Editor Body */}
      <div className="flex flex-1">
        {/* Line Numbers */}
        <div className="flex w-10 shrink-0 flex-col items-center border-r border-brand-border bg-brand-bg/30 py-4 text-xs text-brand-border-strong select-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="leading-relaxed">{i + 1}</span>
          ))}
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
          spellCheck={false}
          className="flex-1 resize-none bg-transparent p-4 font-mono text-sm leading-relaxed text-brand-text placeholder-brand-muted focus:outline-none disabled:opacity-50"
          placeholder="Paste your error message or broken code here..."
        />
      </div>
    </div>
  );
};

export default ErrorInput;
