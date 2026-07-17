import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #0f766e;
    --color-primary-dark: #115e59;
    --color-secondary: #d8a64a;
    --color-accent: #21b68d;
    --color-dark: #14333d;
    --color-light: #7d8f96;
    --color-white: #ffffff;
    --color-gray-100: #f6f9fb;
    --color-gray-200: #e8f1f5;
    --color-gray-300: #d8e6ec;
    --color-gray-400: #c4d5dc;
    --color-gray-500: #97aab2;
    --color-gray-600: #617a84;
    --color-gray-700: #3f5660;
    --color-gray-800: #24353d;
    --color-gray-900: #14262d;

    --font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

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

    --border-radius-sm: 0.25rem;
    --border-radius: 0.5rem;
    --border-radius-md: 0.75rem;
    --border-radius-lg: 1rem;
    --border-radius-xl: 1.5rem;
    --border-radius-full: 9999px;

    --shadow-sm: 0 1px 2px 0 rgba(20, 51, 61, 0.08);
    --shadow: 0 12px 30px rgba(20, 51, 61, 0.08);
    --shadow-md: 0 20px 40px rgba(20, 51, 61, 0.12);
    --shadow-lg: 0 30px 70px rgba(20, 51, 61, 0.16);
    --transition-default: all 0.3s ease;
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
    background:
      radial-gradient(circle at top left, rgba(33, 182, 141, 0.08), transparent 28%),
      linear-gradient(135deg, #f8fcfd 0%, #f3f8fb 45%, #eef8f7 100%);
    line-height: 1.6;
    font-size: 16px;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(120deg, rgba(255,255,255,0.35), transparent 55%);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--spacing-4);
    color: var(--color-dark);
  }

  h1 {
    font-size: 2.5rem;

    @media (min-width: 768px) {
      font-size: 3rem;
    }

    @media (min-width: 1024px) {
      font-size: 3.5rem;
    }
  }

  h2 {
    font-size: 2rem;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    margin-bottom: var(--spacing-4);
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: var(--transition-default);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    font: inherit;
  }

  ul, ol {
    list-style-position: inside;
    margin-bottom: var(--spacing-4);
  }

  section {
    padding: var(--spacing-12) 0;

    @media (min-width: 768px) {
      padding: var(--spacing-20) 0;
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-4);
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.8rem;
    border-radius: var(--border-radius-full);
    background: rgba(15, 118, 110, 0.12);
    color: var(--color-primary);
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`;

export default GlobalStyles;
