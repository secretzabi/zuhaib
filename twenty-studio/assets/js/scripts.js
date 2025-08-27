// Mega Menu
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".toggle-btn").forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            const megaMenu = this.closest(".megamenu-section").querySelector(".mega-menu");
            const isOpen = this.getAttribute("aria-expanded") === "true";

            megaMenu.style.display = isOpen ? "none" : "block";
            this.setAttribute("aria-expanded", !isOpen);
        });
    });

    // Product page main carousel thumbs
    const carouselElement = document.querySelector('#mainCarousel');
    const thumbnails = document.querySelectorAll('.thumb');
    if (carouselElement) {
        carouselElement.addEventListener('slid.bs.carousel', function (event) {
            thumbnails.forEach(t => t.classList.remove('active'));
            thumbnails[event.to]?.classList.add('active');
        });
    }

    // Favorite Button
    document.querySelectorAll(".btn-favorite").forEach(btn => {
        btn.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });

    // Keen Sliders
    if (document.querySelector("#similar-keen-slider")) {
        var similarSlider = new KeenSlider("#similar-keen-slider", {
            mode: "free-snap",
            slides: { perView: 1, spacing: 16 },
            breakpoints: {
                "(min-width: 640px)": { slides: { perView: 3, spacing: 16 } },
                "(min-width: 1024px)": { slides: { perView: 4, spacing: 20 } },
                "(min-width: 1440px)": { slides: { perView: 6, spacing: 16 } },
            }
        });
    }

    if (document.querySelector("#my-keen-slider")) {
        var productSlider = new KeenSlider("#my-keen-slider", {
            mode: "free-snap",
            slides: { perView: 1, spacing: 16 },
            breakpoints: {
                "(min-width: 640px)": { slides: { perView: 2, spacing: 15 } },
                "(min-width: 1024px)": { slides: { perView: 3, spacing: 20 } },
                "(min-width: 1440px)": { slides: { perView: 4, spacing: 32 } },
            }
        });
    }

    if (document.querySelector("#video-keen-slider")) {
        var videoSlider = new KeenSlider("#video-keen-slider", {
            mode: "free-snap",
            slides: { perView: 1, spacing: 16 },
            breakpoints: {
                "(min-width: 640px)": { slides: { perView: 2, spacing: 15 } },
                "(min-width: 1024px)": { slides: { perView: 3, spacing: 20 } },
                "(min-width: 1440px)": { slides: { perView: 5, spacing: 32 } },
            }
        });
    }

    // Youtube Modal
    var videoModal = document.getElementById('videoModal');
    var videoFrame = document.getElementById('videoFrame');
    if (videoModal) {
        videoModal.addEventListener('show.bs.modal', function (event) {
            var button = event.relatedTarget;
            var videoUrl = button.getAttribute('data-bs-video');
            videoFrame.src = videoUrl + "?autoplay=1";
        });

        videoModal.addEventListener('hidden.bs.modal', function () {
            videoFrame.src = "";
        });
    }
});
