import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO';
import HeroSection from '../../components/sections/Hero';
import PainPointsSection from '../../components/sections/PainPoints';
import HowItWorksSection from '../../components/sections/HowItWorks';
import AboutSection from '../../components/sections/About';
import ServicesSection from '../../components/sections/Services';
import TestimonialsSection from '../../components/sections/Testimonials';
import ContactSection from '../../components/sections/Contact';

const HomeContainer = styled.div``;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <SEO 
        title="UnoVitta | Juntos, para cuidar melhor de você"
        description="Precisa cuidar do seu sorriso em Brazlândia? Agende uma avaliação odontológica com atendimento humanizado, tecnologia avançada e um plano claro para o seu caso." 
        keywords="avaliação odontológica em Brazlândia, clínica odontológica, dentista em Brazlândia, agendar avaliação, tratamento dentário"
        canonical="/"
      />
      <HeroSection />
      <PainPointsSection />
      <HowItWorksSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </HomeContainer>
  );
};

export default Home;
