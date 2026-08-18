const Footer = () => {
  return (
    <footer className="border-t border-brand-border px-6 py-8">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Logo */}
        <div className="flex items-center gap-2 text-sm text-brand-muted">
          <svg
            width="20"
            height="20"
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
          >
            <rect width="28" height="28" rx="6" fill="#19E68C" fillOpacity="0.15" />
            <path
              d="M8 14l4 4 8-8"
              stroke="#19E68C"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>DevPilot AI</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-brand-muted">
          <a
            href="https://github.com/Prashant730/Acdyon-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-text"
          >
            GitHub
          </a>
          <span>
            &copy; {new Date().getFullYear()} DevPilot
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
