---
layout: events
title: Past Events
link: /events
---

<div class="av-container">
  {%- for item in site.data.events -%}
  <div class="av-item">
    <div class="av-heading">
    	<h1><a href="{{item.link}}" target="_blank" rel="noopener noreferrer">{{item.title}}</a></h1>
    	<h4>{{item.date}} | {{item.role}}</h4>
	</div>

    <p>{{item.description}}</p>

    {% if item.images %}
    	<div class="av-photo-row">
	    {% for image in item.images %}
	    	<div class="av-photo-column">
	    		<img class="icon" src="/assets/img/events/{{ image | relative_url }}" alt="picture of {{ item.event }}" style="width:100%">
	    	</div>
	    {% endfor %}
	    </div>
    {% endif %}
    <br/>
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
