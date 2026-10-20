import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO';
import { TELEPHONE_LINK } from '../../utils/whatsapp';
import HeroSection from '../../components/sections/Hero';
import PainPointsSection from '../../components/sections/PainPoints';
import HowItWorksSection from '../../components/sections/HowItWorks';
import AboutSection from '../../components/sections/About';
import ServicesSection from '../../components/sections/Services';
import TestimonialsSection from '../../components/sections/Testimonials';
import ContactSection from '../../components/sections/Contact';
import HomeEnhancements from '../../components/sections/HomeEnhancements';

const HomeContainer = styled.div``;

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'UnoVitta Clínicas',
  url: 'https://www.unovitta.com.br/',
  telephone: TELEPHONE_LINK,
  image: 'https://www.unovitta.com.br/images/hero-equipe-paciente.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Quadra 37, Conjunto A, lote 2 - loja 3, Vila São José',
    addressLocality: 'Brazlândia',
    addressRegion: 'DF',
    addressCountry: 'BR'
  },
  areaServed: 'Brazlândia, Brasília - DF',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '12:00'
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Como funciona a primeira avaliação?',
      acceptedAnswer: { '@type': 'Answer', text: 'Você conta o que deseja melhorar, a equipe entende seu caso e explica os próximos passos com clareza.' }
    },
    {
      '@type': 'Question',
      name: 'Preciso saber qual tratamento quero antes de falar com a clínica?',
      acceptedAnswer: { '@type': 'Answer', text: 'Não. Você pode começar explicando sua principal preocupação e a equipe ajuda a organizar as possibilidades.' }
    },
    {
      '@type': 'Question',
      name: 'A clínica atende em Brazlândia?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sim. A UnoVitta está localizada em Brazlândia, no Distrito Federal.' }
    }
  ]
};

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <SEO 
        title="UnoVitta | Juntos, para cuidar melhor de você"
        description="Precisa cuidar do seu sorriso em Brazlândia? Agende uma avaliação odontológica com atendimento humanizado, tecnologia avançada e um plano claro para o seu caso." 
        keywords="avaliação odontológica em Brazlândia, clínica odontológica, dentista em Brazlândia, agendar avaliação, tratamento dentário"
        canonical="/"
        image="/images/hero-equipe-paciente.jpg"
        schema={[homeSchema, faqSchema]}
      />
      <HeroSection />
      <PainPointsSection />
      <HowItWorksSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <HomeEnhancements />
    </HomeContainer>
  );
};

export default Home;
