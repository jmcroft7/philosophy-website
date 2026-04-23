document.addEventListener('DOMContentLoaded', () => {
  const tabContainers = document.querySelectorAll('.tab-container');
  if (!tabContainers.length) return;

  tabContainers.forEach(container => {
    const tabNav = container.querySelector('.tab-nav');
    if (!tabNav) return;

    tabNav.addEventListener('click', (e) => {
      const clickedTab = e.target.closest('.tab-link');
      if (!clickedTab) return;

      const tabLinks = tabNav.querySelectorAll('.tab-link');
      const tabContents = container.querySelectorAll('.tab-content');
      const tabId = clickedTab.dataset.tab;
      const correspondingContent = container.querySelector(`#${tabId}`);

      tabLinks.forEach(link => link.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      clickedTab.classList.add('active');
      if (correspondingContent) {
        correspondingContent.classList.add('active');
      }
    });
  });
});