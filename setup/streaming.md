---
title: Setting up for live streaming
layout: page
permalink: /setup/streaming
hide: true
---
<br>

# Setting up for live streaming

If you're going to be live streaming for an event, you'll need to set up OBS (Open Broadcasting Software) to allow you to connect to our system.

## Setting up OBS

1. Download and install [Open Broadcasting Software (OBS)](https://obsproject.com/)
2. Open OBS
3. Create a scene
4. Add a Display Capture or Window Capture source
5. Add an Audio Input Capture source for microphone
6. _macOS Only_, follow [this guide](https://obsproject.com/forum/resources/os-x-capture-audio-with-ishowu-audio-capture.505/) to capture system audio.
7. Use the OBS Auto-Configuration Wizard to find your ideal stream settings for your computer. It's under Tools->Auto-Configuration Wizard. Please use the test endpoint for setting this up. (See below!)
8. Open OBS settings to add the `Server` and `Stream Key` (see below)
9. Press the `Start Streaming` button

We will be sending you a Stream Key and Upload URL before your event.

Please start streaming at least **10 minutes** before your slot! This gives us a chance to start the recording properly and make sure everything is working. We will put your stream live at exactly the start of your slot slow. E.g. If the slot is 17:00 UTC, your feed will go live at exactly 17:00 UTC to the second. Make sure to have a clock (phone apps are good) to know when to start!


## What are stream keys & where do I find mine?

We'll send you your Stream Key beforehand. It will be made up of random letters and numbers, like a password. You'll also be given a username, password which will let you start streaming into our server!

<img src="/assets/img/setup/rtmp.png" height="600">

## Testing your live stream setup

We recommend that prior to the start of your slot, you test your live stream configuration. This is to check you are able to connect to the ingest server. Try the following with one of our members of staff:

  1. Follow either of the two guides above to configure your streaming setup
  2. Set your custom Server URL to the URL provided
  3. Press 'Start Streaming'
   
<!-- 
  4. Go to [https://geosmin.hack.productions/test](https://geosmin.hack.productions/test)
  5. Confirm that the video and audio you are expecting to be streamed is replayed in your browser -->

This is also a good time to figure out your ideal streaming configuration. If you're using **RTMP** you can try the [OBS Auto-Configuration Wizard](https://obsproject.com/wiki/OBS-Studio-Quickstart).

If you are on a slow connection, please lower your resolution and bitrate! You can find these in the [OBS Settings](https://obsproject.com/wiki/OBS-Studio-Quickstart).

Need help? Drop an email to [help@hack.productions](mailto:help@hack.productions) and we'll do our best to help!
