import React from 'react';
import styled from 'styled-components';
import SEO from '../../SEO';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion_whatsapp?: (url?: string) => boolean;
    gtag_report_conversion_contact?: (url?: string) => boolean; 
  }
}

const ContactContainer = styled.div`
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

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-4);
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Divider = styled.div`
  width: 5rem;
  height: 0.25rem;
  background-color: var(--color-accent);
  margin: 0 auto var(--spacing-6) auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactInfoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-6);
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ContactIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--spacing-4);
  flex-shrink: 0;
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const ContactDetails = styled.div``;

const ContactLabel = styled.h3`
  font-size: 1.125rem;
  font-weight: lighter;
  margin-bottom: var(--spacing-2);

  &:hover {
    color: var(--color-secondary);
  }
`;

const ContactText = styled.p`
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-2);
`;

const ContactLink = styled.a`
  color: var(--color-secondary);
  
  &:hover {
    color: var(--color-primary);
    text-decoration: underline;
  }
`;

const MapSection = styled.section`
  background-color: var(--color-secondary);
  border-radius: var(--border-radius-lg);
`;

const MapTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-6);
  text-align: center;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    padding: 20px;
  }
`;

const ContactCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-12);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ContactCard = styled.div`
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-8);
  text-align: center;
  transition: var(--transition-default);
  
  &.primary {
    border: 2px solid var(--color-primary);
    background-color: rgba(var(--color-primary-rgb), 0.05);
  }
  
  &:hover {
    box-shadow: var(--shadow-md);
  }
`;

const ContactCardEmoji = styled.div`
  font-size: 3rem;
  margin-bottom: var(--spacing-4);
`;

const ContactCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-foreground);
  margin-bottom: var(--spacing-2);
`;

const ContactCardDescription = styled.p`
  font-size: 0.9rem;
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-4);
`;

const ContactCardLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ContactSectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-4);
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContactSectionDescription = styled.p`
  font-size: 1.125rem;
  color: var(--color-gray-600);
  max-width: 48rem;
  margin: 0 auto var(--spacing-12);
`;

const Contact: React.FC = () => {
  const handleWhatsAppClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const url = event.currentTarget.href;
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion_whatsapp === 'function') {
      window.gtag_report_conversion_whatsapp(url);
    } else {
      console.warn('gtag_report_conversion_whatsapp function not found.');
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
          <ContactSectionTitle>Agende sua avaliação agora</ContactSectionTitle>
          <Divider />
          <ContactSectionDescription>
            Escolha o melhor canal para falar conosco e dê o próximo passo com segurança.
          </ContactSectionDescription>
        </PageHeader>

        <ContactCardsGrid>
          <ContactCard className="primary">
            <ContactCardEmoji>💬</ContactCardEmoji>
            <ContactCardTitle>WhatsApp</ContactCardTitle>
            <ContactCardDescription>Resposta rápida e agendamento direto</ContactCardDescription>
            <ContactCardLink 
              href="https://api.whatsapp.com/send?phone=61996548591&text=Quero%20agendar%20uma%20consulta!"
              target="_blank"
              rel="noopener noreferrer" 
              aria-label="Agende sua consulta via WhatsApp"
              onClick={handleWhatsAppClick} 
            >
              (61) 99654-8591
            </ContactCardLink>
          </ContactCard>

          <ContactCard>
            <ContactCardEmoji>☎️</ContactCardEmoji>
            <ContactCardTitle>Telefone</ContactCardTitle>
            <ContactCardDescription>Ligue para agendar sua consulta</ContactCardDescription>
            <ContactCardLink href="tel:+556134794514" aria-label="Ligue para nós">
              (61) 3479-4514
            </ContactCardLink>
          </ContactCard>

          <ContactCard>
            <ContactCardEmoji>🕐</ContactCardEmoji>
            <ContactCardTitle>Horário</ContactCardTitle>
            <ContactCardDescription>Seg-Sex: 8h-18h | Sábado: 8h-12h</ContactCardDescription>
          </ContactCard>
        </ContactCardsGrid>

        <PageHeader style={{ marginTop: 'var(--spacing-12)' }}>
          <PageTitle style={{ fontSize: '1.5rem' }}>Detalhes de Contato</PageTitle>
        </PageHeader>

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

              <ContactItem>
                <ContactIcon>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel>
                    <ContactLink href="tel:+556134794514" aria-label="Ligue para nós">
                      (61) 3479-4514
                    </ContactLink>
                    <br />
                    <ContactLink 
                      href="https://api.whatsapp.com/send?phone=61996548591&text=Quero%20agendar%20uma%20consulta!"
                      target='_blank'
                      rel="noopener noreferrer" 
                      aria-label="Agende sua consulta via WhatsApp"
                      onClick={handleWhatsAppClick} 
                    >
                      (61) 99654-8591 (WhatsApp)
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
                  <ContactLink href="mailto:contato@unovitta.com.br">
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

