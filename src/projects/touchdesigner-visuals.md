---
tags: [project, hide-gallery]
layout: page
title: TouchDesigner visuals for live set
date: 2024-06-29
---

Live visuals created in **TouchDesigner** for my first electronic music performance.

I created the visuals for a dark ambient live set. From the start, I knew I wanted black and white imagery with random, symmetrical shapes. While experimenting, I quickly gravitated toward using Noise operators — sometimes directly with Edge or Emboss effects, and other times to distort or displace geometries. In one instance, I used a photo with a kaleidoscope effect to get the right look.

The live set had six tracks, so I made six corresponding video loops. Each was designed to loop seamlessly, with the changing parameters — whether periodic or random — matching at the start and end. This way, they could repeat indefinitely without needing transitions, since track lengths in a live set are unpredictable.

I brought the videos into another TouchDesigner project and used a Switch TOP to toggle between them. This was controlled by MIDI messages sent from Ableton Live via a MIDI In CHOP. At the start of each new track, I triggered a Program Change message from an empty MIDI clip, which handled the video switching.

<div class="clips">

    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gpbtuOgcxII?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZD-T2qXWMF8?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/9k7Wjm4EtuI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Xvl4bYdq_g8?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gW1OMoiOaq0?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rwJ0l_amdZc?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</div>