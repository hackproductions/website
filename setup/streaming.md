---
title: Setting up for live streaming
layout: plain
permalink: /setup/streaming
hide: true
---

## Setting up for live streaming

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


We will be sending you a Stream Key and Upload URL by Hack Productions before your event.

Please start streaming at least **10 minutes** before your workshop! This gives us a chance to start the recording properly and make sure everything is working. We will put your stream live at exactly the start of your workshop slow. E.g. If the slot is 17:00 UTC, your feed will go live at exactly 17:00 UTC to the second. Make sure to have a clock (phone apps are good) to know when to start!

<img src="https://hackquarantine.com/assets/img/workshops/obs_settings.png" height="400">

## What are stream keys & where do I find mine?

TBC

## Testing your Livestream setup

We recommend that prior to the start of your workshop, you test your livestream configuration is able to connect to the ingest server using the following guide:

NOTE: your stream key is only valid *1 hour before*, during and *1 hour after* your workshop

  1. Follow either of the two guides above to configure your streaming setup
  2. Set your custom RTMP url to rtmp://geosmin.hack.productions/test
  3. Press 'Start Streaming'
  3. Go to [https://geosmin.hack.productions/test](https://geosmin.hack.productions/test)
  4. Confirm that the video and audio you are expecting to be streamed is replayed in your browser

As mentioned above, you'll only be able to test your stream *1 hour* before your due to go live.

This is also a good time to figure out your ideal streaming configuration with the OBS Auto-Configuration Wizard.

If you are on a slow connection, please lower your resolution and bitrate!
