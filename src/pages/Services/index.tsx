import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { openWhatsAppLink } from '../../utils/whatsapp';

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

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  border-radius: var(--border-radius-full);
  background: rgba(15, 118, 110, 0.1);
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
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
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
  border-radius: var(--border-radius-full);
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
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
  border-radius: var(--border-radius-full);
  background: rgba(15, 118, 110, 0.08);
  border: 1px solid rgba(15, 118, 110, 0.18);
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

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(15, 118, 110, 0.12);
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow);
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
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: var(--color-white);
  font-weight: 700;
  border-radius: var(--border-radius-full);
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(15, 118, 110, 0.2);
  }
`;

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
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
        event_category: 'Services',
        event_label: `Schedule_${serviceTitle}`,
        value: 1
      });
    }

    const whatsappNumber = '556134794514';
    const message = `Olá, gostaria de agendar uma avaliação odontológica para: ${serviceTitle}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    openWhatsAppLink(whatsappUrl);
  };

  return (
    <ServicesContainer>
      <SEO 
        title="Nossos Serviços"
        description="Conheça os serviços odontológicos oferecidos pela UnoVitta, com foco em qualidade, conforto e resultados duradouros."
        keywords="odontologia preventiva, odontologia estética, ortodontia, implantes dentários, endodontia, odontopediatria"
        canonical="/servicos"
      />
      
      <ContentContainer>
        <PageHeader>
          <Eyebrow>Especialidades premium</Eyebrow>
          <PageTitle>Nossos Serviços</PageTitle>
          <Divider />
          <PageDescription>
            Oferecemos uma ampla gama de serviços odontológicos com foco em qualidade, conforto e resultados duradouros. Conheça nossas especialidades:
          </PageDescription>
        </PageHeader>

        <PageActions>
          <PrimaryLink
            href="https://api.whatsapp.com/send/?phone=556134794514&text=Olá%2C+gostaria+de+agendar+uma+avaliação+odontológica+gratuita"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agende sua avaliação gratuita pelo WhatsApp"
          >
            Agende sua avaliação gratuita
          </PrimaryLink>
          <SecondaryLink to="/contato" aria-label="Converse com um especialista da UnoVitta">
            Converse com um especialista
          </SecondaryLink>
        </PageActions>
        
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
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </ServiceFeatureItem>
                  ))}
                </ServiceFeatures>
                <ServiceCTA onClick={() => handleSchedule(service.id, service.title)} aria-label={`Agendar avaliação para ${service.title}`}>
                  Agendar Avaliação Gratuita
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
