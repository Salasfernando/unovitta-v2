import React from 'react';
import styled from 'styled-components';

const HowItWorksContainer = styled.section`
  padding: var(--spacing-20) 0;
  background: var(--color-white);
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
  font-weight: 800;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Divider = styled.div`
  width: 5rem;
  height: 0.25rem;
  background: var(--color-secondary);
  margin: 0 auto var(--spacing-6) auto;
`;

const SectionDescription = styled.p`
  font-size: 1.05rem;
  color: var(--color-gray-600);
  max-width: 44rem;
  margin: 0 auto;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-6);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const StepCard = styled.article`
  background: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-8);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`;

const StepNumber = styled.div`
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-white);
  font-weight: 700;
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

const StepText = styled.p`
  color: var(--color-gray-600);
  line-height: 1.75;
`;

const steps = [
  {
    id: 1,
    title: 'Conte o que está acontecendo',
    text: 'Explique sua principal dor ou objetivo dental de forma rápida e prática.'
  },
  {
    id: 2,
    title: 'Receba uma avaliação personalizada',
    text: 'Nossa equipe analisa seu caso e indica as melhores opções de tratamento.'
  },
  {
    id: 3,
    title: 'Veja o plano claro',
    text: 'Entenda os próximos passos, prazos e cuidados com tranquilidade.'
  },
  {
    id: 4,
    title: 'Agende sua avaliação',
    text: 'Marque seu horário pelo WhatsApp com mensagem pronta e atendimento rápido.'
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <HowItWorksContainer>
      <ContentContainer>
        <SectionHeader>
          <SectionTitle>Como funciona a avaliação</SectionTitle>
          <Divider />
          <SectionDescription>
            Nosso processo é simples, transparente e focado em descobrir qual é o melhor tratamento para o seu caso.
          </SectionDescription>
        </SectionHeader>

        <StepsGrid>
          {steps.map((step) => (
            <StepCard key={step.id}>
              <StepNumber>{step.id}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepText>{step.text}</StepText>
            </StepCard>
          ))}
        </StepsGrid>
      </ContentContainer>
    </HowItWorksContainer>
  );
};

export default HowItWorksSection;
