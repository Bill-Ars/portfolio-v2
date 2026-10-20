import { $, escapeHTML, renderList } from "../utils/dom.js";
import { profile, socials } from "../data/profile.js";
import { projects } from "../data/projects.js";
import { services } from "../data/services.js";
import { timeline } from "../data/experience.js";
import { skillGroups, highlightedTech } from "../data/skills.js";

import { serviceCard } from "../components/serviceCard.js";
import { timelineItem } from "../components/timelineItem.js";
import { skillGroup } from "../components/skillGroup.js";
import { contactItem } from "../components/contactItem.js";

// Preenche as secções "estáticas" a partir dos ficheiros de dados

function renderStats() {
    const technologies = new Set(
        skillGroups.flatMap((group) => group.skills.map((skill) => skill.name))
    );

    const stats = [
        { value: projects.length, suffix: "+", label: "Projectos" },
        { value: technologies.size, suffix: "", label: "Tecnologias" },
        { value: 100, suffix: "%", label: "Mobile first" },
    ];

    renderList($("[data-stats]"), stats, (stat) => `
        <li class="stat">
            <span class="stat__value" data-count="${stat.value}" data-suffix="${stat.suffix}">${stat.value}${stat.suffix}</span>
            <span class="stat__label">${escapeHTML(stat.label)}</span>
        </li>`);
}

function renderTechStrip() {
    renderList($("[data-tech-strip]"), highlightedTech, (tech) => `
        <li class="tech-strip__item">
            <i class="${escapeHTML(tech.icon)}" aria-hidden="true"></i> ${escapeHTML(tech.name)}
        </li>`);
}

function renderContactInfo() {
    const info = [
        { icon: "fa-solid fa-location-dot", label: "Localização", value: profile.location },
        { icon: "fa-solid fa-envelope", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
        { icon: "fa-solid fa-phone", label: "Telefone", value: profile.phone, href: `tel:${profile.phoneLink}` },
        { icon: "fa-solid fa-graduation-cap", label: "Formação", value: profile.education },
    ];

    const channels = [
        { icon: "fa-solid fa-envelope", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
        { icon: "fa-brands fa-whatsapp", label: "WhatsApp", value: profile.phone, href: profile.whatsapp },
        { icon: "fa-brands fa-linkedin-in", label: "LinkedIn", value: "Bill Arsénio", href: socials.find((s) => s.name === "LinkedIn")?.url },
    ];

    renderList($("[data-info-list]"), info, (item) => contactItem(item, "info"));
    renderList($("[data-contact-channels]"), channels, (item) => contactItem(item, "channel"));
}

function renderSocials() {
    renderList($("[data-socials]"), socials, (social) => `
        <li>
            <a href="${escapeHTML(social.url)}" aria-label="${escapeHTML(social.name)}"${social.url.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>
                <i class="${escapeHTML(social.icon)}" aria-hidden="true"></i>
            </a>
        </li>`);
}

export function renderSections() {
    renderStats();
    renderTechStrip();
    renderContactInfo();
    renderSocials();

    renderList($("[data-services]"), services, serviceCard);
    renderList($("[data-timeline]"), timeline, timelineItem);
    renderList($("[data-skills]"), skillGroups, skillGroup);

    const year = $("[data-year]");
    if (year) year.textContent = new Date().getFullYear();
}
