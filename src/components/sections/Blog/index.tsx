import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BlogContainer = styled.section`
  padding: 6.5rem 0;
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
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  margin-bottom: var(--spacing-4);
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Divider = styled.div`
  width: 2.75rem;
  height: 0.18rem;
  background-color: var(--color-secondary);
  margin: 0 auto var(--spacing-6) auto;
`;

const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: var(--color-gray-600);
  max-width: 48rem;
  margin: 0 auto;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BlogCard = styled.article`
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-default);
  
  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: var(--shadow-md);
  }
`;

const BlogImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const BlogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${BlogCard}:hover & {
    transform: scale(1.05);
  }
`;

const BlogContent = styled.div`
  padding: var(--spacing-6);
`;

const BlogMeta = styled.div`
  display: flex;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-3);
  font-size: 0.875rem;
  color: var(--color-gray-500);
`;
const BlogCategory = styled.span``;

const BlogTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: var(--spacing-3);
  line-height: 1.4;
`;

const BlogExcerpt = styled.p`
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-4);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReadMoreLink = styled(Link)`
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

const ViewAllButton = styled(Link)`
  display: block;
  text-align: center;
  margin-top: var(--spacing-12);
  padding: var(--spacing-3) var(--spacing-6);
  background-color: transparent;
  color: var(--color-primary);
  font-weight: 500;
  border: 1px solid var(--color-primary);
  border-radius: 0.75rem;
  transition: var(--transition-default);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  
  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`;

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Como manter uma saúde bucal perfeita durante todo o ano",
      excerpt: "Descubra dicas práticas e eficazes para manter seus dentes e gengivas saudáveis em todas as estações, com hábitos simples que fazem toda a diferença.",
      category: "Odontologia Preventiva",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "saude-bucal-perfeita"
    },
    {
      id: 2,
      title: "Os benefícios da odontologia digital para pacientes e dentistas",
      excerpt: "A tecnologia digital revolucionou a odontologia. Conheça as vantagens dos tratamentos digitais tanto para pacientes quanto para profissionais da área.",
      category: "Tecnologia Odontológica",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "os-beneficios-da-odontologia-digital"
    },
    {
      id: 3,
      title: "Exames odontológicos preventivos: quais você deve fazer regularmente",
      excerpt: "Saiba quais são os exames odontológicos essenciais para cada faixa etária e como eles podem ajudar a detectar problemas bucais precocemente.",
      category: "Prevenção",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "exames-odontologicos-preventivos"
    },
    {
      id: 4,
      title: "Alimentação e saúde bucal: o que comer para ter dentes fortes",
      excerpt: "Aprenda como sua alimentação influencia diretamente na saúde dos seus dentes e gengivas, com dicas de alimentos que fortalecem o esmalte dental.",
      category: "Nutrição e Odontologia",
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "alimentacao-e-saude-bucal"
    },
    {
      id: 5,
      title: "Clareamento dental: mitos e verdades sobre o procedimento",
      excerpt: "Descubra o que é verdade e o que é mito sobre o clareamento dental, e como realizar o procedimento de forma segura para obter resultados duradouros.",
      category: "Odontologia Estética",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "clareamento-dental"
    },
    {
      id: 6,
      title: "Bruxismo: como identificar e tratar o ranger de dentes",
      excerpt: "Confira dicas para identificar sinais de bruxismo, entenda suas causas e conheça os tratamentos disponíveis para proteger seus dentes do desgaste.",
      category: "Disfunções Temporomandibulares",
      image: "https://plus.unsplash.com/premium_photo-1673773401710-d23ef113e06f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "bruxismo"
    },
  ];

  return (
    <BlogContainer id="blog">
      <ContentContainer>
        <SectionHeader>
          <SectionTitle>Artigos e Dicas de Saúde</SectionTitle>
          <Divider />
          <SectionDescription>
            Compartilhamos conhecimento e informações relevantes sobre saúde bucal.. Explore nossos artigos para se manter informado e cuidar melhor da sua saúde.
          </SectionDescription>
        </SectionHeader>

        <BlogGrid>
          {blogPosts.map((post) => (
            <BlogCard key={post.id}>
              <BlogImageContainer>
                <BlogImage
                  src={post.image}
                  alt={post.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = String(post.image);
                  }}
                />
              </BlogImageContainer>
              <BlogContent>
                <BlogMeta>
                  <BlogCategory>{post.category}</BlogCategory>
                </BlogMeta>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                <ReadMoreLink to={`/blog/${post.slug}`}>
                  Ler mais
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </ReadMoreLink>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>

        <ViewAllButton to="/blog">
          Ver todos os artigos
        </ViewAllButton>
      </ContentContainer>
    </BlogContainer>
  );
};

export default BlogSection;
