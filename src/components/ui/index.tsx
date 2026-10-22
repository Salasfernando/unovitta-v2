import React, { useState } from 'react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import ResponsiveImage from './ResponsiveImage';

export const Button = styled.a<{ $variant?: 'primary' | 'secondary' | 'light' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 3.2rem;
  padding: 0.85rem 1.15rem;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  background: ${({ $variant = 'primary' }) => $variant === 'primary'
    ? 'var(--color-primary)'
    : $variant === 'secondary'
      ? 'var(--color-secondary)'
      : 'var(--color-white)'};
  color: ${({ $variant = 'primary' }) => $variant === 'secondary' ? 'var(--color-dark)' : 'var(--color-white)'};
  font-weight: 800;
  text-decoration: none;
  transition: var(--transition-default);

  &:hover {
    color: ${({ $variant = 'primary' }) => $variant === 'secondary' ? 'var(--color-dark)' : 'var(--color-white)'};
    transform: translateY(-2px);
    box-shadow: var(--shadow);
    filter: brightness(1.04);
  }
`;

const HeaderBlock = styled.header<{ $align?: 'left' | 'center' }>`
  max-width: 48rem;
  margin-bottom: 2.4rem;
  text-align: ${({ $align = 'left' }) => $align};

  ${({ $align = 'left' }) => $align === 'center' && 'margin-left: auto; margin-right: auto;'}
`;

const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.8rem;
  color: var(--color-primary);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;

  &::before {
    content: '';
    width: 1.9rem;
    height: 2px;
    background: var(--color-secondary);
  }
`;

const HeaderTitle = styled.h2`
  margin-bottom: 0.8rem;
  font-family: var(--font-family-display);
  font-size: clamp(2rem, 4vw, 3.35rem);
  font-weight: 800;
  letter-spacing: -0.055em;
`;

const HeaderDescription = styled.p`
  max-width: 42rem;
  margin: 0;
  color: var(--color-gray-600);
  font-size: 1.05rem;
  line-height: 1.75;
`;

export const SectionHeader: React.FC<{
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}> = ({ eyebrow, title, description, align = 'left' }) => (
  <HeaderBlock $align={align}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <HeaderTitle>{title}</HeaderTitle>
    {description && <HeaderDescription>{description}</HeaderDescription>}
  </HeaderBlock>
);

const TreatmentCardFrame = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-lg);
  background: var(--color-white);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-default);

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-accent);
    box-shadow: var(--shadow-md);
  }
`;

const TreatmentImage = styled(ResponsiveImage)`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;

const TreatmentBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.35rem;
`;

const TreatmentLabel = styled.p`
  margin-bottom: 0.45rem;
  color: var(--color-primary);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const TreatmentTitle = styled.h3`
  margin-bottom: 0.6rem;
  font-family: var(--font-family-display);
  font-size: 1.45rem;
`;

const TreatmentText = styled.p`
  margin-bottom: 1rem;
  color: var(--color-gray-600);
  line-height: 1.65;
`;

const TreatmentList = styled.ul`
  display: grid;
  gap: 0.45rem;
  margin: 0 0 1.25rem;
  padding: 0;
  list-style: none;
  color: var(--color-gray-700);
  font-size: 0.92rem;

  li::before {
    content: '✓';
    margin-right: 0.5rem;
    color: var(--color-secondary);
    font-weight: 800;
  }
`;

const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: auto;
  color: var(--color-primary);
  font-weight: 800;

  &:hover {
    color: var(--color-primary-dark);
    transform: translateX(2px);
  }
`;

export const TreatmentCard: React.FC<{
  title: string;
  label: string;
  description: string;
  image: string;
  href: string;
  features?: string[];
  alt: string;
}> = ({ title, label, description, image, href, features = [], alt }) => (
  <TreatmentCardFrame>
    <TreatmentImage src={image} alt={alt} loading="lazy" decoding="async" width={960} height={540} />
    <TreatmentBody>
      <TreatmentLabel>{label}</TreatmentLabel>
      <TreatmentTitle>{title}</TreatmentTitle>
      <TreatmentText>{description}</TreatmentText>
      {features.length > 0 && (
        <TreatmentList>
          {features.slice(0, 4).map(feature => <li key={feature}>{feature}</li>)}
        </TreatmentList>
      )}
      <CardLink href={href}>Conhecer tratamento <span aria-hidden="true">→</span></CardLink>
    </TreatmentBody>
  </TreatmentCardFrame>
);

const MetricCard = styled.article`
  padding: 1.4rem;
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-lg);
  background: var(--color-gray-100);
`;

const MetricValue = styled.strong`
  display: block;
  margin-bottom: 0.25rem;
  color: var(--color-primary);
  font-family: var(--font-family-display);
  font-size: 2rem;
  letter-spacing: -0.05em;
`;

const MetricLabel = styled.span`
  color: var(--color-gray-600);
  font-size: 0.92rem;
`;

export const TrustMetric: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <MetricCard>
    <MetricValue>{value}</MetricValue>
    <MetricLabel>{label}</MetricLabel>
  </MetricCard>
);

const ContactCardFrame = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 1.2rem;
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-lg);
  background: var(--color-white);
  color: inherit;
  box-shadow: var(--shadow-sm);

  &:hover {
    transform: translateY(-3px);
    border-color: var(--color-accent);
    box-shadow: var(--shadow);
  }
`;

const ContactIcon = styled.span`
  display: grid;
  flex: 0 0 2.8rem;
  width: 2.8rem;
  height: 2.8rem;
  place-items: center;
  border-radius: 0.75rem;
  background: var(--color-primary);
  color: var(--color-white);
  font-size: 1.2rem;
`;

const ContactCopy = styled.span`
  display: grid;
  gap: 0.25rem;
`;

const ContactTitle = styled.strong`
  color: var(--color-dark);
`;

const ContactDescription = styled.span`
  color: var(--color-gray-600);
  font-size: 0.9rem;
  line-height: 1.5;
`;

export const ContactCard: React.FC<{
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  ariaLabel?: string;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick'];
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>['rel'];
}> = ({ href, icon, title, description, ariaLabel, onClick, target, rel }) => (
  <ContactCardFrame href={href} aria-label={ariaLabel || title} onClick={onClick} target={target} rel={rel}>
    <ContactIcon aria-hidden="true">{icon}</ContactIcon>
    <ContactCopy>
      <ContactTitle>{title}</ContactTitle>
      <ContactDescription>{description}</ContactDescription>
    </ContactCopy>
  </ContactCardFrame>
);

const FAQFrame = styled.div`
  border-bottom: 1px solid var(--color-gray-300);

  &:first-child {
    border-top: 1px solid var(--color-gray-300);
  }
`;

const FAQButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.15rem 0;
  border: 0;
  background: transparent;
  color: var(--color-dark);
  font-weight: 800;
  text-align: left;

  span:last-child {
    color: var(--color-secondary);
    font-size: 1.35rem;
  }
`;

const FAQAnswer = styled.div`
  padding: 0 2rem 1.15rem 0;
  color: var(--color-gray-600);
  line-height: 1.7;
`;

export const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const answerId = `faq-${question.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40)}`;

  return (
    <FAQFrame>
      <FAQButton
        type="button"
        aria-expanded={open}
        aria-controls={answerId}
        onClick={() => setOpen(value => !value)}
      >
        <span>{question}</span>
        <span aria-hidden="true">{open ? '−' : '+'}</span>
      </FAQButton>
      {open && <FAQAnswer id={answerId}>{answer}</FAQAnswer>}
    </FAQFrame>
  );
};
