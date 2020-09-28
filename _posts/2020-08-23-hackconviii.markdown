---
layout: post
title:  How we powered the MLH Hackcon VIII Main Stage
date:   2020-08-23 13:05:55 +0300
image:  /assets/images/blog/hackcon-viii.png
author: Will Russell
tags:   Digital Conferences
---

Major League Hacking runs an annual hackathon organiser conference every year called Hackcon. Typically they run it out of a summer camp on the east coast of the United States, and have a load of talks, workshops and activities throughout the weekend.

However, this year they were hit with the challenge of a global pandemic meaning the only way for the event to go ahead was by transforming to digital. This isn’t an easy task, especially by trying to replicate all the experiences that you would get at an in person event. However, there’s still a huge number of things you can do to provide that memorable experience!

One of the key aspects to many digital events is having a live stream that attendees can tune into for all the main content. With Hackcon normally having a mainstage of talks and workshops, a livestream made a lot of sense. After spending ages making the transition to digital, they decided to use a platform called Hopin for attendees to use to interact with the event. Hopin allows you to have a main stage, where you can stream your own video into it. This is great if you have the infrastructure to play all your content smoothly without trouble. MLH came to us 3 days before the event asking if we could get it all together in time. They wanted to be able to play 16 blocks of video with live presenters, over the weekend. The small deadline wasn’t easy, but we weren’t going to let that stop us from delivering a memorable experience to attendees from all over the world.

## Dynamic Graphics

One of the important aspects of a livestream is making the content engaging and interactive with the audience. As part of our livestream graphics pack, we build 2 custom holding views, as well as an overlay for when content is being played. Using the assets from the Hackcon VIII website, we were able to create 2 different holding views, one a basic one with the logo and background, and another including a countdown which we could use to hype people up for the next event happening on the mainstage.

We also built a notification layer, which sits above both holding views, and the overlay. This allows us to send messages onto the screen, as well as the currently playing song for viewers to see, without obscuring the presenter. This is really useful if we need to add some extra information to the screen, like a hashtag to help people engage with it.

The last thing to polish it all off is a custom stinger animation to play when we switch views. We built a MLH logo that flowed onto the screen, allowing us to change the feed when the screen was filled. The stinger really stands out over a typical fade or cut, really helping tie it all together.

## Live Presenters

It’s always difficult to bring in live presenters when they are all in different locations, and potentially different time zones. Due to the tight deadline, we opted to use MLH’s StreamYard account as most of the live presenters were used to it, and it would all them to bring in guest speakers.

We had StreamYard sending its feed into our server, which allowed us to put it into our overlay view to make it look nicer. Additionally, we were able to improve the quality by having a stinger transition between the holding view and live presenters, which isn’t possible with StreamYard on its own.

This solution wasn’t ideal, as StreamYard has a delay before hitting our server, as well as making it difficult to communicate with the presenters in real time without having them read messages, and us having to type while controlling other aspects.

Now we don’t like to settle for this level of quality, so we decided to build our own custom platform to allow us to bring in live presenters. This will give presenters a countdown for when they’re going to be live, as well as work entirely inside of the web browser, so people can connect from anything with a webcam. We’re hoping to deploy this towards the end of 2020.

## Summary

Hackcon VIII was a pretty wild event for us, but we had an absolute blast doing it. If you’re looking to level up your hackathon or conference, get in touch! We’d love to work with you to create a unique experience that everyone can enjoy!
