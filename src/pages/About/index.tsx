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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-12);
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutImage = styled.div`
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  height: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AboutText = styled.div`
  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: var(--spacing-4);
  }
  
  p {
    margin-bottom: var(--spacing-4);
    color: var(--color-gray-700);
  }
`;

/*const TeamSection = styled.section`
  margin-top: var(--spacing-20);
`;

const TeamHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-12);
`;

const TeamTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-4);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;*/

/*const TeamMember = styled.div`
  text-align: center;
`;*/

/*const MemberImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto var(--spacing-4) auto;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;*/

/*const MemberName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: var(--spacing-2);
`;*/

/*const MemberRole = styled.p`
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-3);
`;*/

/*const MemberBio = styled.p`
  color: var(--color-gray-700);
  font-size: 0.875rem;
`;*/

const About: React.FC = () => {
  /*const teamMembers = [
    {
      id: 1,
      name: 'Dra. Ana Silva',
      role: 'Diretora Clínica',
      bio: 'Especialista em Odontologia com mais de 15 anos de experiência. Formada pela USP com especialização em Implantodontia e Estética Dental.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 2,
      name: 'Dr. Carlos Oliveira',
      role: 'Ortodontista',
      bio: 'Especialista em Ortodontia pela Sociedade Brasileira de Ortodontia. Atua há 10 anos com foco em alinhadores invisíveis e aparelhos estéticos.',
      image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      id: 3,
      name: 'Dra. Mariana Santos',
      role: 'Odontopediatra',
      bio: 'Especialista em Odontopediatria com foco em atendimento humanizado para crianças. Membro da Sociedade Brasileira de Odontopediatria.',
      image: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
      id: 4,
      name: 'Dr. Roberto Almeida',
      role: 'Implantodontista',
      bio: 'Especialista em Implantodontia e Prótese Dentária. Formado pela UNIFESP com mais de 500 casos de implantes realizados com sucesso.',
      image: 'https://randomuser.me/api/portraits/men/4.jpg'
    }
  ];*/

  return (
    <AboutContainer>
      <SEO
        title="Sobre Nós"
        description="Conheça a UnoVitta, uma clínica odontológica comprometida com a excelência em saúde bucal, oferecendo atendimento humanizado e soluções personalizadas para cada paciente."
        keywords="clínica odontológica, sobre nós, equipe odontológica, dentistas, missão, valores, história"
        canonical="https://unovitta.com.br/sobre"
      />

      <ContentContainer>
        <PageHeader>
          <PageTitle>Sobre a UnoVitta</PageTitle>
          <Divider />
          <PageDescription>
            Conheça nossa história, missão, valores e equipe odontológica. Seja bem-vindo a cuidar do seu sorriso.
          </PageDescription>
        </PageHeader>

        <AboutContent>
          <AboutImage>
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Equipe UnoVitta Odontologia"
              
            />
          </AboutImage>

          <AboutText>
            <h2>Nossa História</h2>
            <p>
              Fundada em 2010, a UnoVitta é uma clínica que reúne profissionais especialistas da odontologia, integrados e comprometidos com a saúde e satisfação de mulheres, homens, crianças e da melhor idade, formando um ambiente exclusivamente preparado para cuidar da sua família. Nossa visão sempre foi oferecer um atendimento humanizado, com foco na prevenção e no bem-estar integral dos pacientes.
            </p>
            <p>
              Ao longo dos anos, expandimos nossas instalações e serviços, incorporando novas especialidades odontológicas e tecnologias avançadas, sempre mantendo nosso compromisso com a excelência e o cuidado personalizado.
            </p>
            <h2>Nossa Missão</h2>
            <p>
              Proporcionar atendimento odontológico de excelência, com foco na prevenção e na estética, utilizando tecnologia avançada e profissionais altamente qualificados para garantir sorrisos saudáveis e a melhor experiência aos nossos pacientes.
            </p>
            <h2>Nossos Valores</h2>
            <p>
              <strong>Excelência:</strong> Buscamos a perfeição em cada tratamento.<br />
              <strong>Humanização:</strong> Tratamos cada paciente com empatia e respeito.<br />
              <strong>Inovação:</strong> Utilizamos tecnologia de ponta para melhores resultados.<br />
              <strong>Ética:</strong> Agimos com transparência e responsabilidade.
            </p>
          </AboutText>
        </AboutContent>

        {/*<TeamSection>
          <TeamHeader>
            <TeamTitle>Nossa Equipe</TeamTitle>
            <Divider />
            <PageDescription>
              Conheça os profissionais dedicados a cuidar do seu sorriso com excelência e humanização.
            </PageDescription>
          </TeamHeader>

          <TeamGrid>
            {teamMembers.map(member => (
              <TeamMember key={member.id}>
                <MemberImage>
                  <img
                    src={member.image}
                    alt={member.name}
                    
                  />
                </MemberImage>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <MemberBio>{member.bio}</MemberBio>
              </TeamMember>
            ))}
          </TeamGrid>
        </TeamSection>*/}

      </ContentContainer>
    </AboutContainer>
  );
};

export default About;
