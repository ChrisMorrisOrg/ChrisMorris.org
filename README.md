# [ChrisMorris.org](http://chrismorris.org) - Scitechivity

Copyright © 2012-2016 Chris Morris

Overview
--------
This is the source code for my personal website [ChrisMorris.org](http://chrismorris.org). Feel free to browse and fork. If you have any questions, please [contact me](http://twitter.com/ChrisMorrisOrg).

The site is powered by [Jekyll](http://jekyllrb.com/), a static-site generator. Jekyll converts all posts and pages from Markdown into static HTML files. Compared to WordPress, this allows the site to load extremely fast and vastly reduces resources required to run the website.

Because the pages are static, I use JavaScript to include view counts and Disqus for the commenting system. View counts are recorded and accessed from a MySQL database via a simple Node.js script.

Design
------
At present I would appreciate it if you create your own design should you fork this repository, simply because I am branding my work with the current design. Thank you!

There are several different colour schemes with the current design. Any post can be assigned a theme by adding "colour: <colour>" to the YAML front matter, the default is blue.

Deployment
----------
The website runs on an Nginx server, with supervisord running the Node application in the background. MySQL is also required for the view counter.

Have a read through the package.json file to see how you can run `npm run push` to do your blog writing on your local computer and have it rsync'd to your server.

For information on how to setup these services, I fully recommend checking out these articles:

- [Installing Nginx on Debian/Ubuntu systems](https://www.linode.com/docs/websites/nginx/nginx-web-server-debian-8)
- [Configuring Nginx](https://www.linode.com/docs/websites/nginx/how-to-configure-nginx)
- [Installing Node](https://www.linode.com/docs/websites/nodejs/how-to-install-nodejs-and-nginx-on-debian)
- [Installing and Configuring Supervisord](http://supervisord.org/installing.html)
- [Running Supervisord Automatically on Startup](http://supervisord.org/running.html#running-supervisord-automatically-on-startup)

Background
----------
Jekyll was suggested to me by [Feross Aboukhadijeh](http://feross.org/). After seeing how fast his site loaded, I was sold. A lot of functionality of this website has been taken or inspired from [feross.org](https://github.com/feross/feross.org)

The inspiration for the design was sporadic. I wanted an organised layout, but I also wanted to take advantage of CSS3 and give the site a bit of a futuristic feeling. I was aiming for a design that felt a bit like a computer display that you might see on a spaceship.
