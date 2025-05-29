import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO';
import HeroSection from '../../components/sections/Hero';
import AboutSection from '../../components/sections/About';
import ServicesSection from '../../components/sections/Services';
import TestimonialsSection from '../../components/sections/Testimonials';
import ContactSection from '../../components/sections/Contact';
import BlogSection from '../../components/sections/Blog';

const HomeContainer = styled.div``;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <SEO 
        title="Clínica Odontológica UnoVitta - Cuidando do seu Sorriso"
        description="A Clínica Odontológica UnoVitta oferece tratamentos completos para a sua saúde bucal, com foco na qualidade, conforto e na satisfação dos nossos pacientes. Agende sua consulta!"
        keywords="clínica odontológica, dentista, saúde bucal, tratamento dentário, ortodontia, implantes, estética dental, prevenção"
        canonical="/"
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
    </HomeContainer>
  );
};

export default Home;
