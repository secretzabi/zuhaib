    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("navbar");

    hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
    hamburger.setAttribute("aria-expanded", !expanded);
});