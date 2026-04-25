document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) {
    return;
  }

  const htmlEl = document.documentElement;

  toggleBtn.addEventListener('click', () => {
    if (htmlEl.classList.contains('dark-mode')) {
      htmlEl.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      htmlEl.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
  });
});