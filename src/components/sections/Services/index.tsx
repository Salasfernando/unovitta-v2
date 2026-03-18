import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHospital, FaSmile, FaTooth } from 'react-icons/fa';


const ServicesContainer = styled.section`
  padding: var(--spacing-20) 0;
  background-color: var(--color-gray-100);
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

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-4);
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Divider = styled.div`
  width: 5rem;
  height: 0.25rem;
  background-color: var(--color-accent);
  margin: 0 auto var(--spacing-6) auto;
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

const ServiceIcon = styled.div`
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-6);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 3rem;
    height: 3rem;
  }
`;

const ServiceContent = styled.div`
  padding: var(--spacing-6);
`;

const ProblemText = styled.p`
  color: var(--color-primary);
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

const ServiceLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: var(--color-primary);
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-left: var(--spacing-1);
  }
`;

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Implantes Dentários',
      description: 'Recupere função, estética e segurança para sorrir. Solução definitiva e durável.',
      problem: 'Dentes faltando?',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },

    {
      id: 2,
      title: 'Lentes de Contato Dental',
      description: 'Transforme seu sorriso com estética perfeita. Aparência natural e brilhante em 2 consultas.',
      problem: 'Quer um sorriso perfeito?',
      icon: <FaSmile />,
    },

    {
      id: 3,
      title: 'Alinhadores Invisíveis',
      description: 'Dentes alinhados sem aparelho. Tratamento discreto e confortável no seu ritmo.',
      problem: 'Dentes desalinhados?',
      icon: <FaTooth />,
    },

    {
      id: 4,
      title: 'Clareamento Dentário',
      description: 'Dentes mais brancos em poucas semanas. Seguro, rápido e com resultado duradouro.',
      problem: 'Dentes amarelados?',
      icon: <FaSmile />,
    },

    {
      id: 5,
      title: 'Ortodontia Fixa',
      description: 'Melhor e mais moderno alinhamento dentário. Técnicas atualizadas para resultados impecáveis.',
      problem: 'Precisa alinhar os dentes?',
      icon: <FaHospital />,
    },

    {
      id: 6,
      title: 'Reabilitação Oral',
      description: 'Recupere a função mastigatória completa. Soluções personalizadas para seu caso.',
      problem: 'Múltiplos problemas dentários?',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <ServicesContainer id="servicos">
      <ContentContainer>
        <SectionHeader>
          <SectionTitle>Nossos Serviços</SectionTitle>
          <Divider />
          <SectionDescription>
            Oferecemos uma variedade de serviços odontológicos com foco em qualidade, conforto e resultados duradouros. Conheça nossas especialidades:
          </SectionDescription>
        </SectionHeader>

        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceIcon>
                {service.icon}
              </ServiceIcon>
              <ServiceContent>
                {service.problem && (
                  <ProblemText>{service.problem}</ProblemText>
                )}
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceLink to="/servicos">
                  Saber mais
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </ServiceLink>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ContentContainer>
    </ServicesContainer>
  );
};

export default ServicesSection;
