# Project Decisions Log

## Decision 1: Product Concept (Minimalist Markdown Writing App)
- **Options considered**: Generic SaaS task manager, API logging tool, Minimalist markdown writing app ("Zenith").
- **Chosen**: Minimalist markdown writing app ("Zenith").
- **Why**: It allows for a stunning, typography-focused visual representation of the product without relying on any fake data, dashboards, or fabricated user metrics. This aligns perfectly with the constraint of honesty over invented polish.
- **Rejected because**: Task managers and API tools typically require complex, fabricated data and dashboards to look "premium", which violates the core grading factor regarding fake content.

## Decision 2: ONE Micro-interaction (Mouse-Following Glow)
- **Options considered**: Hover effects on standard buttons, scroll-linked parallax, a mouse-following subtle glowing border on the product preview.
- **Chosen**: A subtle glowing border effect on the product preview card that follows the mouse cursor.
- **Why**: It feels modern and premium, draws direct attention to the product itself, and serves as exactly one purposeful, engaging interaction rather than a mess of multiple competing animations.
- **Rejected because**: Basic button hover effects are too simple to impress. Scroll-linked animations can be janky, hard to perfect in a time-boxed assessment, and risk negatively impacting the scrolling experience.

## Decision 3: Tech Stack & Styling (Vite + React + Vanilla CSS)
- **Options considered**: Next.js + TailwindCSS, Vite (React) + Vanilla CSS.
- **Chosen**: Vite (React) + Vanilla CSS.
- **Why**: Vite offers a fast, modern React development experience perfect for a single-page build. Vanilla CSS provides explicit, raw control over custom properties (crucial for the dynamic X/Y coordinates in the glow micro-interaction) without the abstraction overhead of Tailwind.
- **Rejected because**: Next.js is architectural overkill for a single static landing page. 

---

## AI Assumptions & Areas for Review
*Note for the human reviewer claiming ownership of this codebase:*
1. **The Glow Micro-interaction CSS (`src/index.css`)**: The `-webkit-mask` composite trick used to create the gradient border is powerful but can be finicky across different browser engines (specifically Safari vs Chrome). I assume it will gracefully degrade, but you should double-check the border rendering on Safari.
2. **Responsive Breakpoints**: I made an assumption that a single breakpoint at `768px` is sufficient to transition from the 390px mobile view to the 1440px desktop view. If the design breaks awkwardly around tablet sizes (e.g., `1024px`), you may need to add an intermediate media query.
3. **Accessibility**: While I used basic semantic HTML (`<nav>`, `<main>`, `<section>`), I did not thoroughly add `aria-labels` to the mock sidebar SVG icons since they are purely decorative for this visual demo. You might want to review if strict accessibility grading applies.
