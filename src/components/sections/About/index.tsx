import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: var(--spacing-20) 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fdfc 100%);
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

const TrustCard = styled.div`
  background: rgba(255,255,255,0.92);
  border: 1px solid rgba(15, 118, 110, 0.12);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-8);
  text-align: center;
  transition: var(--transition-default);
  box-shadow: var(--shadow);

  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-4px);
  }
`;

const CardNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-2);
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-foreground);
  margin-bottom: var(--spacing-2);
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: var(--color-gray-600);
`;

const TrustCardsGrid = styled.div`
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

const AboutSection: React.FC = () => {
  return (
    <AboutContainer id="sobre">
      <ContentContainer>
        <SectionHeader>
          <SectionTitle>Por que escolher a UnoVitta?</SectionTitle>
          <Divider />
          <SectionDescription>
            Confiança, segurança e excelência em cada atendimento. Conheça nossos diferenciais.
          </SectionDescription>
        </SectionHeader>

        <TrustCardsGrid>
          <TrustCard>
            <CardNumber>15+</CardNumber>
            <CardTitle>Anos de Mercado</CardTitle>
            <CardDescription>Experiência comprovada em odontologia de excelência</CardDescription>
          </TrustCard>

          <TrustCard>
            <CardNumber>🤝</CardNumber>
            <CardTitle>Atendimento Humanizado</CardTitle>
            <CardDescription>Estrutura moderna e orientação profissional para sua confiança</CardDescription>
          </TrustCard>

          <TrustCard>
            <CardNumber>8K+</CardNumber>
            <CardTitle>Pacientes Satisfeitos</CardTitle>
            <CardDescription>Avaliação média de 4.9★ e múltiplos depoimentos positivos</CardDescription>
          </TrustCard>
        </TrustCardsGrid>
      </ContentContainer>
    </AboutContainer>
  );
};

export default AboutSection;
