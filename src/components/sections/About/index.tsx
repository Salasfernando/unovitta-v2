import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import imgLogo from '../../../assets/logo.png';

const AboutContainer = styled.section`
  padding: var(--spacing-20) 0;
  background-color: var(--color-white);
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-12);
  align-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageWrapper = styled.div`
  background-color: var(--color-gray-100);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-lg);
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-lg);
`;

const ContentBlock = styled.div``;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-4);
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-6);
`;

const ValuesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: var(--spacing-8);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`;

const ValueItem = styled.li`
  display: flex;
  align-items: flex-start;
`;

const ValueIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-accent);
  margin-right: var(--spacing-2);
  flex-shrink: 0;
`;

const ValueText = styled.span`
  color: var(--color-gray-700);
`;

const LearnMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3) var(--spacing-6);
  background-color: transparent;
  color: var(--color-primary);
  font-weight: 500;
  border: 2px solid var(--color-primary);
  border-radius: var(--border-radius);
  transition: var(--transition-default);
  
  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`;

const AboutSection: React.FC = () => {
  return (
    <AboutContainer id="sobre">
      <ContentContainer>
        <SectionHeader>
          <SectionTitle>Conheça a UnoVitta</SectionTitle>
          <Divider />
          <SectionDescription>
            A UnoVitta é uma clínica odontológica dedicada a oferecer cuidados de saúde de alta qualidade,
            com uma abordagem centrada no paciente e foco na inovação e humanização do atendimento.
          </SectionDescription>
        </SectionHeader>

        <Grid>
          <ImageWrapper>
            <AboutImage
              src={imgLogo}
              alt="Clínica UnoVitta"
              loading="lazy"
            />
          </ImageWrapper>

          <ContentBlock>
            <SubTitle>Nossa Missão</SubTitle>
            <Paragraph>
              Na Unovitta Clínicas, nossa missão é transformar sorrisos e vidas por meio de um atendimento humanizado, ético e de excelência. Comprometemo-nos a oferecer tratamentos odontológicos de alta qualidade, utilizando tecnologia de ponta e técnicas atualizadas, sempre com foco no bem-estar, conforto e segurança de cada paciente.
              <br />
              Acreditamos que um sorriso saudável vai além da estética — é parte essencial da saúde e da autoestima. Por isso, trabalhamos diariamente para proporcionar experiências positivas, baseadas na confiança, no respeito e na valorização do ser humano.
            </Paragraph>

            <SubTitle>Nossos Valores</SubTitle>
            <ValuesList>
              <ValueItem>
                <ValueIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </ValueIcon>
                <ValueText><strong>Excelência:</strong> Buscamos a perfeição em cada atendimento.</ValueText>
              </ValueItem>
              <ValueItem>
                <ValueIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </ValueIcon>
                <ValueText><strong>Humanização:</strong> Tratamos cada paciente com empatia e respeito.</ValueText>
              </ValueItem>
              <ValueItem>
                <ValueIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </ValueIcon>
                <ValueText><strong>Inovação:</strong> Utilizamos tecnologia de ponta para melhores resultados.</ValueText>
              </ValueItem>
              <ValueItem>
                <ValueIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </ValueIcon>
                <ValueText><strong>Ética:</strong> Agimos com transparência e responsabilidade.</ValueText>
              </ValueItem>
            </ValuesList>

            <LearnMoreButton to="/sobre">
              Saiba mais sobre nós
            </LearnMoreButton>
          </ContentBlock>
        </Grid>
      </ContentContainer>
    </AboutContainer>
  );
};

export default AboutSection;
