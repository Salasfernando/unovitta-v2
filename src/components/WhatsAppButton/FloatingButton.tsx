import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import { getWhatsAppLinkProps } from '../../utils/whatsapp';

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const FloatingWhatsAppButton = styled.a`
  position: fixed;
  bottom: var(--spacing-6);
  right: var(--spacing-6);
  width: 60px;
  height: 60px;
  background-color: var(--color-accent);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: var(--transition-default);
  animation: ${pulse} 2.5s ease-in-out infinite;
  text-decoration: none;
  z-index: 999;
  cursor: pointer;

  &:hover {
    transform: scale(1.12);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
    background-color: var(--color-accent);
  }

  @media (max-width: 640px) {
    bottom: var(--spacing-4);
    right: var(--spacing-4);
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
`;

const FloatingWhatsApp: React.FC = () => {
  const whatsappLinkProps = getWhatsAppLinkProps();

  const handleWhatsAppClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const url = event.currentTarget.href;
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion_whatsapp === 'function') {
      window.gtag_report_conversion_whatsapp(url);
    }
  };

  return (
    <FloatingWhatsAppButton
      href="https://api.whatsapp.com/send?phone=556134794514&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+na+UnoVitta&type=phone_number&app_absent=0"
      {...whatsappLinkProps}
      title="Fale conosco no WhatsApp"
      aria-label="Abrir WhatsApp"
      onClick={handleWhatsAppClick}
    >
      <FaWhatsapp />
    </FloatingWhatsAppButton>
  );
};

export default FloatingWhatsApp;
