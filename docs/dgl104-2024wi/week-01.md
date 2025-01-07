# WEEK 1 (WEEK OF JANUARY 7)
## LECTURE - PLATFORMS & MIT APP INVENTOR

> Primary contributor: **[Ashley Blacquiere](https://ca.linkedin.com/in/ashley-blacquiere)**
>
> Modified by: Dibya Prokash Sarkar

![UX - User Experience](images/12650723674_d5c85af332_k.jpg ':class=banner-image')

> **First class note**: The lecture section of each week's content will typically contains videos (some recorded by Ashley, some sourced from the web) and text to read. CVS students should ideally watch these videos and read the lecture text _before_ class. 
>
> Many weeks will also include optional content (videos and text). It's not necessary to watch/read these before class. 

### PLATFORM PROGRAMMING
The title of DGL 104 is "Application Development Foundations" and the course description notes that you will "gain experience in modern development, testing and profiling tools for platform-based applications."

It's worth noting that we're not explicitly defining what type of platform you might be programming _to_. Instead, the goal of this course is to build good programming practice _no matter the platform_ and _no matter the programming language_ used. However, not all platforms are built equally, and there are concerns and considerations you'll want to keep in mind.

<!-- <div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/Wu-LdSzGe4U"></iframe></div> -->

### MIT APP INVENTOR
[MIT App Inventor](https://appinventor.mit.edu) (officially, "MIT App Inventor 2", so I'll refer to it as `AI2` from now on) is a web-based mobile app development and block code editing tool that can be used to develop fairly complex mobile apps. `AI2` is intended to help "democratize" the process of development - meaning it puts the tools necessary for app development in reach of the average individual: Many people with no prior coding experience have successfully used `AI2` to create some [pretty amazing apps](https://appinventor.mit.edu/about-us).

As DGL 104 students you already have programming expertise, so learning the basics `AI2` will be easy - and this is precisely why we'll be using it. Since many of you are just learning about Android development this semester in DGL 114, it would be unreasonable to ask you to start building native Android apps as part of this course; instead, we'll use `AI2` to ensure that we have a way to rapidly prototype and test apps and app designs so that we can better understand the conditions of development.

The following video provides a brief introduction to `AI2`, with more detailed step-by-step tutorial below. Don't worry about following along with this video - just watch to get an overview of the interface.

<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/eSvtXWpZ6os"></iframe></div>


## ACTIVITIES
> **First class note**: The activities section for each week will contain _required_ activities that I expect you complete _before_ the following week's class. E.g., Week 1 activities should be completed _before_ Week 2.
>
> Activities marked as _recommended_ should also be completed before the following week's class, if you choose to complete them. Recommended activities can be skipped, but are generally worth doing, if you have the time. 

### [RECOMMENDED] WRITE A DAILY JOURNAL ENTRY
> This activity and similar journaling and reflective activities are recommended during the first half of the semester. In the second half of the semester they will be _required_. Take time to try these out now!

Keeping a daily journal of your goals and activities is a great way to scaffold your learning: When you record the tasks that you've spent time on and intentionally reflect on them you are more likely to build on what you've learned, rather than continually reinventing the wheel.

It's good practice to use a daily journal to keep track of all your work, but if that feels like too much you can concentrate exclusively on DGL 104. Each day you work on DGL 104 - wether it's watching/reading, or completing activities, or both, spend some time with your journal before and after.

For now, I recommend keeping it simple:
- Choose a tool that is easy for you to commit to: You can write in a paper journal/notepad, or you can start a Word document or a Google Docs document, or whatever works for you.
- Keep the format simple: Write down your goals for the day, some tasks, and after you've finished for the day write some thoughts about what you've learned. 
- Don't forget to include the date (especially if you are using paper!) 

### [REQUIRED] TALK TO ME APP TUTORIALS PARTS 1 - 4
The following set of tutorials are quick and easy to complete and introduce the basic uses of `AI2`. You don't need to pass in any work for this activity - you need only complete the tutorials so that you have basic knowledge of the interface before moving on to something more complex.

Read the [Logging into MIT AI2](#logging-in-to-mit-ai2) section below to learn how to log in without a Google account, if you prefer. 

<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/Vdo8UdkgDD8"></iframe></div>

<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/0hikoCvM3oc"></iframe></div>

<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/w0yxJSlC00w"></iframe></div>

<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/fQKNzLYEN0M"></iframe></div>


### [REQUIRED] AI2 SPACE INVADERS APP
[Space Invaders](https://en.wikipedia.org/wiki/Space_Invaders) has been re-implemented so many times that it's almost like the ["Hello, World!"](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) of game development. The [Space Invaders tutorial](http://appinventor.mit.edu/explore/ai2/space-invaders) is marked as 'intermediate' but with your prior experience in programming it should be closer to easy for you, with the one exception that you might have a hard time finding all the right components and blocks. If you get stuck, check out the [resources](#ai2-resources) below, ask a friend, the internet, or me!

### [RECOMMENDED] FOLLOW-UP QUESTIONS AND REFLECTIONS
> **First class note**: I'll provide reflection questions with each week's content, and I recommend that you incorporate them into your journal. However, even if you choose not to complete the recommended journal activities, just putting some thought into the questions below - _after_ you've completed the other activities above! - will be a help.

1. Are the user interface elements in the completed app (Space Invaders or the tutorial apps) sufficient? Is there anything missing, or anything that seems unnecessary?
2. Examine the code blocks in the completed app with a critical eye. How could the code blocks be improved?
3. What is one thing you learned about programming today that you didn't know before?

## EMULATION FOR MIT APP INVENTOR
`AI2` does not provide a runnable environment in the editor. Instead, you must either run your app on an actual device, or emulate it using your computer. MIT provides [these four options](http://appinventor.mit.edu/explore/ai2/setup) to set up a testing environment. 

The **recommended** and first approach is to use your device and download the `AI2` companion app on either the [AppStore](https://apps.apple.com/ca/app/mit-app-inventor/id1422709355?ign-itscg=30200&ign-itsct=apps_box) or the [Google Play](https://play.google.com/store/apps/details?id=edu.mit.appinventor.aicompanion3&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1). This is by far the most convenient approach since it's quick and you can test your app while making changes live in the editor. 

However, you may not have a device, may prefer not to download an app, or you maybe limited by your network connection (the device with the `AI2` companion app must be on the same wifi network as the computer hosting the app). In these cases you may either: 
- Install the official `AI2` emulator ([option 3](http://appinventor.mit.edu/explore/ai2/setup-emulator) in the link above). This works reasonably well for Windows-based machines, but I've personally not had a lot of success getting the MacOS version running; or 
- You may install Android Studio and use the packaged Android Studio emulator. 

Using the `AI2` emulator is arguably better, if you can get it to run, since it also allows live coding updates to the emulated device. Follow the directions linked to above to try it out, if you like. 

If no other option above works then installing Android Studio is a viable option. This is perhaps more valuable to those of you who will be in DGL 114 this semester, since you will likely be installing Android Studio as the IDE of choice for developing Android apps.

### INSTALLING ANDROID STUDIO
The biggest pain in installing Android Studio is the size of the software. THe initial download and installer is relatively small, but once you start the install process there will be larger files to download. 

The process is outlined very clearly in [this codelab](https://developer.android.com/codelabs/basic-android-kotlin-training-install-android-studio?hl=en#0). The most relevant part is the [Install Android Studio](https://developer.android.com/codelabs/basic-android-kotlin-training-install-android-studio?hl=en#4) section, which includes a [link](https://developer.android.com/studio/install.html) (at the top of the page) to more detailed instructions with screencasts.

Once you have installed Android Studio you will need to set up an AVD (or Android Virtual Device) to emulate. The instructions in the third part of [this codelab](https://developer.android.com/codelabs/basic-android-kotlin-training-first-template-project#2) (titled "Run your app on a virtual device") walks you through the steps of creating a new AVD and running it. You don't need to follow any other part of this codelab tutorial.

### INSTALLING THE APK ON THE EMULATOR
First open Android Studio and run the emulator as described in the tutorial above. Or, you can access the AVD manager directly from the Android Studio New Project screen as demonstrated below:

![open avd](../assets/images/week1-open-avd.gif)

In `AI2` build a new apk file using teh Build > Android App (.apk) menu item:

![build apk](../assets/images/week1-build-apk.gif)

When the build process is complete download the apk using the Download .apk now button:

![download apk](../assets/images/week1-download-apk.gif)

Finally, install the apk on the emulated device by dragging and dropping the apk file to the emulator, then open the installed app on the device (note that in Android you can swipe, i.e. click hold and drag, up from any position on screen to open the app drawer):

![install apk](../assets/images/week1-install-apk.gif)

## LOGGING IN TO MIT AI2
The [main MIT AI2 site](http://appinventor.mit.edu/) has many great resources available. You can access AI from this site (click on the big orange `Create Apps!` button in the upper left), or you can visit the [AI2 site](http://ai2.appinventor.mit.edu) directly.

### LOGGING IN WITH GOOGLE <!-- {docsify-ignore} -->
Logging into AI2 __requires__ a Google account. You can choose to use an existing account, or you can create a new one. Logging in with a Google account has the benefit that your projects are saved under a username and password model, so that you can easily retrieve them. 

### LOGGING IN WITH A ONE-TIME CODE <!-- {docsify-ignore} -->
Alternatively, if you prefer not to use a Google account you can access AI2 using a one-time code. Visit [this alternative site](https://code.appinventor.mit.edu/login/) and press the 'Continue without Google' button:

<div style="display: flex; justify-content: center">
<img src="./assets/images/Screenshot%202023-02-27%20at%209.33.15%20AM.png" width="300">
</div>
Once AI2 loads you will be provided with a one-time four-word code. __Write this code down!__ 

<div style="display: flex; justify-content: center">
<img src="./assets/images/Screenshot%202023-02-27%20at%209.33.30%20AM.png" width="300">
</div>

In order to access your work in the future you will need to enter this code in the login screen, as pictured below:

<div style="display: flex; justify-content: center">
<img src="./assets/images/Screenshot%202023-02-27%20at%209.36.59%20AM.png" width="300">
</div>

## AI2 RESOURCES
- [Getting started resources](http://appinventor.mit.edu/explore/get-started)
- [AI2 tutorials page](http://appinventor.mit.edu/explore/ai2/tutorials)
- [Artificial Intelligence with AI2 tutorials](http://appinventor.mit.edu/explore/ai-with-mit-app-inventor)
- [Built-in blocks reference](http://ai2.appinventor.mit.edu/reference/blocks/)
- [Components reference](http://ai2.appinventor.mit.edu/reference/components/)
