const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const typewriterEl = document.getElementById('typewriter');
const fullText = "Economic Informatics Student | University of Tirana";
let charIndex = 0;

function typeWriter() {
    if (charIndex < fullText.length) {
        typewriterEl.textContent += fullText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 45);
    }
}

typeWriter();