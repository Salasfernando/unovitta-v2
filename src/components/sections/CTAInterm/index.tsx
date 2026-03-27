import React from 'react';
import styled from 'styled-components';
import { getWhatsAppLinkProps } from '../../../utils/whatsapp';

const CTAContainer = styled.section`
  background-color: var(--color-accent);
  padding: var(--spacing-12) 0;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  text-align: center;
`;

const CTATitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: var(--spacing-4);
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-4) var(--spacing-8);
  background-color: var(--color-white);
  color: var(--color-accent);
  font-weight: 600;
  border-radius: var(--border-radius);
  transition: var(--transition-default);
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    background-color: var(--color-gray-100);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

interface CTAIntermediateProps {
  title?: string;
  buttonText?: string;
}

const CTAIntermediate: React.FC<CTAIntermediateProps> = ({ 
  title = "Quero entender o melhor tratamento para meu caso",
  buttonText = "Falar no WhatsApp"
}) => {
  const whatsappLinkProps = getWhatsAppLinkProps();

  const handleWhatsAppClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const url = event.currentTarget.href;
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion_whatsapp === 'function') {
      window.gtag_report_conversion_whatsapp(url);
    }
  };

  return (
    <CTAContainer>
      <ContentWrapper>
        <CTATitle>{title}</CTATitle>
        <CTAButton 
          href="https://api.whatsapp.com/send?phone=6134794514&text=Quero%20entender%20qual%20%C3%A9%20o%20melhor%20tratamento%20para%20meu%20caso!"
          {...whatsappLinkProps}
          onClick={handleWhatsAppClick}
        >
          {buttonText}
        </CTAButton>
      </ContentWrapper>
    </CTAContainer>
  );
};

export default CTAIntermediate;
