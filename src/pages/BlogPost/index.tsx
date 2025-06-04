import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const BlogPostContainer = styled.div`
  padding: var(--spacing-20) 0;
  background-color: var(--color-white);
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
`;

const BlogHeader = styled.header`
  margin-bottom: var(--spacing-8);
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-6);
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const BlogMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-6);
  font-size: 1rem;
  color: var(--color-gray-500);
`;

const BlogDate = styled.span`
  display: flex;
  align-items: center;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: var(--spacing-2);
  }
`;

const BlogAuthor = styled.span`
  display: flex;
  align-items: center;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: var(--spacing-2);
  }
`;

const BlogCategory = styled.span`
  display: flex;
  align-items: center;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: var(--spacing-2);
  }
`;

const FeaturedImage = styled.div`
  width: 100%;
  height: 400px;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  margin-bottom: var(--spacing-8);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BlogContent = styled.div`
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--color-gray-800);
  
  // Estilos para conteúdo HTML inserido via dangerouslySetInnerHTML
  p {
    margin-bottom: var(--spacing-6);
  }
  
  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-top: var(--spacing-10);
    margin-bottom: var(--spacing-4);
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: var(--spacing-8);
    margin-bottom: var(--spacing-4);
  }
  
  ul, ol {
    margin-bottom: var(--spacing-6);
    padding-left: var(--spacing-6);
  }
  
  li {
    margin-bottom: var(--spacing-2);
  }
  
  blockquote {
    border-left: 4px solid var(--color-primary);
    padding-left: var(--spacing-4);
    font-style: italic;
    margin: var(--spacing-6) 0;
    color: var(--color-gray-600);
  }
`;

const ShareSection = styled.div`
  margin-top: var(--spacing-10);
  padding-top: var(--spacing-6);
  border-top: 1px solid var(--color-gray-200);
`;

const ShareTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: var(--spacing-4);
`;

const ShareButtons = styled.div`
  display: flex;
  gap: var(--spacing-3);
`;

const ShareButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--color-white);
  transition: var(--transition-default);
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const RelatedPosts = styled.div`
  margin-top: var(--spacing-16);
  padding-top: var(--spacing-8);
  border-top: 1px solid var(--color-gray-200);
`;

const RelatedTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-6);
  text-align: center;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-6);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const RelatedCard = styled.article`
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

const RelatedImageContainer = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
`;

const RelatedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${RelatedCard}:hover & {
    transform: scale(1.05);
  }
`;

const RelatedContent = styled.div`
  padding: var(--spacing-4);
`;

const RelatedPostTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: var(--spacing-2);
  line-height: 1.4;
`;

const RelatedPostLink = styled(Link)`
  color: var(--color-primary);
  font-weight: 500;
  font-size: 0.875rem;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const BackToButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: var(--spacing-6);
  color: var(--color-primary);
  font-weight: 500;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: var(--spacing-2);
  }
`;

// Tipagem para um único post
type PostType = {
  title: string;
  image: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  content: string;
  relatedPosts: number[]; // IDs dos posts relacionados
  seo: {
    title: string;
    description: string;
    keywords: string;
    image?: string; // SEO image é opcional
    author?: string; // SEO author é opcional
  };
};

// Tipagem para o mapa de posts
type PostsMap = {
  [slug: string]: PostType;
};

// Tipagem para os posts relacionados (usado no mock)
type RelatedPostPreview = {
  id: number;
  title: string;
  image: string;
  slug: string;
};

// Mock data - CONTEÚDO MELHORADO
const postsData: PostsMap = {
  'os-beneficios-da-odontologia-digital': {
    title: "Os benefícios da odontologia digital para pacientes e dentistas",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: 'os-beneficios-da-odontologia-digital',
    date: '01 de Outubro de 2023',
    author: 'Dra. Ana Oliveira',
    category: 'Tecnologia Odontológica',
    content: '<p>A odontologia moderna está em constante evolução, e a <strong>odontologia digital</strong> representa um dos avanços mais significativos das últimas décadas. Essa abordagem inovadora utiliza tecnologias digitais para aprimorar diagnósticos, planejamentos e tratamentos, oferecendo uma experiência mais eficiente, precisa e confortável tanto para os pacientes quanto para os profissionais.</p>' +
      '<h2>O que é Odontologia Digital?</h2>' +
      '<p>Basicamente, a odontologia digital substitui ou complementa métodos tradicionais com ferramentas e fluxos de trabalho digitais. Isso inclui o uso de scanners intraorais, softwares de design (CAD/CAM), impressão 3D, radiografia digital, entre outras tecnologias.</p>' +
      '<h2>Principais Benefícios para Pacientes e Dentistas:</h2>' +
      '<ul>' +
      '<li><strong>Diagnósticos Mais Precisos:</strong> Scanners intraorais criam modelos 3D detalhados da boca, eliminando a necessidade de moldagens desconfortáveis. Radiografias digitais oferecem imagens de alta resolução com menor exposição à radiação, permitindo a detecção precoce de problemas.</li>' +
      '<li><strong>Tratamentos Mais Rápidos e Eficientes:</strong> O fluxo digital agiliza processos como a confecção de próteses, coroas e alinhadores ortodônticos. Muitas restaurações podem ser projetadas e fabricadas no próprio consultório (sistema CAD/CAM), reduzindo o número de visitas.</li>' +
      '<li><strong>Maior Conforto para o Paciente:</strong> Adeus às massas de moldagem! O escaneamento intraoral é rápido e muito mais confortável. Além disso, a precisão digital minimiza a necessidade de ajustes posteriores em restaurações.</li>' +
      '<li><strong>Planejamento Personalizado e Previsível:</strong> Softwares avançados permitem simular resultados de tratamentos estéticos ou ortodônticos, dando ao paciente uma prévia do resultado final. O planejamento cirúrgico guiado por computador aumenta a segurança e precisão em procedimentos como a instalação de implantes.</li>' +
      '<li><strong>Melhor Comunicação e Colaboração:</strong> Arquivos digitais são facilmente compartilhados entre dentistas, laboratórios de prótese e outros especialistas, otimizando a comunicação e garantindo que todos estejam alinhados no plano de tratamento.</li>' +
      '<li><strong>Armazenamento Seguro e Acessível:</strong> Registros digitais são mais fáceis de armazenar, organizar e acessar, além de oferecerem maior segurança e privacidade em comparação com prontuários físicos.</li>' +
      '</ul>' +
      '<h2>O Futuro é Digital</h2>' +
      '<p>A odontologia digital não é apenas uma tendência, mas uma realidade que transforma a qualidade do atendimento odontológico. Ao adotar essas tecnologias, os dentistas podem oferecer tratamentos mais eficazes e uma experiência superior aos seus pacientes. A precisão, a rapidez e o conforto proporcionados pela era digital estão redefinindo os padrões da odontologia moderna.</p>' +
      '<p>Se você busca um tratamento odontológico com tecnologia de ponta, procure clínicas que investem em odontologia digital. Os benefícios para a sua saúde bucal e bem-estar são inegáveis.</p>',
    relatedPosts: [3, 6, 9],
    seo: {
      title: 'Os benefícios da odontologia digital',
      description: 'Descubra como a odontologia digital está transformando o atendimento odontológico com mais precisão, conforto e eficiência.',
      keywords: 'odontologia digital, tecnologia odontológica, benefícios odontológicos, scanner intraoral, CAD/CAM, radiografia digital',
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: 'Dra. Ana Oliveira'
    }
  },
  'saude-bucal-perfeita': {
    title: "Como manter uma saúde bucal perfeita durante todo o ano",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: 'saude-bucal-perfeita',
    date: '02 de Outubro de 2023',
    author: 'Dr. Carlos Silva',
    category: 'Odontologia Preventiva',
    content: '<p>Manter uma <strong>saúde bucal impecável</strong> não é apenas sobre ter um sorriso bonito, mas sim um pilar fundamental para o bem-estar geral. Uma boca saudável previne dores, infecções e contribui significativamente para a sua qualidade de vida. Felizmente, alcançar e manter essa saúde é possível com hábitos diários consistentes e visitas regulares ao dentista.</p>' +
      '<h2>Pilares da Higiene Bucal Diária:</h2>' +
      '<ul>' +
      '<li><strong>Escovação Correta:</strong> Escove os dentes pelo menos duas vezes ao dia, idealmente após as refeições, por cerca de dois minutos. Use uma escova de cerdas macias e um creme dental com flúor. Concentre-se em limpar todas as superfícies dos dentes (externa, interna e de mastigação) e a linha da gengiva, com movimentos suaves e circulares. Não se esqueça de escovar a língua para remover bactérias e refrescar o hálito.</li>' +
      '<li><strong>Uso Indispensável do Fio Dental:</strong> O fio dental alcança áreas onde a escova não chega, principalmente entre os dentes e abaixo da linha da gengiva. Use o fio dental diariamente para remover a placa bacteriana e restos de alimentos, prevenindo cáries interproximais e doenças gengivais como a gengivite.</li>' +
      '<li><strong>Enxaguante Bucal (Opcional e Orientado):</strong> Alguns enxaguantes podem complementar a higiene, ajudando a reduzir bactérias e a fornecer flúor. Consulte seu dentista para saber se o uso é recomendado para você e qual o tipo mais adequado.</li>' +
      '</ul>' +
      '<h2>Alimentação Consciente:</h2>' +
      '<p>Sua dieta tem um impacto direto na saúde bucal. Limite o consumo de alimentos e bebidas ricos em açúcar e amido, pois eles alimentam as bactérias que causam cáries. Evite também bebidas ácidas (refrigerantes, sucos cítricos industrializados) que podem corroer o esmalte dental. Prefira uma dieta balanceada, rica em frutas, vegetais, proteínas magras e laticínios.</p>' +
      '<h2>Hábitos a Evitar:</h2>' +
      '<ul>' +
      '<li><strong>Tabagismo:</strong> Fumar mancha os dentes, causa mau hálito, aumenta o risco de doenças gengivais e câncer bucal.</li>' +
      '<li><strong>Consumo Excessivo de Álcool:</strong> O álcool pode ressecar a boca, diminuindo a produção de saliva (que protege os dentes) e aumentar o risco de problemas bucais.</li>' +
      '</ul>' +
      '<h2>A Importância das Visitas Regulares ao Dentista:</h2>' +
      '<p>Consultas preventivas, geralmente a cada seis meses, são cruciais. Nessas visitas, o dentista realiza um exame completo para detectar problemas precocemente, faz a limpeza profissional (profilaxia) para remover placa e tártaro que a escovação e o fio dental não conseguem eliminar, e oferece orientações personalizadas.</p>' +
      '<h2>Saúde Bucal e Saúde Geral: Uma Conexão Vital</h2>' +
      '<p>Estudos mostram uma forte ligação entre a saúde bucal e a saúde geral. Doenças gengivais, por exemplo, estão associadas a um maior risco de problemas cardíacos, diabetes descontrolada, complicações na gravidez e outras condições sistêmicas. Cuidar da sua boca é cuidar do seu corpo inteiro.</p>' +
      '<p>Adotar esses hábitos simples e manter a regularidade nas visitas ao dentista são os segredos para um sorriso saudável e radiante durante todo o ano.</p>',
    relatedPosts: [2, 4, 6],
    seo: {
      title: 'Saúde Bucal Perfeita: Guia Completo',
      description: 'Dicas essenciais e hábitos diários para manter dentes e gengivas saudáveis, prevenindo problemas e garantindo um sorriso perfeito.',
      keywords: 'saúde bucal, higiene dental, escovação, fio dental, prevenção dental, cuidados odontológicos, dentista',
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: 'Dr. Carlos Silva'
    }
  },
  'exames-odontologicos-preventivos': {
    title: "Exames odontológicos preventivos: quais você deve fazer regularmente",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: 'exames-odontologicos-preventivos',
    date: '03 de Outubro de 2023',
    author: 'Dr. Roberto Almeida',
    category: 'Prevenção',
    content: '<p>A prevenção é a chave para uma saúde bucal duradoura e para evitar tratamentos complexos e custosos no futuro. Os <strong>exames odontológicos preventivos</strong> regulares são a ferramenta mais eficaz para monitorar a saúde da sua boca, detectar problemas em estágio inicial e intervir antes que se tornem graves.</p>' +
      '<h2>Por que os Exames Preventivos são Essenciais?</h2>' +
      '<p>Muitos problemas bucais, como cáries iniciais, gengivite ou até mesmo lesões pré-cancerosas, podem não apresentar sintomas visíveis ou dor em seus estágios iniciais. Somente um exame clínico detalhado e, quando necessário, exames de imagem, podem identificar essas condições precocemente, permitindo um tratamento mais simples, menos invasivo e com maiores chances de sucesso.</p>' +
      '<h2>Quais Exames Compõem uma Consulta Preventiva?</h2>' +
      '<ul>' +
      '<li><strong>Anamnese e Atualização do Histórico:</strong> O dentista conversará sobre sua saúde geral, medicamentos em uso, hábitos e quaisquer preocupações que você tenha.</li>' +
      '<li><strong>Exame Clínico Extrabucal e Intrabucal:</strong> Avaliação visual completa dos lábios, bochechas, língua, palato (céu da boca), assoalho da boca e garganta em busca de quaisquer anormalidades ou sinais de lesões. Exame minucioso de cada dente em busca de cáries, desgastes, fraturas ou problemas em restaurações existentes.</li>' +
      '<li><strong>Exame Periodontal:</strong> Avaliação da saúde das gengivas, verificando a presença de inflamação (gengivite), sangramento, retração gengival e profundidade das bolsas periodontais (espaço entre o dente e a gengiva), que indicam a presença de periodontite.</li>' +
      '<li><strong>Avaliação da Oclusão (Mordida):</strong> Verificação de como os dentes superiores e inferiores se encaixam, buscando sinais de desalinhamento, bruxismo (ranger de dentes) ou problemas na articulação temporomandibular (ATM).</li>' +
      '<li><strong>Radiografias Dentárias:</strong> Quando indicadas pelo dentista, as radiografias (como a periapical ou bite-wing) são fundamentais para visualizar áreas não visíveis a olho nu, como cáries entre os dentes, perda óssea, infecções na raiz, cistos ou tumores. A frequência das radiografias varia conforme o risco individual de cada paciente.</li>' +
      '<li><strong>Limpeza Profissional (Profilaxia):</strong> Remoção da placa bacteriana e do tártaro (placa endurecida) que se acumulam nos dentes, mesmo com uma boa higiene caseira. A profilaxia ajuda a prevenir cáries e doenças gengivais.</li>' +
      '<li><strong>Aplicação de Flúor Tópico:</strong> O flúor ajuda a remineralizar o esmalte dos dentes, tornando-os mais resistentes às cáries. Pode ser aplicado em forma de gel, espuma ou verniz, especialmente em crianças e pacientes com alto risco de cárie.</li>' +
      '<li><strong>Orientações de Higiene Oral:</strong> O dentista ou higienista pode revisar e aprimorar suas técnicas de escovação e uso do fio dental, além de indicar produtos específicos para suas necessidades.</li>' +
      '</ul>' +
      '<h2>Com que Frequência Devo Fazer Exames Preventivos?</h2>' +
      '<p>A recomendação geral é visitar o dentista a cada <strong>seis meses</strong>. No entanto, dependendo do seu histórico de saúde bucal, risco de desenvolver doenças e condições específicas, seu dentista pode recomendar visitas mais frequentes (a cada 3 ou 4 meses) ou mais espaçadas (uma vez por ano).</p>' +
      '<p>Investir em exames preventivos é investir na sua saúde e qualidade de vida. Não espere sentir dor para procurar o dentista. Agende suas consultas regulares e mantenha seu sorriso saudável por toda a vida!</p>',
    relatedPosts: [1, 2, 4],
    seo: {
      title: 'Exames Odontológicos Preventivos Essenciais',
      description: 'Saiba quais exames odontológicos preventivos são cruciais para a detecção precoce de problemas e a manutenção da saúde bucal.',
      keywords: 'exames odontológicos, prevenção dental, saúde bucal, profilaxia, limpeza dental, radiografia dentária, consulta odontológica',
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: 'Dr. Roberto Almeida'
    }
  },
  'alimentacao-e-saude-bucal': {
    title: "Alimentação e saúde bucal: o que comer para ter dentes fortes",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: 'alimentacao-e-saude-bucal',
    date: '04 de Outubro de 2023',
    author: 'Dra. Mariana Santos',
    category: 'Nutrição e Odontologia',
    content: '<p>Você sabia que o que você come tem um impacto direto e significativo na saúde dos seus dentes e gengivas? Uma <strong>alimentação equilibrada</strong> não só nutre seu corpo, mas também fortalece suas defesas bucais contra cáries, erosão ácida e doenças gengivais.</p>' +
      '<h2>Alimentos Amigos do Sorriso:</h2>' +
      '<ul>' +
      '<li><strong>Laticínios (Leite, Queijo, Iogurte Natural):</strong> Ricos em cálcio e fósforo, minerais essenciais para a formação e fortalecimento do esmalte dental e dos ossos que suportam os dentes. O queijo, em particular, ajuda a aumentar o pH da boca, neutralizando ácidos.</li>' +
      '<li><strong>Vegetais de Folhas Verdes (Espinafre, Couve, Brócolis):</strong> Fontes de cálcio, ácido fólico e outras vitaminas e minerais que promovem a saúde gengival.</li>' +
      '<li><strong>Frutas e Vegetais Crocantes (Maçã, Cenoura, Aipo):</strong> Ricos em fibras e água, estimulam a produção de saliva durante a mastigação. A saliva é a defesa natural da boca, ajudando a limpar restos de alimentos e neutralizar ácidos.</li>' +
      '<li><strong>Proteínas Magras (Peixe, Frango, Ovos, Leguminosas):</strong> Contêm fósforo, que, junto com o cálcio, é vital para a estrutura dental.</li>' +
      '<li><strong>Nozes e Sementes:</strong> Algumas são boas fontes de cálcio e fósforo.</li>' +
      '<li><strong>Água Fluoretada:</strong> O flúor é fundamental para fortalecer o esmalte e prevenir cáries. Beber água fluoretada ao longo do dia é uma excelente forma de proteção.</li>' +
      '</ul>' +
      '<h2>Alimentos e Bebidas a Consumir com Moderação:</h2>' +
      '<ul>' +
      '<li><strong>Açúcares (Doces, Bolos, Refrigerantes, Sucos Industrializados):</strong> O açúcar é o principal alimento das bactérias causadoras de cáries. Elas metabolizam o açúcar e produzem ácidos que atacam o esmalte dental.</li>' +
      '<li><strong>Carboidratos Refinados e Pegajosos (Pães Brancos, Salgadinhos, Frutas Secas):</strong> Podem ficar presos nos dentes por mais tempo, fornecendo um suprimento contínuo de alimento para as bactérias.</li>' +
      '<li><strong>Bebidas Ácidas (Refrigerantes, Isotônicos, Sucos Cítricos, Vinho):</strong> A acidez pode causar erosão do esmalte dental, tornando os dentes mais sensíveis e vulneráveis a cáries.</li>' +
      '</ul>' +
      '<h2>Dicas Adicionais:</h2>' +
      '<ul>' +
      '<li><strong>Frequência de Consumo:</strong> É preferível consumir alimentos açucarados ou ácidos junto com as refeições principais do que petiscar ou bebericar ao longo do dia. Isso limita o tempo de exposição dos dentes aos ataques ácidos.</li>' +
      '<li><strong>Hidratação:</strong> Beber bastante água ajuda a limpar a boca e a manter um bom fluxo salivar.</li>' +
      '<li><strong>Após o Consumo:</strong> Se consumir algo ácido, espere cerca de 30 minutos antes de escovar os dentes para não espalhar o ácido e danificar o esmalte amolecido. Enxaguar a boca com água pode ajudar.</li>' +
      '</ul>' +
      '<p>Lembre-se, uma dieta saudável complementa, mas não substitui, uma boa higiene bucal e visitas regulares ao dentista. Ao fazer escolhas alimentares conscientes, você estará dando um passo importante para manter seus dentes fortes e seu sorriso radiante por muitos anos.</p>',
    relatedPosts: [2, 5, 7],
    seo: {
      title: 'Alimentação e Saúde Bucal: O Guia Definitivo',
      description: 'Descubra quais alimentos fortalecem seus dentes e gengivas e quais devem ser evitados para garantir um sorriso saudável.',
      keywords: 'alimentação saudável, saúde bucal, dentes fortes, nutrição odontológica, cálcio, prevenção de cáries, dieta',
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: 'Dra. Mariana Santos'
    }
  },
  'clareamento-dental-mitos-e-verdades': {
    title: "Clareamento dental: mitos e verdades sobre o procedimento",
    image: "https://plus.unsplash.com/premium_photo-1702598988008-b60cf858cb78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: 'clareamento-dental-mitos-e-verdades',
    date: '05 de Outubro de 2023',
    author: 'Dr. Carlos Silva',
    category: 'Odontologia Estética',
    content: '<p>Um sorriso branco e radiante é o desejo de muitas pessoas, e o <strong>clareamento dental</strong> se tornou um dos procedimentos estéticos mais populares na odontologia. No entanto, junto com a popularidade, surgem muitas dúvidas e informações equivocadas. Vamos desmistificar alguns dos mitos mais comuns e apresentar as verdades sobre o clareamento dental.</p>' +
      '<h2>Mitos Comuns:</h2>' +
      '<ul>' +
      '<li><strong>Mito: Clareamento dental enfraquece ou estraga os dentes?</strong><br/> Quando realizado corretamente sob a supervisão de um dentista, o clareamento é seguro. Os agentes clareadores (geralmente peróxido de hidrogênio ou carbamida) agem nos pigmentos que causam o escurecimento, sem danificar a estrutura do esmalte dental. O procedimento deve ser precedido por uma avaliação profissional para garantir que não há cáries, infiltrações ou problemas gengivais que possam ser agravados.</li>' +
      '<li><strong>Mito: Qualquer pessoa pode fazer clareamento?</strong><br/> Nem todos são candidatos ideais. Gestantes, lactantes, menores de 15 anos (geralmente), pessoas com hipersensibilidade severa, cáries extensas, doenças gengivais ativas ou restaurações muito amplas nos dentes anteriores podem ter contraindicações. Uma avaliação profissional é indispensável.</li>' +
      '<li><strong>Mito: Clareamento dental dói muito?</strong><br/> A sensibilidade dentária é um efeito colateral possível e comum durante ou após o clareamento, mas geralmente é temporária e controlável. O dentista pode indicar produtos dessensibilizantes e ajustar a concentração do gel clareador para minimizar o desconforto. Dor intensa não é normal e deve ser comunicada ao profissional.</li>' +
      '<li><strong>Mito: Kits de clareamento caseiros comprados online ou em farmácias são tão eficazes quanto o tratamento no dentista?</strong><br/> Produtos de venda livre geralmente têm concentrações muito baixas do agente clareador, resultando em efeitos limitados ou nulos. Além disso, o uso sem orientação profissional e moldeiras não personalizadas pode levar à aplicação irregular do produto, irritação gengival e resultados insatisfatórios. O clareamento supervisionado pelo dentista é mais seguro e eficaz.</li>' +
      '<li><strong>Mito: O resultado do clareamento é permanente?</strong><br/> A durabilidade do clareamento varia de pessoa para pessoa, dependendo dos hábitos alimentares (consumo de café, vinho, refrigerantes, etc.), higiene bucal e tabagismo. Geralmente, os resultados duram de 1 a 3 anos, podendo ser necessários retoques periódicos para manter a cor desejada.</li>' +
      '<li><strong>Mito: Clareamento clareia restaurações e coroas?</strong><br/> O gel clareador age apenas no esmalte e dentina naturais. Restaurações em resina, facetas e coroas de porcelana não mudam de cor com o clareamento. Se você possui restaurações nos dentes anteriores, pode ser necessário substituí-las após o clareamento para igualar a cor.</li>' +
      '</ul>' +
      '<h2>Tipos de Clareamento Supervisionado:</h2>' +
      '<ul>' +
      '<li><strong>Clareamento Caseiro Supervisionado:</strong> O paciente utiliza moldeiras personalizadas preenchidas com gel clareador (concentração mais baixa) em casa, por algumas horas diárias ou durante a noite, pelo período determinado pelo dentista (geralmente 1 a 3 semanas).</li>' +
      '<li><strong>Clareamento de Consultório:</strong> Realizado inteiramente no consultório, utiliza um gel clareador de concentração mais alta, frequentemente ativado por luz (laser ou LED), proporcionando resultados mais rápidos (geralmente 1 a 3 sessões).</li>' +
      '<li><strong>Técnica Mista:</strong> Combina sessões no consultório com o uso do clareamento caseiro para otimizar e prolongar os resultados.</li>' +
      '</ul>' +
      '<p>Se você deseja clarear seus dentes, o primeiro passo é consultar seu dentista. Ele poderá avaliar sua saúde bucal, discutir suas expectativas, indicar o método mais adequado e garantir que o procedimento seja realizado com segurança e eficácia.</p>',
    relatedPosts: [4, 6, 8],
    seo: {
      title: 'Clareamento Dental: Desvendando Mitos e Verdades',
      description: 'Tudo sobre clareamento dental: segurança, eficácia, sensibilidade, tipos de tratamento e o que esperar do procedimento.',
      keywords: 'clareamento dental, dentes brancos, estética dental, mitos odontológicos, clareamento caseiro, clareamento a laser, sensibilidade dental',
      image: "https://plus.unsplash.com/premium_photo-1702598988008-b60cf858cb78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: 'Dr. Carlos Silva'
    }
  },
  'bruxismo-como-identificar-e-tratar': {
    title: "Bruxismo: como identificar e tratar o ranger de dentes",
    image: "https://plus.unsplash.com/premium_photo-1673773401710-d23ef113e06f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: 'bruxismo-como-identificar-e-tratar',
    date: '06 de Outubro de 2023',
    author: 'Dra. Ana Oliveira',
    category: 'Disfunções Temporomandibulares',
    content: '<p>Você acorda com dor de cabeça ou nos músculos da mandíbula? Seus dentes parecem desgastados ou lascados? Você pode estar sofrendo de <strong>bruxismo</strong>, um hábito involuntário de ranger ou apertar os dentes, que ocorre principalmente durante o sono (bruxismo noturno), mas também pode acontecer durante o dia (bruxismo em vigília).</p>' +
      '<h2>Sinais e Sintomas Comuns do Bruxismo:</h2>' +
      '<ul>' +
      '<li>Ranger ou apertar os dentes, que pode ser alto o suficiente para acordar o parceiro(a).</li>' +
      '<li>Dentes achatados, fraturados, lascados ou soltos.</li>' +
      '<li>Desgaste do esmalte dental, expondo camadas mais profundas do dente.</li>' +
      '<li>Aumento da sensibilidade dentária.</li>' +
      '<li>Dor ou tensão nos músculos da mandíbula.</li>' +
      '<li>Dor de cabeça tensional, especialmente pela manhã.</li>' +
      '<li>Dor que se irradia para o ouvido (sem ser problema de ouvido).</li>' +
      '<li>Marcas de dentes na língua ou na parte interna da bochecha.</li>' +
      '<li>Dificuldade ou dor ao abrir e fechar a boca ou mastigar.</li>' +
      '<li>Distúrbios do sono.</li>' +
      '</ul>' +
      '<h2>Possíveis Causas do Bruxismo:</h2>' +
      '<p>As causas exatas do bruxismo ainda não são totalmente compreendidas, mas acredita-se que uma combinação de fatores físicos, psicológicos e genéticos esteja envolvida. Alguns fatores associados incluem:</p>' +
      '<ul>' +
      '<li><strong>Fatores Psicológicos:</strong> Estresse, ansiedade, raiva, frustração ou tensão são fortemente ligados ao bruxismo.</li>' +
      '<li><strong>Distúrbios do Sono:</strong> O bruxismo noturno é frequentemente associado a outros distúrbios do sono, como apneia do sono e ronco.</li>' +
      '<li><strong>Problemas de Oclusão (Mordida):</strong> Dentes desalinhados ou uma mordida incorreta podem contribuir.</li>' +
      '<li><strong>Estilo de Vida:</strong> Consumo de álcool, cafeína, tabaco e uso de certas drogas podem aumentar o risco.</li>' +
      '<li><strong>Medicamentos:</strong> Alguns medicamentos, como certos antidepressivos, podem ter o bruxismo como efeito colateral.</li>' +
      '<li><strong>Fatores Genéticos:</strong> O bruxismo pode ter um componente hereditário.</li>' +
      '<li><strong>Outras Condições Médicas:</strong> Doença de Parkinson, demência, refluxo gastroesofágico, epilepsia, TDAH.</li>' +
      '</ul>' +
      '<h2>Diagnóstico e Tratamento:</h2>' +
      '<p>O diagnóstico geralmente é feito pelo dentista com base nos sinais clínicos (desgaste dental, sensibilidade), sintomas relatados pelo paciente e, às vezes, relatos de parceiros sobre o ranger noturno. Em alguns casos, pode ser indicada uma polissonografia (estudo do sono) para confirmar o bruxismo noturno e descartar outros distúrbios.</p>' +
      '<p>O tratamento visa aliviar os sintomas, proteger os dentes e, se possível, abordar as causas subjacentes:</p>' +
      '<ul>' +
      '<li><strong>Placas de Mordida (ou Placas Oclusais):</strong> Dispositivos feitos sob medida, geralmente usados durante a noite, que se encaixam sobre os dentes superiores ou inferiores, criando uma barreira física e ajudando a relaxar os músculos da mandíbula.</li>' +
      '<li><strong>Gerenciamento do Estresse e Ansiedade:</strong> Técnicas de relaxamento, meditação, terapia cognitivo-comportamental ou aconselhamento podem ser muito úteis, especialmente para o bruxismo em vigília.</li>' +
      '<li><strong>Ajustes Oclusais ou Ortodontia:</strong> Se o bruxismo estiver relacionado a problemas de mordida, o dentista pode recomendar ajustes ou tratamento ortodôntico.</li>' +
      '<li><strong>Medicamentos:</strong> Em casos severos, relaxantes musculares ou outros medicamentos podem ser prescritos por curtos períodos. A aplicação de toxina botulínica (Botox) nos músculos da mastigação também pode ser uma opção em casos específicos.</li>' +
      '<li><strong>Mudanças no Estilo de Vida:</strong> Reduzir o consumo de cafeína e álcool, evitar fumar e praticar uma boa higiene do sono.</li>' +
      '<li><strong>Fisioterapia:</strong> Exercícios para alongar e fortalecer os músculos da mandíbula podem ajudar a aliviar a dor.</li>' +
      '</ul>' +
      '<p>Se você suspeita que tem bruxismo, é fundamental procurar um dentista. Ignorar o problema pode levar a danos dentários permanentes, dores crônicas e problemas na articulação temporomandibular (ATM). O tratamento adequado pode proteger seus dentes e melhorar significativamente sua qualidade de vida.</p>',
    relatedPosts: [1, 5, 7],
    seo: {
      title: 'Bruxismo: Identificação, Causas e Tratamentos Eficazes',
      description: 'Entenda o que é bruxismo (ranger de dentes), seus sintomas, causas comuns e as opções de tratamento disponíveis para proteger seus dentes e aliviar a dor.',
      keywords: 'bruxismo, ranger dentes, apertar dentes, DTM, dor orofacial, placa de bruxismo, desgaste dental, dor de cabeça tensional',
      image: "https://plus.unsplash.com/premium_photo-1673773401710-d23ef113e06f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: 'Dra. Ana Oliveira'
    }
  },
  'ansiedade-odontologica-como-superar': {
    title: "Ansiedade odontológica: como superar o medo de ir ao dentista",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: 'ansiedade-odontologica-como-superar',
    date: '07 de Outubro de 2023',
    author: 'Dr. Roberto Almeida',
    category: 'Psicologia e Odontologia',
    content: '<p>O coração acelera, as mãos suam e a simples ideia de sentar na cadeira do dentista causa pânico? Você não está sozinho. A <strong>ansiedade odontológica</strong>, ou o medo de ir ao dentista, é um problema comum que afeta pessoas de todas idades, impedindo-as de buscar os cuidados necessários para manter a saúde bucal.</p>' +
      '<p>Esse medo pode variar de uma leve apreensão a uma fobia severa (odontofobia), levando ao adiamento ou cancelamento de consultas e, consequentemente, ao agravamento de problemas bucais que poderiam ser tratados de forma simples no início.</p>' +
      '<h2>Entendendo as Causas do Medo:</h2>' +
      '<p>Diversos fatores podem contribuir para a ansiedade odontológica:</p>' +
      '<ul>' +
      '<li><strong>Experiências Traumáticas Anteriores:</strong> Tratamentos dolorosos ou experiências negativas na infância ou vida adulta são causas frequentes.</li>' +
      '<li><strong>Medo da Dor:</strong> A associação do tratamento dentário com dor, mesmo que baseada em experiências passadas ou relatos de terceiros.</li>' +
      '<li><strong>Sensação de Perda de Controle:</strong> Estar deitado em uma cadeira, com instrumentos na boca, pode gerar sentimentos de vulnerabilidade e falta de controle.</li>' +
      '<li><strong>Vergonha ou Constrangimento:</strong> Preocupação com o estado da saúde bucal ou com o hálito.</li>' +
      '<li><strong>Medo de Agulhas ou Instrumentos:</strong> Fobia específica de agulhas (anestesia) ou do barulho dos equipamentos (motorzinho).</li>' +
      '<li><strong>Influência Familiar ou Social:</strong> Ouvir relatos negativos de familiares ou amigos.</li>' +
      '</ul>' +
      '<h2>Estratégias para Superar a Ansiedade Odontológica:</h2>' +
      '<p>Felizmente, existem muitas maneiras de lidar e superar o medo de dentista:</p>' +
      '<ul>' +
      '<li><strong>Comunicação Aberta com o Dentista:</strong> O passo mais importante é conversar abertamente sobre seus medos e ansiedades com o profissional. Um dentista compreensivo pode adaptar o tratamento, explicar cada passo, combinar sinais de parada caso você precise de uma pausa e oferecer opções para aumentar seu conforto.</li>' +
      '<li><strong>Escolha um Dentista Empático:</strong> Procure por profissionais conhecidos por sua paciência e habilidade em lidar com pacientes ansiosos. Peça recomendações ou procure por clínicas que destacam o atendimento humanizado.</li>' +
      '<li><strong>Agendamento Inteligente:</strong> Marque a consulta em um horário de menor movimento ou em um dia que você esteja mais tranquilo, sem outros compromissos estressantes.</li>' +
      '<li><strong>Leve um Acompanhante:</strong> Ter um amigo ou familiar de confiança na sala de espera pode trazer segurança.</li>' +
      '<li><strong>Técnicas de Relaxamento:</strong> Pratique respiração profunda antes e durante a consulta. Inspire lentamente pelo nariz, segure por alguns segundos e expire lentamente pela boca.</li>' +
      '<li><strong>Distração:</strong> Muitas clínicas oferecem fones de ouvido com música, óculos de realidade virtual ou TVs no teto. Você também pode levar seus próprios fones e ouvir sua música ou podcast favorito.</li>' +
      '<li><strong>Comece com Procedimentos Simples:</strong> Se possível, inicie com consultas mais curtas e procedimentos menos invasivos, como uma limpeza ou exame, para ganhar confiança gradualmente.</li>' +
      '<li><strong>Sedação Consciente (quando indicada):</strong> Para casos de ansiedade moderada a severa, o dentista pode indicar opções de sedação consciente, como o óxido nitroso (gás do riso) ou medicamentos ansiolíticos via oral, que ajudam a relaxar profundamente sem fazer o paciente dormir.</li>' +
      '<li><strong>Terapia Psicológica:</strong> Em casos de fobia severa, a ajuda de um psicólogo ou terapeuta pode ser muito eficaz para identificar as raízes do medo e desenvolver estratégias de enfrentamento.</li>' +
      '</ul>' +
      '<p>Não deixe que o medo comprometa sua saúde bucal e seu bem-estar. Lembre-se que a odontologia evoluiu muito, e os tratamentos modernos são muito mais confortáveis e menos invasivos. Dê o primeiro passo, converse com um dentista e descubra como é possível cuidar do seu sorriso sem ansiedade.</p>',
    relatedPosts: [4, 6, 8],
    seo: {
      title: 'Ansiedade Odontológica: Como Superar o Medo de Dentista',
      description: 'Entenda as causas do medo de dentista e conheça estratégias eficazes, técnicas de relaxamento e opções de sedação para cuidar da sua saúde bucal sem estresse.',
      keywords: 'medo de dentista, ansiedade odontológica, fobia dental, odontofobia, dentista para pacientes com medo, sedação consciente, óxido nitroso',
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: 'Dr. Roberto Almeida'
    }
  },
  'ortodontia-invisivel-vantagens': {
    title: "Ortodontia invisível: vantagens dos alinhadores transparentes",
    image: "https://images.unsplash.com/photo-1694675236489-d73651370688?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: 'ortodontia-invisivel-vantagens',
    date: '08 de Outubro de 2023',
    author: 'Dra. Mariana Santos',
    category: 'Ortodontia',
    content: '<p>Corrigir o alinhamento dos dentes e obter um sorriso perfeito é um objetivo comum, mas a ideia de usar aparelhos metálicos tradicionais pode ser um empecilho para muitos adultos e adolescentes. Felizmente, a <strong>ortodontia invisível</strong>, representada principalmente pelos <strong>alinhadores transparentes</strong> (como Invisalign® e outras marcas), surgiu como uma alternativa revolucionária, oferecendo discrição, conforto e eficácia.</p>' +
      '<h2>O que são Alinhadores Transparentes?</h2>' +
      '<p>São placas removíveis, feitas sob medida em material termoplástico transparente, que se encaixam perfeitamente sobre os dentes. Cada conjunto de alinhadores é usado por um período determinado (geralmente 1 a 2 semanas) e aplica forças suaves e controladas para mover gradualmente os dentes para a posição desejada, conforme planejado digitalmente pelo ortodontista.</p>' +
      '<h2>Principais Vantagens da Ortodontia Invisível:</h2>' +
      '<ul>' +
      '<li><strong>Estética e Discrição:</strong> Esta é a vantagem mais óbvia. Os alinhadores são praticamente invisíveis, permitindo que você corrija seu sorriso sem que a maioria das pessoas perceba que você está usando aparelho. Ideal para adultos e adolescentes que se preocupam com a aparência durante o tratamento.</li>' +
      '<li><strong>Conforto Superior:</strong> Feitos de plástico liso e sem os bráquetes e fios metálicos dos aparelhos fixos, os alinhadores geralmente causam menos irritação nas bochechas e gengivas. A força aplicada é gradual, o que também pode resultar em menos desconforto após as trocas.</li>' +
      '<li><strong>Removibilidade e Higiene Facilitada:</strong> Os alinhadores devem ser removidos para comer, beber (exceto água) e para higienização. Isso significa que não há restrições alimentares (adeus, medo de quebrar bráquetes!) e a escovação e o uso do fio dental podem ser feitos normalmente, facilitando a manutenção de uma excelente saúde bucal durante o tratamento.</li>' +
      '<li><strong>Previsibilidade do Tratamento:</strong> O tratamento é planejado digitalmente em software 3D. Isso permite que o ortodontista e o paciente visualizem o progresso e o resultado final esperado antes mesmo de começar a usar os alinhadores.</li>' +
      '<li><strong>Menos Visitas de Emergência:</strong> Como não há fios ou bráquetes que possam quebrar ou se soltar, as visitas de emergência ao consultório são menos comuns em comparação com os aparelhos fixos. As consultas de acompanhamento costumam ser mais espaçadas.</li>' +
      '<li><strong>Versatilidade:</strong> Os alinhadores transparentes podem tratar uma ampla gama de problemas ortodônticos, desde casos simples de alinhamento e espaçamento até problemas mais complexos de mordida, embora casos muito severos ainda possam exigir abordagens tradicionais ou combinadas.</li>' +
      '</ul>' +
      '<h2>Como Funciona o Tratamento?</h2>' +
      '<ol>' +
      '<li><strong>Consulta Inicial e Planejamento:</strong> O ortodontista avalia sua saúde bucal, realiza exames (fotos, radiografias) e faz um escaneamento intraoral 3D ou moldagem tradicional. Com base nisso, cria um plano de tratamento digital personalizado (ClinCheck® no caso do Invisalign).</li>' +
      '<li><strong>Fabricação dos Alinhadores:</strong> Uma série de alinhadores exclusivos é fabricada com base no planejamento digital.</li>' +
      '<li><strong>Uso dos Alinhadores:</strong> Você usará cada conjunto de alinhadores por cerca de 1 a 2 semanas, removendo-os apenas para comer, beber e higienizar. É crucial usar os alinhadores pelo tempo recomendado (geralmente 20 a 22 horas por dia) para que o tratamento progrida conforme o planejado.</li>' +
      '<li><strong>Consultas de Acompanhamento:</strong> Visitas periódicas ao ortodontista (a cada 6-8 semanas, em média) para monitorar o progresso e receber os próximos conjuntos de alinhadores.</li>' +
      '<li><strong>Contenção:</strong> Após a conclusão da fase ativa do tratamento, é necessário usar contenções (fixas ou removíveis) para manter os dentes na nova posição.</li>' +
      '</ol>' +
      '<p>Se você busca uma forma discreta, confortável e eficaz de alinhar seus dentes, converse com um ortodontista sobre a possibilidade de usar alinhadores transparentes. É uma tecnologia que combina estética e funcionalidade, transformando sorrisos e a autoestima de milhões de pessoas ao redor do mundo.</p>',
    relatedPosts: [5, 7, 9],
    seo: {
      title: 'Ortodontia Invisível: Vantagens dos Alinhadores Transparentes',
      description: 'Descubra os benefícios dos alinhadores transparentes (como Invisalign) em comparação com aparelhos fixos: estética, conforto, higiene e previsibilidade.',
      keywords: 'ortodontia invisível, alinhadores transparentes, aparelho invisível, Invisalign, aparelho estético, tratamento ortodôntico, correção de sorriso',
      image: "https://images.unsplash.com/photo-1694675236489-d73651370688?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: 'Dra. Mariana Santos'
    }
  },
  'implantes-dentarios-tudo-o-que-voce-precisa-saber': {
    title: "Implantes dentários: tudo o que você precisa saber antes de fazer",
    image: "https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: 'implantes-dentarios-tudo-o-que-voce-precisa-saber',
    date: '09 de Outubro de 2023',
    author: 'Dr. Carlos Silva',
    category: 'Implantodontia',
    content: '<p>A perda de um ou mais dentes pode impactar significativamente a estética do sorriso, a função mastigatória e até a autoestima. Felizmente, a odontologia moderna oferece uma solução altamente eficaz e duradoura: os <strong>implantes dentários</strong>. Considerados o padrão ouro para a reabilitação oral, os implantes oferecem uma alternativa superior às próteses removíveis (dentaduras) ou pontes fixas tradicionais.</p>' +
      '<h2>O que são Implantes Dentários?</h2>' +
      '<p>Implantes dentários são pequenas estruturas de titânio (um material biocompatível, ou seja, aceito pelo corpo humano) que funcionam como raízes artificiais. Eles são cirurgicamente inseridos no osso maxilar ou mandibular, no local onde o dente natural foi perdido. Após um período de cicatrização, chamado <strong>osseointegração</strong> (onde o osso se funde ao redor do implante), uma prótese dentária (coroa, ponte ou dentadura) é conectada ao implante, restaurando a função e a aparência do dente perdido.</p>' +
      '<h2>Principais Benefícios dos Implantes Dentários:</h2>' +
      '<ul>' +
      '<li><strong>Aparência Natural:</strong> As próteses sobre implantes são projetadas para se assemelharem aos dentes naturais em cor, forma e tamanho, proporcionando um resultado estético excelente.</li>' +
      '<li><strong>Conforto e Estabilidade:</strong> Ao se integrarem ao osso, os implantes oferecem uma base sólida e estável para as próteses, eliminando o desconforto e a instabilidade das dentaduras removíveis. Você pode comer, falar e sorrir com confiança.</li>' +
      '<li><strong>Melhora na Mastigação:</strong> Permitem mastigar os alimentos de forma eficiente, similar aos dentes naturais, melhorando a digestão e a nutrição.</li>' +
      '<li><strong>Preservação Óssea:</strong> A perda dentária leva à reabsorção (perda) do osso na região. Os implantes estimulam o osso maxilar, ajudando a preservar sua estrutura e o contorno facial.</li>' +
      '<li><strong>Preservação dos Dentes Adjacentes:</strong> Diferente das pontes fixas tradicionais, os implantes não exigem o desgaste dos dentes vizinhos saudáveis para servirem de suporte.</li>' +
      '<li><strong>Durabilidade:</strong> Com os cuidados adequados de higiene e visitas regulares ao dentista, os implantes dentários podem durar muitos anos, até mesmo a vida toda.</li>' +
      '<li><strong>Melhora na Fala:</strong> Próteses mal adaptadas podem dificultar a pronúncia de certas palavras. Implantes eliminam esse problema.</li>' +
      '<li><strong>Aumento da Autoestima:</strong> Recuperar um sorriso completo e funcional tem um impacto positivo imenso na confiança e qualidade de vida.</li>' +
      '</ul>' +
      '<h2>O Processo de Instalação dos Implantes:</h2>' +
      '<p>O tratamento com implantes geralmente envolve algumas etapas:</p>' +
      '<ol>' +
      '<li><strong>Avaliação e Planejamento:</strong> Consulta inicial com o dentista (geralmente um implantodontista ou cirurgião bucomaxilofacial), exames clínicos e de imagem (radiografias, tomografia computadorizada) para avaliar a quantidade e qualidade óssea, a saúde geral do paciente e planejar o procedimento.</li>' +
      '<li><strong>Cirurgia de Instalação do Implante:</strong> Procedimento cirúrgico, geralmente realizado sob anestesia local, onde o implante de titânio é inserido no osso. Em alguns casos, pode ser necessário um enxerto ósseo prévio se a quantidade de osso for insuficiente.</li>' +
      '<li><strong>Osseointegração:</strong> Período de cicatrização que dura de alguns meses (geralmente 3 a 6 meses), durante o qual o osso se integra firmemente ao implante. Uma prótese provisória pode ser usada durante esse período.</li>' +
      '<li><strong>Instalação do Conector (Pilar):</strong> Após a osseointegração, um pequeno conector (pilar ou abutment) é fixado ao implante. Ele servirá de base para a futura prótese.</li>' +
      '<li><strong>Confecção e Instalação da Prótese Definitiva:</strong> Moldagens são feitas para confeccionar a coroa, ponte ou dentadura personalizada, que será então fixada sobre o pilar.</li>' +
      '</ol>' +
      '<h2>Quem Pode Receber Implantes?</h2>' +
      '<p>A maioria das pessoas com boa saúde geral e bucal, com osso suficiente para suportar o implante, são candidatas. Condições como diabetes descontrolada, tabagismo excessivo ou certas doenças podem exigir avaliação e cuidados adicionais. A idade geralmente não é um fator limitante, desde que a saúde permita.</p>' +
      '<h2>Cuidados Pós-Implante:</h2>' +
      '<p>Os cuidados com os implantes são semelhantes aos dos dentes naturais: boa higiene oral (escovação e fio dental, incluindo áreas ao redor do implante) e visitas regulares ao dentista para manutenção e controle.</p>' +
      '<p>Se você perdeu um ou mais dentes, converse com seu dentista sobre a possibilidade dos implantes dentários. É um investimento na sua saúde, função e estética que pode transformar seu sorriso e sua vida.</p>',
    relatedPosts: [1, 6, 8],
    seo: {
      title: 'Implantes Dentários: Guia Completo para Pacientes',
      description: 'Tudo o que você precisa saber sobre implantes dentários: o que são, benefícios, procedimento, indicações, cuidados e como eles podem restaurar seu sorriso.',
      keywords: 'implantes dentários, implantodontia, perda de dentes, reabilitação oral, prótese sobre implante, osseointegração, titânio, cirurgia de implante',
      image: "https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: 'Dr. Carlos Silva'
    }
  }
};

// Mock de todos os posts para a seção de relacionados (simplificado)
const allPostsPreviews: RelatedPostPreview[] = Object.values(postsData).map(p => ({
  id: Object.keys(postsData).indexOf(p.slug) + 1, // Gerar um ID sequencial para o mock
  title: p.title,
  image: p.image,
  slug: p.slug
}));

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // Correção: Usar o mapa postsData para buscar o post pelo slug
  const postData: PostType | undefined = slug ? postsData[slug] : undefined;

  // Se o post não for encontrado, exibe uma mensagem
  if (!postData) {
    return (
      <BlogPostContainer>
        <ContentContainer>
          <BackToButton to="/blog">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para o Blog
          </BackToButton>
          <h1>Post não encontrado</h1>
          <p>O post que você está procurando não existe ou foi movido.</p>
        </ContentContainer>
      </BlogPostContainer>
    );
  }

  // Filtrar posts relacionados com base nos IDs definidos em postData.relatedPosts
  // Usando o mock allPostsPreviews que contém IDs
  const relatedPostsData = postData.relatedPosts && postData.relatedPosts.length > 0
    ? allPostsPreviews.filter((post: RelatedPostPreview) => postData.relatedPosts.includes(post.id))
    : [];

  // URLs de compartilhamento (exemplo)
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(postData.title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(postData.title)}&summary=${encodeURIComponent(postData.seo.description)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(postData.title + ' ' + currentUrl)}`
  };

  return (
    <>
      <SEO
        title={postData.seo.title}
        description={postData.seo.description}
        keywords={postData.seo.keywords}
        image={postData.seo.image}
        author={postData.seo.author}
        canonical={`https://unovitta.com.br/blog/${slug}`}
        type="article"

      />
      <BlogPostContainer>
        <ContentContainer>
          <BackToButton to="/blog">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para o Blog
          </BackToButton>

          <BlogHeader>
            {/* Correção: Usar postData para exibir o título */}
            <BlogTitle>{postData.title}</BlogTitle>
            <BlogMeta>
              <BlogDate>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {/* Correção: Usar postData para exibir a data */}
                {postData.date}
              </BlogDate>
              <BlogAuthor>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {/* Correção: Usar postData para exibir o autor */}
                {postData.author}
              </BlogAuthor>
              <BlogCategory>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 10V5a2 2 0 012-2h2" />
                </svg>
                {/* Correção: Usar postData para exibir a categoria */}
                {postData.category}
              </BlogCategory>
            </BlogMeta>
          </BlogHeader>

          {postData.image && (
            <FeaturedImage>
              <img src={postData.image} alt={postData.title} />
            </FeaturedImage>
          )}

          {/* Correção: Usar postData e dangerouslySetInnerHTML para renderizar o conteúdo HTML */}
          <BlogContent dangerouslySetInnerHTML={{ __html: postData.content }} />

          <ShareSection>
            <ShareTitle>Compartilhe este post:</ShareTitle>
            <ShareButtons>
              <ShareButton href={shareUrls.facebook} target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no Facebook">
                {/* Ícone do Facebook (exemplo) */}
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.67 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>
              </ShareButton>
              <ShareButton href={shareUrls.twitter} target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no Twitter">
                {/* Ícone do Twitter (exemplo) */}
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.9-.53 1.59-1.37 1.92-2.38-.84.5-1.78.86-2.79 1.07C18.38 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.54v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.01-.06C3.18 20.57 5.36 21 7.68 21c7.34 0 11.7-6.08 11.7-11.7 0-.18 0-.35-.01-.53.78-.57 1.45-1.29 1.99-2.09z" /></svg>
              </ShareButton>
              <ShareButton href={shareUrls.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no LinkedIn">
                {/* Ícone do LinkedIn (exemplo) */}
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-3.06v8.37h3.06v-4.93c0-.81.61-1.41 1.41-1.41 .82 0 1.41.6 1.41 1.41v4.93h3.06M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
              </ShareButton>
              <ShareButton href={shareUrls.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no WhatsApp">
                {/* Ícone do WhatsApp (exemplo) */}
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.07 21.94L7.27 20.56C8.72 21.33 10.35 21.78 12.04 21.78C17.5 21.78 21.95 17.33 21.95 11.87C21.95 6.41 17.5 2 12.04 2M12.04 20.13C10.56 20.13 9.12 19.74 7.89 19L7.5 18.78L4.41 19.65L5.31 16.64L5.07 16.26C4.24 14.96 3.79 13.47 3.79 11.91C3.79 7.35 7.49 3.65 12.04 3.65C16.59 3.65 20.29 7.35 20.29 11.91C20.29 16.47 16.59 20.13 12.04 20.13M17.41 14.26C17.16 14.14 16.05 13.59 15.82 13.51C15.59 13.42 15.42 13.38 15.26 13.61C15.1 13.84 14.5 14.44 14.33 14.6C14.16 14.76 14 14.78 13.75 14.66C13.5 14.54 12.6 14.24 11.53 13.29C10.69 12.54 10.13 11.64 9.96 11.31C9.79 10.98 9.89 10.89 10.02 10.76C10.13 10.66 10.27 10.47 10.4 10.33C10.53 10.19 10.57 10.08 10.65 9.92C10.73 9.76 10.69 9.61 10.63 9.5C10.57 9.39 10.06 8.18 9.87 7.73C9.68 7.28 9.49 7.34 9.36 7.34C9.23 7.34 9.07 7.34 8.9 7.34C8.74 7.34 8.49 7.39 8.29 7.73C8.09 8.06 7.49 8.65 7.49 9.82C7.49 10.99 8.33 12.11 8.49 12.3C8.65 12.49 10.06 14.83 12.49 15.76C13.01 15.97 13.4 16.09 13.73 16.18C14.26 16.32 14.78 16.27 15.21 16.18C15.68 16.08 16.79 15.48 17.02 14.88C17.25 14.28 17.25 13.79 17.16 13.67C17.08 13.55 16.92 13.49 16.67 13.37C16.42 13.25 17.66 14.38 17.41 14.26Z" /></svg>
              </ShareButton>
            </ShareButtons>
          </ShareSection>

          {relatedPostsData.length > 0 && (
            <RelatedPosts>
              <RelatedTitle>Posts Relacionados</RelatedTitle>
              <RelatedGrid>
                {relatedPostsData.map(relatedPost => (
                  <RelatedCard key={relatedPost.id}>
                    <RelatedImageContainer>
                      <RelatedImage src={relatedPost.image} alt={relatedPost.title} />
                    </RelatedImageContainer>
                    <RelatedContent>
                      <RelatedPostTitle>{relatedPost.title}</RelatedPostTitle>
                      <RelatedPostLink to={`/blog/${relatedPost.slug}`}>
                        Ler mais
                      </RelatedPostLink>
                    </RelatedContent>
                  </RelatedCard>
                ))}
              </RelatedGrid>
            </RelatedPosts>
          )}
        </ContentContainer>
      </BlogPostContainer>
    </>
  );
};

export default BlogPost;

