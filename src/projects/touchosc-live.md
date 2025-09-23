---
tags: project
title: "TouchOSC interface for Ableton Live"
layout: page
date: 2025-08-01
---

Touch-based controls for Ableton Live, allowing multiple virtual synthesizer and effect parameters to be controlled via MIDI messages.

The interface was created using TouchOSC. It sends a set of preset MIDI Control Change messages to Ableton Live, where they’re mapped to device parameters and macros on the Hive 2 virtual synth. It also includes simple scripts for displaying a clock and a battery level indicator. There’s a button for resetting all the parameters to their initial state.

The UI is designed with live performance in mind. Some parameters use XY pads for better visual feedback, while others are controlled with long, wide sliders for easier manipulation. All labels use large fonts, and the color scheme (amber on black) is chosen for its eye-friendly contrast in dark environments, such as on stage.