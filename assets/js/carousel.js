document.addEventListener('DOMContentLoaded', () => {
  // Initialize Swiper carousels on the about page
  const swiperContainers = document.querySelectorAll('.about-pfp.swiper-container');
  if (swiperContainers.length > 0) {
    swiperContainers.forEach(container => {
      new Swiper(container, {
        // Optional parameters
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        // Re-initialize Swiper when it becomes visible
        observer: true,
        observeParents: true,
      });
    });
  }
});