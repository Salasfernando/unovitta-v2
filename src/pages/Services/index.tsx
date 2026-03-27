import React from 'react';
import styled from 'styled-components';
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

const PageDescription = styled.p`
  font-size: 1.125rem;
  color: var(--color-gray-600);
  max-width: 48rem;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServiceCard = styled.div`
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
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
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    ${ServiceCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const ServiceContent = styled.div`
  padding: var(--spacing-6);
`;

const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-3);
`;

const ServiceDescription = styled.p`
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-4);
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 var(--spacing-4) 0;
`;

const ServiceFeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-2);
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--color-accent);
    margin-right: var(--spacing-2);
    flex-shrink: 0;
  }
`;

const ServiceCTA = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3) var(--spacing-6);
  background-color: var(--color-primary);
  color: var(--color-white);
  font-weight: 500;
  border-radius: var(--border-radius);
  transition: var(--transition-default);
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: var(--color-primary);
    opacity: 0.9;
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
    // Google Ads conversion tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
        'event_category': 'Services',
        'event_label': `Schedule_${serviceTitle}`,
        'value': 1
      });
    }
    
    // Abrir WhatsApp com mensagem personalizada
    const whatsappNumber = '556134794514';
    const message = `Olá, gostaria de agendar uma consulta para: ${serviceTitle}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    openWhatsAppLink(whatsappUrl);
  };

  return (
    <ServicesContainer>
      <SEO 
        title="Nossos Serviços"
        description="Conheça os serviços odontológicos oferecidos pela UnoVitta, com foco em qualidade, conforto e resultados duradouros."
        keywords="odontologia preventiva, odontologia estética, ortodontia, implantes dentários, endodontia, odontopediatria"
        canonical="https://unovitta.com.br/servicos"
      />
      
      <ContentContainer>
        <PageHeader>
          <PageTitle>Nossos Serviços</PageTitle>
          <Divider />
          <PageDescription>
            Oferecemos uma ampla gama de serviços odontológicos com foco em qualidade, conforto e resultados duradouros. Conheça nossas especialidades:
          </PageDescription>
        </PageHeader>
        
        <ServicesGrid>
          {services.map(service => (
            <ServiceCard key={service.id}>
              <ServiceImage>
                <img 
                  src={service.image} 
                  alt={service.title}
                  
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
                <ServiceCTA onClick={() => handleSchedule(service.id, service.title)}>
                  Agendar Consulta
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
