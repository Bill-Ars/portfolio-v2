import { $, escapeHTML } from "../utils/dom.js";
import { projects, categories } from "../data/projects.js";
import { projectCard } from "../components/projectCard.js";

// Secção de projectos: cria os filtros e mostra os cartões da categoria escolhida
export function initProjects() {
    const grid = $("[data-projects]");
    const filtersContainer = $("[data-project-filters]");
    if (!grid) return;

    // Só mostra filtros de categorias que têm pelo menos um projecto
    const usedCategories = Object.keys(categories).filter(
        (key) => key === "all" || projects.some((project) => project.category === key)
    );

    const render = (category) => {
        const list = category === "all"
            ? projects
            : projects.filter((project) => project.category === category);

        grid.innerHTML = list.length
            ? list.map(projectCard).join("")
            : `<p class="projects-empty">Ainda não há projectos nesta categoria.</p>`;
    };

    if (filtersContainer) {
        filtersContainer.innerHTML = usedCategories
            .map((key, index) => `
                <button type="button" class="filter-btn" data-filter="${key}" aria-pressed="${index === 0}">
                    ${escapeHTML(categories[key])}
                </button>`)
            .join("");

        filtersContainer.addEventListener("click", (event) => {
            const button = event.target.closest("[data-filter]");
            if (!button || button.getAttribute("aria-pressed") === "true") return;

            filtersContainer
                .querySelectorAll("[data-filter]")
                .forEach((btn) => btn.setAttribute("aria-pressed", String(btn === button)));

            render(button.dataset.filter);
        });
    }

    render("all");
}
