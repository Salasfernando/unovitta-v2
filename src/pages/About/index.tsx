import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO';

const AboutContainer = styled.div`
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
  font-size: 2.4rem;
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-12);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const AboutImage = styled.div`
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    min-height: 420px;
  }
`;

const AboutText = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    color: var(--color-primary);
  }

  p {
    margin-bottom: 1rem;
    color: var(--color-gray-700);
  }
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HighlightCard = styled.div`
  padding: 1rem 1.1rem;
  border-radius: var(--border-radius-lg);
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(15, 118, 110, 0.12);
  box-shadow: var(--shadow);

  strong {
    color: var(--color-dark);
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <SEO
        title="Sobre Nós"
        description="Conheça a UnoVitta, uma clínica odontológica comprometida com a excelência em saúde bucal, oferecendo atendimento humanizado e soluções personalizadas para cada paciente."
        keywords="clínica odontológica, sobre nós, equipe odontológica, dentistas, missão, valores, história"
        canonical="/sobre"
      />

      <ContentContainer>
        <PageHeader>
          <Eyebrow>Sobre a UnoVitta</Eyebrow>
          <PageTitle>Excelência clínica com acolhimento premium desde o primeiro atendimento.</PageTitle>
          <Divider />
          <PageDescription>
            A UnoVitta une tecnologia, cuidado humano e expertise para transformar o seu sorriso com tranquilidade, segurança e confiança.
          </PageDescription>
        </PageHeader>

        <AboutContent>
          <AboutImage>
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
              alt="Equipe UnoVitta Odontologia"
            />
          </AboutImage>

          <AboutText>
            <h2>Nossa história</h2>
            <p>
              Fundada com a proposta de oferecer um atendimento extraordinário, a UnoVitta se destaca pela combinação de acolhimento, planejamento e alta performance clínica.
            </p>
            <p>
              A cada tratamento, priorizamos a saúde, a estética e a experiência do paciente, com protocolos modernos e uma equipe comprometida com soluções personalizadas.
            </p>
            <h2>Nossa missão</h2>
            <p>
              Proporcionar sorrisos mais saudáveis e bonitos, com planejamento claro, comunicação transparente e resultados que valorizam a sua autoestima.
            </p>
            <HighlightsGrid>
              <HighlightCard>
                <strong>Humanização</strong>
                <p>Atendimento acolhedor e próximo de cada paciente.</p>
              </HighlightCard>
              <HighlightCard>
                <strong>Tecnologia</strong>
                <p>Ferramentas modernas para diagnóstico e tratamentos mais precisos.</p>
              </HighlightCard>
              <HighlightCard>
                <strong>Prevenção</strong>
                <p>Estratégias para evitar problemas futuros e manter a saúde bucal.</p>
              </HighlightCard>
              <HighlightCard>
                <strong>Resultados naturais</strong>
                <p>Estética e funcionalidade pensadas para um sorriso harmonioso.</p>
              </HighlightCard>
            </HighlightsGrid>
          </AboutText>
        </AboutContent>
      </ContentContainer>
    </AboutContainer>
  );
};

export default About;
