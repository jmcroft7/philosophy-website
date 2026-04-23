document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitch = document.getElementById('theme-toggle');
  if (!toggleSwitch) {
    return;
  }

  const htmlEl = document.documentElement;

  // Sync toggle state with current theme
  if (htmlEl.classList.contains('dark-mode')) {
    toggleSwitch.checked = true;
  }

  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
      htmlEl.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlEl.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
});