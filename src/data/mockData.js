// Mock data for the DevPilot AI frontend simulation.
// All analysis results are pre-written — there is no AI backend.

export const defaultErrorInput = `function fetchUserData(userId) {
  const response = fetch('/api/users/' + userId);
  const data = response.json();
  return data.name.toUpperCase();
}

// TypeError: Cannot read properties of undefined (reading 'toUpperCase')
// at fetchUserData (app.js:4:22)`;

export const analysisResult = {
  rootCause: 'Missing await on async operations',
  explanation:
    'fetch() returns a Promise, not the actual response. Without await, response.json() is called on a pending Promise, which returns undefined. Accessing .name on undefined causes the TypeError.',
  suggestedFix:
    'Add async/await to properly handle the asynchronous fetch call and its response parsing.',
  codeFix: `async function fetchUserData(userId) {
  const response = await fetch('/api/users/' + userId);
  const data = await response.json();
  return data.name.toUpperCase();
}`,
};

export const features = [
  {
    id: 'error-analysis',
    title: 'Smart Error Analysis',
    description:
      'Paste any error or stack trace and get a clear root cause explanation — no more guessing.',
    icon: 'search',
  },
  {
    id: 'code-fixes',
    title: 'Contextual Code Fixes',
    description:
      'Get actionable fixes that address the actual problem, not generic suggestions.',
    icon: 'code',
  },
  {
    id: 'multi-language',
    title: 'Multi-Language Support',
    description:
      'Works with JavaScript, TypeScript, Python, and more. One tool for your whole stack.',
    icon: 'globe',
  },
];

export const howItWorksSteps = [
  {
    step: 1,
    title: 'Paste Your Code',
    description: 'Drop in your error message, stack trace, or problematic code snippet.',
  },
  {
    step: 2,
    title: 'Analyze',
    description: 'DevPilot examines the code and identifies the root cause of the issue.',
  },
  {
    step: 3,
    title: 'Get the Fix',
    description: 'Receive a clear explanation and a ready-to-use code solution.',
  },
];
