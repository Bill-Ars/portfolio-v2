import { $ } from "../utils/dom.js";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rules = {
    name: (value) => (value.length >= 2 ? "" : "Indique o seu nome."),
    email: (value) => (EMAIL_PATTERN.test(value) ? "" : "Indique um email válido."),
    message: (value) => (value.length >= 10 ? "" : "A mensagem deve ter pelo menos 10 caracteres."),
};

function showError(field, message) {
    const wrapper = field.closest(".form-field");
    let error = wrapper.querySelector(".form-error");

    wrapper.classList.toggle("has-error", Boolean(message));
    field.setAttribute("aria-invalid", String(Boolean(message)));

    if (!message) {
        error?.remove();
        return;
    }

    if (!error) {
        error = document.createElement("span");
        error.className = "form-error";
        error.id = `${field.id}-error`;
        field.setAttribute("aria-describedby", error.id);
        wrapper.append(error);
    }
    error.textContent = message;
}

function validate(form) {
    let firstInvalid = null;

    Object.entries(rules).forEach(([name, rule]) => {
        const field = form.elements[name];
        const message = rule(field.value.trim());
        showError(field, message);
        if (message && !firstInvalid) firstInvalid = field;
    });

    firstInvalid?.focus();
    return !firstInvalid;
}

// Formulário de contacto: valida os campos e abre o cliente de email
// já preenchido (não precisa de servidor).
export function initContactForm(recipient) {
    const form = $("[data-contact-form]");
    const status = $("[data-form-status]");
    if (!form) return;

    // Limpa o erro de um campo assim que o utilizador o corrige
    form.addEventListener("input", (event) => {
        const rule = rules[event.target.name];
        if (rule && event.target.getAttribute("aria-invalid") === "true") {
            showError(event.target, rule(event.target.value.trim()));
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        status.className = "form-status";

        if (!validate(form)) {
            status.textContent = "Verifique os campos assinalados.";
            status.classList.add("is-error");
            return;
        }

        const { name, email, subject, message } = form.elements;
        const mailSubject = subject.value.trim() || `Contacto via portfólio — ${name.value.trim()}`;
        const body = `${message.value.trim()}\n\n— ${name.value.trim()} (${email.value.trim()})`;

        window.location.href =
            `mailto:${recipient}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;

        status.textContent = "A abrir o seu email... Obrigado pelo contacto!";
        status.classList.add("is-success");
        form.reset();
    });
}
