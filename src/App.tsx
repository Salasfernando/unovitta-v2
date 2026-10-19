import { lazy, Suspense, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Treatment = lazy(() => import('./pages/Treatment'));

import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const RouteFallback = styled.div`
  display: grid;
  min-height: 40vh;
  place-items: center;
  padding: 4rem 1rem;
  color: var(--color-gray-600);
  background: var(--color-gray-100);
`;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export function AppShell() {
  return (
    <AppContainer>
      <GlobalStyles />
      <ScrollToTop />

      <Header />
      <MainContent>
        <Suspense fallback={<RouteFallback aria-live="polite">Carregando conteúdo…</RouteFallback>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/servicos/:slug" element={<Treatment />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainContent>
      <Footer />
      <WhatsAppButton />
    </AppContainer>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;

