import React from 'react';
import { FaFacebook, FaInstagram, FaPhoneSquareAlt, FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import imgLogo from '../../../assets/images/logowhite.png'; 

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion_whatsapp?: (url?: string) => boolean;
  }
}

const FooterContainer = styled.footer`
  background-color: var(--color-primary);
  color: var(--color-white);
  padding-top: var(--spacing-12);
  padding-bottom: var(--spacing-6);
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 0 var(--spacing-4); 
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8); // Adjusted gap
  width: 100%; // Ensure grid takes full width
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FooterColumn = styled.div`
  padding: 0 var(--spacing-2); 

  img {
    width: 150px;
    height: auto;
    margin-bottom: var(--spacing-4);
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: var(--spacing-4);
`;

const FooterText = styled.p`
  margin-bottom: var(--spacing-4);
  font-size: 0.9rem; // Slightly adjusted font size
  line-height: 1.6; // Improved readability
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-4);
  margin-top: var(--spacing-4); // Added margin top
`;

const SocialLink = styled.a`
  color: var(--color-white);
  font-size: 1.5rem;
  transition: var(--transition-default);

  &:hover {
    color: var(--color-secondary);
    transform: scale(1.1); // Added hover effect
  }
`;

const FooterLinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

const FooterLinkItem = styled.li``;

const FooterLink = styled(Link)`
  color: var(--color-white);
  transition: var(--transition-default);
  text-decoration: none; 
  
  &:hover {
    color: var(--color-secondary);
    text-decoration: underline; 
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start; 
  margin-bottom: var(--spacing-3);

`;

const ContactIconWrapper = styled.div`
  width: 1.5rem; 
  height: 1.5rem;
  margin-right: var(--spacing-3); 
  margin-top: var(--spacing-1);
  flex-shrink: 0;
  color: var(--color-white); 

  svg {
    width: 100%;
    height: 100%;
  }
`;

const ContactText = styled.div`
  color: var(--color-white);
  font-size: 0.9rem; 
  line-height: 1.6;

  a {
    color: var(--color-white);
    text-decoration: none;
    transition: var(--transition-default);
    
    &:hover {
      color: var(--color-secondary);
      text-decoration: underline;
    }
  }
`;

const Copyright = styled.div`
  width: 100%;
  border-top: 1px solid var(--color-gray-700);
  margin-top: var(--spacing-8);
  padding-top: var(--spacing-6);
  text-align: center;
  font-size: 0.8rem;
`;

const Footer: React.FC = () => {

  const handleWhatsAppClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const url = event.currentTarget.href;
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion_whatsapp === 'function') {
      window.gtag_report_conversion_whatsapp(url);
    } else {
      console.warn('gtag_report_conversion_whatsapp function not found.');
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterColumn>
            <img src={imgLogo} alt="Logo da Unovitta Clínicas" />
            <FooterText>
              Juntos, para cuidar melhor de você. Um ambiente acolhedor, de fácil acesso, com estacionamento, consultórios amplos, modernos e bem iluminados, para promover saúde e bem estar no seu tratamento odontológico.
            </FooterText>
            <SocialLinks>
              <SocialLink href="https://pt-br.facebook.com/unovitta/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/unovittaclinicas" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </SocialLink>
              <SocialLink
                href="https://api.whatsapp.com/send?phone=61996548591&text=Quero%20agendar%20uma%20consulta!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                onClick={handleWhatsAppClick} 
              >
                <FaWhatsapp />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Links Rápidos</FooterTitle>
            <FooterLinksList>
              <FooterLinkItem><FooterLink to="/">Início</FooterLink></FooterLinkItem>
              <FooterLinkItem><FooterLink to="/sobre">Sobre Nós</FooterLink></FooterLinkItem>
              <FooterLinkItem><FooterLink to="/servicos">Serviços</FooterLink></FooterLinkItem>
              <FooterLinkItem><FooterLink to="/blog">Blog</FooterLink></FooterLinkItem>
              <FooterLinkItem><FooterLink to="/contato">Contato</FooterLink></FooterLinkItem>
            </FooterLinksList>
          </FooterColumn>

          {/* Column 3: Services */}
          <FooterColumn>
            <FooterTitle>Nossos Serviços</FooterTitle>
            <FooterLinksList>
              <FooterLinkItem><FooterLink to="/servicos/lentes-de-contato">Lentes de Contato Dental</FooterLink></FooterLinkItem>
              <FooterLinkItem><FooterLink to="/servicos/implantes">Implantes Dentários</FooterLink></FooterLinkItem>
              <FooterLinkItem><FooterLink to="/servicos/alinhadores">Alinhadores Transparentes</FooterLink></FooterLinkItem>
              <FooterLinkItem><FooterLink to="/servicos/clareamento">Clareamento Dental</FooterLink></FooterLinkItem>
              <FooterLinkItem><FooterLink to="/servicos/ortodontia">Ortodontia</FooterLink></FooterLinkItem>
            </FooterLinksList>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Contato</FooterTitle>
            <ContactItem>
              <ContactIconWrapper>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </ContactIconWrapper>
              <ContactText>
                <a href="https://ul.waze.com/ul?place=ChIJEzm_h9WwW5MRW5rGlInENXQ&ll=-15.66357120%2C-48.19969900&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank" rel="noopener noreferrer" aria-label="Endereço">
                  Quadra 37, Conjunto A, lote 2 - loja 3, Vila São José<br />
                  Brazlândia, Brasília DF.
                </a>
              </ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIconWrapper><FaPhoneSquareAlt /></ContactIconWrapper>
              <ContactText>
                <a href="tel:+556134794514" aria-label="Ligue para nós">
                  (61) 3479-4514
                </a>
              </ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIconWrapper><FaWhatsapp /></ContactIconWrapper>
              <ContactText>
                <a
                  href="https://api.whatsapp.com/send?phone=61996548591&text=Quero%20agendar%20uma%20consulta!"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Agende sua consulta via WhatsApp"
                  onClick={handleWhatsAppClick} 
                >
                  (61) 99654-8591
                </a>
              </ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIconWrapper>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </ContactIconWrapper>
              <ContactText>
                <a href="mailto:unovittaclinicas@gmail.com" rel="noopener noreferrer">
                  unovittaclinicas@gmail.com
                </a>
              </ContactText>
            </ContactItem>
          </FooterColumn>
        </FooterGrid>

        <Copyright>
          <p>&copy; {new Date().getFullYear()} UnoVitta Clínicas. Todos os direitos reservados.</p>
          <p>Desenvolvido por Salas Tech Solutions.</p>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

