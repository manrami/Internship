// Navbar shrink on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active-link'));
            const id = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active-link');
        }
    });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// Scroll reveal animation for cards
const cards = document.querySelectorAll('.skill-card, .project-card, .edu-box, .contact-item');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            setTimeout(() => {
                entry.target.style.transition = 'all 0.5s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, i * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => revealObserver.observe(card));

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
