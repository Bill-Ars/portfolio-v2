import { $$, prefersReducedMotion } from "../utils/dom.js";

const DURATION = 1400;

function animate(el) {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const start = performance.now();

    const step = (now) => {
        const progress = Math.min((now - start) / DURATION, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        el.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
}

// Conta de 0 até ao valor de [data-count] quando o número aparece no ecrã
export function initCounters() {
    const counters = $$("[data-count]");
    if (prefersReducedMotion()) return;

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                animate(entry.target);
                obs.unobserve(entry.target);
            });
        },
        { threshold: 0.6 }
    );

    counters.forEach((el) => observer.observe(el));
}
