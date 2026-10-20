import { $$ } from "../utils/dom.js";

// Marca no menu a secção que está visível no ecrã
export function initScrollSpy() {
    const links = $$(".nav__link");
    const sections = links
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    if (!sections.length) return;

    const setActive = (id) => {
        links.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("is-active", isActive);
            if (isActive) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
        });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActive(entry.target.id);
            });
        },
        // Considera "activa" a secção que atravessa o meio do ecrã
        { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
}
