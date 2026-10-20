import { escapeHTML } from "../utils/dom.js";

// Linha "ícone + rótulo + valor", usada no cartão Sobre e na secção Contacto.
// variant -> "info" (cartão Sobre) | "channel" (secção Contacto, em cartão próprio)
export function contactItem({ icon, label, value, href }, variant = "info") {
    const valueTag = href
        ? `<a class="${variant}-item__value" href="${escapeHTML(href)}"${href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${escapeHTML(value)}</a>`
        : `<span class="${variant}-item__value">${escapeHTML(value)}</span>`;

    const wrapperClass = variant === "channel" ? "card channel" : "info-item";

    return `
        <li class="${wrapperClass}">
            <span class="icon-box"><i class="${escapeHTML(icon)}" aria-hidden="true"></i></span>
            <div>
                <span class="${variant}-item__label">${escapeHTML(label)}</span>
                ${valueTag}
            </div>
        </li>`;
}
