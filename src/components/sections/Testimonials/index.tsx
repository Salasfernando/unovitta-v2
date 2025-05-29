import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
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

const TestimonialsGrid = styled.div`
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

const TestimonialCard = styled.div`
  background-color: var(--color-gray-100);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
  box-shadow: var(--shadow);
  transition: var(--transition-default);
  
  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: var(--shadow-md);
  }
`;

const QuoteIcon = styled.div`
  color: var(--color-primary);
  margin-bottom: var(--spacing-4);
  
  svg {
    width: 2.5rem;
    height: 2.5rem;
    opacity: 0.3;
  }
`;

const TestimonialText = styled.blockquote`
  font-size: 1rem;
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-4);
  font-style: italic;
  line-height: 1.6;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorAvatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--color-gray-300);
  margin-right: var(--spacing-3);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      text: "Ótimo atendimento. Profissionais competentes e educados. Fui atendida pelo doutor Bruno. Fiquei 100% satisfeita com o implante realizado. Recomendo",
      author: "Lucimary Barbosa",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjU9ylACL9L7__gfyQBLMJQNuXUQ4STaVJM5zNajgoNUTOiekaY=w90-h90-p-rp-mo-br100"
    },

    {
      id: 2,
      text: "Olá, gostaria de agradecer pelo atendimento do Dr Murilo que fiz um tratamento e coloquei lentes de contato. Gostei muito do trabalho e recomendo a todos que é um excelente profissional!",
      author: "Wesley Moura",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocKIsBZvu63ChvsxLW34ediv8jjrRBfCS_9_HfzlSewwo2-lAQ=w90-h90-p-rp-mo-br100"
    },

    {
      id: 3,
      text: "Boa, o atendimento da recepção é perfeito, Eunice muito atenciosa sempre, e preocupada com o bem estar do paciente enquanto espera e nas marcações de atendimento e pós atendimento",
      author: "Jakeline Santos",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUCkZ0342SEELVN8DZAsqiOrfQ1ngp-Zy5p_AaxXk8JV9dLC3ok=w90-h90-p-rp-mo-ba3-br100"
    },

    {
      id: 4,
      text: "Fiz meus implantes ,tive um tratamento de excelência,super indico, profissionais experiente ..todos sem e exceção..sou grata",
      author: "Maria da Penha",
      role: "Paciente desde 2021",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocJCHehH82G8eNQhUxuIIwzihnRK-3lbnYz7S1n2c6fY2LFD5g=w90-h90-p-rp-mo-br100"
    },

    {
      id: 5,
      text: "Excelente atendimento! Da recepção ao dentista, todos muito educados e atenciosos!",
      author: "Zildirene",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUG9dGwEp8tw89kC9eDTyMADAWs2Bo3GsWAgiSCjY7pni7sCWuj=w90-h90-p-rp-mo-br100"
    },

    {
      id: 6,
      text: "A unovitta é uma ótima clínica!!! Eu estou amando o resultado dos meus dentes!",
      author: "Maria Eduarda",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWuasgjhjSsP6WSU9VaEp3zVq-3c2Z5M1WCQWX-iq6fHz_CMTkjTA=w90-h90-p-rp-mo-br100"
    }
  ];

  return (
    <TestimonialsContainer id="depoimentos">
      <ContentContainer>
        <SectionHeader>
          <SectionTitle>O Que Nossos Pacientes Dizem</SectionTitle>
          <Divider />
          <SectionDescription>
            A satisfação de nossos pacientes é nossa maior recompensa. Confira alguns depoimentos de quem já transformou sua saúde conosco:
          </SectionDescription>
        </SectionHeader>

        <TestimonialsGrid>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <QuoteIcon>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </QuoteIcon>
              <TestimonialText>
                {testimonial.text}
              </TestimonialText>
              <TestimonialAuthor>
                <AuthorAvatar>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    
                  />
                </AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>{testimonial.author}</AuthorName>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </ContentContainer>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;
