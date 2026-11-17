import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO';

const Page = styled.article`
  width: min(calc(100% - 2rem), 900px);
  margin: 0 auto;
  padding: clamp(3rem, 7vw, 6rem) 0;
  color: var(--color-gray-800);

  h1 { font-size: clamp(2.2rem, 5vw, 3.5rem); }
  h2 { margin-top: 2.3rem; font-size: clamp(1.35rem, 3vw, 1.8rem); }
  p, li { line-height: 1.75; }
  ul { padding-left: 1.4rem; }
  li { margin-bottom: 0.45rem; }
  a { text-decoration: underline; }
`;

const LastUpdated = styled.p`
  color: var(--color-gray-600);
  font-size: 0.92rem;
`;

const PrivacyPolicy: React.FC = () => (
  <Page>
    <SEO
      title="Política de Privacidade"
      description="Saiba como a UnoVitta trata dados pessoais enviados pelo site, utiliza cookies e compartilha informações com serviços externos."
      canonical="/privacidade"
      robots="index, follow"
    />
    <h1>Política de Privacidade</h1>
    <LastUpdated>Última atualização: 22 de outubro de 2026</LastUpdated>
    <p>
      Esta política explica como a UnoVitta Clínicas trata dados pessoais quando você navega neste site ou inicia um contato. Ela deve ser lida junto às opções de privacidade disponíveis no aviso de cookies. O site não recebe nem armazena em um servidor próprio os dados digitados no formulário de contato.
    </p>

    <h2>Quem trata os dados e como falar conosco</h2>
    <p>
      A clínica divulgada neste site como UnoVitta Clínicas é responsável pelas decisões sobre o tratamento descrito aqui. Para solicitar informações ou exercer seus direitos, escreva para <a href="mailto:contato@unovitta.com.br">contato@unovitta.com.br</a> ou ligue para <a href="tel:+556134794514">(61) 3479-4514</a>. Informe que o assunto é privacidade para direcionarmos sua solicitação.
    </p>

    <h2>Dados tratados e finalidades</h2>
    <ul>
      <li><strong>Formulário de contato:</strong> nome e telefone, necessários para identificar e retornar seu pedido; horário preferencial e tratamento de interesse são opcionais. A informação sobre o tratamento pode revelar dado de saúde, por isso solicitamos autorização específica antes de encaminhar o formulário.</li>
      <li><strong>Navegação e anúncios:</strong> se você autorizar a medição de marketing, o Google Ads poderá tratar identificadores e eventos de conversão quando você interagir com links de contato. A escolha fica salva no armazenamento local do navegador.</li>
      <li><strong>Mapa:</strong> o mapa do Google só é carregado depois que você escolhe “Carregar mapa do Google”. Antes disso, o navegador não carrega o conteúdo incorporado.</li>
      <li><strong>Recursos externos:</strong> algumas fontes e imagens vêm de serviços externos, como Google Fonts e Unsplash. Ao abrir páginas que usam esses recursos, o navegador pode se conectar a esses provedores e compartilhar dados técnicos, como endereço IP e informações do navegador, conforme as políticas deles.</li>
    </ul>

    <h2>Como o formulário funciona</h2>
    <p>
      O formulário mantém os campos temporariamente na página. Ao enviar, ele monta uma mensagem e abre o WhatsApp para que você possa encaminhá-la à clínica. O site não envia esses campos a um banco de dados próprio. Os dados só são transmitidos à UnoVitta quando você prossegue com a conversa no WhatsApp; a Meta/WhatsApp também pode tratar a mensagem de acordo com os próprios termos e políticas. Evite incluir informações clínicas detalhadas no primeiro contato.
    </p>
    <p>
      A autorização para encaminhar os dados do formulário é opcional, mas sem ela não é possível usar esse formulário. Você pode falar com a clínica por telefone ou pelo WhatsApp sem preencher os campos do site.
    </p>

    <h2>Bases e escolhas</h2>
    <p>
      Para nome e telefone, a clínica usa os dados para tomar providências solicitadas por você antes de um possível atendimento, nos termos do art. 7º, V, da LGPD. O interesse em tratamento é opcional e pode revelar dado de saúde; se preenchido, só é encaminhado após a autorização específica e destacada exibida no formulário, nos termos do art. 11, I. A medição de conversões do Google Ads depende da sua autorização para essa finalidade. Você pode rejeitar ou retirar essa autorização a qualquer momento em “Preferências de cookies”, no rodapé.
    </p>
    <p>
      A escolha de cookies não altera a possibilidade de navegar, ligar ou contatar a clínica. Se você rejeitar antes de aceitar, o site não carrega o Google Ads. Se retirar uma autorização já dada, o site bloqueia novos eventos de marketing e remove cookies próprios conhecidos quando tecnicamente possível; o script já carregado pode permanecer na memória do navegador até você sair da página.
    </p>

    <h2>Compartilhamento e serviços externos</h2>
    <p>
      Para as finalidades descritas, os dados podem ser compartilhados com a Meta/WhatsApp quando você encaminha a mensagem, com o Google quando autoriza marketing ou carrega o mapa, e com provedores necessários para entregar fontes, imagens e hospedagem do site. Cada serviço pode tratar dados conforme seus próprios termos. O site não vende dados pessoais.
    </p>
    <ul>
      <li><a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Política de Privacidade do WhatsApp</a></li>
      <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de Privacidade do Google</a></li>
      <li><a href="https://unsplash.com/privacy" target="_blank" rel="noopener noreferrer">Política de Privacidade do Unsplash</a></li>
    </ul>
    <p>
      Alguns provedores podem tratar dados fora do Brasil. A clínica deve confirmar os países de destino, os provedores efetivamente contratados e as salvaguardas aplicáveis às transferências internacionais antes de publicar esta política.
    </p>

    <h2>Retenção e segurança</h2>
    <p>
      O site não mantém um cadastro dos dados digitados no formulário. Depois que a mensagem chega ao WhatsApp da clínica, a UnoVitta pode manter as informações pelo período necessário para responder e administrar o atendimento, cumprir obrigações legais e regulatórias ou exercer direitos, com acesso restrito e descarte quando deixarem de ser necessárias. O prazo concreto depende dos registros mantidos pela clínica e das obrigações aplicáveis.
    </p>
    <p>
      Adotamos medidas técnicas no site para limitar o envio de dados e proteger as comunicações. Serviços externos e o dispositivo ou a conta usados para acessar WhatsApp, Google ou outros provedores também têm seus próprios controles e responsabilidades.
    </p>

    <h2>Seus direitos</h2>
    <p>
      Nos termos da LGPD, você pode solicitar confirmação e acesso aos dados, correção, anonimização, bloqueio ou eliminação quando cabível, informação sobre compartilhamentos, portabilidade quando aplicável, oposição ao tratamento e revisão de decisões automatizadas. Quando o tratamento se basear em consentimento, você pode revogá-lo; a revogação não torna inválido o tratamento anterior. Para exercer seus direitos, use o canal de contato acima. Poderemos pedir informações para confirmar sua identidade e responder com segurança.
    </p>

    <h2>Alterações nesta política</h2>
    <p>
      Podemos atualizar este texto para refletir mudanças no site, nos serviços usados ou nas práticas da clínica. A versão e a data da última atualização estarão disponíveis nesta página.
    </p>
  </Page>
);

export default PrivacyPolicy;
