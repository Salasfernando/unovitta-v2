import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { readPrivacyConsent, savePrivacyConsent } from '../../utils/privacyConsent';

const ConsentPanel = styled.aside`
  position: fixed;
  z-index: 1200;
  right: 1rem;
  bottom: 1rem;
  width: min(38rem, calc(100vw - 2rem));
  padding: 1.25rem;
  border: 1px solid var(--color-gray-300);
  border-radius: 1rem;
  background: var(--color-white);
  color: var(--color-dark);
  box-shadow: 0 18px 55px rgba(16, 58, 53, 0.24);
`;

const ConsentTitle = styled.h2`
  margin-bottom: 0.4rem;
  font-size: 1.15rem;
`;

const ConsentCopy = styled.p`
  margin-bottom: 0.9rem;
  color: var(--color-gray-700);
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ConsentActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`;

const ConsentButton = styled.button`
  min-height: 2.65rem;
  padding: 0.55rem 0.8rem;
  border: 1px solid var(--color-primary);
  border-radius: 0.6rem;
  background: var(--color-white);
  color: var(--color-primary);
  font-weight: 700;
`;

const Preferences = styled.div`
  margin: 0.8rem 0;
  padding: 0.8rem;
  border-radius: 0.6rem;
  background: var(--color-gray-100);

  label {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    font-size: 0.9rem;
    line-height: 1.45;
  }

  input {
    margin-top: 0.25rem;
    accent-color: var(--color-primary);
  }
`;

interface PrivacyConsentBannerProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

const PrivacyConsentBanner: React.FC<PrivacyConsentBannerProps> = ({ forceOpen = false, onClose }) => {
  const [visible, setVisible] = React.useState(forceOpen);
  const [manage, setManage] = React.useState(false);
  const [marketing, setMarketing] = React.useState(() => readPrivacyConsent()?.marketing ?? false);

  React.useEffect(() => {
    setVisible(forceOpen || readPrivacyConsent() === null);
    if (forceOpen) {
      setManage(true);
    }
  }, [forceOpen]);

  React.useEffect(() => {
    const openPreferences = () => {
      setVisible(true);
      setManage(true);
    };
    window.addEventListener('open-privacy-preferences', openPreferences);
    return () => window.removeEventListener('open-privacy-preferences', openPreferences);
  }, []);

  const save = (allowMarketing: boolean) => {
    savePrivacyConsent(allowMarketing);
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  return (
    <ConsentPanel role="region" aria-labelledby="privacy-consent-title" aria-describedby="privacy-consent-copy">
      <ConsentTitle id="privacy-consent-title">Privacidade e cookies</ConsentTitle>
      <ConsentCopy id="privacy-consent-copy">
        Usamos armazenamento necessário para lembrar sua escolha. Com sua autorização, ativamos medição de conversões do Google Ads. Você pode aceitar, rejeitar ou configurar essa opção. Consulte a{' '}
        <Link to="/privacidade">Política de Privacidade</Link>.
      </ConsentCopy>
      {manage && (
        <Preferences>
          <label>
            <input type="checkbox" checked disabled aria-label="Armazenamento necessário sempre ativo" />
            <span><strong>Necessário</strong> — salva sua escolha de privacidade neste navegador.</span>
          </label>
          <label>
            <input type="checkbox" checked={marketing} onChange={(event) => setMarketing(event.target.checked)} />
            <span><strong>Medição de marketing</strong> — Google Ads mede conversões de anúncios e pode usar cookies próprios.</span>
          </label>
        </Preferences>
      )}
      <ConsentActions>
        <ConsentButton type="button" onClick={() => save(false)}>Rejeitar opcionais</ConsentButton>
        {!manage && <ConsentButton type="button" onClick={() => setManage(true)}>Configurar</ConsentButton>}
        {manage && <ConsentButton type="button" onClick={() => save(marketing)}>Salvar escolha</ConsentButton>}
        <ConsentButton type="button" onClick={() => save(true)}>Aceitar todos</ConsentButton>
      </ConsentActions>
    </ConsentPanel>
  );
};

export default PrivacyConsentBanner;
