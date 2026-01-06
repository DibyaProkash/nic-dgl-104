# WEEK 10 (WEEK OF MARCH 11)
## LECTURE - MV* PATTERNS

> Primary contributor: **[Ashley Blacquiere](https://ca.linkedin.com/in/ashley-blacquiere)**
>
> Modified by: Dibya Prokash Sarkar

### MV* OVERVIEW
The use of the MV\* (i.e. Model View ____) patterns are commonly used across web and mobile app development. MV\* patterns are typically thought of as  _architectural_ patterns, distinct from what are typically understood as _design_ patterns (such as Singleton and Observer) introduced in week 9. To contrast the two: design patterns are most often thought of as solutions to common and well-defined OOP-based problems; whereas MV* patterns have more to do with the overall _structure_ of an app across the entire project. The notion of _structure_, as it relates to MV* patterns, is related to, but is often thought of as distinct from, the [family of structural design patterns](https://en.wikipedia.org/wiki/Design_Patterns) (i.e. especially [Adapter](https://en.wikipedia.org/wiki/Adapter_pattern)).

<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/ZkeX4NLkhms"></iframe></div>

### MVC & MVVM
It's worth noting that since MV* patterns are architectural in nature (i.e. encompass the structure of an entire software project) their use is tightly tied to specific frameworks. For example, [Ruby on Rails](https://en.wikipedia.org/wiki/Ruby_on_Rails) (commonly used for web app development) is an MVC framework. Native development for both iOS and Android apps has moved to primarily Model View ViewModel (MVVM) with their, respectively, declarative [SwiftUI](https://developer.apple.com/xcode/swiftui/) and [JetPack Compose](https://developer.android.com/jetpack/compose) frameworks, though both previously subscribed to Model View Controller (MVC) most notably in the (now deprecated) [iOS Storyboard UI](https://developer.apple.com/library/archive/documentation/General/Conceptual/Devpedia-CocoaApp/Storyboard.html) development workflow.

<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/PkvOL-hWnGs"></iframe></div>

<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/o1M5hFLjcXw"></iframe></div>

### COMMUNITY CODE PROCESSES
I've created the following video walkthroughs to provide you with additional support in the process of forking repositories, creating branches, finding issues and opening pull requests for contribution to open source projects. I use Part 2 of the Community Code project (with our class [pattern-library](https://github.com/nic-dgl104-winter-2024/pattern-library)) as a direct example of how to do this, but you can apply these same techniques to your work on Part 1 of the Community Code project as well.

<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/ZlysOUJs2_I"></iframe></div>

<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/cq7qi2ehEKE"></iframe></div>

<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/2Up54ybEWIY"></iframe></div>

<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/SSEPfJiqxjs"></iframe></div>


## ACTIVITIES

> **This is a fairly critical week for your work on both Part 1 and Part 2 of the Community Code project.** For Part 1, if you've been following the Required and Recommended activities, you should be set up to begin working on one of the issues you've previously identified; for Part 2, if you haven't taken any steps to contribute to the [pattern-library](https://github.com/nic-dgl104-winter-2024/pattern-library) yet, then please do take action this week (the walkthrough videos above will help!) With this in mind all activities this week are Required, but there are fewer than normal.

### [REQUIRED] ASSESS EXTERNAL COMMUNITY CONTRIBUTION GUIDELINES
Last week you identified a series of issues that you could conceivably work on in support of your external open source community (i.e. Part 1 of the Community Code project). Before you begin contributing, however, you must ensure that you understand the contributing guidelines published by your community (if they exist):

#### To complete this task (~30 minutes):
1. Visit the repository for one of the previously identified issues that you would like to work on.
2. Read through the repository README.md document carefully, and look for information about contributing to the project. Possible documents of interest include:

    - CONTRIBUTING.md (or similar)
    - CONDUCT.md (code of conduct, or similar)
    - Any documentation relating to contributions or contributing
3. Assess the documentation and identify if there are any steps that you need to take, or processes you need to follow in order to contribute. You should note these in any work you do as part of this project.
    > **Remember** I don't require you to actually submit any code or contributions directly to your community if you don't want to do so. However, you should be able to demonstrate the work you have done to address the open issue (or contribution) in your _personal_ fork of the repository.
4. If you haven't already done so, please create a CONTRIBUTING.md document in your Research & Reflection Journal and summarize what you have learned about contributing to your external community.

You may also find that your project of choice has very little information about contributing. In that case, you should carefully consider if this project is the _right_ project for you to contribute to (feel free to consult with me!)

You may also find that your project of choice has very little information about contributing, but points potential contributors to some sort of asynchronous community workspace (i.e. Discord, Slack, Gitter, Zulip, etc.) In this case, you may want to try to join that community to learn a bit more (i.e. by reading posts and gathering information - there is no requirement for you to communicate directly with your community, if you do not feel comfortable doing so).

### [REQUIRED] WRITE A SUMMARY ON SLACK
Share a summary on Slack of what you have learned about your community in terms of contributing. Explain whether your community is clear in how they expect contributors to contribute, and if there are clear guides supporting new contributors. 

### [REQUIRED] CONTRIBUTE TO EXTERNAL COMMUNITY
Now that you have a potential issue in hand, and you have an understanding of your community's preferences in terms of contributions you should be ready to begin work on your contribution. 

#### To complete this task (~60 minutes):
1. If you haven't yet done so, please fork the external repository you would like to contribute to. The fork should be placed in on your personal GitHub account.
2. Clone your fork to your local machine and create a new branch in the repository (you don't want to work directly on main, since this will become challenging as changes are made to the parent repository).
3. Identify the work you intend to do in your CONTRIBUTING.md document in your Research & Reflection Journal. The work you intend to do (i.e. your contribution) could be a solution to an open issue that you have previously identified, or it could be a contribution that you have identified based on priorities stated in the project documentation (i.e. that doesn't have an issue directly associated with it). Either way, include as much information about why you have decided to work on this issue in your CONTRIBUTING.md. Please include:

    - Links to the external community and project
    - Summary information about the issue you'd like to work on (including links if relevant)
    - Links and summary description to any project documentation that demonstrates the value of your intended work to the community.

4. Start working on your issue! This is probably something that will take more than one session, so schedule your time appropriately. Remember to commit often (with descriptive commit titles!) and to keep track of your work in summary in your CONTRIBUTING.md document.  


<!-- ### [REQUIRED] CONTRIBUTE TO PATTERN-LIBRARY
Work has started on the [pattern-library](https://github.com/nic-dgl104-winter-2024/pattern-library) and some contributions have already been made. There are still quite a few open issues (many good-first-issues!) and lots of opportunity to contribute (including by suggesting new issues).

#### To complete this task (~60 minutes):
1. If you haven't yet done so, please fork the [pattern-library](https://github.com/nic-dgl104-winter-2024/pattern-library) repository. The fork should be placed in on your personal GitHub account.
2. Clone your fork to your local machine and create a new branch in the repository (you don't want to work directly on main, since this will become challenging as changes are made to the parent repository).
3. Visit the pattern library [issues tab](https://github.com/nic-dgl104-winter-2024/pattern-library/issues) to find an issue that you think you can contribute to.
4. Request to be assigned to the issue by commenting on the issue thread.

    > It is possible to have more than one person assigned to specific issues, so feel free to request to be added. However, if I think there are already enough people on an issue, I may request you to find another. 

5. Start working on your issue! This is probably something that will take more than one session, so schedule your time appropriately. Remember to commit often (with descriptive commit titles!) and to keep track of your work (at least in bullet point summary) in your Research and Reflection Journal. -->

### [REQUIRED] FOLLOW-UP QUESTIONS AND REFLECTIONS
1. What is the hardest/most challenging thing you had to do this week for DGL 104? How did you overcome this challenge? 
