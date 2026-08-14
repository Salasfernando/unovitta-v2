import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importar Link
import SEO from '../../components/SEO';

const BlogContainer = styled.div`
  padding: 6.5rem 0;
  background: var(--color-gray-100);
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
  background-color: var(--color-secondary);
  margin: 0 auto var(--spacing-6) auto;
`;

const PageDescription = styled.p`
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
  background-color: var(--color-white);
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
  flex-wrap: wrap; // Adicionado para melhor responsividade
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-3);
  font-size: 0.875rem;
  color: var(--color-gray-500);
`;

const BlogCategory = styled.span``;

const BlogTitle = styled.h2`
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

// Correção: Usar Link do react-router-dom para navegação interna
const ReadMoreLink = styled(Link)` 
  display: inline-flex;
  align-items: center;
  color: var(--color-primary);
  font-weight: 500;
  cursor: pointer;
  text-decoration: none; // Remover sublinhado padrão do Link
  
  &:hover {
    text-decoration: underline;
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-left: var(--spacing-1);
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-12);
  gap: var(--spacing-2);
`;

const PaginationButton = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.7rem;
  background-color: ${props => props.active ? 'var(--color-primary)' : 'var(--color-white)'};
  color: ${props => props.active ? 'var(--color-white)' : 'var(--color-gray-700)'};
  border: 1px solid ${props => props.active ? 'var(--color-primary)' : 'var(--color-gray-300)'};
  transition: var(--transition-default);
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--color-primary)' : 'var(--color-gray-100)'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

type BlogPostPreview = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  slug: string;
};

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const postsPerPage = 6;

  const blogPosts: BlogPostPreview[] = [
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
      image: "https://plus.unsplash.com/premium_photo-1702598988008-b60cf858cb78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "clareamento-dental-mitos-e-verdades" // Slug corrigido para corresponder ao BlogPost
    },
    {
      id: 6,
      title: "Bruxismo: como identificar e tratar o ranger de dentes",
      excerpt: "Confira dicas para identificar sinais de bruxismo, entenda suas causas e conheça os tratamentos disponíveis para proteger seus dentes do desgaste.",
      category: "Disfunções Temporomandibulares",
      image: "https://plus.unsplash.com/premium_photo-1673773401710-d23ef113e06f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "bruxismo-como-identificar-e-tratar" // Slug corrigido para corresponder ao BlogPost
    },
    {
      id: 7,
      title: "Ansiedade odontológica: como superar o medo de ir ao dentista",
      excerpt: "Entenda as causas do medo de dentista e conheça estratégias eficazes para superar a ansiedade odontológica e manter sua saúde bucal em dia.",
      category: "Psicologia e Odontologia",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "ansiedade-odontologica-como-superar" // Slug corrigido para corresponder ao BlogPost
    },
    {
      id: 8,
      title: "Ortodontia invisível: vantagens dos alinhadores transparentes",
      excerpt: "Aprenda sobre as vantagens dos alinhadores invisíveis em comparação com aparelhos convencionais e descubra se esse tratamento é adequado para você.",
      category: "Ortodontia",
      image: "https://images.unsplash.com/photo-1694675236489-d73651370688?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "ortodontia-invisivel-vantagens" // Slug corrigido para corresponder ao BlogPost
    },
    {
      id: 9,
      title: "Implantes dentários: tudo o que você precisa saber antes de fazer",
      excerpt: "Conheça os tipos de implantes disponíveis, o passo a passo do procedimento e os cuidados necessários para garantir o sucesso do seu implante dental.",
      category: "Implantodontia",
      image: "https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "implantes-dentarios-tudo-o-que-voce-precisa-saber"
    }
  ];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Correção: Remover handleReadMore e usar Link diretamente
  // A navegação agora é feita pelo componente Link

  return (
    <BlogContainer>
      <SEO
        title="Blog e Artigos"
        description="Artigos e dicas de saúde bucal da UnoVitta. Compartilhamos conhecimento e informações relevantes sobre odontologia, procedimentos dentários e cuidados preventivos."
        keywords="blog odontológico, artigos de saúde bucal, dicas de higiene dental, odontologia preventiva, tratamentos dentários"
        canonical="/blog"
        type="website"
      />

      <ContentContainer>
        <PageHeader>
          <PageTitle>Blog e Artigos</PageTitle>
          <Divider />
          <PageDescription>
            Compartilhamos conhecimento e informações relevantes sobre saúde bucal, procedimentos odontológicos e cuidados preventivos.
          </PageDescription>
        </PageHeader>

        <BlogGrid>
          {currentPosts.map(post => (
            <BlogCard key={post.id}>
              <BlogImageContainer>
                  <BlogImage
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={500}
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

        {totalPages > 1 && (
          <Pagination>
            <PaginationButton
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </PaginationButton>

            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationButton
                key={index}
                active={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationButton>
            ))}

            <PaginationButton
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </PaginationButton>
          </Pagination>
        )}
      </ContentContainer>
    </BlogContainer>
  );
};

export default Blog;
