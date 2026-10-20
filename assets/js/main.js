// Ponto de entrada do JavaScript.
// 1) renderiza o conteúdo a partir dos dados
// 2) liga os comportamentos (menu, animações, formulário...)

import { profile } from "./data/profile.js";

import { renderSections } from "./modules/sections.js";
import { initProjects } from "./modules/projects.js";
import { initHeader } from "./modules/header.js";
import { initScrollSpy } from "./modules/scrollSpy.js";
import { initReveal } from "./modules/reveal.js";
import { initTypewriter } from "./modules/typewriter.js";
import { initCounters } from "./modules/counters.js";
import { initContactForm } from "./modules/contactForm.js";
import { initBackToTop } from "./modules/backToTop.js";

renderSections();
initProjects();

initHeader();
initScrollSpy();
initReveal();
initTypewriter(profile.roles);
initCounters();
initContactForm(profile.email);
initBackToTop();

window.__portfolioReady = true;
