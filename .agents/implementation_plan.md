# Plano de Implementação: Portfólio Pessoal (Elias Faiçal)

Este plano detalha a construção do seu site pessoal utilizando Next.js e Tailwind CSS, conforme alinhado nas nossas definições. O foco é uma estética premium de agência digital, utilizando a paleta escura (preto/cinza-chumbo) com destaques em âmbar da sua logo, com conteúdo estático e captação de leads via Formspree.

## User Review Required

> [!IMPORTANT]
> - **Repositório GitHub e Vercel:** O script criará o projeto Next.js no diretório atual. Você precisará criar o repositório no seu GitHub, fazer o push inicial e vinculá-lo à Vercel manualmente (a configuração do domínio padrão e preview deployments é automática pela Vercel após a conexão).
> - **Cores da Logo:** Extrairei a cor âmbar da `ef.png` para as configurações do Tailwind (`tailwind.config.ts`). Ajustaremos o tom exato durante o desenvolvimento se necessário.

## Arquitetura Proposta

- **Framework**: Next.js (App Router) + TypeScript.
- **Estilização**: Tailwind CSS.
- **Hospedagem**: Vercel.
- **Estrutura de Conteúdo**: Arquivos JSON estáticos, gerenciados localmente na pasta `src/content`. Uma camada de leitura em `src/lib/content.ts` será criada para centralizar os dados (preparando para um futuro CMS).
- **Formulário**: Integração direta com Formspree (campos Nome, Email e Mensagem).

## Estrutura de Pastas (Visão Geral)

```text
/
├── .github/
│   └── workflows/ci.yml        # GitHub Actions (Lint / Typecheck)
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind directives & variaveis CSS
│   │   ├── layout.tsx          # Root Layout (Header, Footer, Thema)
│   │   ├── page.tsx            # Home
│   │   ├── sobre/page.tsx      # Sobre/Serviços
│   │   ├── portfolio/page.tsx  # Portfólio
│   │   └── contato/page.tsx    # Contato
│   ├── components/             # Componentes reutilizáveis (UI)
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── ContactForm.tsx # Formulário Formspree
│   ├── content/                # Dados Estáticos (JSON)
│   │   ├── projects.json
│   │   ├── services.json
│   │   └── profile.json
│   └── lib/
│       └── content.ts          # Funções de leitura dos JSONs
└── public/                     # Assets estáticos (Logo e Ref)
```

## Passo a Passo de Execução

1. **Inicialização do Projeto e Configuração Base:**
   - Rodar `npx create-next-app` com TypeScript, Tailwind e App Router.
   - Configurar o `tailwind.config.ts` com a paleta de cores (fundo escuro e destaque âmbar).
   - Adicionar o workflow do GitHub Actions (`.github/workflows/ci.yml`).

2. **Estrutura de Dados e Camada de Conteúdo:**
   - Criar os arquivos JSON (`projects.json`, `services.json`, etc.) simulando os dados reais.
   - Desenvolver `src/lib/content.ts` com tipos TypeScript robustos.

3. **Desenvolvimento dos Componentes Globais:**
   - Criar o `Header` (com navegação fixa e responsiva) e `Footer`.
   - Criar componentes base (Botões e Cards).

4. **Desenvolvimento das Páginas:**
   - **Home (`/`)**: Hero section, destaques rápidos, CTA.
   - **Sobre (`/sobre`)**: Bio profissional reforçando o perfil generalista, lista de serviços.
   - **Portfólio (`/portfolio`)**: Grid de projetos consumindo os dados estáticos.
   - **Contato (`/contato`)**: Formulário integrado com Formspree, validação simples no client.

5. **Testes e Build:**
   - Validar responsividade e transições (Tailwind hover states).
   - Executar `npm run build` e corrigir eventuais erros de TypeScript/ESLint.

## Verification Plan

### Testes Automatizados (CI)
- O fluxo de CI no GitHub Actions executará `npm run lint` e `npx tsc --noEmit` a cada Pull Request e push na `main`.

### Verificação Manual
- Navegar por todas as páginas localmente, garantindo o funcionamento dos links.
- Testar o envio do formulário no ambiente de desenvolvimento para assegurar a comunicação com o Formspree.
- Confirmar que o layout espelha a sofisticação exigida, utilizando o tema escuro com toques âmbar.

---
**Por favor, revise este plano e aprove (botão "Proceed") para que eu possa dar início ao desenvolvimento.**
