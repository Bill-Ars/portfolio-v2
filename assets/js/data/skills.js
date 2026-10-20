// Competências agrupadas.
// learning: true -> aparece com estilo "em estudo"

export const skillGroups = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML5", icon: "fa-brands fa-html5" },
            { name: "CSS3", icon: "fa-brands fa-css3-alt" },
            { name: "JavaScript", icon: "fa-brands fa-js" },
            { name: "React", icon: "fa-brands fa-react", note: "básico" },
            { name: "GSAP", icon: "fa-solid fa-wand-magic-sparkles" },
            { name: "Design Responsivo", icon: "fa-solid fa-mobile-screen" },
        ],
    },
    {
        title: "Bases de Dados",
        skills: [
            { name: "SQL", icon: "fa-solid fa-database" },
            { name: "MySQL", icon: "fa-solid fa-database" },
            { name: "PostgreSQL", icon: "fa-solid fa-database" },
        ],
    },
    {
        title: "Ferramentas",
        skills: [
            { name: "Git", icon: "fa-brands fa-git-alt" },
            { name: "GitHub", icon: "fa-brands fa-github" },
            { name: "VS Code", icon: "fa-solid fa-code" },
        ],
    },
    {
        title: "Em estudo",
        skills: [
            { name: "Java", icon: "fa-brands fa-java", learning: true },
            { name: "Spring Boot", icon: "fa-solid fa-leaf", learning: true },
            { name: "APIs REST", icon: "fa-solid fa-plug", learning: true },
        ],
    },
];

// Tecnologias em destaque na faixa do hero
export const highlightedTech = [
    { name: "HTML5", icon: "fa-brands fa-html5" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "React", icon: "fa-brands fa-react" },
    { name: "SQL", icon: "fa-solid fa-database" },
    { name: "Git", icon: "fa-brands fa-git-alt" },
];
