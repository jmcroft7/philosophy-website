document.addEventListener('DOMContentLoaded', () => {
  // Initialize Cuberto Mouse Follower
  if (typeof MouseFollower !== 'undefined') {
    const cursor = new MouseFollower({
        // The container element is the area where the cursor is active.
        container: document.body,
        // You can adjust the speed and easing for different effects.
        speed: 0.8,
        // Skewing effect on movement.
        skewing: 1
    });
  }

  // Example GSAP animation for the site logo
  if (typeof gsap !== 'undefined') {
    gsap.from('.site-logo', {
      duration: 1,
      opacity: 0,
      y: -20,
      ease: 'power3.out'
    });
  }

  // Initialize Typed.js on the homepage
  if (typeof Typed !== 'undefined' && document.getElementById('typed-strings')) {
    const typed = new Typed('#typed-strings', {
      strings: ["Hello, I'm <span class='intro-name'>Johnathan Croft.</span>"],
      typeSpeed: 50,
      showCursor: true
    });
  }

  // Initialize Typed.js on the about page
  if (typeof Typed !== 'undefined' && document.getElementById('typed-summary')) {
    const typed = new Typed('#typed-summary', {
      strings: ["About me <span class='intro-name'>professionally</span>"],
      typeSpeed: 50,
      showCursor: true
    });
  }

  // Initialize Typed.js on the personal about page tab
  if (typeof Typed !== 'undefined' && document.getElementById('typed-personal-summary')) {
    const typed = new Typed('#typed-personal-summary', {
      strings: ["About me <span class='intro-name'>personally</span>"],
      typeSpeed: 50,
      showCursor: true
    });
  }
});