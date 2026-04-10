// Reveal dinâmico ao scroll
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
            // Pequeno atraso para itens na mesma linha (stagger)
            setTimeout(() => {
                el.classList.add("active");
            }, index % 2 * 100);
        }
    });
};

window.addEventListener("scroll", reveal);
window.onload = reveal;

// Cursor glow e Parallax suave nos blobs
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Glow do cursor
    const cursor = document.querySelector('.cursor-glow');
    if(cursor) {
        cursor.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(56, 189, 248, 0.15) 0%, transparent 70%)`;
    }

    // Parallax nos blobs de fundo
    const blob1 = document.querySelector('.blob-1');
    const blob2 = document.querySelector('.blob-2');
    if(blob1 && blob2) {
        blob1.style.transform = `translate(${x/50}px, ${y/50}px)`;
        blob2.style.transform = `translate(${-x/50}px, ${-y/50}px)`;
    }

    // Efeito Magnético em botões específicos
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    magneticBtns.forEach(btn => {
        const rect = btn.getBoundingClientRect();
        const btnX = rect.left + rect.width / 2;
        const btnY = rect.top + rect.height / 2;
        
        const dist = Math.hypot(x - btnX, y - btnY);
        
        if (dist < 100) {
            const moveX = (x - btnX) * 0.3;
            const moveY = (y - btnY) * 0.3;
            btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
            btn.style.transform = `translate(0, 0)`;
        }
    });
});
