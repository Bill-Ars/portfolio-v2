import { escapeHTML } from "../utils/dom.js";

export function serviceCard(service, index = 0) {
    return `
        <article class="card card--interactive service-card" data-reveal style="--reveal-delay: ${index * 0.1}s">
            <span class="icon-box"><i class="${escapeHTML(service.icon)}" aria-hidden="true"></i></span>
            <h3>${escapeHTML(service.title)}</h3>
            <p>${escapeHTML(service.description)}</p>
        </article>`;
}
