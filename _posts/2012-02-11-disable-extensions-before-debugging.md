---
layout: post
title: 'Have You Disabled Extensions? - JavaScript Debugging'
tags:
- javascript
- webdev
status: publish
type: post
published: true
comments: true
---
**UPDATE (February 14, 2012):** [Buffer](http://bufferapp.com "Buffer") responded to my email regarding this issue. They have fixed the problem - it is an issue with jQuery 1.6.1. Their extension has since been updated to 1.7.

Because jQuery allows you to write such minuscule amounts of code, I rarely need to debug nor optimise the small scripts that I make. Today, however, I decided that the project I was working on was at the stage that I really should take a look behind the scenes to see what I could optimise. Nothing was actually wrong with how the script worked or anything, I was really just interested to see if I could make any improvements.

Anyway, this project I was working on had an &lt;input&gt; tag for the user to type into. I noticed, though, as I typed in the input box, my JavaScript console kept throwing this weird warning:
    event.layerX and event.layerY are broken and deprecated in WebKit. They will be removed from the engine in the near future.

Well that's weird!

So I put the error straight into Google, only to find what seemed like an [all-too-easy solution](http://stackoverflow.com/questions/7825448/webkit-issues-with-event-layerx-and-event-layery "WebKit issues with event.layerX and event.layerY") on StackOverflow. The top answer with 261 votes suggested upgrading to jQuery 1.7. *Surely* with that many votes, it must have been the solution for many people (so keep an eye out if you're still using 1.6.1 or below.) This wasn't the case for me, however. After updating to 1.7, I still had the same warning thrown at me.

So I went ahead and created a blank HTML page with all the same elements, minus the Javascript... only to find that I get the same error when I type! In fact, I don't even have to type in the &lt;input&gt;, but even just typing randomly after clicking on whitespace returned this warning. What could it be!?

Well, I've known extensions to be a bit disruptive with code before, so I disabled all of my extensions. Voilà! The error was no longer appearing. One-by-one I re-enabled each extension, to find - and here's the shocking bit - my extension for [Buffer](http://bufferapp.com "Buffer") was causing the issue. Okay, perhaps it wasn't that shocking, but still... what could Buffer's Chrome extension be doing to throw that warning every time I hit a key? I would
love to know.
