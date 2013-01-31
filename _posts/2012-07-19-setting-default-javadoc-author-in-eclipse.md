---
layout: post
title: 'Fixing Default Javadoc Author in Eclipse'
tags:
- java
- how-to
status: publish
type: post
published: true
comments: true
---
Find it annoying when Eclipse auto-fills your Javadoc with the *wrong* information after you type the opening delimeter for Javadoc? What's happening is Eclipse is taking the username from your computer instead of the name associated with your user account. For example, my username on my Mac is "chrismorris" and I'd prefer Eclipse to insert "Chris Morris" instead. **Here's a quick fix for both Windows and Mac!**

## On Mac

### Step 1:

Navigate to your "Applications" folder and find Eclipse. Right-click on Eclipse and "Show Package Contents".

[![Mac Eclipse Javadoc Fix #1](http://chrismorris.co/wp-content/uploads/2012/07/Screen-Shot-2012-07-19-at-8.02.13-PM.png)](http://chrismorris.co/wp-content/uploads/2012/07/Screen-Shot-2012-07-19-at-8.02.13-PM.png)

### Step 2:

Browse to Contents &gt; MacOS &gt; eclipse.ini, and open the file in TextEdit.

[![Mac Eclipse Javadoc Fix #2](http://chrismorris.co/wp-content/uploads/2012/07/Screen-Shot-2012-07-19-at-8.02.39-PM.png)](http://chrismorris.co/wp-content/uploads/2012/07/Screen-Shot-2012-07-19-at-8.02.39-PM.png)

### Step 3:

Add "-Duser.name=Your Name" to your configuration as shown below.

[![Mac Eclipse Javadoc Fix #3](http://chrismorris.co/wp-content/uploads/2012/07/Screen-Shot-2012-07-19-at-8.32.14-PM.png)](http://chrismorris.co/wp-content/uploads/2012/07/Screen-Shot-2012-07-19-at-8.32.14-PM.png)

Once you've saved the configuration and restarted Eclipse, type the opening delimiter for Javadoc (/\*\*), and Eclipse should auto-fill the @author field with "Your Name" instead of "yourname" (or whatever your username on your Mac is.)

## On Windows

The procedure on Windows is much the same. Navigate to your Eclipse folder and locate your "eclipse.ini" file. Add the following line **-Duser.name="Your Name"** as shown below. Note the quotation marks around "Your Name".

[![Windows Eclipse Javadoc Fix #1](http://chrismorris.co/wp-content/uploads/2012/07/windows.png)](http://chrismorris.co/wp-content/uploads/2012/07/windows.png)
