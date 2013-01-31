---
layout: post
title: 'Passing Client IP from Nginx to Apache'
tags:
- nginx
- apache
- how-to
status: publish
type: post
published: true
comments: true
---
The last few days I've been setting up a new server configuration using Nginx as a proxy to Apache (and other web servers.) Although this isn't anything really different from my previous setup (though, *hopefully* a bit more secure), I just realised that I forgot to pass client IP addresses from Nginx to Apache. This means that anyone leaving a comment on my blog would appear to have posted from localhost or 127.0.0.1. It's clear to see why this occurs - when a user visits my site, Nginx is hit first before passing to Apache. Because of this, Apache sees Nginx as the user trying to view the page. Nginx runs locally on my server with Apache, hence 127.0.0.1.

## Step 1: Nginx Configuration File

You will want to alter your nginx configuration file(s) to include the following:

    server{
        location / {
            proxy_pass http://127.0.0.1:PORT;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }

Obviously you will need to change the port on localhost to the correct port for each website you're running on Apache - I'm sure you've already got that, though. The three lines below proxy_pass simply set the headers to pass to Apache - which will contain the client's IP.

## Step 2: mod_rpaf

The final step is to install mod_rpaf for Apache. This module allows you to set the value of the remote address when using a proxy. If you haven't already got the module installed (try "a2enmod rpaf" to find out), you can install it via apt-get:

    sudo apt-get install libapache2-mod-rpaf

Although you may be retrieving the correct IP addresses now, you'll want to ensure the module is configured correctly. My Apache configuration file has the following code just below all my other &lt;IfModule&gt;'s:

    # The following lines allow client IP to be passed from Nginx to Apache
    <IfModule mod_rpaf.c>
        RPAFenable On
        RPAFsethostname On
        RPAFproxy_ips 127.0.0.1
    </IfModule>

Where it says RPAFproxy_ips, you'll want to ensure you're using the IP that Nginx runs on (this should be the same IP that's appearing when you were attempting to print your client's IP address prior to reading this guide). I run Nginx on the same server as Apache, so it's localhost (127.0.0.1). If in doubt, you're almost definitely running nginx on the same server as Apache, so just go with '127.0.0.1'. Make sure that you restart Nginx and Apache, and you should be set!
