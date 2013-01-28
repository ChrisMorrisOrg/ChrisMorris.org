---
layout: post
title: 'The Strangest Networking Issue Ever!'
tags:
- me
status: publish
type: post
published: true
comments: true
---
About a week-and-a-half ago, we arrived home from a wonderful two-week holiday at Yarrawonga, only to find something was up with our Internet connection.

A bit of information - even though we're subscribed to Internode, we're connected to the Internet via a sub-exchange (RIM) on the Telstra Wholesale Network. This is the only way that we can receive decent Internet speeds. Generally, we top out at about 690 KiBp/s downstream and 98 KiBp/s upstream.

Back to the story. We arrived home and turned the router back on (which had been switched off for the entirety of the holiday). I turned on my Mac and started downloading lectures from Monash that I wanted to grab before they were removed from the Monash servers. Everything seemed fine, I was getting decent download speeds. Things got strange, though, when I tried to download two or more lectures at once. After a few moments, my download speed would drop to *ALMOST* 0 KiBp/s, but not quite. This was temperamental, though. Speeds wouldn't always drop to near-0 KiBp/s, sometimes they would drop to around 19 KiBp/s - a very random number, I know.

So, obviously the problem is with the Monash website. Clearly they're doing maintenance and that's preventing me from downloading too much at the same time, right? Well, that's what I thought... until I tried to access Google.com. In fact, every time the downloads cut to those insanely slow speeds, I had to restart the router to get the Internet working again.

On one occasion I noticed that Chrome was sitting there trying to connect to Google. It wasn't that Google was downloading slowly, it was that I wasn't even connected yet! So I pinged Google, and found some pretty horrendous results. Out of eight packets, three timed-out. A 38% packet loss pinging Google?... and the packets that *did* make it through had ping times of up to 600 ms (over half-a-second). How is this possible!? I usually get no longer than 50 ms ping times. I ran SpeedTest.net (when it eventually loaded... by the way, why is their website made with Flash? It takes forever to load on slow connections!), and the results [speak for themselves](http://www.speedtest.net/result/2444479582.png).

What could have possibily gone so wrong between the time that I switched the router off on my way out the door, and two weeks later when we got back home? Was someone hacking our systems? Was the router getting too old? Have our lines worn out? Are Telstra upgrading the sub-exchange?

Well, it doesn't seem characteristic of a dying router to drop to such slow speeds, only to bounce back up after a restart... and I doubt that our lines had worn out, we'd only been gone for two weeks and we were still able to receive full download speeds before the issues would arise - they weren't instant. Perhaps something was going on at our sub-exchange? I do remember reading a pamphlet from Telstra stating that ADSL2+ is available in our area now. Something just doesn't feel right about that, though. What could maintenance workers possibly be doing to the network that would create these issues? Having said that, the idea that we were being hacked didn't sit well with me either. Our router (as far as I knew) had been off for the entirety of the holiday.

**Now for something really strange!** After restarting the router I, once again, proceeded to download lectures from Monash. Chrome was telling me that I was crankin' down at the full 690 KiBp/s. So I opened Activity Monitor on my Mac to see if perhaps another app was hogging the bandwidth - maybe there were software updates, since I hadn't updated in two weeks. I switched to the network tab only to find that, hey, I'm actually getting faster speeds than ever! 790 KiBp/s downstream. An exact 100 KiBp/s extra than usual! Chrome's download manager strongly disagreed, still displaying 690 KiBp/s at the time. Of course, a few moments later my speed plummeted to near 0 KiBp/s in Chrome... and strangely stuck at a solid 100 KiBp/s in Actiity Monitor.

So there rang a thought... perhaps it's an issue with [something internal](http://www.youtube.com/watch?v=rkcGm-pWwsQ). If I'm getting 790 KiBp/s over Wi-Fi, while I'm still getting the full (standard) 690 KiBp/s, the extra 100 KiBp/s must be coming from another device on the network.

I double-checked with my sister to make sure that she wasn't downloading anything. I turned off the Wi-Fi on my iPod Touch to ensure that it wasn't iTunes Wi-Fi Sync. In fact, we switched off all the wireless devices we could think of in the house. It's worth mentioning here that my sister's Mac was also displaying a solid 100 KiBp/s down in Activity Monitor. How weird is that?

By this point, I was on the phone to Internode. The support rep, Adam, was very helpful and asking similar questions I had asked myself. Even he was stumped. Now, with all devices with Wi-Fi switched off, I turned Wi-Fi back on on my Mac. Still, I received that dreaded 100 KiBp/s download. I had never seen anything like this before. Maybe this was an issue with Wi-Fi? Adam directed me to connect my Windows computer via ethernet to the router, which I did. Downloading a 1 GiB test file, speeds seemed okay, though they did fluctuate from 690 KiBp/s to 450 KiBp/s, back up to 500 KiBp/s, and then down to 300 KiBp/s before I cancelled the download.

Adam told me he was running a line test, and I'm guessing that's what disconnected our call. Thankfully, Internode's support and services are top-of-the-line, and they immediately called us back.

I went to our router's settings page and discovered that, actually, not all Wi-Fi enabled devices were switched off. Here's a [video](https://www.youtube.com/watch?v=88pZPhUl_AU) of my actual reaction. There was an unknown device on the network! We're being hacked!.. or so you might think. It was only an unknown device because I hadn't bothered to name all the devices that I had authorised access to over the years. Then my sister (or was it Dad? I can't remember) asked, "what about the printer?"

Well, I had forgotten to turn off our wonderful(ly terrible) Canon wireless printer! Boy, that printer has had no end of troubles. Anyway... I switched it off. After a few moments the router's settings page reflected that no devices were connected via Wi-Fi. Jumping back on my Mac, the 100 KiBp/s download had disappeared. I turned the printer on and off a few times to verify. Indeed, when the printer was turned on, the 100 KiBp/s download returned.

So it was the printer, that's all fine and dandy, but what on Earth is it uploading to my Mac, and my sister's Mac too... and I now even wonder if all Wi-Fi devices were being fed this 100 KiBp/s stream of data? Honestly, I don't know what the data it was sending was. What I do know is that both my sister and I had just reformatted our Macs around the new year, and we hadn't installed any drivers for the printer. How, then, was the printer allowed to stream data to our Macs? Perhaps because it was authorised to via the router's firewall, and having the Mac's firewall disabled would have allowed the data in.

I still intend to call Canon to find out what's going on, though I suspect they'll just get me to restore factory settings on the printer. Right now, though, I should be able to switch the printer back on and experience the 100 KiBp/s phenomena. I really want to find out what's going on before I reset the system. One thought is that perhaps data from a previous scan is stuck in an infinite loop, trying to find the computer to send it to and thus flooding the network.

Maybe we will never know... or maybe, just maybe, this is the rise of Skynet!
