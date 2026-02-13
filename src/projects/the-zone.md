---
tags: [project, hide-gallery]
title: "The Zone: Crafting a Narrative with CSS and Sound"
layout: page
date: 2026-02-13
---

There is a unique satisfaction in flipping an analog switch. The mechanical click and tactile feedback are things digital interfaces can’t replicate. Still, I was curious how close I could get using only CSS.

<img src="/img/the-zone/thumbnail.jpg" class="interstitial">

The project began as a simple sketch – I designed a button, shared a screenshot on social media, and intended to move on. However, I couldn’t stop thinking about what was missing from that frame: the rest of the dashboard. What kind of machine was this? What was its purpose? Could I build a narrative behind a single toggle? I started jotting down ideas, and about two weeks later, **“The Zone”** was born.

## The Technical Foundation

At its core, this is a tech demo. I wanted to build a complete environment, a “machine” built around the buttons, featuring a CRT display, LED indicators, a weathered metal faceplate, and a typewritten manual. Everything is built with HTML, CSS, and JavaScript, with only a few texture images used for backgrounds.

I used the **Web Audio API** for the interface and ambient sounds. Using oscillators, filters, sample buffers, and waveshapers, I built a modular interface that allowed me to route sources and modulators like a real analog modular synth.

The background plate and the CRT noise overlay were drawn using the **Canvas API**. I added layers of random imperfections to the “metal” – scratches, grime, and chipped paint – to give it a sense of history.

<img src="/img/the-zone/ACST-MON.jpg" class="interstitial">

## Immersion Through Interaction

Movement was key to making it feel alive. The buttons depress physically, the screen flickers, and the LED meter tracks the current “radiation” level, which is synced to both visual and auditory noise. Even the manual pages seems to have a physical weight when you flip through them.

## Narrative Design

Beyond the code, I wanted to explore narrative design: Is it possible to tell a compelling story through an emulated interface?

I’ll leave that for you to decide, but the terminal logs provide clues about your environment, while the manual offers cryptic context. I’ve hidden several easter eggs within the text and at least one in the UI for the observant operator to find.

Just remember: **Do not listen to the static for too long.**

[Enter the Zone](https://nandordevai.github.io/the-zone/)

<img src="/img/the-zone/Manual.jpg" class="interstitial">
