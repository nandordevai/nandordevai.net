---
tags: [project, hide-gallery]
title: Tiny Tide – An Interactive Low-poly Model
layout: page
date: 2026-03-17
---

After wrapping up the [case designer](/projects/case-designer), I found myself wanting to move away from utility and toward something more atmospheric. I wanted to build a scene that felt less like a tool and more like a toy: a playful exploration of what React Three Fiber can do when paired with custom 3D assets.

I dug through some old Blender files and found a low-poly lighthouse scene I’d modeled a while back. It had the right ingredients: a lighthouse, a small boat, and a sense of quiet. The goal for Tiny Tide was to take this “frozen” moment and hand the controls over to the user.

[<img src="/img/tiny-tide/mist.png" class="interstitial">](https://nandordevai.github.io/Tiny-Tide/)

## Bringing the Scene to Life

Building the world was only the first half. The real challenge was making it interactive without breaking the aesthetic. Using React Three Fiber, I integrated UI elements that allow for real-time manipulation of the environment:

- a slider to move the sun across the sky, shifting the scene from high noon to a deep twilight
- another to change the water color, and with that, the mood of the beach instantly
- and some other scene parameters (feel free to explore them).

One of the most satisfying parts of this project was the integration of the model into the React ecosystem. It’s one thing to see a model in a viewport; it’s another to see it respond to a React state change with fluid transitions.

## Final Reflections

It was very satisfying to take a mesh that sat on my hard drive for quite some time and giving it a second life on the web. Three.js turned a static model into a story. I hope you enjoy playing with this little slice of the ocean as much as I enjoyed bringing it to life.

You can check out the full [source code on GitHub](https://github.com/nandordevai/Tiny-Tide) or head over to the [live demo](https://nandordevai.github.io/Tiny-Tide/) and find your own perfect sunset.
