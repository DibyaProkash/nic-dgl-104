# WEEK 3 (WEEK OF JANUARY 21)
## LECTURE - REFACTORING

> Primary contributor: **[Ashley Blacquiere](https://ca.linkedin.com/in/ashley-blacquiere)**
>
> Modified by: Dibya Prokash Sarkar

### REFACTORING
Refactoring is a critical skill for effective software developers to build. All software projects that will see any form of use (whether by end-users, or by other developers) will need to be refactored for clarity, for efficiency, and often to fix assumptions made in first-pass attempts at solving specific problems.

The most critical thing to keep in mind when refactoring is that refactoring should preserve the original meaning and intent of the code. This should help point you to when refactoring is most beneficial: Only when you have a complete (or nearly complete) understanding of your program can you effectively refactor. 

It's also important to note that refactoring is **not** code rewriting: A code rewrite is a much more substantial effort that may include discarding some or all of the original code. Reasons for a rewrite could include major changes to a dependency, such as a framework or API, or porting the project to a new language or framework.

Best practices for refactoring include making incremental changes (commits!) that clearly demonstrate the progression from the original code to the final product. Small refactors are much easier to manage and to roll back, if necessary.

The following video builds on some of these ideas, but I do recommend you also take a look at the [optional material](#optional-resources), as varying perspectives on refactoring are important.

<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/iA5cFchPu0I"></iframe></div>

## ACTIVITIES

### [REQUIRED] REFACTOR MAP IT
[Map It](https://appinventor.mit.edu/explore/displaying-maps) is an `AI2` app that allows the user to log physical addresses and view them in Google Maps. The tutorial describes the use of the app and demonstrates the necessary code to produce it. The source code is also available through a link at the bottom of the tutorial page.

Your task for this activity is to refactor a portion of the Map It code. To this end, I have provided a [repository in our organization](https://github.com/nic-dgl104-winter-2025/guide-mapit-refactor) that includes two versions of the completed Map It code, and a short walkthrough of some refactoring techniques you might consider as you work through this activity. 

### [REQUIRED] POST PROGRAMMING PRACTICE ARTICLE SUMMARY ON SLACK
You now have about three weeks to complete your Programming Practice article. By this time, you should definitely have an idea of the topic that you would like to write about. For this activity, please post a brief summary on our DGL 104 Slack channel describing your article. You can use the following as a template:

> For the Programming Practice article assignment I have chosen ___________ as a topic. I intend to write specifically about... and to provide code examples that demonstrate... At the end of the article I hope that my reader better understands...

Please write your Slack summary in complete sentences. Remember that your main topic should be chosen from the list I've provided. You should attempt to state around three subtopics (i.e. "I intend to write specifically about...") and to describe at least one code example per subtopic (though remember I want to see at least six code snippets in the final article!). Don't neglect explaining what you hope your reader will better understand - identifying your specific audience will help with the writing process.

### [RECOMMENDED] OUTLINE YOUR PROGRAMMING PRACTICE ARTICLE
I know that some of you have already started the task of outlining. Some of you may have started writing already as well. I do encourage everyone to write a brief outline to help direct your efforts. An outline can be as simple as a bulleted list of headings for your article, with sub-bullets describing some of the main ideas you'd like to write about. 

If you need help with this you can reach out to me, or ask on Slack. The NIC Library also provides many [excellent resources](https://library.nic.bc.ca/writingsupport) to support your writing activities.

### [REQUIRED] POST `AI2` PROJECT IDEA ON SLACK
You now have about three weeks to complete your `AI2` project. By this time, you should have at least an idea of the type of app you'd like to build. In order to ensure that you have a productive idea that isn't out of scope I'd like you to post a brief description on Slack. You can use the following as a template:

> For the `AI2` project I'd like to build an app that does... Some features of my app include... The audience for my app is...

Please write your Slack summary in complete sentences. Do your best to be complete in your description - identifying specific `AI2` components you'd like to use for your major features is a good strategy to help you achieve this. Additionally, feel free to comment and provide feedback on other students' ideas.

### [RECOMMENDED] OUTLINE YOUR `AI2` PROJECT
The outline for your `AI2` project isn't as formal as the outline for your Programming Practice article, but is equally valuable. There are many potential strategies you can take to do some "outlining", including creating a bullet point list, or a mind map, or developing user stories. No matter which approach you choose, you'll find benefit in carefully considering your features and the components that you would like to use.

If you need help with this you can reach out to me, or you can ask on Slack. 

### [RECOMMENDED] FOLLOW-UP QUESTIONS AND REFLECTIONS
1. How has refactoring helped you in past projects?
2. What do you think is the single most important thing to keep in mind when refactoring? Or, what strategy do you think is the most effective when refactoring?
3. How does refactoring relate to the practice of code review and to documentation practices?  


## OPTIONAL RESOURCES
- [Refactoring.com](https://www.refactoring.com/)
- [Refactoring Guru](https://refactoring.guru/refactoring)
- [VSCode refactoring](https://code.visualstudio.com/docs/editor/refactoring)
- [Wikipedia - Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring)
