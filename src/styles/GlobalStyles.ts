import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #2e8b90;
    --color-secondary: #d9983a;
    --color-accent: #28a745;
    --color-accent: #28a745;
    --color-dark: #595959;
    --color-light: #959595;
    --color-white: #ffffff;
    --color-gray-100: #f8f9fa;
    --color-gray-200: #e9ecef;
    --color-gray-300: #dee2e6;
    --color-gray-400: #ced4da;
    --color-gray-500: #adb5bd;
    --color-gray-600: #6c757d;
    --color-gray-700: #495057;
    --color-gray-800: #343a40;
    --color-gray-900: #212529;
    
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
    --border-radius: 0.375rem;
    --border-radius-md: 0.5rem;
    --border-radius-lg: 0.75rem;
    --border-radius-xl: 1rem;
    --border-radius-full: 9999px;
    
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    
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
    background-color: var(--color-white);
    line-height: 1.5;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--spacing-4);
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
    
    &:hover {
      color: var(--color-primary-dark);
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
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
`;

export default GlobalStyles;
