---
layout: page
title: Portfolio
permalink: /portfolio/
---

Here is a selection of my recent work and projects.

<div class="tab-container">
  <div class="tab-nav">
    <button class="tab-link active" data-tab="coding">Coding</button>
    <button class="tab-link" data-tab="philosophy">Philosophy</button>
  </div>

  <div id="coding" class="tab-content active">
    <div class="compact-grid-multi">
      {% assign code_items = site.data.portfolio | where: "type", "code" %}
      {% for item in code_items %}
      <div class="compact-item">
        <div class="compact-info">
          <span class="compact-title">{{ item.title }}</span>
          <p class="compact-desc">{{ item.description }}</p>
        </div>
        <div class="compact-action">
          {% if item.link and item.link != "Internal" and item.link != "#" %}
            <a target="_blank" rel="noopener noreferrer" href="{{ item.link }}" class="pill-btn" style="padding: 0.5rem 1.5rem; font-size: 0.8rem; margin: 0;">View Repository</a>
          {% else %}
            <span class="portfolio-badge" style="margin: 0;">Protected Work</span>
          {% endif %}
        </div>
      </div>
      {% endfor %}
    </div>
  </div>

  <div id="philosophy" class="tab-content">
    <div class="compact-grid">
      {% assign phil_items = site.data.portfolio | where: "type", "philosophy" %}
      {% for item in phil_items %}
      <div class="compact-item">
        <div class="compact-info">
          <span class="compact-title">{{ item.title }}</span>
          <p class="compact-desc">{{ item.description }}</p>
        </div>
        <div class="compact-action">
          {% if item.link and item.link != "Internal" and item.link != "#" %}
            <a target="_blank" rel="noopener noreferrer" href="{{ item.link }}" class="pill-btn" style="padding: 0.5rem 1.5rem; font-size: 0.8rem; margin: 0;">Read Essay</a>
          {% else %}
            <span class="portfolio-badge" style="margin: 0;">Protected Work</span>
          {% endif %}
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>