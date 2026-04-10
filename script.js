// Efeito de revelação ao scroll
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", reveal);
window.onload = reveal;

// Efeito de brilho seguindo o mouse
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor-glow');
    if(cursor) {
        cursor.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(56, 189, 248, 0.1) 0%, transparent 70%)`;
    }
});