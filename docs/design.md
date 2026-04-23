# Website Design Document

## Technology Stack
- **Static Site Generator:** Jekyll (Native GitHub Pages support)
- **Content Format:** Markdown (`.md`)
- **Styling:** Vanilla CSS with CSS Variables (Custom Properties) for easy theming (e.g., light/dark mode) and maintaining a clean, dependency-free architecture.
- **Interactivity:** Minimal Vanilla JavaScript (if required for simple interactions like mobile menus).
- **RSS/Atom Feed:** `jekyll-feed` plugin.
- **SEO:** `jekyll-seo-tag` plugin.

## Folder Structure
```text
.
├── _data/                 # Reusable data files (e.g., projects, navigation)
├── _includes/             # Reusable HTML components
│   ├── header.html        # Site navigation and branding
│   ├── footer.html        # Footer links and copyright
│   └── head.html          # HTML <head> content, meta tags, CSS links
├── _layouts/              # Page templates
│   ├── default.html       # Base wrapper for all pages
│   ├── page.html          # Standard page layout (About, Portfolio)
│   └── post.html          # Blog post layout
├── _posts/                # Blog content (Markdown files)
│   └── YYYY-MM-DD-title.md
├── assets/                # Static assets
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── images/            # Images and logos
│   └── js/                # Scripts (if needed)
├── docs/                  # Project documentation
│   └── design.md          # This file
├── index.html             # Homepage
├── blog.html              # Blog index page (list of posts)
├── about.md               # About page content
├── portfolio.md           # Portfolio page content
├── _config.yml            # Main Jekyll configuration
└── Gemfile                # Ruby dependencies for local development
```

## Wireframes

### 1. Global Layout (All Pages)
```text
+-------------------------------------------------------------+
| images/global/logo.png             Home  About  Blog  Work  |
+-------------------------------------------------------------+
|                                                             |
|                                                             |
|                      [ CONTENT AREA ]                       |
|                                                             |
|                                                             |
+-------------------------------------------------------------+
| © 2026 Your Name.                        [RSS] [GitHub]     |
+-------------------------------------------------------------+
```

### 2. Home Page (`index.html`)
```text
+-------------------------------------------------------------+
|                                                             |
|  Hello, I'm [Name].                                         |
|  I am a [Profession/Interest] based in [Location].          |
|                                                             |
|  [ Recent Writing ]           [ Featured Work ]             |
|  - Post Title 1               - Project Alpha               |
|  - Post Title 2               - Project Beta                |
|                                                             |
+-------------------------------------------------------------+
```

### 3. Blog Index (`blog.html`)
```text
+-------------------------------------------------------------+
| Writing                                                     |
|                                                             |
| Oct 12, 2026                                                |
| THE TITLE OF THE FIRST BLOG POST                            |
| A brief excerpt or summary of the blog post goes here...    |
|                                                             |
| Sep 05, 2026                                                |
| ANOTHER INTERESTING POST                                    |
| Another excerpt here...                                     |
|                                                             |
| [ Pagination: Previous | Next ]                             |
+-------------------------------------------------------------+
```

### 4. Blog Post (`_layouts/post.html`)
```text
+-------------------------------------------------------------+
| THE TITLE OF THE BLOG POST                                  |
| Published on October 12, 2026 • By [Author]                 |
| ----------------------------------------------------------- |
|                                                             |
| Full content of the blog post.                              |
| Paragraphs, headings, code blocks, images...                |
|                                                             |
|                                                             |
| [ Back to Blog ]                                            |
+-------------------------------------------------------------+
```

### 5. Portfolio (`portfolio.md`)
```text
+-------------------------------------------------------------+
| Selected Work                                               |
|                                                             |
| +-----------------+  +-----------------+  +-----------------+
| | Project Alpha   |  | Project Beta    |  | Project Gamma   |
| | Description of  |  | Description of  |  | Description of  |
| | the project.    |  | the project.    |  | the project.    |
| | [Link]          |  | [Link]          |  | [Link]          |
| +-----------------+  +-----------------+  +-----------------+
+-------------------------------------------------------------+
```

## Styling Strategy (CSS)
- **Typography-First:** Utilizing system fonts (e.g., `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial`) for a clean, modern, and highly legible appearance.
- **CSS Grid/Flexbox:** For layout structural elements (header, footer, portfolio grid).
- **Responsive Design:** Mobile-first media queries to ensure excellent readability on all devices.
- **Variables:** Define a root theme in `style.css` for easy maintenance:
  ```css
  :root {
      --bg-color: #ffffff;
      --text-color: #333333;
      --accent-color: #0056b3;
      --font-main: -apple-system, sans-serif;
      --max-width: 800px; /* Constrain reading width */
  }
  ```
