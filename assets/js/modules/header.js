import { $, $$ } from "../utils/dom.js";

const SCROLL_OFFSET = 20;

// Cabeçalho: fundo ao fazer scroll + menu mobile
export function initHeader() {
    const header = $("[data-header]");
    const toggle = $("[data-nav-toggle]");
    const menu = $("[data-nav-menu]");
    if (!header || !toggle || !menu) return;

    const updateScrollState = () => {
        header.classList.toggle("is-scrolled", window.scrollY > SCROLL_OFFSET);
    };

    const setMenu = (open) => {
        menu.classList.toggle("is-open", open);
        header.classList.toggle("is-menu-open", open);
        document.body.classList.toggle("is-locked", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    };

    toggle.addEventListener("click", () => {
        setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Fecha o menu ao escolher um link
    $$("a", menu).forEach((link) => link.addEventListener("click", () => setMenu(false)));

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") setMenu(false);
    });

    // Se o ecrã crescer para desktop com o menu aberto, repõe o estado
    window.matchMedia("(min-width: 992px)").addEventListener("change", (event) => {
        if (event.matches) setMenu(false);
    });

    window.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
}
