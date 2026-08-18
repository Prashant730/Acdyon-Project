# Engineering Decisions

## 1. Why this approach over the obvious alternative?

**Vite + React (No React Router)**
The assignment calls for a premium home page, so a full-stack framework like Next.js would introduce capabilities that aren't necessary for this scope. I chose Vite for fast development feedback and a lightweight setup, keeping the app as a single page with smooth-scroll anchors instead of client-side routing.

**Tailwind CSS over CSS-in-JS**
I chose Tailwind CSS because it fits the project’s utility-first styling approach and allowed me to iterate quickly while keeping the design tokens centralized.

**Purposeful React Bits Integration & Modification**
The obvious temptation with a UI library like React Bits is to just drop components in blindly, which often results in a visually inconsistent collection of unrelated components. Instead, I carefully selected components that serve a specific product purpose and heavily customized their source code:
1.  **Modified `TiltedCard`**: The provided source code only accepted an `imageSrc`. I refactored the component to accept standard React `children`. This allowed me to place a fully responsive, DOM-based UI mockup (`HeroMockUI`) inside the 3D tilting container rather than relying on a static image.
2.  **Customized `Stepper`**: I used the Stepper for the "How It Works" timeline, but I intentionally stripped out the built-in "Next/Back" navigation footer. This prevents the section from feeling like a rigid wizard, turning it into a fluid, clickable interactive timeline.
3.  **Thematic Consistency**: For components like `SpotlightCard`, `DotGrid`, and `DarkVeil`, I stripped out their default colors and customized their colors, styling, and configuration to match the DevPilot design system.

**Custom Product Simulation over Gimmicky Widgets**
The most critical part of the page is the product simulation (the "Analyze" interaction in the Showcase). I built a custom state machine (`idle` → `analyzing` → `result`) because the UI needs to look like a believable developer tool. I combined this with React Bits' `AnimatedContent` for smooth transitions. The analysis returns pre-written mock data (a realistic JavaScript `TypeError`) with plain monospace text instead of fake CSS syntax highlighting. This choice is honest—pretending to parse syntax without a real library is a bad engineering practice.

## 2. What trade-offs did I make because of the time limit?

*   **No real syntax highlighting:** Integrating a robust syntax highlighter like Shiki or Prism.js would provide a slightly better visual experience in the code block, but it adds significant bundle size and setup time. I opted for clean, plain monospace text which is functionally correct and honest for a prototype.
*   **No backend / Frontend simulation:** The "Analyze" button uses a 2-second `setTimeout` to reveal mock data. Building a real API connection (even to a dummy endpoint) would consume time better spent on responsive design and visual polish.
*   **No Dark/Light theme toggle:** While typical for developer tools, building a robust theme system takes time to get contrast ratios right for both modes. I chose a dark-only theme because it fits the premium AI developer-tool aesthetic and allowed me to focus time on the core product experience, responsive design, and visual polish.

## 3. Where did I use AI tools, and what did I personally verify or change?

I used AI tools for initial component scaffolding, mock data generation, and baseline Tailwind styling. I then reviewed, modified, and tested the generated code before integrating it.

*   **Fixing the HTML:** I reviewed the generated markup and replaced unnecessary `<div>` wrappers with proper semantic HTML elements (`<main>`, `<section>`, `<article>`). 
*   **Accessibility:** I manually added `aria-live` to the analysis panel and forced `:focus-visible` outlines. I also added `prefers-reduced-motion` CSS rules so users who disable motion are not forced to experience the animations.
*   **Component Architecture:** I flattened the folder structure. The AI wanted to nest things deeply; I kept it to a simple one-component-per-section approach so the codebase is actually readable.
*   **Pushing back on bad ideas:** The AI initially tried to fake syntax highlighting in the mock code block using a bunch of hardcoded span colors. I threw that out. It's better to have a clean, plain `<pre><code>` block than to fake parsing logic—it just feels dishonest.

I verified the final implementation locally, tested the main interaction and responsive layouts, and only retained code and components that I could explain and defend.
