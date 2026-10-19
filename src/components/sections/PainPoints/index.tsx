import React from 'react';
import styled from 'styled-components';
import { buildWhatsAppUrl, getWhatsAppLinkProps } from '../../../utils/whatsapp';
import { trackWhatsAppStart } from '../../../utils/analytics';

const PainPointsContainer = styled.section`
  padding: var(--spacing-20) 0;
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
  max-width: 42rem;
  margin: 0 auto;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: var(--spacing-6);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Card = styled.a`
  display: block;
  padding: 1.75rem 2rem;
  background: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
    border-color: rgba(15, 118, 110, 0.35);
  }
`;

const CardBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-white);
  font-weight: 700;
  margin-bottom: 1.25rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

const CardText = styled.p`
  color: var(--color-gray-600);
  margin-bottom: 1rem;
  line-height: 1.7;
`;

const CardAction = styled.span`
  font-size: 0.95rem;
  color: var(--color-primary);
  font-weight: 700;
`;

const painPoints = [
  {
    id: 1,
    title: 'Perdi dentes e quero recuperar o sorriso',
    description: 'Implantes odontológicos para devolver função e estética ao seu sorriso.',
    whatsappText: 'Quero avaliar meu implante dentário e agendar uma avaliação em Brazlândia.'
  },
  {
    id: 2,
    title: 'Tenho vergonha de sorrir',
    description: 'Soluções estéticas para devolver confiança e um sorriso natural.',
    whatsappText: 'Quero avaliar opções estéticas para meu sorriso e agendar uma avaliação.'
  },
  {
    id: 3,
    title: 'Dentes desalinhados me incomodam',
    description: 'Tratamentos modernos para alinhar dentes com conforto e discrição.',
    whatsappText: 'Quero saber se posso usar alinhadores invisíveis e agendar uma avaliação.'
  },
  {
    id: 4,
    title: 'Quero clarear meus dentes',
    description: 'Clareamento seguro e eficiente com diagnóstico profissional.',
    whatsappText: 'Quero agendar uma avaliação para clareamento dental.'
  },
  {
    id: 5,
    title: 'Preciso retomar um tratamento interrompido',
    description: 'Revisão completa do plano para continuar o tratamento com segurança.',
    whatsappText: 'Preciso retomar meu tratamento odontológico e gostaria de agendar uma avaliação.'
  },
  {
    id: 6,
    title: 'Ainda não sei qual tratamento preciso',
    description: 'Avaliação completa para entender o melhor caminho para o seu caso.',
    whatsappText: 'Ainda não sei qual tratamento preciso e gostaria de agendar uma avaliação.'
  }
];

const PainPointsSection: React.FC = () => {
  const whatsappLinkProps = getWhatsAppLinkProps();

  return (
    <PainPointsContainer>
      <ContentContainer>
        <SectionHeader>
          <SectionTitle>Qual é a sua maior preocupação?</SectionTitle>
          <Divider />
          <SectionDescription>
            Clique na opção que mais combina com você e fale diretamente conosco pelo WhatsApp com mensagem pronta.
          </SectionDescription>
        </SectionHeader>

        <CardsGrid>
          {painPoints.map((point) => (
            <Card
              key={point.id}
              href={buildWhatsAppUrl(point.whatsappText)}
              {...whatsappLinkProps}
              onClick={() => trackWhatsAppStart({ location: `pain_point_${point.id}`, treatment: point.title })}
            >
              <CardBadge>{point.id}</CardBadge>
              <CardTitle>{point.title}</CardTitle>
              <CardText>{point.description}</CardText>
              <CardAction>Quero avaliar meu caso</CardAction>
            </Card>
          ))}
        </CardsGrid>
      </ContentContainer>
    </PainPointsContainer>
  );
};

export default PainPointsSection;
