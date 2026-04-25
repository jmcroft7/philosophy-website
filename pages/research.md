---
layout: page
title: Research
permalink: /research/
---

This is a curated collection of research, tools, and information that I find useful or insightful.

<div class="tab-container">
  <div class="tab-nav">
    <button class="tab-link active" data-tab="articles">Articles & Papers</button>
    <button class="tab-link" data-tab="tools">Tools & Resources</button>
    <button class="tab-link" data-tab="notes">Notes</button>
  </div>

  <div id="articles" class="tab-content active">
    <div class="compact-grid">
      {% if site.data.research.articles %}
        {% for item in site.data.research.articles %}
        <div class="compact-item">
          <div class="compact-info">
            <span class="compact-title">{{ item.title }}</span>
            <p class="compact-desc">{{ item.description }}</p>
          </div>
          <div class="compact-action">
            <a target="_blank" rel="noopener noreferrer" href="{{ item.link }}" class="pill-btn" style="padding: 0.5rem 1.5rem; font-size: 0.8rem; margin: 0;">Read</a>
          </div>
        </div>
        {% endfor %}
      {% else %}
        <p>No articles added yet.</p>
      {% endif %}
    </div>
  </div>

  <div id="tools" class="tab-content">
    <div class="compact-grid">
      {% if site.data.research.tools %}
        {% for item in site.data.research.tools %}
        <div class="compact-item">
          <div class="compact-info">
            <span class="compact-title">{{ item.title }}</span>
            <p class="compact-desc">{{ item.description }}</p>
          </div>
          <div class="compact-action">
            <a target="_blank" rel="noopener noreferrer" href="{{ item.link }}" class="pill-btn" style="padding: 0.5rem 1.5rem; font-size: 0.8rem; margin: 0;">View</a>
          </div>
        </div>
        {% endfor %}
      {% else %}
        <p>No tools added yet.</p>
      {% endif %}
    </div>
  </div>

  <div id="notes" class="tab-content">
    <p>Research notes and philosophical reflections will be shared here soon.</p>
  </div>
</div>
