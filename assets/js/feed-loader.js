document.addEventListener('DOMContentLoaded', () => {
  const feedContainer = document.getElementById('substack-feed');
  if (!feedContainer) {
    return;
  }

  const feedUrl = 'https://latelythinking.substack.com/feed';
  // Using a CORS proxy to fetch the feed on the client-side.
  const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`;

  fetch(proxyUrl)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data.contents, "text/xml");
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
          <li>
            <span class="post-meta">${formattedDate}</span>
            <h3><a class="post-link" href="${link}" target="_blank" rel="noopener noreferrer">${title}</a></h3>
          </li>
        `;
      }

      feedContainer.innerHTML = feedHtml || '<li>Could not load posts.</li>';
    })
    .catch(error => {
      console.error('Error fetching Substack feed:', error);
      feedContainer.innerHTML = '<li>There was an error loading the feed.</li>';
    });
});