# Engineering Decisions

## 1. Why this approach over the obvious alternative?

**Vite + React (No React Router)**
The assignment called for a "premium home page". The obvious alternative for a modern React project would be Next.js, but since this is specifically a single-page frontend challenge, a full-stack framework adds unnecessary complexity, longer build times, and a heavier bundle size. I chose Vite for fast HMR and zero configuration, keeping the app strictly to a single page with smooth scroll anchors instead of client-side routing.

**Tailwind CSS over CSS-in-JS**
I used Tailwind CSS to rapidly style components using a utility-first approach while maintaining a centralized design token system (colors, typography). The alternative (styled-components or Emotion) adds runtime overhead and larger bundle sizes, which contradicts the goal of a fast, performant landing page.

**Selective React Bits Usage**
The obvious temptation with an animation library is to use it everywhere. I intentionally limited React Bits to exactly three components:
1. `ShinyText` (subtle hero badge attention)
2. `SpotlightCard` (premium hover interaction on feature cards)
3. `ScrollReveal` (tasteful section entrances)
This restraint ensures the animations enhance the *product* rather than distract from it. I customized their CSS to match our color scheme and completely removed their default demo bloat. 

**Custom Product Simulation over React Bits MagicBento/Terminal**
The most critical part of the page is the product simulation (the "Analyze" interaction). I built a custom state machine (`idle` → `analyzing` → `result`) because the UI needs to look like a believable developer tool, not a flashy marketing widget. The analysis returns pre-written mock data (a realistic JavaScript `TypeError`) with plain monospace text instead of fake CSS syntax highlighting. This choice is honest—pretending to parse syntax without a real library is a bad engineering practice.

## 2. What trade-offs did I make because of the time limit?

*   **No real syntax highlighting:** Integrating a robust syntax highlighter like Shiki or Prism.js would provide a slightly better visual experience in the code block, but it adds significant bundle size and setup time. I opted for clean, plain monospace text which is functionally correct and honest for a prototype.
*   **No backend / Fake AI:** The "Analyze" button uses a 2-second `setTimeout` to reveal mock data. Building a real API connection (even to a dummy endpoint) would consume time better spent on responsive design and accessibility.
*   **No Dark/Light theme toggle:** While typical for developer tools, building a robust theme system takes time to get contrast ratios right for both modes. I forced a dark mode since it fits the "premium AI developer tool" aesthetic perfectly.

## 3. Where did I use AI tools, and what did I personally verify or change?

*   **AI Generation:** I used AI (DevPilot/Claude) to scaffold the initial React component structure, generate the realistic JavaScript mock error data, and write the boilerplate Tailwind classes based on my design tokens.
*   **Personal Verification & Changes:** 
    *   I manually structured the component architecture (flattening it to one-component-per-section).
    *   I completely overhauled the accessibility. AI tends to write `<div>` soup. I changed elements to semantic `<header>`, `<nav>`, `<main>`, `<section>`, and `<article>`. I added `aria-live` to the analysis panel, `aria-label` to icon buttons, and forced `:focus-visible` outlines on all interactive elements.
    *   I manually tested responsive breakpoints at 390px, 768px, and 1440px to ensure the layout didn't break.
    *   I explicitly rejected the AI's initial suggestion to use CSS to fake syntax highlighting, opting for a clean `<pre><code>` block instead.
    *   I integrated `prefers-reduced-motion` overrides into the CSS, ensuring the site respects system accessibility settings.
