---
name: design-portfolio
description: Use esta skill sempre que estiver criando, ajustando ou revisando qualquer página/componente de UI do site pessoal de portfólio de Elias Faiçal (Next.js + Tailwind CSS). Aplica-se a tarefas como "criar a Home", "ajustar o header", "estilizar os cards do portfólio", "revisar o layout", ou qualquer pedido que envolva aparência, espaçamento, cor, tipografia ou responsividade nesse projeto. Garante consistência com a identidade visual da marca (logo EF, tema escuro, acento âmbar) e valida o comportamento responsivo antes de considerar a tarefa concluída.
---

# Design System & Responsividade — Portfólio Elias Faiçal

## 1. Identidade visual (siga sempre, não reinvente a cada tela)

- **Tema**: escuro, estilo "agência digital" premium — fundo preto/cinza-chumbo (`#0a0a0a` a `#111114`), nunca branco puro como base.
- **Cor de destaque (accent)**: âmbar/amarelo da logo EF (tom aproximado `#F5A623` / ajustar para o tom exato extraído de `ef.png`), usado com moderação — em CTAs primários, links ativos, ícones de destaque e detalhes de hover. Não usar o accent como cor de fundo em áreas grandes.
- **Texto**: branco/cinza-claro para texto principal sobre fundo escuro; cinza-médio para texto secundário. Garantir contraste mínimo AA (4.5:1) entre texto e fundo em qualquer combinação usada.
- **Tom geral**: sofisticado, com respiro (bastante espaço em branco/negativo), nada de poluição visual. Cards com bordas sutis (`border-white/10` ou similar) ou leve elevação, não bordas pesadas.
- **Componentes recorrentes**: header fixo com nav simples, hero com headline em duas linhas e palavra de destaque em âmbar, seções com título + subtítulo curto, cards de 3 colunas para serviços, cards de portfólio (título + descrição curta + tags de stack + link condicional), banner de CTA final destacado, footer minimalista.
- Antes de estilizar algo novo, primeiro procure se já existe um padrão equivalente implementado no projeto (cor, espaçamento, componente) e reaproveite — não crie uma variação nova sem necessidade.

## 2. Padrões de implementação

- Tailwind CSS: prefira tokens reutilizáveis (extender `tailwind.config` com as cores da marca) em vez de hex/valores mágicos espalhados pelos componentes.
- Tipografia com escala consistente (ex.: uma fonte para headlines, outra ou a mesma para corpo — não introduzir uma terceira fonte sem justificativa).
- Espaçamento em múltiplos consistentes (ex.: escala do próprio Tailwind — 4, 8, 12, 16, 24, 32px), evitando valores arbitrários soltos.
- Ícones: usar um único set consistente (ex.: lucide-react) em todo o site.

## 3. Checklist obrigatório de responsividade (rodar após QUALQUER mudança visual)

Antes de considerar uma página ou componente pronto, valide nos seguintes breakpoints (usando a ferramenta de preview/browser do Antigravity para redimensionar ou capturar screenshot em cada um):

1. **Mobile pequeno** (~375px de largura)
2. **Mobile grande / phablet** (~430px)
3. **Tablet** (~768px)
4. **Desktop pequeno** (~1024px)
5. **Desktop grande** (~1440px+)

Em cada breakpoint, confirme:

- [ ] Nenhum overflow horizontal (nada "vazando" da tela, sem scroll lateral indesejado)
- [ ] Navegação funciona: no mobile, o header colapsa para menu hambúrguer/compacto; não deixar nav desktop espremida
- [ ] Textos permanecem legíveis (sem headline gigante quebrando layout no mobile, nem texto minúsculo no desktop)
- [ ] Imagens/avatares escalam proporcionalmente, sem distorcer ou vazar do container
- [ ] Botões e áreas clicáveis têm no mínimo ~44x44px de área de toque no mobile
- [ ] Grids de cards (serviços, portfólio) colapsam de forma sensata: 3 colunas no desktop → 2 no tablet → 1 no mobile (ajustar conforme o conteúdo, mas sempre revisar)
- [ ] Espaçamento entre seções permanece proporcional — não deve parecer "espremido" no mobile nem com vazios estranhos no desktop
- [ ] Formulário de contato (campos, textarea, botão) usável e com bom espaçamento no mobile, sem inputs cortados
- [ ] Nenhum elemento sobreposto (z-index) ou cortado em nenhuma largura testada

## 4. Fluxo de trabalho esperado do agente

1. Implemente a mudança de UI solicitada.
2. Abra o preview e visualize em pelo menos 3 dos 5 breakpoints acima (obrigatório: mobile ~375px, tablet ~768px, desktop ~1440px; os outros dois quando a mudança for mais crítica ou o componente for complexo).
3. Rode mentalmente o checklist da seção 3 contra o que foi visto no preview.
4. Se algo falhar, corrija antes de reportar a tarefa como concluída — não entregue um componente "quebrado" no mobile assumindo que "depois ajusta".
5. Ao reportar a conclusão da tarefa para Elias, mencione explicitamente em quais breakpoints foi validado.

## 5. Quando esta skill NÃO se aplica

Não é necessária para tarefas puramente de backend/lógica sem impacto visual (ex.: configurar CI/CD, ajustar leitura de JSON de conteúdo) — a menos que a mudança também afete algo renderizado na tela.
