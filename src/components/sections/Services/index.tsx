import React from 'react';
import styled from 'styled-components';
import { FaHospital, FaSmile, FaTooth, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { trackWhatsAppStart } from '../../../utils/analytics';
import { getWhatsAppLinkProps } from '../../../utils/whatsapp';


const ServicesContainer = styled.section`
  padding: 6.5rem 0;
  background: var(--color-gray-100);
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-12);
`;

const SectionEyebrow = styled.p`
  margin: 0 0 0.75rem;
  color: var(--color-primary);
  letter-spacing: 0.14em;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
`;

const SectionTitle = styled.h2`
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

const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: var(--color-gray-600);
  max-width: 48rem;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.article`
  background: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-0.35rem);
    border-color: rgba(15, 118, 110, 0.35);
    box-shadow: var(--shadow-md);
  }
`;

const ServiceIcon = styled.div`
  background: var(--color-primary);
  color: var(--color-secondary);
  padding: 1.35rem var(--spacing-6);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  svg {
    width: 3rem;
    height: 3rem;
  }

  ${ServiceCard}:hover & {
    transform: translateY(-2px);
  }
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
`;

const ProblemText = styled.p`
  color: var(--color-primary-dark);
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: var(--spacing-2);
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: var(--spacing-3);
`;

const ServiceDescription = styled.p`
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-4);
`;

const ServiceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--color-primary);
  font-weight: 700;
  text-decoration: none;
  margin-top: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-accent);
    text-decoration: underline;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-left: var(--spacing-1);
  }
`;

const ServiceDetailLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.75rem;
  color: var(--color-gray-600);
  font-size: 0.9rem;
  font-weight: 700;

  &:hover {
    color: var(--color-primary);
  }
`;

const ServicesSection: React.FC = () => {
  const whatsappLinkProps = getWhatsAppLinkProps();

  const services = [
    {
      id: 1,
      slug: 'implantes',
      title: 'Implantes Dentários',
      description: 'Recupere função, estética e segurança para sorrir. Solução definitiva e durável.',
      problem: 'Dentes faltando?',
      message: 'Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20implantes%20dent%C3%A1rios%20e%20saber%20o%20melhor%20plano%20para%20meu%20caso.',
      icon: <FaShieldAlt />,

    },

    {
      id: 2,
      slug: 'estetica',
      title: 'Lentes de Contato Dental',
      description: 'Transforme seu sorriso com estética perfeita. Aparência natural e brilhante em 2 consultas.',
      problem: 'Quer um sorriso perfeito?',
      message: 'Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20lentes%20de%20contato%20dental%20e%20entender%20o%20processo.',
      icon: <FaSmile />,
    },

    {
      id: 3,
      slug: 'alinhadores',
      title: 'Alinhadores Invisíveis',
      description: 'Dentes alinhados sem aparelho. Tratamento discreto e confortável no seu ritmo.',
      problem: 'Dentes desalinhados?',
      message: 'Quero%20saber%20se%20posso%20usar%20alinhadores%20invis%C3%ADveis%20e%20agendar%20uma%20avalia%C3%A7%C3%A3o.',
      icon: <FaTooth />,
    },

    {
      id: 4,
      slug: 'clareamento',
      title: 'Clareamento Dentário',
      description: 'Dentes mais brancos em poucas semanas. Seguro, rápido e com resultado duradouro.',
      problem: 'Dentes amarelados?',
      message: 'Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20clareamento%20dental.',
      icon: <FaSmile />,
    },

    {
      id: 5,
      slug: 'ortodontia',
      title: 'Ortodontia Fixa',
      description: 'Melhor e mais moderno alinhamento dentário. Técnicas atualizadas para resultados impecáveis.',
      problem: 'Precisa alinhar os dentes?',
      message: 'Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20ortodontia%20e%20entender%20as%20op%C3%A7%C3%B5es.',
      icon: <FaHospital />,
    },

    {
      id: 6,
      slug: 'reabilitacao',
      title: 'Reabilitação Oral',
      description: 'Recupere a função mastigatória completa. Soluções personalizadas para seu caso.',
      problem: 'Múltiplos problemas dentários?',
      message: 'Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20reabilita%C3%A7%C3%A3o%20oral.',
      icon: <FaSmile />,

    },
  ];

  return (
    <ServicesContainer id="servicos" aria-labelledby="services-title">
      <ContentContainer>
        <SectionHeader>
          <SectionEyebrow>Encontre o melhor caminho para você</SectionEyebrow>
          <SectionTitle id="services-title">Tratamentos para cuidar do seu sorriso</SectionTitle>
          <Divider />
          <SectionDescription>
            Escolha o que mais se aproxima do que você deseja melhorar. Se ainda não souber qual tratamento precisa, nossa equipe ajuda você a começar pela avaliação.
          </SectionDescription>
        </SectionHeader>

        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceIcon aria-hidden="true">
                {service.icon}
              </ServiceIcon>
              <ServiceContent>
                {service.problem && (
                  <ProblemText>{service.problem}</ProblemText>
                )}
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceLink
                  href={`https://api.whatsapp.com/send?phone=556134794514&text=${service.message}`}
                  {...whatsappLinkProps}
                  onClick={() => trackWhatsAppStart({ location: `home_service_${service.slug}`, treatment: service.title })}
                  aria-label={`Agendar avaliação para ${service.title}`}
                >
                  Agendar avaliação
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </ServiceLink>
                {['implantes', 'estetica', 'alinhadores', 'clareamento'].includes(service.slug) && (
                  <ServiceDetailLink to={`/servicos/${service.slug}`}>
                    Ver detalhes <span aria-hidden="true">→</span>
                  </ServiceDetailLink>
                )}
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ContentContainer>
    </ServicesContainer>
  );
};

export default ServicesSection;
