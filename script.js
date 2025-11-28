function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

function enviarFormulario() {
    const msg = document.getElementById("feedback");
    msg.style.color = "#25d366";
    msg.textContent = "Mensagem enviada com sucesso!";

    setTimeout(() => {
        msg.textContent = "";
    }, 4000);

    return false;
}

// Animação suave ao rolar
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

