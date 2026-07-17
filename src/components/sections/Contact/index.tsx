import React from 'react';
import styled from 'styled-components';
import SEO from '../../SEO';
import { getWhatsAppLinkProps } from '../../../utils/whatsapp';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion_whatsapp?: (url?: string) => boolean;
    gtag_report_conversion_contact?: (url?: string) => boolean;
  }
}

const ContactContainer = styled.section`
  padding: var(--spacing-20) 0;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: var(--spacing-12);
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  border-radius: var(--border-radius-full);
  background: rgba(15, 118, 110, 0.1);
  color: var(--color-primary);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.9rem;
`;

const ContactSectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.85rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Divider = styled.div`
  width: 5rem;
  height: 0.25rem;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  margin: 0 auto 1.1rem auto;
`;

const ContactSectionDescription = styled.p`
  font-size: 1.05rem;
  color: var(--color-gray-600);
  max-width: 48rem;
  margin: 0 auto;
`;

const ContactCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: var(--spacing-12);

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ContactCard = styled.a`
  display: block;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(15, 118, 110, 0.12);
  border-radius: var(--border-radius-xl);
  padding: 1.2rem;
  text-align: center;
  box-shadow: var(--shadow);
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
    background: rgba(255, 255, 255, 1);
  }
`;

const ContactCardEmoji = styled.div`
  font-size: 2.4rem;
  margin-bottom: 0.8rem;
`;

const ContactCardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.4rem;
`;

const ContactCardDescription = styled.p`
  font-size: 0.95rem;
  color: var(--color-gray-600);
  margin-bottom: 0.7rem;
`;

const ContactCardLink = styled.a`
  color: var(--color-primary);
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(15, 118, 110, 0.12);
  border-radius: var(--border-radius-xl);
  padding: 1.4rem;
  box-shadow: var(--shadow);
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--color-dark);
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ContactIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: var(--color-white);
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.85rem;
  flex-shrink: 0;

  svg {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

const ContactDetails = styled.div``;

const ContactLabel = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
  color: var(--color-dark);
`;

const ContactText = styled.p`
  color: var(--color-gray-600);
  margin-bottom: 0.25rem;
`;

const ContactLink = styled.a`
  color: var(--color-primary);
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const MapSection = styled.section`
  background: linear-gradient(135deg, rgba(15, 118, 110, 0.95), rgba(33, 182, 141, 0.95));
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
`;

const MapTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  text-align: center;
  color: var(--color-white);
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    padding: 1rem;
  }
`;

const Contact: React.FC = () => {
  const whatsappLinkProps = getWhatsAppLinkProps();

  const handleWhatsAppClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const url = event.currentTarget.href;
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion_whatsapp === 'function') {
      window.gtag_report_conversion_whatsapp(url);
    } else {
      console.warn('gtag_report_conversion_whatsapp function not found.');
    }
  };

  const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const url = event.currentTarget.href;
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion_contact === 'function') {
      window.gtag_report_conversion_contact(url);
    }
  };

  return (
    <ContactContainer>
      <SEO
        title="Contato"
        description="Entre em contato com a Clínica Odontológica UnoVitta. Estamos prontos para atender você e responder todas as suas dúvidas sobre nossos tratamentos odontológicos."
        keywords="contato, agendar consulta, localização, telefone, email, WhatsApp, clínica odontológica, UnoVitta"
        canonical="/contato"
      />

      <ContentContainer>
        <PageHeader>
          <Eyebrow>Pronto para começar?</Eyebrow>
          <ContactSectionTitle>Agende sua avaliação agora</ContactSectionTitle>
          <Divider />
          <ContactSectionDescription>
            Escolha o melhor canal para falar conosco e dê o próximo passo com segurança.
          </ContactSectionDescription>
        </PageHeader>

        <ContactCardsGrid>
          <ContactCard href="https://api.whatsapp.com/send?phone=556134794514&text=Quero%20agendar%20uma%20consulta!" {...whatsappLinkProps} onClick={handleWhatsAppClick}>
            <ContactCardEmoji>💬</ContactCardEmoji>
            <ContactCardTitle>WhatsApp</ContactCardTitle>
            <ContactCardDescription>Resposta rápida para dúvidas e agendamentos.</ContactCardDescription>
            <ContactCardLink href="https://api.whatsapp.com/send?phone=556134794514&text=Quero%20agendar%20uma%20consulta!" aria-label="Agende sua consulta via WhatsApp">
              Falar agora
            </ContactCardLink>
          </ContactCard>
          <ContactCard href="tel:+556134794514" onClick={handleContactClick}>
            <ContactCardEmoji>📞</ContactCardEmoji>
            <ContactCardTitle>Telefone</ContactCardTitle>
            <ContactCardDescription>Atendimento direto com nossa equipe.</ContactCardDescription>
            <ContactCardLink href="tel:+556134794514" aria-label="Ligue para nós">
              Ligar agora
            </ContactCardLink>
          </ContactCard>
          <ContactCard href="https://ul.waze.com/ul?place=ChIJEzm_h9WwW5MRW5rGlInENXQ&ll=-15.66357120%2C-48.19969900&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank" rel="noopener noreferrer">
            <ContactCardEmoji>📍</ContactCardEmoji>
            <ContactCardTitle>Localização</ContactCardTitle>
            <ContactCardDescription>Veja a rota até a nossa clínica com facilidade.</ContactCardDescription>
            <ContactCardLink href="https://ul.waze.com/ul?place=ChIJEzm_h9WwW5MRW5rGlInENXQ&ll=-15.66357120%2C-48.19969900&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank" rel="noopener noreferrer">
              Ver no mapa
            </ContactCardLink>
          </ContactCard>
        </ContactCardsGrid>

        <ContactGrid>
          <ContactInfo>
            <ContactInfoTitle>Informações de Contato</ContactInfoTitle>
            <ContactInfoList>
              <ContactItem>
                <ContactIcon>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel>Endereço</ContactLabel>
                  <ContactText>
                    <ContactLink href="https://ul.waze.com/ul?place=ChIJEzm_h9WwW5MRW5rGlInENXQ&ll=-15.66357120%2C-48.19969900&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                      target="_blank"
                      rel="noopener noreferrer" aria-label="Endereço">
                      Quadra 37, Conjunto A, lote 2 - loja 3, Vila São José<br />
                      Brazlândia, Brasília DF.
                    </ContactLink>
                  </ContactText>
                  <ContactLink href="https://ul.waze.com/ul?place=ChIJEzm_h9WwW5MRW5rGlInENXQ&ll=-15.66357120%2C-48.19969900&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank" rel="noopener noreferrer">
                    Ver no mapa
                  </ContactLink>
                </ContactDetails>
              </ContactItem>

              <ContactItem style={{ alignItems: 'center' }}>
                <ContactIcon>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel>
                    <ContactLink href="tel:+556134794514" aria-label="Ligue para nós" onClick={handleContactClick}>
                      (61) 3479-4514
                    </ContactLink>
                  </ContactLabel>
                </ContactDetails>
              </ContactItem>

              <ContactItem>
                <ContactIcon>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel>Email</ContactLabel>
                  <ContactText>contato@unovitta.com.br</ContactText>
                  <ContactLink href="mailto:contato@unovitta.com.br" onClick={handleContactClick}>
                    Enviar email
                  </ContactLink>
                </ContactDetails>
              </ContactItem>

              <ContactItem>
                <ContactIcon>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel>Horário de Atendimento</ContactLabel>
                  <ContactText>
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </ContactText>
                </ContactDetails>
              </ContactItem>
            </ContactInfoList>
          </ContactInfo>

          <MapSection>
            <MapTitle>Nossa Localização</MapTitle>
            <MapContainer>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716.4600899439033!2d-48.20121179276872!3d-15.663365436865906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bb0d587bf3913%3A0x7435c48994c69a5b!2sUnovitta%20Cl%C3%ADnicas!5e0!3m2!1spt-BR!2sbr!4v1748311575288!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: 0, borderRadius: 'var(--border-radius-lg)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </MapContainer>
          </MapSection>
        </ContactGrid>
      </ContentContainer>
    </ContactContainer>
  );
};

export default Contact;

