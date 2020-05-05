---
layout: events
title: Past Events
link: /events
---

<div class="av-container">
  {%- for item in site.data.events -%}
  <div class="av-item">
    <div style="clear: both">
    	<h1 style="float: left"><a href="{{item.link}}" target="_blank" rel="noopener noreferrer">{{item.title}}</a></h1> 
    	<h3 style="float: left; padding-left: 10px; padding-top: 5px;">|  {{item.date}} | {{item.role}}</h3>
	</div>

    <h4>{{item.description}}</h4>

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
  <br/>
  {%- endfor -%}
</div>