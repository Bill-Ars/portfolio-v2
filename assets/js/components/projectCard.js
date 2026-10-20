import { escapeHTML } from "../utils/dom.js";
import { categories } from "../data/projects.js";

const STATUS = {
    done: { label: "Concluído", className: "badge--done" },
    progress: { label: "Em desenvolvimento", className: "badge--progress" },
};

function cover(project) {
    if (project.image) {
        return `<img src="${escapeHTML(project.image)}" alt="Screenshot do projecto ${escapeHTML(project.title)}" loading="lazy">`;
    }

    return `
        <div class="project-card__placeholder" aria-hidden="true">
            <i class="${escapeHTML(project.icon || "fa-solid fa-code")}"></i>
        </div>`;
}

function links(project) {
    const items = [];

    if (project.live) {
        items.push(`
            <a class="project-card__link" href="${escapeHTML(project.live)}" target="_blank" rel="noopener">
                <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Ver online
            </a>`);
    }

    if (project.repo) {
        items.push(`
            <a class="project-card__link" href="${escapeHTML(project.repo)}" target="_blank" rel="noopener">
                <i class="fa-brands fa-github" aria-hidden="true"></i> Código
            </a>`);
    }

    if (!items.length) {
        items.push(`
            <span class="project-card__link project-card__link--muted">
                <i class="fa-regular fa-clock" aria-hidden="true"></i> Link em breve
            </span>`);
    }

    return items.join("");
}

export function projectCard(project, index = 0) {
    const status = STATUS[project.status] || STATUS.done;

    return `
        <article class="card card--interactive project-card is-entering" style="--enter-delay: ${index * 0.07}s">
            <div class="project-card__cover">
                ${cover(project)}
                <span class="badge ${status.className}">${status.label}</span>
            </div>

            <div class="project-card__body">
                <span class="project-card__category">${escapeHTML(categories[project.category] || project.category)}</span>
                <h3 class="project-card__title">${escapeHTML(project.title)}</h3>
                <p class="project-card__desc">${escapeHTML(project.description)}</p>

                <ul class="tag-list" aria-label="Tecnologias">
                    ${project.tags.map((tag) => `<li class="tag">${escapeHTML(tag)}</li>`).join("")}
                </ul>

                <div class="project-card__links">${links(project)}</div>
            </div>
        </article>`;
}
