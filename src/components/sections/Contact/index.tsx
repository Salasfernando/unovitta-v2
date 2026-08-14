import React, { useState } from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { ContactCard as SharedContactCard } from '../../ui';
import { trackFormSubmit, trackPhoneClick, trackWhatsAppStart } from '../../../utils/analytics';
import SEO from '../../SEO';
import { getWhatsAppLinkProps, openWhatsAppLink } from '../../../utils/whatsapp';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion_whatsapp?: (url?: string) => boolean;
    gtag_report_conversion_contact?: (url?: string) => boolean;
  }
}

const ContactContainer = styled.section`
  padding: 6.5rem 0;
  background: var(--color-gray-100);
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
  padding: 0.35rem 0.7rem;
  border-radius: 0.55rem;
  background: var(--color-sage);
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
  width: 2.75rem;
  height: 0.18rem;
  background: var(--color-secondary);
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



const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div`
  background: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-lg);
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
  background: var(--color-primary);
  color: var(--color-white);
  border-radius: 0.8rem;
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

const ContactForm = styled.form`
  display: grid;
  gap: 1rem;
  max-width: 520px;
  width: 100%;
  margin: 0 auto;
`;

const FormLabel = styled.label`
  font-size: 0.95rem;
  color: var(--color-dark);
  font-weight: 700;
`;

const FormField = styled.input`
  width: 100%;
  padding: 0.9rem 1rem;
  border-radius: 0.7rem;
  border: 1px solid var(--color-gray-300);
  background: var(--color-white);
  color: var(--color-dark);
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--color-secondary);
    box-shadow: 0 0 0 3px rgba(217, 164, 65, 0.18);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.9rem 1rem;
  border-radius: 0.7rem;
  border: 1px solid var(--color-gray-300);
  background: var(--color-white);
  color: var(--color-dark);
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--color-secondary);
    box-shadow: 0 0 0 3px rgba(217, 164, 65, 0.18);
  }
`;

const FormButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 0.75rem;
  background: var(--color-primary);
  color: white;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`;

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
  grid-column: 1 / -1;
  background: var(--color-primary-dark);
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
  height: 500px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'UnoVitta Clínicas',
  url: 'https://unovitta.com.br',
  telephone: '+556134794514',
  image: ['https://unovitta.com.br/logo.png'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Quadra 37, Conjunto A, lote 2 - loja 3, Vila São José',
    addressLocality: 'Brazlândia',
    addressRegion: 'DF',
    postalCode: '72700-000',
    addressCountry: 'BR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -15.663365,
    longitude: -48.201212
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '12:00'
    }
  ],
  sameAs: [
    'https://www.instagram.com/unovittaclinicas',
    'https://pt-br.facebook.com/unovitta/'
  ]
};

const Contact: React.FC = () => {
  const whatsappLinkProps = getWhatsAppLinkProps();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('');
  const [bestTime, setBestTime] = useState('');

  const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const url = event.currentTarget.href;
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion_contact === 'function') {
      window.gtag_report_conversion_contact(url);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = `Olá, gostaria de agendar uma avaliação odontológica.\n\nNome: ${name}\nTelefone: ${phone}\nTratamento de interesse: ${treatment || 'Não informado'}\nMelhor horário para contato: ${bestTime || 'Não informado'}`;
    const url = `https://api.whatsapp.com/send?phone=556134794514&text=${encodeURIComponent(message)}`;

    trackFormSubmit('contact_form');
    openWhatsAppLink(url);
  };

  return (
    <ContactContainer>
      <SEO
        title="Contato"
        description="Fale com a UnoVitta e agende sua avaliação odontológica por WhatsApp ou telefone. Atendimento rápido para Brazlândia e região com foco em cuidado, conforto e resultados reais."
        keywords="contato, agendar avaliação, WhatsApp odontológico, clínica odontológica Brazlândia, telefone UnoVitta, avaliação odontológica"
        canonical="/contato"
        schema={contactSchema}
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
          <SharedContactCard
            href="https://api.whatsapp.com/send?phone=556134794514&text=Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20odontol%C3%B3gica!"
            {...whatsappLinkProps}
            onClick={() => trackWhatsAppStart({ location: 'contact_whatsapp' })}
            icon={<FaWhatsapp />}
            title="WhatsApp"
            description="Resposta rápida para dúvidas e agendamentos."
            ariaLabel="Abrir conversa no WhatsApp"
          />
          <SharedContactCard
            href="tel:+556134794514"
            onClick={() => trackPhoneClick('contact_phone')}
            icon={<FaPhoneAlt />}
            title="Telefone"
            description="Atendimento direto com nossa equipe."
            ariaLabel="Ligar para a clínica"
          />
          <SharedContactCard
            href="https://ul.waze.com/ul?place=ChIJEzm_h9WwW5MRW5rGlInENXQ&ll=-15.66357120%2C-48.19969900&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
            target="_blank"
            rel="noopener noreferrer"
            icon={<FaMapMarkerAlt />}
            title="Localização"
            description="Veja a rota até a nossa clínica com facilidade."
            ariaLabel="Ver localização no mapa"
          />
        </ContactCardsGrid>

        <ContactGrid>
          <ContactInfo>
            <ContactInfoTitle>Deixe seus dados</ContactInfoTitle>
            <ContactInfoList>
              <ContactItem>
                <ContactLabel>Formulário rápido</ContactLabel>
              </ContactItem>
              <ContactItem>
                <ContactForm onSubmit={handleSubmit} aria-label="Formulário de contato">
                  <FormLabel htmlFor="contact-name">Nome completo</FormLabel>
                  <FormField
                    id="contact-name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Nome completo"
                    required
                  />
                  <FormLabel htmlFor="contact-phone">Telefone</FormLabel>
                  <FormField
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="Telefone"
                    required
                  />
                  <FormLabel htmlFor="contact-treatment">Tratamento de interesse</FormLabel>
                  <FormField
                    id="contact-treatment"
                    type="text"
                    name="treatment"
                    value={treatment}
                    onChange={(event) => setTreatment(event.target.value)}
                    placeholder="Tratamento de interesse"
                  />
                  <FormLabel htmlFor="contact-best-time">Melhor horário para contato</FormLabel>
                  <FormSelect
                    id="contact-best-time"
                    name="best_time"
                    value={bestTime}
                    onChange={(event) => setBestTime(event.target.value)}
                  >
                    <option value="">Melhor horário para contato</option>
                    <option value="manha">Manhã</option>
                    <option value="tarde">Tarde</option>
                    <option value="noite">Noite</option>
                  </FormSelect>
                  <FormButton type="submit" aria-label="Enviar formulário de contato para o WhatsApp">Enviar meus dados</FormButton>
                </ContactForm>
              </ContactItem>
            </ContactInfoList>
          </ContactInfo>

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

          <MapSection role="region" aria-label="Mapa de localização da clínica">
            <MapTitle>Nossa Localização</MapTitle>
            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716.4600899439033!2d-48.20121179276872!3d-15.663365436865906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bb0d587bf3913%3A0x7435c48994c69a5b!2sUnovitta%20Cl%C3%ADnicas!5e0!3m2!1spt-BR!2sbr!4v1748311575288!5m2!1spt-BR!2sbr"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da localização da UnoVitta"
              />
            </MapContainer>
          </MapSection>
        </ContactGrid>
      </ContentContainer>
    </ContactContainer>
  );
};

export default Contact;

