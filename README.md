# UnoVitta - Website Institucional

## Descrição do Projeto

Este repositório contém o código-fonte do website institucional da **UnoVitta**, uma clínica odontológica localizada em Brasília-DF. O site foi desenvolvido para apresentar a clínica, seus serviços, depoimentos, artigos e contato, com foco em atrair novos pacientes e gerar agendamentos via WhatsApp.

## Funcionalidades

O website da UnoVitta oferece as seguintes funcionalidades:

*   **Página Inicial:** Apresenta a clínica, destaca diferenciais e convida o visitante a agendar uma avaliação.
*   **Sobre Nós:** Conteúdo sobre a filosofia da clínica, experiência da equipe e atendimento humanizado.
*   **Serviços:** Apresentação dos tratamentos odontológicos oferecidos, incluindo:
    *   Lentes de Contato Dental
    *   Implantes Dentários
    *   Alinhadores Transparentes
    *   Clareamento Dental
    *   Ortodontia
    *   Reabilitação Oral
*   **Blog:** Artigos e dicas sobre saúde bucal para manter os visitantes informados e engajados.
*   **Contato:** Informações de endereço, telefone e link direto para agendamento via WhatsApp.
*   **Depoimentos:** Seção dedicada a feedbacks e relatos de pacientes satisfeitos.
*   **Design Responsivo:** Layout adaptável para desktop, tablet e mobile.
*   **SEO Básico:** Metatags dinâmicas, canonical e `robots.txt` para apoiar indexação.

## Tecnologias Utilizadas

*   **Frontend:**
    *   ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
    *   ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
    *   ![Styled Components](https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
    *   ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
    *   **React Router Dom** para navegação SPA entre páginas internas.
*   **SEO e Publicação:**
    *   `robots.txt` configurado para permitir indexação.
    *   `sitemap.xml` disponível para buscadores.
    *   Metatags Open Graph e Twitter no componente de SEO.

## Scripts

Instale dependências:

```bash
npm install
```

Modo de desenvolvimento:

```bash
npm run dev
```

Build de produção:

```bash
npm run build
```

Pré-visualização do build:

```bash
npm run preview
```

## Estrutura do Projeto

- `src/`
  - `components/`
    - `SEO/` — metatags e título dinâmico.
    - `layout/` — Header, Footer e navegação.
    - `sections/` — Hero, Serviços, Contato, Blog e outras seções.
    - `WhatsAppButton/` — botão flutuante de WhatsApp.
  - `pages/` — páginas do site.
  - `utils/` — utilitários, incluindo helper de WhatsApp.
  - `styles/` — estilos globais.
- `public/`
  - `robots.txt`
  - `sitemap.xml`

## Licença

© 2026 UnoVitta. Todos os direitos reservados.

Desenvolvido por Salas Tech.

👨‍💻 **Contato**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/salas-fernando/) [![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/fernando_salas9/) [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:fernandosalas.dev22@gmail.com) [![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://api.whatsapp.com/send?phone=556134794514)
