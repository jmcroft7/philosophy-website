document.addEventListener('DOMContentLoaded', function() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  const panels = document.querySelectorAll('.gsap-panel');
  if (panels.length === 0) return;

  // Reset background color when scrolling back up past the panels
  const introSection = document.querySelector('.home-columns');
  if (introSection) {
    ScrollTrigger.create({
      trigger: introSection,
      start: "bottom 50%",
      onEnterBack: () => {
        // Clear the inline style so it falls back to the CSS definition
        gsap.to("html", { "--bg-color": "", duration: 0.8 }); 
      }
    });
  } else {
    // Fallback if home-columns isn't found
    ScrollTrigger.create({
      trigger: "body",
      start: "top -100px",
      onEnterBack: () => {
        gsap.to("html", { "--bg-color": "", duration: 0.8 }); 
      }
    });
  }

  // Trigger color changes for each panel
  panels.forEach((panel) => {
    const color = panel.getAttribute('data-bg-color');
    if (color) {
      ScrollTrigger.create({
        trigger: panel,
        start: "top 60%", 
        end: "bottom 40%",
        onEnter: () => gsap.to("html", { "--bg-color": color, duration: 0.8 }),
        onEnterBack: () => gsap.to("html", { "--bg-color": color, duration: 0.8 })
      });
    }
  });
});
