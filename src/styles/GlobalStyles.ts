import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #164b45;
    --color-primary-dark: #103a35;
    --color-secondary: #d9a441;
    --color-accent: #8daf9f;
    --color-dark: #1a302d;
    --color-light: #94a7a1;
    --color-white: #ffffff;
    --color-gray-100: #faf7f1;
    --color-gray-200: #f0ebe1;
    --color-gray-300: #ded7ca;
    --color-gray-400: #c3bbae;
    --color-gray-500: #8e938c;
    --color-gray-600: #65736c;
    --color-gray-700: #43534e;
    --color-gray-800: #2b413d;
    --color-gray-900: #1a302d;
    --color-clay: #ba7052;
    --color-sage: #dce7de;

    --font-family-display: 'Manrope', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-family-sans: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;

    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-3: 0.75rem;
    --spacing-4: 1rem;
    --spacing-5: 1.25rem;
    --spacing-6: 1.5rem;
    --spacing-8: 2rem;
    --spacing-10: 2.5rem;
    --spacing-12: 3rem;
    --spacing-16: 4rem;
    --spacing-20: 5rem;

    --border-radius-sm: 0.35rem;
    --border-radius: 0.75rem;
    --border-radius-md: 1rem;
    --border-radius-lg: 1.35rem;
    --border-radius-xl: 2rem;
    --border-radius-full: 9999px;

    --shadow-sm: 0 2px 6px rgba(26, 48, 45, 0.04);
    --shadow: 0 14px 34px rgba(26, 48, 45, 0.07);
    --shadow-md: 0 24px 54px rgba(26, 48, 45, 0.12);
    --shadow-lg: 0 38px 80px rgba(26, 48, 45, 0.16);
    --transition-default: 180ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-family-sans);
    color: var(--color-gray-800);
    background: var(--color-gray-100);
    line-height: 1.65;
    font-size: 16px;
    letter-spacing: -0.01em;
  }

  ::selection {
    color: var(--color-white);
    background: var(--color-primary);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-display);
    font-weight: 750;
    line-height: 1.12;
    letter-spacing: -0.045em;
    margin-bottom: var(--spacing-4);
    color: var(--color-dark);
  }

  h1 {
    font-size: clamp(2.55rem, 6vw, 5.25rem);
  }

  h2 {
    font-size: clamp(2rem, 4.2vw, 3.45rem);
  }

  h3 {
    font-size: clamp(1.25rem, 2.4vw, 1.75rem);
  }

  p {
    margin-bottom: var(--spacing-4);
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-default), background-color var(--transition-default), border-color var(--transition-default), transform var(--transition-default), box-shadow var(--transition-default);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  button:active,
  a:active {
    transform: scale(0.98);
  }

  :focus-visible {
    outline: 3px solid rgba(217, 164, 65, 0.7);
    outline-offset: 3px;
  }

  ul, ol {
    list-style-position: inside;
    margin-bottom: var(--spacing-4);
  }

  section {
    padding: 5.5rem 0;

    @media (min-width: 768px) {
      padding: 7rem 0;
    }
  }

  .container {
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 var(--spacing-4);
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    color: var(--color-primary);
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyles;
