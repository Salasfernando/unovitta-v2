import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import imgLogo from '../../../assets/logo.png'; 
import { getWhatsAppLinkProps } from '../../../utils/whatsapp';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion_whatsapp?: (url?: string) => boolean;
  }
}

const HeaderContainer = styled.header`
  background-color: var(--color-secondary);
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 90px;
    height: 90px;
    border-radius: 20%;
    background-color: var(--color-white);
  }
`;

const DesktopNav = styled.nav`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    gap: var(--spacing-8);
  }
`;

const NavLink = styled(Link)`
  color: var(--color-gray-900);
  transition: var(--transition-default);
  text-decoration: none; 
  
  &:hover {
    color: var(--color-primary);
  }
`;

const WhatsAppNavLink = styled.a`
  color: var(--color-gray-900);
  transition: var(--transition-default);
  text-decoration: none;

  &:hover {
    text-decoration:  underline;
  }
`;

const CTAButton = styled.a`
  display: none;
  
  @media (min-width: 768px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-3) var(--spacing-6);
    background-color: var(--color-accent);
    color: var(--color-white);
    font-weight: 500;
    border-radius: var(--border-radius);
    transition: var(--transition-default);
    text-decoration: none; 
    cursor: pointer; 
    
    &:hover {
      background-color: var(--color-accent);
      opacity: 0.9;
      color: var(--color-white);
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
  padding-bottom: var(--spacing-4);
  margin-top: var(--spacing-4);
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-dark);
  padding: var(--spacing-2) 0;
  transition: var(--transition-default);
  text-decoration: none; 
  
  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`;

const MobileCTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  padding: var(--spacing-3) var(--spacing-6);
  margin-top: var(--spacing-4);
  background-color: var(--color-accent);
  color: var(--color-white);
  font-weight: 500;
  border-radius: var(--border-radius);
  transition: var(--transition-default);
  text-decoration: none; 
  cursor: pointer; 
  
  &:hover {
    background-color: rgb(35, 151, 62); // Consider using a variable like --color-accent-dark
    color: var(--color-white);
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const whatsappLinkProps = getWhatsAppLinkProps();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWhatsAppClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const url = event.currentTarget.href;
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion_whatsapp === 'function') {
      window.gtag_report_conversion_whatsapp(url);
    } else {
      console.warn('gtag_report_conversion_whatsapp function not found.');
    }
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
            <img src={imgLogo} alt="Logo da Unovitta Clínicas" />
          </Link>
        </LogoContainer>

        <DesktopNav>
          <NavLink to="/servicos" style={{ fontWeight: 600 }}>Tratamentos</NavLink>
          <NavLink to="/sobre">Sobre Nós</NavLink>
          <WhatsAppNavLink
            href="https://api.whatsapp.com/send/?phone=5561996548591&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+na+UnoVitta&type=phone_number&app_absent=0"
            {...whatsappLinkProps}
            onClick={handleWhatsAppClick}
          >
            💬 WhatsApp
          </WhatsAppNavLink>
        </DesktopNav>

        <CTAButton 
          href="https://api.whatsapp.com/send/?phone=5561996548591&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+na+UnoVitta&type=phone_number&app_absent=0"
          {...whatsappLinkProps}
          aria-label="Agende sua avaliação via WhatsApp"
          onClick={handleWhatsAppClick} 
        >
          Agende sua avaliação
        </CTAButton>

        <MobileMenuButton
          onClick={toggleMenu}
          aria-label="Menu"
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
        <MobileMenu>
          <MobileNavLink to="/servicos" onClick={() => setIsMenuOpen(false)}>
            Tratamentos
          </MobileNavLink>
          <MobileNavLink to="/sobre" onClick={() => setIsMenuOpen(false)}>
            Sobre Nós
          </MobileNavLink>
          <MobileCTAButton
            href="https://api.whatsapp.com/send/?phone=5561996548591&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+na+UnoVitta&type=phone_number&app_absent=0"
            {...whatsappLinkProps}
            aria-label="Agende sua consulta via WhatsApp"
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

