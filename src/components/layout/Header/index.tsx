import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import imgLogo from '../../../assets/logo.png';
import { getWhatsAppLinkProps } from '../../../utils/whatsapp';
import { trackWhatsAppStart } from '../../../utils/analytics';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion_whatsapp?: (url?: string) => boolean;
  }
}

const navItems = [
  { label: 'Início', to: '/' },
  { label: 'Tratamentos', to: '/servicos' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contato', to: '/contato' },
];

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--color-gray-100);
  border-bottom: 1px solid var(--color-gray-300);
  box-shadow: 0 8px 24px rgba(23, 52, 58, 0.05);
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem var(--spacing-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 82px;
    height: 82px;
    border-radius: 18px;
    background: var(--color-white);
    box-shadow: 0 10px 22px rgba(23, 52, 58, 0.1);
    border: 1px solid var(--color-gray-300);
  }
`;

const DesktopNav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  color: ${props => (props.$active ? 'var(--color-primary)' : 'var(--color-gray-700)')};
  font-weight: ${props => (props.$active ? 700 : 600)};
  padding: 0.55rem 0.8rem;
  border-radius: 0.65rem;
  transition: var(--transition-default);
  text-decoration: none;

  &:hover {
    color: var(--color-primary);
    background: var(--color-gray-200);
  }
`;

const CTAButton = styled.a`
  display: none;

  @media (min-width: 768px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 1.2rem;
    background: var(--color-primary);
    color: var(--color-white);
    font-weight: 700;
    border-radius: 0.85rem;
    box-shadow: 0 12px 25px rgba(5, 55, 52, 0.16);
    text-decoration: none;

    &:hover {
      transform: translateY(-2px);
      color: var(--color-white);
      box-shadow: 0 16px 30px rgba(5, 55, 52, 0.24);
    }
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--color-dark);
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem var(--spacing-4) var(--spacing-4);
  background: var(--color-gray-100);
  border-top: 1px solid var(--color-gray-300);

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.$active ? 'var(--color-primary)' : 'var(--color-dark)')};
  font-weight: ${props => (props.$active ? 700 : 600)};
  padding: 0.75rem 0.9rem;
  border-radius: var(--border-radius);
  background: ${props => (props.$active ? 'var(--color-gray-200)' : 'transparent')};
  transition: var(--transition-default);
  text-decoration: none;

  &:hover {
    background: var(--color-gray-200);
    color: var(--color-primary);
  }
`;

const MobileCTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.8rem 1rem;
  background: var(--color-primary);
  color: var(--color-white);
  font-weight: 700;
  border-radius: 0.85rem;
  text-decoration: none;
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const whatsappLinkProps = getWhatsAppLinkProps();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path));

  const handleWhatsAppClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const url = event.currentTarget.href;
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion_whatsapp === 'function') {
      window.gtag_report_conversion_whatsapp(url);
    } else {
      console.warn('gtag_report_conversion_whatsapp function not found.');
    }
    trackWhatsAppStart({ location: 'header' });
  };

  const handleMobileWhatsAppClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    handleWhatsAppClick(event);
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={imgLogo}
              alt="Logo da Unovitta Clínicas"
              width={82}
              height={82}
              fetchPriority="high"
              decoding="async"
            />
          </Link>
        </LogoContainer>

        <DesktopNav>
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              $active={isActive(item.to)}
              aria-current={isActive(item.to) ? 'page' : undefined}
            >
              {item.label}
            </NavLink>
          ))}
        </DesktopNav>

        <CTAButton
          href="https://api.whatsapp.com/send/?phone=556134794514&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+odontol%C3%B3gica+na+UnoVitta&type=phone_number&app_absent=0"
          {...whatsappLinkProps}
          aria-label="Agende sua avaliação via WhatsApp"
          onClick={handleWhatsAppClick}
        >
          Agende sua avaliação
        </CTAButton>

        <MobileMenuButton
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </MobileMenuButton>
      </HeaderContent>

      {isMenuOpen && (
        <MobileMenu id="mobile-navigation" aria-label="Navegação principal">
          {navItems.map(item => (
            <MobileNavLink
              key={item.to}
              to={item.to}
              $active={isActive(item.to)}
              aria-current={isActive(item.to) ? 'page' : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </MobileNavLink>
          ))}
          <MobileCTAButton
            href="https://api.whatsapp.com/send/?phone=556134794514&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+odontol%C3%B3gica+na+UnoVitta&type=phone_number&app_absent=0"
            {...whatsappLinkProps}
            aria-label="Agende sua avaliação via WhatsApp"
            onClick={handleMobileWhatsAppClick}
          >
            Agende sua avaliação
          </MobileCTAButton>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;

