---
layout: events
title: Previous Events
hide: false
permalink: /events
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
	    		<a href="/assets/img/events{{ image | relative_url }}" target="_blank" rel="noopener noreferrer">
	    			<img class="icon" src="/assets/img/events{{ image | relative_url }}" alt="picture of {{ item.event }}" style="width:100%">
	    		</a>
	    	</div>
	    {% endfor %}
	    </div>
    {% endif %}
    {% if item.quotes %}
      <div class="av-quote">
  	    <h2> Testimonial </h2>
        {% for quote_item in item.quotes %}
    	    <blockquote>
    	    {% for text in quote_item.quote %}
    	    	<p>{{text}}</p>
    	    {% endfor %}
    	    <p>- {{quote_item.quote_author}}</p>
    	    </blockquote>
        {% endfor %}
      </div>
	{% endif %}
  </div>
  {%- endfor -%}
</div>
<br>
