# Gabriel Matozo — Portfólio

Portfólio pessoal desenvolvido com HTML5, CSS3 e JavaScript puro. Zero dependências externas.

**[gabrielmatozo.github.io](https://gabrielmatozo.github.io)**

## Sobre

Site estático hospedado no GitHub Pages, construído do zero sem frameworks. Apresenta minha trajetória profissional em Segurança da Informação e Desenvolvimento Backend.

## Recursos

- **Tema dark/light** com persistência em `localStorage`
- **Internacionalização** — Português, Inglês e Espanhol
- **Projetos dinâmicos** carregados via GitHub API
- **Formulário de contato** integrado ao Formspree
- **Download de CV** em PDF
- **Layout responsivo** para mobile, tablet e desktop
- **Página 404** customizada com efeito glitch
- **Animações** — typing effect, scroll reveal, particle system (canvas), card tilt
- **Acessibilidade** — aria-labels, focus-visible, keyboard navigation

## Stack

HTML5 · CSS3 · JavaScript (Vanilla) · GitHub Pages · Formspree

## Estrutura

```
├── index.html              # Página principal
├── 404.html                # Página de erro
├── .nojekyll               # Desativa Jekyll no GitHub Pages
├── .gitignore
└── assets/
    ├── css/styles.css      # Estilos com CSS variables
    ├── js/
    │   ├── config.js       # Configuração (GitHub user, CV URL)
    │   ├── i18n.js         # Traduções PT/EN/ES
    │   └── main.js         # Lógica do site
    ├── images/favicon.svg
    └── docs/gabriel-matozo-cv.pdf
```

## Como usar

1. Fork ou clone o repositório
2. Edite `assets/js/config.js` com seu GitHub user e URL do CV
3. Edite `assets/js/i18n.js` com seus dados pessoais nos 3 idiomas
4. Faça deploy no GitHub Pages

## Licença

MIT