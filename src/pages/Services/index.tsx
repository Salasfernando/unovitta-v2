import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { buildWhatsAppUrl, openWhatsAppLink } from '../../utils/whatsapp';
import { trackWhatsAppStart } from '../../utils/analytics';

const ServicesContainer = styled.div`
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

const DecisionNote = styled.p`
  max-width: 42rem;
  margin: 0 auto 2.25rem;
  color: var(--color-gray-600);
  font-size: 0.92rem;
  text-align: center;
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.75rem;
  background: var(--color-sage);
  color: var(--color-primary);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 2.35rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Divider = styled.div`
  width: 5rem;
  height: 0.25rem;
  background: var(--color-secondary);
  margin: 0 auto 1.2rem auto;
`;

const PageDescription = styled.p`
  font-size: 1.05rem;
  color: var(--color-gray-600);
  max-width: 48rem;
  margin: 0 auto;
`;

const PageActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.95rem 1.25rem;
  border-radius: 0.75rem;
  background: var(--color-primary);
  color: var(--color-white);
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 14px 28px rgba(15, 118, 110, 0.17);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 32px rgba(15, 118, 110, 0.2);
  }
`;

const SecondaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.95rem 1.25rem;
  border-radius: 0.75rem;
  background: var(--color-sage);
  border: 1px solid var(--color-gray-300);
  color: var(--color-primary);
  font-weight: 700;
  text-decoration: none;

  &:hover {
    background: rgba(15, 118, 110, 0.14);
    transform: translateY(-2px);
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServiceCard = styled.article`
  background: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-default);

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: var(--shadow-md);
  }
`;

const ServiceImage = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;

    ${ServiceCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const ServiceContent = styled.div`
  padding: 1.2rem;
`;

const ServiceTitle = styled.h2`
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
`;

const ServiceDescription = styled.p`
  color: var(--color-gray-700);
  margin-bottom: 1rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
`;

const ServiceFeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  margin-bottom: 0.45rem;
  color: var(--color-gray-700);

  svg {
    width: 1rem;
    height: 1rem;
    color: var(--color-accent);
    margin-top: 0.2rem;
    flex-shrink: 0;
  }
`;

const ServiceCTA = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.05rem;
  background: var(--color-primary);
  color: var(--color-white);
  font-weight: 700;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(15, 118, 110, 0.2);
  }
`;

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Tratamentos odontológicos UnoVitta',
  itemListElement: [
    'Odontologia Preventiva',
    'Odontologia Estética',
    'Ortodontia',
    'Implantes Dentários',
    'Endodontia',
    'Odontopediatria'
  ].map((name, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name
  }))
};

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Odontologia Preventiva',
      description: 'Cuidados preventivos para manter sua saúde bucal em dia e prevenir problemas futuros.',
      features: [
        'Limpeza profissional',
        'Aplicação de flúor',
        'Selantes dentários',
        'Avaliação periodontal',
        'Orientação de higiene bucal',
        'Prevenção de cáries'
      ],
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },

    {
      id: 2,
      title: 'Odontologia Estética',
      description: 'Tratamentos para transformar seu sorriso, melhorando a aparência dos seus dentes com resultados naturais.',
      features: [
        'Clareamento dental',
        'Facetas de porcelana',
        'Lentes de contato dental',
        'Restaurações estéticas',
        'Correção de gengivas',
        'Design de sorriso'
      ],
      image: 'https://images.unsplash.com/photo-1694675236489-d73651370688?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
      id: 3,
      title: 'Ortodontia',
      description: 'Correção do alinhamento dos dentes e problemas de mordida para um sorriso harmonioso e funcional.',
      features: [
        'Aparelhos fixos',
        'Aparelhos transparentes',
        'Alinhadores invisíveis',
        'Ortodontia lingual',
        'Tratamento para crianças',
        'Tratamento para adultos'
      ],
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },

    {
      id: 4,
      title: 'Implantes Dentários',
      description: 'Solução definitiva para substituir dentes perdidos, restaurando função e estética com aparência natural.',
      features: [
        'Implantes unitários',
        'Implantes múltiplos',
        'Protocolo de carga imediata',
        'Enxertos ósseos',
        'Próteses sobre implantes',
        'Reabilitação total'
      ],
      image: 'https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
      id: 5,
      title: 'Endodontia',
      description: 'Tratamento de canal realizado com tecnologia avançada, minimizando o desconforto e preservando o dente natural.',
      features: [
        'Tratamento de canal',
        'Retratamento endodôntico',
        'Cirurgia apical',
        'Tratamento de urgências',
        'Microscopia operatória',
        'Tecnologia rotativa'
      ],
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Odontopediatria',
      description: 'Cuidados especializados para a saúde bucal das crianças, com atendimento lúdico e acolhedor.',
      features: [
        'Primeira visita ao dentista',
        'Prevenção de cáries infantis',
        'Aplicação de selantes',
        'Tratamentos minimamente invasivos',
        'Orientação aos pais',
        'Ambiente adaptado para crianças'
      ],
      image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleSchedule = (_serviceId: number, serviceTitle: string) => {
    const message = `Olá, gostaria de agendar uma avaliação odontológica para: ${serviceTitle}`;
    const whatsappUrl = buildWhatsAppUrl(message, true);
    trackWhatsAppStart({ location: 'services_schedule', treatment: serviceTitle });
    openWhatsAppLink(whatsappUrl);
  };

  return (
      <ServicesContainer aria-labelledby="services-page-title">
      <SEO 
        title="Tratamentos odontológicos em Brazlândia"
        description="Conheça os tratamentos odontológicos da UnoVitta em Brazlândia e encontre o melhor caminho para cuidar do seu sorriso com segurança."
        keywords="odontologia preventiva, odontologia estética, ortodontia, implantes dentários, endodontia, odontopediatria"
        canonical="/servicos"
        schema={servicesSchema}
      />
      
      <ContentContainer>
        <PageHeader>
          <Eyebrow>Escolha o melhor caminho para você</Eyebrow>
          <PageTitle id="services-page-title">Encontre o tratamento que faz sentido para você</PageTitle>
          <Divider />
          <PageDescription>
            Conheça as principais especialidades da UnoVitta e entenda como cada uma pode ajudar. Se você ainda não souber qual tratamento precisa, comece pela avaliação.
          </PageDescription>
        </PageHeader>

        <PageActions>
          <PrimaryLink
            href={buildWhatsAppUrl('Olá, gostaria de agendar uma avaliação odontológica na UnoVitta.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar avaliação odontológica pelo WhatsApp"
            onClick={() => trackWhatsAppStart({ location: 'services_header' })}
          >
            Agendar avaliação pelo WhatsApp
          </PrimaryLink>
          <SecondaryLink to="/contato" aria-label="Converse com um especialista da UnoVitta">
            Converse com um especialista
          </SecondaryLink>
        </PageActions>
        <DecisionNote>
          Não precisa escolher sozinho: nossa equipe pode entender seu objetivo e orientar o próximo passo pelo WhatsApp.
        </DecisionNote>
        
        <ServicesGrid>
          {services.map(service => (
            <ServiceCard key={service.id}>
              <ServiceImage>
                <img 
                  src={service.image} 
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                />
              </ServiceImage>
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature, index) => (
                    <ServiceFeatureItem key={index}>
                      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </ServiceFeatureItem>
                  ))}
                </ServiceFeatures>
                <ServiceCTA onClick={() => handleSchedule(service.id, service.title)} aria-label={`Agendar avaliação para ${service.title}`}>
                  Agendar avaliação
                </ServiceCTA>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ContentContainer>
    </ServicesContainer>
  );
};

export default Services;
