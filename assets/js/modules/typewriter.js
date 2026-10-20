import { $, prefersReducedMotion } from "../utils/dom.js";

const TYPE_SPEED = 70;
const DELETE_SPEED = 35;
const PAUSE = 1800;

// Escreve e apaga, em ciclo, cada uma das frases recebidas
export function initTypewriter(phrases = []) {
    const target = $("[data-typewriter]");
    if (!target || !phrases.length || prefersReducedMotion()) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
        const phrase = phrases[phraseIndex];
        charIndex += deleting ? -1 : 1;
        target.textContent = phrase.slice(0, charIndex);

        let delay = deleting ? DELETE_SPEED : TYPE_SPEED;

        if (!deleting && charIndex === phrase.length) {
            deleting = true;
            delay = PAUSE;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = TYPE_SPEED * 4;
        }

        setTimeout(tick, delay);
    };

    // Começa a apagar a frase que já está no HTML
    charIndex = phrases[0].length;
    deleting = true;
    setTimeout(tick, PAUSE);
}
