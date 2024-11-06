function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }

////////
$('.testimonial-slider').slick({
  centerMode: true,
  // centerPadding: '60px',
  slidesToShow: 4,
  arrows: false,
  autoplay:true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 880,
      settings: {
        arrows: false,
        centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
  