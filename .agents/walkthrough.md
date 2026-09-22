# Walkthrough: Portfólio Next.js (Elias Faiçal)

O desenvolvimento do portfólio foi concluído de acordo com o plano estabelecido. Aqui está um resumo de tudo o que foi implementado e como testar.

## O que foi implementado

1. **Arquitetura Base**:
   - Inicialização de Next.js 15 (App Router) com TypeScript e Tailwind CSS 4.
   - Configuração do GitHub Actions para rodar typecheck e lint em Pull Requests (em `.github/workflows/ci.yml`).

2. **Estilização**:
   - Tema escuro por padrão configurado em `src/app/globals.css`.
   - Adicionado a cor de destaque âmbar (`#f59e0b`) para botões e detalhes importantes.

3. **Camada de Dados Estáticos**:
   - Criamos os arquivos JSON (`profile.json`, `projects.json`, `services.json`) na pasta `src/content`.
   - Adicionamos a camada de abstração em `src/lib/content.ts` com funções como `getProjects()` simulando chamadas assíncronas para facilitar a futura migração para um CMS (ex: Payload).

4. **Componentes Globais**:
   - `Header`: Navegação fixa com blur e links.
   - `Footer`: Redes sociais e informações básicas.
   - `Button`: Botões padronizados (variantes primary, secondary, outline).
   - `Card`: Cards com efeitos de hover para uso genérico.
   - `ContactForm`: Formulário apontando simuladamente para Formspree.

5. **Páginas**:
   - **[Home](file:///Applications/XAMPP/xamppfiles/htdocs/portfolio/src/app/page.tsx)**: Hero section impactante com foco no posicionamento generalista e premium.
   - **[Sobre](file:///Applications/XAMPP/xamppfiles/htdocs/portfolio/src/app/sobre/page.tsx)**: Biografia e lista detalhada de serviços utilizando a `lucide-react`.
   - **[Portfólio](file:///Applications/XAMPP/xamppfiles/htdocs/portfolio/src/app/portfolio/page.tsx)**: Grid de projetos em destaque.
   - **[Contato](file:///Applications/XAMPP/xamppfiles/htdocs/portfolio/src/app/contato/page.tsx)**: Formulário de captação de lead.

## Próximos Passos (Para Você)

> [!TIP]
> - Você precisa usar **Node.js versão 20+** caso queira rodar `npm run dev` ou `npm run build` localmente no seu computador.
> - Substitua a URL comentada no componente `ContactForm.tsx` pela sua URL gerada no painel do Formspree.
> - Atualize os textos, links e dados nos arquivos `.json` na pasta `src/content`.

## Como publicar na Vercel

1. Commit todos os arquivos para o repositório.
2. Acesse seu painel na Vercel e adicione um novo projeto apontando para esse repositório do GitHub.
3. A Vercel detectará o Next.js e fará o build automaticamente (ela já utiliza Node 20 por padrão, não se preocupe).
