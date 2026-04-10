// Reveal dinâmico
const reveal = () => {
    document.querySelectorAll(".reveal").forEach((el, i) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 80) {
            setTimeout(() => el.classList.add("active"), (i % 2) * 100);
        }
    });
};
window.addEventListener("scroll", reveal);
window.onload = reveal;

// Efeito Magnético e Parallax de Fundo
document.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    
    // Blobs parallax (movimento sutil)
    const blob1 = document.querySelector('.blob-1');
    const blob2 = document.querySelector('.blob-2');
    if(blob1) blob1.style.transform = `translate(${x/60}px, ${y/60}px)`;
    if(blob2) blob2.style.transform = `translate(${-x/60}px, ${-y/60}px)`;

    // Glow cursor
    const glow = document.querySelector('.cursor-glow');
    if(glow) glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(56, 189, 248, 0.15) 0%, transparent 70%)`;

    // Botões magnéticos
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
        const rect = btn.getBoundingClientRect();
        const dist = Math.hypot(x - (rect.left + rect.width/2), y - (rect.top + rect.height/2));
        if (dist < 100) {
            btn.style.transform = `translate(${(x - (rect.left + rect.width/2)) * 0.3}px, ${(y - (rect.top + rect.height/2)) * 0.3}px)`;
        } else {
            btn.style.transform = `translate(0, 0)`;
        }
    });
});
