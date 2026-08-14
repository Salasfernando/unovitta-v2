import React from 'react';
import styled from 'styled-components';
// import { FaArrowRight } from 'react-icons/fa';
import { FAQItem, SectionHeader, TrustMetric } from '../../ui';

const Section = styled.section<{ $muted?: boolean }>`
  padding: 5.5rem 0;
  background: ${({ $muted }) => $muted ? 'var(--color-white)' : 'var(--color-gray-100)'};
`;

const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;

  @media (min-width: 760px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

// const TeamGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 1rem;

//   @media (min-width: 650px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
// `;

// const TeamCard = styled.article`
//   overflow: hidden;
//   border: 1px solid var(--color-gray-300);
//   border-radius: var(--border-radius-lg);
//   background: var(--color-gray-100);
// `;

// const TeamPhoto = styled.img`
//   width: 100%;
//   aspect-ratio: 4 / 3;
//   object-fit: cover;
// `;

// const TeamBody = styled.div`
//   padding: 1.15rem;
// `;

// const TeamName = styled.h3`
//   margin-bottom: 0.25rem;
//   font-size: 1.15rem;
// `;

// const TeamRole = styled.p`
//   margin: 0;
//   color: var(--color-primary);
//   font-size: 0.9rem;
//   font-weight: 700;
// `;

// const TeamNote = styled.p`
//   margin-top: 0.55rem;
//   color: var(--color-gray-600);
//   font-size: 0.9rem;
// `;

const FAQGrid = styled.div`
  max-width: 56rem;
`;

// const SectionLink = styled.a`
//   display: inline-flex;
//   align-items: center;
//   gap: 0.45rem;
//   margin-top: 1.5rem;
//   color: var(--color-primary);
//   font-weight: 800;

//   &:hover {
//     transform: translateX(2px);
//   }
// `;

const HomeEnhancements: React.FC = () => (
  <>
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Confiança para decidir com calma"
          title="Cuidado próximo, experiência e clareza em cada etapa."
          description="Use estes dados como prova social real e mantenha somente os números que puder confirmar na comunicação oficial da clínica."
        />
        <MetricsGrid>
          <TrustMetric value="15+" label="Anos de atuação" />
          <TrustMetric value="4,9/5" label="Avaliação média" />
          <TrustMetric value="8K+" label="Pacientes atendidos" />
          <TrustMetric value="DF" label="Clínica em Brazlândia" />
        </MetricsGrid>
      </Container>
    </Section>

    {/* <Section $muted>
      <Container>
        <SectionHeader
          eyebrow="Quem cuida de você"
          title="Uma equipe preparada para ouvir antes de tratar."
          description="As imagens abaixo são temporárias e podem ser substituídas por retratos reais da equipe sem alterar o layout."
        />
        <TeamGrid>
          <TeamCard>
            <TeamPhoto src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=82" alt="Profissional de odontologia sorrindo em retrato" loading="lazy" width={900} height={675} />
            <TeamBody><TeamName>Dra. Ana Oliveira</TeamName><TeamRole>Clínica geral e estética</TeamRole><TeamNote>Planejamento claro e atendimento humanizado.</TeamNote></TeamBody>
          </TeamCard>
          <TeamCard>
            <TeamPhoto src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=82" alt="Profissional de odontologia em ambiente clínico" loading="lazy" width={900} height={675} />
            <TeamBody><TeamName>Dr. Carlos Silva</TeamName><TeamRole>Ortodontia e alinhadores</TeamRole><TeamNote>Tratamentos pensados para a rotina de cada paciente.</TeamNote></TeamBody>
          </TeamCard>
          <TeamCard>
            <TeamPhoto src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=82" alt="Profissional de odontologia em retrato editorial" loading="lazy" width={900} height={675} />
            <TeamBody><TeamName>Dra. Mariana Santos</TeamName><TeamRole>Implantes e reabilitação</TeamRole><TeamNote>Segurança e acompanhamento em cada etapa.</TeamNote></TeamBody>
          </TeamCard>
        </TeamGrid>
        <SectionLink href="/sobre">Conhecer a clínica e a equipe <FaArrowRight aria-hidden="true" /></SectionLink>
      </Container>
    </Section> */}

    <Section>
      <Container>
        <SectionHeader
          eyebrow="Perguntas frequentes"
          title="Antes de marcar, você pode tirar suas principais dúvidas."
          description="Respostas objetivas para reduzir inseguranças e tornar o primeiro contato mais simples."
        />
        <FAQGrid>
          <FAQItem question="Como funciona a primeira avaliação?" answer="Você conta o que deseja melhorar, a equipe entende seu caso e explica os próximos passos com clareza. A indicação de tratamento acontece depois da avaliação." />
          <FAQItem question="Preciso saber qual tratamento quero antes de falar com a clínica?" answer="Não. Você pode começar explicando sua principal preocupação e a equipe ajuda a organizar as possibilidades." />
          <FAQItem question="A clínica atende em Brazlândia?" answer="Sim. A UnoVitta está localizada em Brazlândia, no Distrito Federal. Consulte a página de Contato para endereço, telefone e rota." />
          <FAQItem question="Como agendo pelo WhatsApp?" answer="Clique em qualquer botão de agendamento, revise a mensagem pronta e envie para iniciar a conversa com a equipe." />
        </FAQGrid>
      </Container>
    </Section>
  </>
);

export default HomeEnhancements;
