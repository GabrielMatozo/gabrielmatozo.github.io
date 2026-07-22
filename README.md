# Gabriel Matozo — Portfólio

Portfólio pessoal — site estático HTML/CSS/JS puro, zero frameworks. Hospedado no GitHub Pages.

**[gabrielmatozo.github.io](https://gabrielmatozo.github.io)**

## Sobre

Site que apresenta minha trajetória profissional em Cibersegurança (análise de riscos, prevenção a fraudes, resposta a incidentes) e Desenvolvimento Backend. Construído do zero.

## Recursos

- **Tema dark/light** com persistência em `localStorage` + `prefers-color-scheme`
- **Internacionalização** — Português, Inglês e Espanhol
- **Projetos dinâmicos** carregados via GitHub API com cache em `sessionStorage`
- **Formulário de contato** via Formspree com honeypot anti-spam
- **Download de CV** em PDF (funciona sem JS)
- **Layout responsivo** — mobile, tablet e desktop
- **Página 404** customizada com efeito glitch
- **Animações** — typing effect, scroll reveal, particle system (canvas), card tilt
- **Acessibilidade** — `prefers-reduced-motion`, skip-to-content, focus trap no menu mobile, `aria-live` em conteúdo dinâmico, contraste WCAG AA, `:focus-visible`

## Stack

HTML5 · CSS3 · JavaScript (Vanilla) · GitHub Pages · Formspree

## Estrutura

```
├── index.html              # Página principal
├── 404.html                # Página de erro
├── .nojekyll               # Desativa Jekyll no GitHub Pages
├── sitemap.xml
├── .gitignore
└── assets/
    ├── css/styles.css      # Estilos com CSS custom properties
    ├── js/
    │   ├── config.js       # Configuração (GitHub user, CV URL)
    │   ├── i18n.js         # Traduções PT/EN/ES
    │   └── main.js         # Lógica do site
    ├── images/
    │   ├── favicon.svg
    │   └── og-cover.png    # Open Graph image
    └── docs/
        └── gabriel-matozo-cv.pdf
```

## Como usar

1. Fork ou clone o repositório
2. Edite `assets/js/config.js` com seu GitHub user e URL do CV
3. Edite `assets/js/i18n.js` com seus dados pessoais nos 3 idiomas
4. Faça deploy no GitHub Pages

## Licença

MIT