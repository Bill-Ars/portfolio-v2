// Pequenos atalhos para trabalhar com o DOM

export const $ = (selector, scope = document) => scope.querySelector(selector);

export const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

// Evita que texto vindo dos dados seja interpretado como HTML
export function escapeHTML(value = "") {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

// Renderiza uma lista de itens num contentor usando uma função de template
export function renderList(container, items, template) {
    if (!container) return;
    container.innerHTML = items.map(template).join("");
}

export const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
