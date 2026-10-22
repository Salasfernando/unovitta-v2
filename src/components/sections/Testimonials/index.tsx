import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ResponsiveImage from '../../ui/ResponsiveImage';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsContainer = styled.section`
  padding: var(--spacing-20) 0;
  background: var(--color-white);
  position: relative;
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

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  border-radius: 0.7rem;
  background: var(--color-sage);
  color: var(--color-primary);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.9rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.85rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Divider = styled.div`
  width: 5rem;
  height: 0.25rem;
  background: var(--color-secondary);
  margin: 0 auto 1.1rem auto;
`;

const SectionDescription = styled.p`
  font-size: 1.05rem;
  color: var(--color-gray-600);
  max-width: 48rem;
  margin: 0 auto;
`;

const CarouselWrapper = styled.div`
  position: relative;
  margin-bottom: var(--spacing-10);
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: var(--spacing-6);
`;

const CarouselButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  border: 1px solid var(--color-gray-300);
  background: var(--color-white);
  color: var(--color-primary);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover:not(:disabled) {
    background: var(--color-sage);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

const CarouselDots = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex: 1;
`;

const CarouselDot = styled.button<{ $active: boolean }>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: none;
  background: ${({ $active }) => ($active ? 'var(--color-primary)' : 'var(--color-gray-300)')};
  cursor: pointer;
  transition: background 0.2s ease;
`;

const CarouselOverflow = styled.div`
  overflow: hidden;
`;

const CarouselTrack = styled.div<{ translate: number }>`
  display: flex;
  gap: 1.25rem;
  transition: transform 0.45s ease;
  transform: translateX(${({ translate }) => translate}%);
`;

const Slide = styled.div`
  flex: 0 0 100%;

  @media (min-width: 768px) {
    flex: 0 0 50%;
  }

  @media (min-width: 1024px) {
    flex: 0 0 33.3333%;
  }
`;

const QuoteIcon = styled.div`
  color: var(--color-primary);
  margin-bottom: 0.75rem;

  svg {
    width: 2.1rem;
    height: 2.1rem;
    opacity: 0.3;
  }
`;

const AuthorAvatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--color-gray-300);
  margin-right: 0.85rem;
  overflow: hidden;
  border: 2px solid var(--color-gray-300);
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TestimonialCard = styled.article`
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-xl);
  padding: 1.35rem;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: var(--shadow-md);
    background: rgba(255, 255, 255, 1);
  }

  &:hover ${AuthorAvatar} {
    transform: translateY(-2px);
  }
`;

const TestimonialText = styled.blockquote`
  font-size: 1rem;
  color: var(--color-gray-700);
  margin-bottom: 1rem;
  font-style: italic;
  line-height: 1.7;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
`;

const AuthorRole = styled.p`
  font-size: 0.86rem;
  color: var(--color-gray-600);
  margin: 0;
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 0.8rem;
`;

const Star = styled.svg`
  width: 1.1rem;
  height: 1.1rem;
  fill: var(--color-accent);
`;

const TrustIndicatorsSection = styled.div`
  margin-top: var(--spacing-12);
  padding-top: var(--spacing-12);
  border-top: 1px solid var(--color-gray-300);
`;

const IndicatorsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const IndicatorCard = styled.div`
  text-align: center;
  padding: 1rem;
  border-radius: var(--border-radius-lg);
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--color-gray-300);
`;

const IndicatorNumber = styled.div`
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 0.2rem;
`;

const IndicatorText = styled.p`
  font-size: 0.95rem;
  color: var(--color-gray-600);
`;

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      text: 'Ótimo atendimento. Profissionais competentes e educados. Fui atendida pelo doutor Bruno. Fiquei 100% satisfeita com o implante realizado. Recomendo.',
      author: 'Lucimary Barbosa',
      role: 'Paciente',
      avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjU9ylACL9L7__gfyQBLMJQNuXUQ4STaVJM5zNajgoNUTOiekaY=w90-h90-p-rp-mo-br100'
    },
    {
      id: 2,
      text: 'Olá, gostaria de agradecer pelo atendimento do Dr Murilo que fiz um tratamento e coloquei lentes de contato. Gostei muito do trabalho e recomendo a todos.',
      author: 'Wesley Moura',
      role: 'Paciente',
      avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKIsBZvu63ChvsxLW34ediv8jjrRBfCS_9_HfzlSewwo2-lAQ=w90-h90-p-rp-mo-br100'
    },
    {
      id: 3,
      text: 'Boa, o atendimento da recepção é perfeito, Eunice muito atenciosa sempre, e preocupada com o bem estar do paciente enquanto espera.',
      author: 'Jakeline Santos',
      role: 'Paciente',
      avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUCkZ0342SEELVN8DZAsqiOrfQ1ngp-Zy5p_AaxXk8JV9dLC3ok=w90-h90-p-rp-mo-ba3-br100'
    },
    {
      id: 4,
      text: 'Fiz meus implantes, tive um tratamento de excelência, super indico, profissionais experientes. Sou grata.',
      author: 'Maria da Penha',
      role: 'Paciente desde 2021',
      avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJCHehH82G8eNQhUxuIIwzihnRK-3lbnYz7S1n2c6fY2LFD5g=w90-h90-p-rp-mo-br100'
    },
    {
      id: 5,
      text: 'Excelente atendimento! Da recepção ao dentista, todos muito educados e atenciosos!',
      author: 'Zildirene',
      role: 'Paciente',
      avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUG9dGwEp8tw89kC9eDTyMADAWs2Bo3GsWAgiSCjY7pni7sCWuj=w90-h90-p-rp-mo-br100'
    },
    {
      id: 6,
      text: 'A UnoVitta é uma ótima clínica! Estou amando o resultado dos meus dentes.',
      author: 'Maria Eduarda',
      role: 'Paciente',
      avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWuasgjhjSsP6WSU9VaEp3zVq-3c2Z5M1WCQWX-iq6fHz_CMTkjTA=w90-h90-p-rp-mo-br100'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const updateSlidesPerPage = () => {
      if (typeof window === 'undefined') return;

      if (window.innerWidth >= 1024) {
        setSlidesPerPage(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerPage(2);
      } else {
        setSlidesPerPage(1);
      }
    };

    updateSlidesPerPage();
    window.addEventListener('resize', updateSlidesPerPage);
    return () => window.removeEventListener('resize', updateSlidesPerPage);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - slidesPerPage);

  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [activeIndex, maxIndex]);

  useEffect(() => {
    const autoplay = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(autoplay);
  }, [maxIndex]);

  const translateValue = -(activeIndex * (100 / slidesPerPage));

  return (
    <TestimonialsContainer id="depoimentos">
      <ContentContainer>
        <SectionHeader>
          <Eyebrow>Experiência real dos pacientes</Eyebrow>
          <SectionTitle>O que nossos pacientes dizem</SectionTitle>
          <Divider />
          <SectionDescription>
            Cada atendimento é pensado para oferecer acolhimento, confiança e resultados que realmente transformam a rotina e a autoestima.
          </SectionDescription>
        </SectionHeader>

        <CarouselWrapper>
          <CarouselControls>
            <CarouselButton
              type="button"
              onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeIndex === 0}
              aria-label="Slide anterior"
            >
              <FaChevronLeft />
            </CarouselButton>

            <CarouselDots>
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <CarouselDot
                  key={index}
                  type="button"
                  $active={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </CarouselDots>

            <CarouselButton
              type="button"
              onClick={() => setActiveIndex((prev) => Math.min(maxIndex, prev + 1))}
              disabled={activeIndex === maxIndex}
              aria-label="Próximo slide"
            >
              <FaChevronRight />
            </CarouselButton>
          </CarouselControls>

          <CarouselOverflow>
            <CarouselTrack translate={translateValue}
              onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchStartX === null) return;
                const touchEndX = e.changedTouches[0].clientX;
                const deltaX = touchEndX - touchStartX;
                const swipeThreshold = 50;

                if (deltaX > swipeThreshold && activeIndex > 0) {
                  setActiveIndex((prev) => prev - 1);
                }
                if (deltaX < -swipeThreshold && activeIndex < maxIndex) {
                  setActiveIndex((prev) => prev + 1);
                }
                setTouchStartX(null);
              }}
            >
              {testimonials.map((testimonial) => (
                <Slide key={testimonial.id}>
                  <TestimonialCard>
                    <StarsContainer>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </Star>
                      ))}
                    </StarsContainer>
                    <QuoteIcon>
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </QuoteIcon>
                    <TestimonialText>{testimonial.text}</TestimonialText>
                    <TestimonialAuthor>
                      <AuthorAvatar>
                        <ResponsiveImage
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          loading="lazy"
                          decoding="async"
                          width={64}
                          height={64}
                        />
                      </AuthorAvatar>
                      <AuthorInfo>
                        <AuthorName>{testimonial.author}</AuthorName>
                        <AuthorRole>{testimonial.role}</AuthorRole>
                      </AuthorInfo>
                    </TestimonialAuthor>
                  </TestimonialCard>
                </Slide>
              ))}
            </CarouselTrack>
          </CarouselOverflow>
        </CarouselWrapper>

        <TrustIndicatorsSection>
          <IndicatorsGrid>
            <IndicatorCard>
              <IndicatorNumber>4.9/5</IndicatorNumber>
              <IndicatorText>Avaliação média dos pacientes</IndicatorText>
            </IndicatorCard>
            <IndicatorCard>
              <IndicatorNumber>+2.5k</IndicatorNumber>
              <IndicatorText>Atendimentos realizados</IndicatorText>
            </IndicatorCard>
            <IndicatorCard>
              <IndicatorNumber>100%</IndicatorNumber>
              <IndicatorText>Foco em conforto e segurança</IndicatorText>
            </IndicatorCard>
            <IndicatorCard>
              <IndicatorNumber>24/7</IndicatorNumber>
              <IndicatorText>Atendimento via WhatsApp</IndicatorText>
            </IndicatorCard>
          </IndicatorsGrid>
        </TrustIndicatorsSection>
      </ContentContainer>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;
