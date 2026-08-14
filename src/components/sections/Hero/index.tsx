import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { getWhatsAppLinkProps } from '../../../utils/whatsapp';
import { trackWhatsAppStart } from '../../../utils/analytics';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion_whatsapp?: (url?: string) => boolean;
  }
}

const HeroContainer = styled.section`
  position: relative;
  overflow: hidden;
  padding: 4.25rem 0 5rem;
  color: var(--color-white);
  background: var(--color-primary);

  @media (min-width: 768px) {
    padding: 6rem 0 6.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: 34rem;
    height: 34rem;
    right: -16rem;
    top: -17rem;
    border: 1px solid rgba(217, 164, 65, 0.26);
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    width: 18rem;
    height: 18rem;
    left: -11rem;
    bottom: -12rem;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 50%;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 860px) {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    gap: 4.5rem;
  }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroContent = styled.div`
  max-width: 39rem;
  animation: ${fadeUp} 700ms cubic-bezier(0.23, 1, 0.32, 1) both;
`;

const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1.25rem;
  color: var(--color-secondary);
  font-size: 0.73rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;

  &::before {
    content: '';
    width: 2.25rem;
    height: 2px;
    background: var(--color-secondary);
  }
`;

const HeroTitle = styled.h1`
  margin-bottom: 1.4rem;
  color: var(--color-white);
  font-family: var(--font-family-display);
  font-size: clamp(2.7rem, 6vw, 5.3rem);
  font-weight: 800;
  line-height: 0.98;
  letter-spacing: -0.065em;
`;

const HeroText = styled.p`
  max-width: 34rem;
  margin-bottom: 1.8rem;
  color: rgba(250, 247, 241, 0.78);
  font-size: 1.08rem;
  line-height: 1.75;

  @media (min-width: 768px) {
    font-size: 1.18rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 520px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.35rem;
  padding: 0.9rem 1.25rem;
  border: 1px solid var(--color-secondary);
  border-radius: 0.8rem;
  background: var(--color-secondary);
  color: var(--color-dark);
  font-weight: 800;
  text-decoration: none;
  box-shadow: 0 16px 32px rgba(11, 42, 38, 0.2);

  &:hover {
    background: #e5b554;
    color: var(--color-dark);
    transform: translateY(-2px);
    box-shadow: 0 20px 38px rgba(11, 42, 38, 0.28);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.35rem;
  padding: 0.9rem 1.25rem;
  border: 1px solid rgba(250, 247, 241, 0.3);
  border-radius: 0.8rem;
  background: transparent;
  color: var(--color-white);
  font-weight: 700;
  text-decoration: none;

  &:hover {
    border-color: rgba(250, 247, 241, 0.65);
    background: rgba(250, 247, 241, 0.1);
    color: var(--color-white);
    transform: translateY(-2px);
  }
`;

const TrustLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1.25rem;
  margin-top: 1.6rem;
  color: rgba(250, 247, 241, 0.72);
  font-size: 0.88rem;

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
  }

  span::before {
    content: '•';
    color: var(--color-secondary);
    font-size: 1.2rem;
    line-height: 0;
  }
`;

const ImageFrame = styled.div`
  position: relative;
  padding: 0.6rem;
  border: 1px solid rgba(217, 164, 65, 0.9);
  border-radius: 1.8rem;
  background: var(--color-secondary);
  box-shadow: 0 30px 70px rgba(8, 36, 32, 0.28);
  transform: rotate(1.1deg);
  animation: ${fadeUp} 850ms 100ms cubic-bezier(0.23, 1, 0.32, 1) both;

  @media (min-width: 860px) {
    transform: rotate(2deg);
  }

  &:hover {
    transform: rotate(0deg) translateY(-4px);
  }
`;

const HeroImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  min-height: 310px;
  border-radius: 1.35rem;
  object-fit: cover;

  @media (min-width: 860px) {
    min-height: 500px;
  }
`;

const Caption = styled.div`
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  max-width: 14rem;
  padding: 0.8rem 0.9rem;
  border: 1px solid rgba(250, 247, 241, 0.35);
  border-radius: 0.75rem;
  background: rgba(22, 75, 69, 0.88);
  color: var(--color-white);
  font-size: 0.78rem;
  line-height: 1.45;
  backdrop-filter: blur(8px);
`;

const HeroSection: React.FC = () => {
  const whatsappLinkProps = getWhatsAppLinkProps();

  const handleWhatsAppClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const url = event.currentTarget.href;
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion_whatsapp === 'function') {
      window.gtag_report_conversion_whatsapp(url);
    }
    trackWhatsAppStart({ location: 'home_hero' });
  };

  return (
    <HeroContainer>
      <ContentContainer>
        <Grid>
          <HeroContent>
            <Eyebrow>Odontologia com calma, clareza e cuidado</Eyebrow>
            <HeroTitle>Seu sorriso merece um plano feito para você.</HeroTitle>
            <HeroText>
              Avaliação odontológica humanizada em Brazlândia, com diagnóstico claro, atendimento próximo e caminhos seguros para cuidar do seu sorriso.
            </HeroText>
            <ButtonGroup>
              <PrimaryButton
                href="https://api.whatsapp.com/send/?phone=556134794514&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+odontol%C3%B3gica+em+Brazl%C3%A2ndia&type=phone_number&app_absent=0"
                {...whatsappLinkProps}
                aria-label="Agendar minha avaliação pelo WhatsApp"
                onClick={handleWhatsAppClick}
              >
                Agendar minha avaliação
              </PrimaryButton>
              <SecondaryButton to="/servicos">Conhecer tratamentos</SecondaryButton>
            </ButtonGroup>
            <TrustLine>
              <span>Atendimento humanizado</span>
              <span>Plano claro para o seu caso</span>
              <span>Equipe em Brazlândia</span>
            </TrustLine>
          </HeroContent>
          <ImageFrame>
            <HeroImage
              src="/images/hero-equipe-paciente.jpg"
              alt="Dentista conversando com paciente em uma sala da UnoVitta"
              width={1200}
              height={900}
              decoding="async"
              fetchPriority="high"
            />
            <Caption>Uma conversa clara é o primeiro passo para um tratamento tranquilo.</Caption>
          </ImageFrame>
        </Grid>
      </ContentContainer>
    </HeroContainer>
  );
};

export default HeroSection;
