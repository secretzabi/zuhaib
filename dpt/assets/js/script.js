    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("navbar");

    hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
    hamburger.setAttribute("aria-expanded", !expanded);
});

    function startPracticing(){
        const savedState = localStorage.getItem('userState');

        if (savedState) {
        // If we already know the user’s state → go there
        window.location.href = savedState;
        return;
    }

        // Otherwise, fallback to California for first-time visitors
        window.location.href = 'state-california.html';

        // In the background, try to detect state for next time
        fetch('https://ipapi.co/json/')
        .then(r => r.json())
        .then(d => {
        const stateMap = {
        'CA': 'state-california.html',
        'TX': 'state-texas.html'
    };
        if (d.region_code && stateMap[d.region_code]) {
        localStorage.setItem('userState', stateMap[d.region_code]);
    }
    })
        .catch(() => {});
    }
