# Bill Arsénio — Portfólio

Portfólio pessoal onde apresento quem sou, o que faço e os projectos que tenho desenvolvido como **Frontend Web Developer**.

🔗 **Online:** [portfolio-v2-x01e.onrender.com](https://portfolio-v2-x01e.onrender.com)

---

## Sobre o projecto

Esta é a segunda versão do meu portfólio. A primeira foi um exercício de layout com Flexbox; nesta reescrevi tudo do zero com um objectivo claro: **um site moderno, profissional e com código organizado o suficiente para crescer sem virar confusão.**

Construído apenas com **HTML, CSS e JavaScript puro** — sem frameworks nem bibliotecas de build.

### Secções

- **Início** — apresentação, cargo com efeito de escrita, números e tecnologias principais
- **Sobre** — resumo profissional e informações de contacto
- **Serviços** — o que posso fazer por uma equipa
- **Projectos** — cartões com filtro por categoria (Frontend / Backend)
- **Percurso** — linha do tempo de experiência e formação + stack técnica
- **Contacto** — canais directos e formulário com validação

---

## Tecnologias

| Área | Usado |
| --- | --- |
| Estrutura | HTML5 semântico |
| Estilo | CSS3 — Custom Properties, Grid, Flexbox, `clamp()`, animações |
| Comportamento | JavaScript (ES Modules), IntersectionObserver |
| Ícones / fontes | Font Awesome, Google Fonts (Inter + Plus Jakarta Sans) |
| Deploy | Vercel |

---

## Estrutura de pastas

```
CV_Project/
├── index.html                 # Estrutura da página (só marcação)
├── assets/
│   ├── css/
│   │   ├── main.css           # Ponto de entrada: importa todos os outros
│   │   ├── base/              # Variáveis (design tokens), reset, tipografia, animações
│   │   ├── layout/            # Container, header, footer
│   │   ├── components/        # Botões, cards, tags, formulários (reutilizáveis)
│   │   └── sections/          # Estilos específicos de cada secção
│   ├── js/
│   │   ├── main.js            # Ponto de entrada: renderiza e inicializa tudo
│   │   ├── data/              # Conteúdo do site (projectos, percurso, skills, perfil)
│   │   ├── components/        # Funções que geram o HTML de cada cartão
│   │   ├── modules/           # Comportamentos (menu, filtros, animações, formulário...)
│   │   └── utils/             # Funções auxiliares do DOM
│   ├── images/                # Foto, favicon e screenshots dos projectos
│   └── docs/                  # CV em PDF
└── README.md
```

### Como está organizado

O código separa três responsabilidades:

1. **Dados** (`js/data/`) — *o quê* é mostrado. Os textos dos projectos, experiência e competências vivem aqui, fora do HTML.
2. **Componentes** (`js/components/`) — *como* cada item é desenhado. Cada função recebe um objecto e devolve o HTML do cartão.
3. **Módulos** (`js/modules/`) — *o que acontece*. Cada ficheiro trata de um único comportamento.

No CSS segue-se a mesma ideia: as cores, espaçamentos e fontes estão centralizados em `base/variables.css`, por isso mudar o visual do site inteiro é alterar poucas linhas.

---

## Adicionar um novo projecto

Basta acrescentar um objecto em [`assets/js/data/projects.js`](assets/js/data/projects.js):

```js
{
    title: "Nome do Projecto",
    category: "frontend",          // "frontend" | "backend"
    status: "done",                // "done" | "progress"
    description: "Descrição curta do projecto.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "assets/images/projects/nome.png", // opcional
    icon: "fa-solid fa-code",                 // usado quando não há imagem
    live: "https://...",                      // opcional
    repo: "https://github.com/...",           // opcional
},
```

O cartão, o filtro e o contador de projectos actualizam-se sozinhos.

---

## Detalhes de que me orgulho

- **Mobile first** — o CSS começa pelo telemóvel e vai crescendo com `min-width`
- **Acessibilidade** — link "saltar para o conteúdo", `aria-*` no menu e nos filtros, foco visível, contraste adequado
- **Respeita `prefers-reduced-motion`** — quem prefere menos movimento vê o site sem animações
- **Funciona mesmo se o JS falhar** — o conteúdo nunca fica escondido
- **Formulário sem servidor** — valida os campos e abre o email já preenchido

---

## Correr localmente

Como o JavaScript usa **ES Modules**, o site precisa de ser servido por um servidor local (abrir o `index.html` com duplo clique não carrega os módulos).

**Opção 1 — VS Code:** instalar a extensão *Live Server* e clicar em **Go Live**.

**Opção 2 — terminal:**

```bash
python -m http.server 5500
```

E abrir `http://localhost:5500`.

---

## Contacto

- **Email:** [arceniobill826@gmail.com](mailto:arceniobill826@gmail.com)
- **WhatsApp:** [+258 87 072 6376](https://wa.me/258870726376)
- **LinkedIn:** [Bill Arsénio](https://www.linkedin.com/in/bill-ars%C3%A9nio-334281258/)
- **GitHub:** [Bill-Ars](https://github.com/Bill-Ars)

---

Desenvolvido por **Bill Arsénio Ndayisaba** · Maputo, Moçambique
