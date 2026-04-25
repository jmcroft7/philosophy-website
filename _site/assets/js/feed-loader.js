document.addEventListener('DOMContentLoaded', () => {
  const feedContainer = document.getElementById('substack-feed');
  if (!feedContainer) {
    return;
  }

  const feedUrl = 'https://latelythinking.substack.com/feed';
  const proxies = [
    `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`,
    `https://corsproxy.io/?${encodeURIComponent(feedUrl)}`
  ];

  async function fetchFeed(url, isJsonProxy = true) {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok.');
    if (isJsonProxy) {
      const data = await response.json();
      return data.contents;
    } else {
      return await response.text();
    }
  }

  async function loadFeed() {
    let feedData = null;

    // Try primary proxy
    try {
      feedData = await fetchFeed(proxies[0], true);
    } catch (e) {
      console.warn('Primary proxy failed, trying fallback...');
      try {
        feedData = await fetchFeed(proxies[1], false);
      } catch (e2) {
        console.error('All proxies failed:', e2);
      }
    }

    if (feedData) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(feedData, "text/xml");
      const items = xmlDoc.querySelectorAll("item");
      let feedHtml = '';
      
      // Display the latest 3 posts
      for (let i = 0; i < items.length && i < 3; i++) {
        const item = items[i];
        const title = item.querySelector("title").textContent;
        const link = item.querySelector("link").textContent;
        const pubDate = new Date(item.querySelector("pubDate").textContent);
        const formattedDate = pubDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

        feedHtml += `
          <li data-hover-color="#f0f7ff">
            <span class="post-meta">${formattedDate}</span>
            <h3><a class="post-link" href="${link}" target="_blank" rel="noopener noreferrer">${title}</a></h3>
          </li>
        `;
      }

      feedContainer.innerHTML = feedHtml || '<li>Could not find any posts.</li>';
    } else {
      feedContainer.innerHTML = '<li>Unable to load feed. <a href="https://latelythinking.substack.com" target="_blank">Visit Substack directly &rarr;</a></li>';
    }
  }

  loadFeed();
});