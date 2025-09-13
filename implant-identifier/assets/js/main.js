document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');
    const closeBtn = document.getElementById('close-btn');

    if (hamburger && nav && closeBtn) {
        hamburger.addEventListener('click', () => {
            const expanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !expanded);
            nav.classList.toggle('active');
        });

        closeBtn.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    }
});