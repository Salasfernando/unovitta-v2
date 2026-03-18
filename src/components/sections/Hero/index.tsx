import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion_whatsapp?: (url?: string) => boolean;
  }
}

const HeroContainer = styled.section`
  position: relative;
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-20) 0;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  position: relative;
  z-index: 10;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-12);
  align-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-6);
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.125rem;
  margin-bottom: var(--spacing-8);
  color: var(--color-gray-200);
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.a` 
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
`;

// SecondaryButton continua usando Link para navegação interna
const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3) var(--spacing-6);
  background-color: var(--color-white);
  color: var(--color-primary);
  font-weight: 500;
  border-radius: var(--border-radius);
  transition: var(--transition-default);
  text-decoration: none; // Add this for consistency
  
  &:hover {
    background-color: var(--color-gray-100);
    color: var(--color-primary);
  }
`;

const ImageContainer = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
    background-color: rgba(255, 255, 255, 0.1);
    padding: var(--spacing-6);
    border-radius: var(--border-radius-lg);
    backdrop-filter: blur(4px);
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-lg);
`;

const HeroSection: React.FC = () => {

  const handleWhatsAppClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const url = event.currentTarget.href;
    // Verifica se a função de conversão existe
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion_whatsapp === 'function') {
      // Chama a função de conversão definida no HTML
      window.gtag_report_conversion_whatsapp(url);
    } else {
      console.warn('gtag_report_conversion_whatsapp function not found.');
    }
  };

  return (
    <HeroContainer>
      <BackgroundPattern>
        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </BackgroundPattern>

      <ContentContainer>
        <Grid>
          <div>
            <HeroTitle>
              Avaliação odontológica com segurança, clareza e um plano certo para o seu sorriso.
            </HeroTitle>
            <HeroText>
              Na UnoVitta, você encontra atendimento humanizado, estrutura moderna e orientação profissional para iniciar seu tratamento com confiança.
            </HeroText>
            <ButtonGroup>
              <PrimaryButton
                href="https://api.whatsapp.com/send/?phone=5561996548591&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+na+UnoVitta&type=phone_number&app_absent=0"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Agende sua consulta via WhatsApp"
                onClick={handleWhatsAppClick}
              >
                Agende sua consulta
              </PrimaryButton>
              <SecondaryButton to="/servicos">
                Conheça nossos tratamentos
              </SecondaryButton>
            </ButtonGroup>
          </div>
          <ImageContainer>
            <HeroImage
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Equipe odontológica UnoVitta"
            />
          </ImageContainer>
        </Grid>
      </ContentContainer>
    </HeroContainer>
  );
};

export default HeroSection;

