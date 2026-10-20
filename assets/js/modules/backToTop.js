import { $ } from "../utils/dom.js";

const SHOW_AFTER = 600;

export function initBackToTop() {
    const button = $("[data-back-to-top]");
    if (!button) return;

    const update = () => button.classList.toggle("is-visible", window.scrollY > SHOW_AFTER);

    button.addEventListener("click", () => window.scrollTo({ top: 0 }));
    window.addEventListener("scroll", update, { passive: true });
    update();
}
