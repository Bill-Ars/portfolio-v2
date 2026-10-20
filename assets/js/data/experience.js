// Linha do tempo: experiência e formação (do mais recente para o mais antigo)
// type -> "work" | "project" | "education"

export const timeline = [
    {
        type: "project",
        title: "TalentFlow App",
        organization: "Projecto pessoal",
        period: "Jan 2026 — Presente",
        description:
            "Desenvolvimento de uma plataforma de gestão e divulgação de vagas de emprego, com vagas por categoria, destaques e interfaces interactivas e responsivas para candidatos e empresas.",
    },
    {
        type: "work",
        title: "Web Developer Freelancer",
        organization: "Trabalho independente",
        period: "Nov 2024 — Presente",
        description:
            "Criação de interfaces responsivas, manipulação do DOM e validação de formulários. Projectos práticos como sistemas de inscrição e aplicações com experiência mobile, versionados com Git e GitHub.",
    },
    {
        type: "education",
        title: "Licenciatura em Ciência da Computação",
        organization: "Instituto Superior de Transportes e Comunicações (ISUTC)",
        period: "Em curso",
        description:
            "Programação Orientada a Objectos, Estruturas de Dados, Algoritmos, Bases de Dados e Engenharia de Software.",
    },
];

export const timelineTypes = {
    work: { label: "Experiência", icon: "fa-solid fa-briefcase" },
    project: { label: "Projecto", icon: "fa-solid fa-rocket" },
    education: { label: "Formação", icon: "fa-solid fa-graduation-cap" },
};
