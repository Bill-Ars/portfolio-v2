import { escapeHTML } from "../utils/dom.js";
import { timelineTypes } from "../data/experience.js";

export function timelineItem(entry, index = 0) {
    const type = timelineTypes[entry.type] || timelineTypes.work;

    return `
        <li class="card timeline__item" data-reveal style="--reveal-delay: ${index * 0.1}s">
            <div class="timeline__meta">
                <span class="timeline__type">
                    <i class="${type.icon}" aria-hidden="true"></i> ${type.label}
                </span>
                <span class="timeline__period">${escapeHTML(entry.period)}</span>
            </div>
            <h3 class="timeline__title">${escapeHTML(entry.title)}</h3>
            <p class="timeline__org">${escapeHTML(entry.organization)}</p>
            <p class="timeline__desc">${escapeHTML(entry.description)}</p>
        </li>`;
}
