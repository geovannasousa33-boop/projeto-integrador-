// MENU MOBILE ------------------------------
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}

// FORMULÁRIO ------------------------------
function enviarFormulario() {
    const feedback = document.getElementById("feedbackMsg");

    feedback.style.color = "#25d366";
    feedback.textContent = "Mensagem enviada com sucesso!";

    setTimeout(() => {
        feedback.textContent = "";
    }, 4000);

    return false; // evita refresh da página
}

// ANIMAÇÃO SUAVE DE SCROLL ------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// APARIÇÃO ANIMADA AO ROLAR -----------------
const elements = document.querySelectorAll(".card, .sobre-content, .grid-galeria img");

function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerBottom) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

// estilo inicial
elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.8s ease";
});

window.addEventListener("scroll", animateOnScroll);
animateOnScroll();
