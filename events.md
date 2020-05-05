---
layout: events
title: Past Events
---

<div class="av-container">
  {%- for item in site.data.events -%}
  <div class="item">
    <h1>Event: <a href="{{item.link}}" target="_blank" rel="noopener noreferrer">{{item.title}}</a></h1>
    <h2>Date: {{item.date}} </h2>
    <h2>Role: {{item.role}} </h2>

    <h2>Details: {{item.description}} </h2>

    {% if item.images %}
	    {% for image in item.images %}
	    	<img class="icon" src="/assets/img/events/photos/{{ image | relative_url }}" alt="picture of {{ item.event }}">
	    {% endfor %}
    {% endif %}

    {% if item.quote %}
	    <h2> Testimonial </h2>
	    <blockquote>
	    {% for text in item.quote %}
	    	<p>{{text}}</p>
	    {% endfor %}
	    <p>- {{item.quote_author}}</p>
	    </blockquote>
	{% endif %}
  </div>
  {%- endfor -%}
</div>