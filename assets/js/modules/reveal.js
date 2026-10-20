import { $$ } from "../utils/dom.js";

// Mostra os elementos [data-reveal] com uma transição quando entram no ecrã.
// Deve ser chamado depois de todo o conteúdo dinâmico estar renderizado.
export function initReveal() {
    const elements = $$("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
        elements.forEach((el) => el.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                obs.unobserve(entry.target); // anima apenas uma vez
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
}
