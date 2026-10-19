import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { buildWhatsAppUrl, getWhatsAppLinkProps, TELEPHONE_LINK } from '../../../utils/whatsapp';
import { trackPhoneClick, trackWhatsAppConversion } from '../../../utils/analytics';

const CTAContainer = styled.section`
  position: relative;
  overflow: hidden;
  background: var(--color-primary-dark);
  padding: 5rem 0;
`;

const Glow = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(217, 164, 65, 0.2), transparent 42%);
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  text-align: center;
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  border-radius: 0.55rem;
  background: rgba(250, 247, 241, 0.1);
  color: var(--color-white);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.9rem;
`;

const CTATitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--color-white);
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const CTADescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  max-width: 38rem;
  margin: 0 auto 1.4rem auto;
  font-size: 1rem;
`;

const CTAButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  justify-content: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  padding: 0.95rem 1.25rem;
  background-color: var(--color-white);
  color: var(--color-primary);
  font-weight: 700;
  border-radius: 0.75rem;
  transition: var(--transition-default);
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.16);

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }

  &:hover {
    transform: translateY(-2px);
    background-color: var(--color-gray-100);
    color: var(--color-primary);
  }
`;

const SecondaryCTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  padding: 0.95rem 1.2rem;
  background: rgba(250, 247, 241, 0.1);
  color: var(--color-white);
  font-weight: 700;
  border: 1px solid rgba(250, 247, 241, 0.28);
  border-radius: 0.75rem;
  transition: var(--transition-default);
  text-decoration: none;

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.22);
    color: var(--color-white);
  }
`;

interface CTAIntermediateProps {
  title?: string;
  buttonText?: string;
}

const CTAIntermediate: React.FC<CTAIntermediateProps> = ({
  title = 'Quero entender o melhor tratamento para o meu caso',
  buttonText = 'Falar no WhatsApp'
}) => {
  const whatsappLinkProps = getWhatsAppLinkProps();

  const handleWhatsAppClick = () => {
    trackWhatsAppConversion();
  };

  return (
    <CTAContainer>
      <Glow />
      <ContentWrapper>
        <Eyebrow>Seu sorriso merece atenção</Eyebrow>
        <CTATitle>{title}</CTATitle>
        <CTADescription>
          Agende uma avaliação, tire suas dúvidas e veja as opções mais adequadas para o seu plano de tratamento.
        </CTADescription>
        <CTAButtons>
          <CTAButton
            href={buildWhatsAppUrl('Quero agendar minha avaliação odontológica e entender o melhor tratamento para meu caso.')}
            {...whatsappLinkProps}
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp />
            {buttonText}
          </CTAButton>
          <SecondaryCTAButton href={`tel:${TELEPHONE_LINK}`} onClick={() => trackPhoneClick('cta_intermediate_phone')}>
            <FaPhoneAlt />
            Ligar agora
          </SecondaryCTAButton>
        </CTAButtons>
      </ContentWrapper>
    </CTAContainer>
  );
};

export default CTAIntermediate;
