import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 68vh;
  padding: 7rem 0;
  background: var(--color-gray-100);
  text-align: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
`;

const ErrorCode = styled.h1`
  font-family: var(--font-family-display);
  font-size: clamp(6rem, 16vw, 10rem);
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: var(--spacing-4);
  line-height: 1;
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-6);
`;

const ErrorDescription = styled.p`
  font-size: 1.125rem;
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-8);
`;

const HomeButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3) var(--spacing-6);
  background-color: var(--color-primary);
  color: var(--color-white);
  font-weight: 500;
  border-radius: 0.75rem;
  transition: var(--transition-default);
  
  &:hover {
    background-color: var(--color-primary);
    opacity: 0.9;
    color: var(--color-white);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: var(--spacing-2);
  }
`;

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <SEO 
        title="Página Não Encontrada"
        description="A página que você está procurando não foi encontrada. Volte para a página inicial da UnoVitta."
        robots="noindex, follow"
      />
      
      <ContentContainer>
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>Página Não Encontrada</ErrorTitle>
        <ErrorDescription>
          A página que você está procurando não existe ou foi movida.
          Por favor, verifique o endereço ou volte para a página inicial.
        </ErrorDescription>
        <HomeButton href="/">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Voltar para a Página Inicial
        </HomeButton>
      </ContentContainer>
    </NotFoundContainer>
  );
};

export default NotFound;
