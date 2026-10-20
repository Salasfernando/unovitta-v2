import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowRight, FaCheck, FaWhatsapp } from 'react-icons/fa';
import SEO from '../../components/SEO';
import { Button, FAQItem, SectionHeader, TrustMetric } from '../../components/ui';
import { buildWhatsAppUrl, getWhatsAppLinkProps } from '../../utils/whatsapp';
import { trackWhatsAppConversion } from '../../utils/analytics';
import PriorityImage from '../../components/ui/PriorityImage';

type TreatmentData = {
  slug: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  keywords: string;
  features: string[];
  steps: string[];
  faqs: Array<{ question: string; answer: string }>;
};

const treatments: Record<string, TreatmentData> = {
  implantes: {
    slug: 'implantes',
    title: 'Implantes dentários com planejamento e segurança',
    eyebrow: 'Recupere função, conforto e confiança',
    shortDescription: 'Um caminho planejado para recuperar dentes perdidos e voltar a sorrir com naturalidade.',
    description: 'A avaliação de implantes começa entendendo sua rotina, sua saúde bucal e o resultado que você deseja. A equipe UnoVitta organiza as etapas com clareza e acompanha você em cada decisão.',
    image: 'https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?auto=format&fit=crop&w=1200&q=82',
    imageAlt: 'Paciente em consulta odontológica para planejamento de tratamento',
    keywords: 'implantes dentários em Brazlândia, implante dentário, reabilitação oral, dentista em Brazlândia',
    features: ['Planejamento individualizado', 'Recuperação da mastigação', 'Aparência natural', 'Acompanhamento próximo'],
    steps: ['Avaliação clínica e exames necessários', 'Definição do plano e das etapas', 'Execução do tratamento com acompanhamento', 'Revisões e orientações de cuidado'],
    faqs: [
      { question: 'Como saber se o implante é indicado para mim?', answer: 'A indicação depende de avaliação clínica e exames. A equipe analisa sua saúde bucal, estrutura óssea e objetivo antes de recomendar o caminho adequado.' },
      { question: 'O tratamento é igual para todos?', answer: 'Não. O planejamento é individual e pode variar conforme a quantidade de dentes, condições de saúde e necessidades funcionais e estéticas.' },
      { question: 'Posso começar pela avaliação?', answer: 'Sim. O primeiro passo é conversar com a equipe, entender o seu caso e receber uma orientação clara sobre as possibilidades.' }
    ]
  },
  alinhadores: {
    slug: 'alinhadores',
    title: 'Alinhadores transparentes para sorrir com discrição',
    eyebrow: 'Mais liberdade para cuidar do seu sorriso',
    shortDescription: 'Uma alternativa discreta para alinhar os dentes com planejamento e acompanhamento profissional.',
    description: 'Os alinhadores são planejados de acordo com o seu caso e sua rotina. A avaliação mostra se essa opção faz sentido para você e quais etapas podem fazer parte do tratamento.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=82',
    imageAlt: 'Alinhadores transparentes sobre uma bandeja de consulta odontológica',
    keywords: 'alinhadores transparentes em Brazlândia, alinhadores invisíveis, ortodontia estética, dentista em Brazlândia',
    features: ['Aparelho discreto', 'Planejamento digital', 'Rotina mais confortável', 'Acompanhamento por etapas'],
    steps: ['Avaliação do alinhamento e da mordida', 'Planejamento do movimento dental', 'Uso orientado dos alinhadores', 'Acompanhamento e ajustes necessários'],
    faqs: [
      { question: 'Todo mundo pode usar alinhadores?', answer: 'A indicação depende do tipo de movimentação necessária e da avaliação do caso. A consulta é essencial para verificar a melhor opção.' },
      { question: 'Os alinhadores precisam ser usados o dia inteiro?', answer: 'O tempo de uso deve seguir a orientação profissional. Durante a avaliação, a equipe explica a rotina e os cuidados esperados.' },
      { question: 'O tratamento é realmente discreto?', answer: 'Os alinhadores são transparentes e foram desenvolvidos para aparecer menos do que aparelhos convencionais, mas o resultado depende do planejamento e da colaboração.' }
    ]
  },
  estetica: {
    slug: 'estetica',
    title: 'Odontologia estética para um sorriso natural',
    eyebrow: 'Beleza com equilíbrio e planejamento',
    shortDescription: 'Tratamentos estéticos pensados para valorizar seu sorriso sem perder naturalidade.',
    description: 'A odontologia estética une saúde, proporção e desejos pessoais. Na UnoVitta, a conversa começa antes do procedimento para construir um plano que respeite seu rosto e sua rotina.',
    image: 'https://images.unsplash.com/photo-1694675236489-d73651370688?auto=format&fit=crop&w=1200&q=82',
    imageAlt: 'Dentista avaliando o sorriso de uma paciente durante consulta',
    keywords: 'odontologia estética em Brazlândia, estética dental, lentes de contato dental, clareamento dental',
    features: ['Planejamento personalizado', 'Resultado equilibrado', 'Tecnologia e cuidado', 'Orientação transparente'],
    steps: ['Conversa sobre objetivo e expectativas', 'Avaliação da saúde e proporções do sorriso', 'Apresentação das possibilidades', 'Execução e acompanhamento do plano'],
    faqs: [
      { question: 'Quais tratamentos podem fazer parte da estética dental?', answer: 'As possibilidades variam conforme o caso e podem incluir clareamento, restaurações estéticas, lentes ou outros recursos. A equipe orienta após a avaliação.' },
      { question: 'O resultado fica artificial?', answer: 'O planejamento busca equilíbrio e naturalidade. A escolha do tratamento, da tonalidade e das proporções deve ser individualizada.' },
      { question: 'Preciso tratar a saúde bucal antes?', answer: 'A saúde bucal vem primeiro. A avaliação identifica se existe alguma condição que precisa ser cuidada antes da etapa estética.' }
    ]
  },
  clareamento: {
    slug: 'clareamento',
    title: 'Clareamento dental com orientação profissional',
    eyebrow: 'Mais luminosidade para o seu sorriso',
    shortDescription: 'Uma abordagem segura para melhorar a tonalidade dos dentes respeitando sua saúde bucal.',
    description: 'O clareamento precisa começar com diagnóstico e orientação. A equipe avalia dentes, gengivas, restaurações e sensibilidade para indicar o método mais adequado ao seu caso.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=82',
    imageAlt: 'Profissional preparando materiais para avaliação odontológica',
    keywords: 'clareamento dental em Brazlândia, clareamento dentário, dentes brancos, odontologia estética',
    features: ['Avaliação antes do clareamento', 'Orientação contra sensibilidade', 'Método adequado ao caso', 'Cuidados para manutenção'],
    steps: ['Avaliação da saúde bucal e da tonalidade', 'Definição do método e das orientações', 'Realização do clareamento conforme plano', 'Acompanhamento e cuidados de manutenção'],
    faqs: [
      { question: 'Clareamento dental causa sensibilidade?', answer: 'Pode haver sensibilidade em alguns casos. A avaliação e o acompanhamento ajudam a orientar o método e os cuidados para reduzir desconfortos.' },
      { question: 'Qualquer pessoa pode fazer clareamento?', answer: 'É necessário avaliar dentes, gengivas, restaurações e outras condições antes. A equipe indica o que é seguro para o seu caso.' },
      { question: 'Quanto tempo dura o resultado?', answer: 'A duração varia conforme hábitos, alimentação e cuidados. Durante a consulta, você recebe orientações personalizadas para manutenção.' }
    ]
  }
};

const Page = styled.main`
  background: var(--color-gray-100);
`;

const Hero = styled.section`
  padding: 5.5rem 0;
  background: var(--color-primary);
  color: var(--color-white);
`;

const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 860px) {
    grid-template-columns: 0.95fr 1.05fr;
    gap: 4.5rem;
  }
`;

const HeroCopy = styled.div`
  max-width: 38rem;
`;

const HeroEyebrow = styled.p`
  margin-bottom: 1rem;
  color: var(--color-secondary);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const HeroTitle = styled.h1`
  margin-bottom: 1.2rem;
  color: var(--color-white);
  font-family: var(--font-family-display);
  font-size: clamp(2.55rem, 5vw, 4.8rem);
  line-height: 1;
`;

const HeroDescription = styled.p`
  margin-bottom: 1.5rem;
  color: rgba(250, 247, 241, 0.78);
  font-size: 1.08rem;
  line-height: 1.75;
`;

const HeroImage = styled(PriorityImage)`
  width: 100%;
  aspect-ratio: 4 / 3;
  border: 0.6rem solid var(--color-secondary);
  border-radius: 1.75rem;
  object-fit: cover;
  box-shadow: var(--shadow-lg);
`;

const ContentSection = styled.section<{ $muted?: boolean }>`
  padding: 5.5rem 0;
  background: ${({ $muted }) => $muted ? 'var(--color-white)' : 'var(--color-gray-100)'};
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 820px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`;

const BodyCopy = styled.div`
  max-width: 40rem;
  color: var(--color-gray-700);
  font-size: 1.05rem;
  line-height: 1.8;
`;

const FeatureList = styled.ul`
  display: grid;
  gap: 0.85rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Feature = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  color: var(--color-gray-700);
  font-weight: 700;

  svg {
    flex: 0 0 auto;
    margin-top: 0.25rem;
    color: var(--color-secondary);
  }
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 680px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StepCard = styled.article`
  padding: 1.35rem;
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-lg);
  background: var(--color-gray-100);
`;

const StepNumber = styled.span`
  display: block;
  margin-bottom: 0.75rem;
  color: var(--color-secondary);
  font-family: var(--font-family-display);
  font-size: 1.8rem;
  font-weight: 800;
`;

const StepText = styled.p`
  margin: 0;
  color: var(--color-gray-700);
  font-weight: 700;
  line-height: 1.5;
`;

const Metrics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  margin-top: 2rem;

  @media (min-width: 560px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FAQGrid = styled.div`
  max-width: 54rem;
  margin: 0 auto;
`;

const CTA = styled.section`
  padding: 4.5rem 0;
  background: var(--color-secondary);
  color: var(--color-dark);
  text-align: center;
`;

const CTATitle = styled.h2`
  color: var(--color-dark);
  font-size: clamp(2rem, 4vw, 3rem);
`;

const CTAText = styled.p`
  max-width: 38rem;
  margin: 0 auto 1.4rem;
  color: rgba(26, 48, 45, 0.78);
`;

const TreatmentPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const treatment = slug ? treatments[slug] : undefined;
  const whatsappProps = getWhatsAppLinkProps();

  if (!treatment) {
    return <Page><ContentSection><Container><SectionHeader title="Tratamento não encontrado" description="Volte para a página de tratamentos e escolha um novo caminho." /></Container></ContentSection></Page>;
  }

  const whatsappUrl = buildWhatsAppUrl(`Olá, gostaria de agendar uma avaliação sobre ${treatment.title} na UnoVitta.`);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: treatment.title,
    description: treatment.description,
    url: `https://www.unovitta.com.br/servicos/${treatment.slug}`,
    image: treatment.image,
    about: { '@type': 'MedicalProcedure', name: treatment.title },
    publisher: { '@type': 'Organization', name: 'UnoVitta Clínicas', url: 'https://www.unovitta.com.br/' }
  };

  return (
    <Page>
      <SEO
        title={`${treatment.title} em Brazlândia`}
        description={treatment.shortDescription}
        keywords={treatment.keywords}
        canonical={`/servicos/${treatment.slug}`}
        image={treatment.image}
        schema={schema}
      />
      <Hero>
        <Container>
          <HeroGrid>
            <HeroCopy>
              <HeroEyebrow>{treatment.eyebrow}</HeroEyebrow>
              <HeroTitle>{treatment.title}</HeroTitle>
              <HeroDescription>{treatment.shortDescription}</HeroDescription>
              <Button
                href={whatsappUrl}
                {...whatsappProps}
                $variant="secondary"
                onClick={trackWhatsAppConversion}
              >
                <FaWhatsapp aria-hidden="true" /> Agendar avaliação
              </Button>
            </HeroCopy>
            <HeroImage src={treatment.image} alt={treatment.imageAlt} width={1200} height={900} fetchPriority="high" />
          </HeroGrid>
        </Container>
      </Hero>
      <ContentSection>
        <Container>
          <TwoColumn>
            <div>
              <SectionHeader eyebrow="Um plano claro para o seu caso" title="Comece entendendo o que faz sentido para você." />
              <BodyCopy><p>{treatment.description}</p></BodyCopy>
            </div>
            <FeatureList aria-label="Benefícios e características do tratamento">
              {treatment.features.map(feature => <Feature key={feature}><FaCheck aria-hidden="true" />{feature}</Feature>)}
            </FeatureList>
          </TwoColumn>
          <Metrics>
            <TrustMetric value="01" label="Avaliação individual" />
            <TrustMetric value="15+" label="Anos de experiência" />
            <TrustMetric value="4,9/5" label="Avaliação média" />
            <TrustMetric value="DF" label="Atendimento em Brazlândia" />
          </Metrics>
        </Container>
      </ContentSection>
      <ContentSection $muted>
        <Container>
          <SectionHeader eyebrow="Como funciona" title="Você entende cada etapa antes de decidir." description="A equipe acompanha o processo com comunicação clara e orientações adequadas para o seu caso." />
          <StepsGrid>
            {treatment.steps.map((step, index) => <StepCard key={step}><StepNumber>0{index + 1}</StepNumber><StepText>{step}</StepText></StepCard>)}
          </StepsGrid>
        </Container>
      </ContentSection>
      <ContentSection>
        <Container>
          <SectionHeader eyebrow="Dúvidas frequentes" title="Informação para escolher com tranquilidade." align="center" />
          <FAQGrid>{treatment.faqs.map(faq => <FAQItem key={faq.question} {...faq} />)}</FAQGrid>
        </Container>
      </ContentSection>
      <CTA>
        <Container>
          <CTATitle>Quer saber se este tratamento é para você?</CTATitle>
          <CTAText>Converse com a UnoVitta e receba uma orientação inicial para entender o próximo passo.</CTAText>
          <Button href={whatsappUrl} {...whatsappProps} $variant="primary" onClick={trackWhatsAppConversion}>
            Falar com a equipe <FaArrowRight aria-hidden="true" />
          </Button>
        </Container>
      </CTA>
    </Page>
  );
};

export default TreatmentPage;
