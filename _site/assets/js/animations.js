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

  // GSAP Reveal Animations
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Reveal headings
    gsap.utils.toArray('h1, h2').forEach(heading => {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

    // Image Hover Effect: Shrink Container, Zoom Image
    gsap.utils.toArray('.intro-image, .about-staggered-image').forEach(container => {
      const img = container.querySelector('img');
      if (!img) return;

      container.addEventListener('mouseenter', () => {
        gsap.to(container, {
          scale: 0.96,
          duration: 0.6,
          ease: 'power2.out'
        });
        gsap.to(img, {
          scale: 1.12,
          duration: 0.6,
          ease: 'power2.out'
        });
      });

      container.addEventListener('mouseleave', () => {
        gsap.to(container, {
          scale: 1,
          duration: 0.6,
          ease: 'power2.out'
        });
        gsap.to(img, {
          scale: 1,
          duration: 0.6,
          ease: 'power2.out'
        });
      });
    });

    // Magnetic Button Effect for .pill-btn
    gsap.utils.toArray('.pill-btn').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)'
        });
      });
    });

    // GSAP Background & Text Color Transitions for Homepage Sections
    const panels = gsap.utils.toArray('.gsap-panel');
    panels.forEach((panel, i) => {
      const bgColor = panel.getAttribute('data-bg-color');
      const textColor = panel.getAttribute('data-text-color');
      if (!bgColor) return;

      ScrollTrigger.create({
        trigger: panel,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => {
          gsap.to("body", { backgroundColor: bgColor, duration: 0.8, ease: "power2.inOut" });
          if (textColor) gsap.to(panel, { color: textColor, duration: 0.8, ease: "power2.inOut" });
        },
        onEnterBack: () => {
          gsap.to("body", { backgroundColor: bgColor, duration: 0.8, ease: "power2.inOut" });
          if (textColor) gsap.to(panel, { color: textColor, duration: 0.8, ease: "power2.inOut" });
        }
      });

      // Special case: Revert to default colors when scrolling back to the top
      if (i === 0) {
        ScrollTrigger.create({
          trigger: panel,
          start: "top 80%",
          onLeaveBack: () => {
            gsap.to("body", { backgroundColor: "var(--bg-color)", duration: 0.8, ease: "power2.inOut" });
            gsap.to(panel, { color: "inherit", duration: 0.8, ease: "power2.inOut" });
          }
        });
      }
    });
  }

  if (typeof Typed !== 'undefined' && document.getElementById('typed-strings')) {
    const typed = new Typed('#typed-strings', {
      strings: ["Hello, I'm<br><span class='intro-name'>Johnathan Croft.</span>"],
      typeSpeed: 50,
      showCursor: true
    });
  }
});