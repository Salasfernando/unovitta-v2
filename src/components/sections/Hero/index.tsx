import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { getWhatsAppLinkProps } from '../../../utils/whatsapp';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion_whatsapp?: (url?: string) => boolean;
  }
}

const HeroContainer = styled.section`
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at top left, rgba(255,255,255,0.16), transparent 24%),
    linear-gradient(135deg, #0f766e 0%, #115e59 45%, #0b3f45 100%);
  color: var(--color-white);
  padding: 5.5rem 0 4.5rem;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(216, 166, 74, 0.32), transparent 30%);
  pointer-events: none;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  position: relative;
  z-index: 1;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 3rem;
  }
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroContent = styled.div`
  animation: ${fadeUp} 0.9s ease-out both;
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.75rem;
  border-radius: var(--border-radius-full);
  background: rgba(255, 255, 255, 0.16);
  color: #e8fffb;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.35rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.05;
  letter-spacing: -0.02em;
  transition: var(--transition-default);

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.7rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.05rem;
  margin-bottom: 1.6rem;
  color: rgba(255, 255, 255, 0.86);
  max-width: 42rem;
  transition: var(--transition-default);

  @media (min-width: 768px) {
    font-size: 1.15rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.95rem 1.3rem;
  background: linear-gradient(135deg, var(--color-secondary), #f1bb5a);
  color: var(--color-dark);
  font-weight: 700;
  border-radius: var(--border-radius-full);
  text-decoration: none;
  box-shadow: 0 16px 32px rgba(216, 166, 74, 0.24);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    color: var(--color-dark);
    box-shadow: 0 18px 36px rgba(216, 166, 74, 0.28);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.25rem;
  background: rgba(255, 255, 255, 0.12);
  color: var(--color-white);
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius-full);
  text-decoration: none;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.22);
    color: var(--color-white);
    transform: translateY(-2px);
  }
`;

const StatsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

const StatItem = styled.div`
  padding: 0.7rem 0.95rem;
  border-radius: var(--border-radius-full);
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.16);
  font-size: 0.95rem;
  font-weight: 600;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }
`;

const ImageCard = styled.div`
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(14px);
  border-radius: 1.5rem;
  padding: 1rem;
  box-shadow: 0 25px 60px rgba(5, 22, 28, 0.26);
  overflow: hidden;
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 28px 70px rgba(5, 22, 28, 0.3);
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 360px;
  object-fit: cover;
  border-radius: 1.1rem;
  transition: transform 0.9s ease;

  ${ImageCard}:hover & {
    transform: scale(1.03) rotate(0.15deg);
  }
`;

const HeroSection: React.FC = () => {
  const whatsappLinkProps = getWhatsAppLinkProps();

  const handleWhatsAppClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const url = event.currentTarget.href;
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion_whatsapp === 'function') {
      window.gtag_report_conversion_whatsapp(url);
    } else {
      console.warn('gtag_report_conversion_whatsapp function not found.');
    }
  };

  return (
    <HeroContainer>
      <BackgroundGlow />
      <ContentContainer>
        <Grid>
          <HeroContent>
            <Eyebrow>✨ Clínica premium em Brasília</Eyebrow>
            <HeroTitle>Seu sorriso merece conforto, tecnologia e um plano de cuidado pensado para você.</HeroTitle>
            <HeroText>
              Na UnoVitta, cada detalhe é pensado para oferecer acolhimento, precisão e resultados naturais com segurança, estética e confiança.
            </HeroText>
            <ButtonGroup>
              <PrimaryButton
                href="https://api.whatsapp.com/send/?phone=556134794514&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+na+UnoVitta&type=phone_number&app_absent=0"
                {...whatsappLinkProps}
                aria-label="Agende sua consulta via WhatsApp"
                onClick={handleWhatsAppClick}
              >
                Agende sua consulta
              </PrimaryButton>
              <SecondaryButton to="/servicos">Conheça nossos tratamentos</SecondaryButton>
            </ButtonGroup>
            <StatsRow>
              <StatItem>✓ Atendimento humanizado</StatItem>
              <StatItem>✓ Tecnologia de ponta</StatItem>
              <StatItem>✓ Resultados naturais</StatItem>
            </StatsRow>
          </HeroContent>
          <ImageCard>
            <HeroImage
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
              alt="Equipe odontológica UnoVitta"
            />
          </ImageCard>
        </Grid>
      </ContentContainer>
    </HeroContainer>
  );
};

export default HeroSection;


