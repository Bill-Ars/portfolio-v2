import { escapeHTML } from "../utils/dom.js";

function skillChip(skill) {
    const classes = skill.learning ? "chip chip--learning" : "chip";
    const note = skill.note ? ` <small>(${escapeHTML(skill.note)})</small>` : "";

    return `
        <li class="${classes}">
            <i class="${escapeHTML(skill.icon)}" aria-hidden="true"></i>
            ${escapeHTML(skill.name)}${note}
        </li>`;
}

export function skillGroup(group, index = 0) {
    return `
        <div class="skill-group" data-reveal style="--reveal-delay: ${index * 0.1}s">
            <h3 class="skill-group__title">${escapeHTML(group.title)}</h3>
            <ul class="skill-group__list">
                ${group.skills.map(skillChip).join("")}
            </ul>
        </div>`;
}
