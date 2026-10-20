// Lista de projectos (a ordem do array é a ordem no site).
// Para adicionar um novo projecto basta acrescentar um objecto a este array.
//
// Campos:
//   category -> chave de "categories" (usada nos filtros)
//   status   -> "done" | "progress"
//   image    -> caminho do screenshot (opcional; sem imagem usa-se o "icon")
//   live     -> link do projecto online (opcional)
//   repo     -> link do repositório (opcional)

export const categories = {
    all: "Todos",
    website: "Websites",
    webapp: "Web Apps",
    backend: "Backend",
};

export const projects = [
    {
        title: "Txapa Barbershop",
        category: "website",
        status: "done",
        description:
            "Site para uma barbearia em Maputo: serviços, galeria, marcações directas pelo WhatsApp, tema claro/escuro e animações de scroll.",
        tags: ["HTML", "CSS", "JavaScript", "GSAP"],
        image: "assets/images/projects/txapa-barbershop.jpg",
        live: "https://txapa-barbershop.onrender.com/",
        repo: "",
    },
    {
        title: "Old Salt & Oak",
        category: "website",
        status: "done",
        description:
            "Site de uma garrafeira premium em Maputo, com verificação de idade, versão PT/EN, catálogo, clube de membros e encomendas pelo WhatsApp.",
        tags: ["HTML", "CSS", "JavaScript", "GSAP", "i18n"],
        image: "assets/images/projects/old-salt-oak.jpg",
        live: "https://old-salt-oak.onrender.com/",
        repo: "",
    },
    {
        title: "FarmaRede",
        category: "webapp",
        status: "done",
        description:
            "Pesquisa de medicamentos em três farmácias ao mesmo tempo. Frontend de um sistema distribuído (balanceador, nós líder e réplica) com login, painel de gestão e tema claro/escuro.",
        tags: ["JavaScript", "ES Modules", "API REST", "CSS"],
        image: "assets/images/projects/farmarede.jpg",
        live: "https://pharmanet-olhw.onrender.com/",
        repo: "",
    },
    {
        title: "SassifyMoz",
        category: "website",
        status: "done",
        description:
            "Landing page de uma plataforma financeira para negócios moçambicanos, com ligação ao m-Pesa e e-Mola, planos de preços, testemunhos e modo escuro.",
        tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
        image: "assets/images/projects/sassify.jpg",
        live: "https://landingpagev1-sigma.vercel.app/",
        repo: "",
    },
    {
        title: "Mobile Banking App",
        category: "webapp",
        status: "done",
        description:
            "Interface de uma aplicação bancária mobile em React: fluxo de registo e login com validação de formulários e layout pensado para o telemóvel.",
        tags: ["React", "Vite", "CSS", "Mobile first"],
        image: "assets/images/projects/mobile-banking.jpg",
        live: "https://mobile-banking-appa.vercel.app/",
        repo: "",
    },
    {
        title: "TalentFlow",
        category: "webapp",
        status: "progress",
        description:
            "Plataforma de vagas de emprego para o mercado moçambicano: pesquisa por cargo e província, exploração por categorias e destaque das oportunidades mais relevantes.",
        tags: ["HTML", "CSS", "JavaScript", "Responsivo"],
        image: "assets/images/projects/talentflow.png",
        live: "https://talentflowapp.vercel.app/",
        repo: "",
    },
    {
        title: "API de Gestão de Alunos e Cursos",
        category: "backend",
        status: "done",
        description:
            "API REST com operações CRUD e relacionamento entre entidades (alunos e cursos), desenvolvida no meu percurso de estudo de backend.",
        tags: ["Java", "Spring Boot", "REST", "SQL"],
        icon: "fa-solid fa-server",
        live: "",
        repo: "https://github.com/Bill-Ars/alunos",
    },
];
