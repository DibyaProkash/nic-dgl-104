# WEEK 2 (WEEK OF JANUARY 14)
## LECTURE - DOCUMENTATION & CODE REVIEW

> Primary contributor: **[Ashley Blacquiere](https://ca.linkedin.com/in/ashley-blacquiere)**
>
> Modified by: Dibya Prokash Sarkar

![Documentation and Code Review](images/code-documentation.jpg ':class=banner-image')

### DOCUMENTATION
You may have gleaned from Week 1 content that documentation processes will be a critical part of this course. For the first half of the semester we'll practice documentation in a relatively informal way (particularly since documentation in `AI2` isn't quite as smooth as it is in a GitHub repo, or even in a typical IDE), and I'll encourage you to take every opportunity to develop a documentary practice (via journals, repository documenting, and in-code commenting, among others) before we move to a formal practice in the second half of the semester.

In the video below you'll find a discussion on the distinction between project documentation and code documentation. In general, I prefer that you focus on project-level documentation using tools like [GitHub Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github) and [GitHub README files](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes), rather than rely on in-code comments to explicate code. 

To help you focus on project-level documentation rather than code-level I'll push you to write [self-documenting code](https://en.wikipedia.org/wiki/Self-documenting_code) throughout the semester. We'll also potentially talk a bit about the [literate programming paradigm](https://en.wikipedia.org/wiki/Literate_programming) at some point in the semester - which I'm a big advocate of - although this is not always a realistic approach in every language.

<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/S83xOCKfbTg"></iframe></div>

### CODE REVIEW
A critical part of being a developer in any capacity is to participate in code review. This can take a lot of different forms, but what you'll experience most frequently in this class (and in other DGL courses) is asynchronous code review using [pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request) and inline feedback on GitHub.

<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/DCZ6_bcxdGg"></iframe></div>

### STYLE GUIDES
Both in-code documentation processes and code review benefit from a well-defined style guide. Style guides typically define a set of best practices for writing code that all developers on a project follow so that all code looks consistent, and so that developers can easily read and understand unfamiliar code.

Some aspects of good style are pretty obvious and are widely accepted. For example, most JavaScript guides agree that variable names should be camelCase and descriptive. In other words, prefer:
```JavaScript
const studentAge = 24
``` 
rather than:
```JavaScript
const age = 24
```

However, since style itself has little bearing on the function of the language, there is rarely 100% agreement on what actually constitutes good style. Detailed style guides are also more common with languages that are less strict, since there are more opportunities for personal expression.

## ACTIVITIES
### [RECOMMENDED] MIT APP INVENTOR PROJECT BRAINSTORM 📝
Now that you have some experience with `AI2` start thinking about the type of app you might create for your MIT App Inventor project (**due the week of Feb. 11**). You can build any kind of app you like, but there are specific requirements that you must meet (described on Brightspace). Feel free to use any brainstorming method you like and try to come up with a shortlist of possible apps, since you may find your first choice is infeasible for one reason or another.

Some advice:
- Check out the [AI2 repo management guide](https://github.com/nic-dgl104-winter-2025/guide-ai2-repo-management) to get a sense how best to handle your `AI2` repo.
- Keep your initial idea small. It's much easier to build an MVP and add more features later.
- Feel free to reach out to me, or to your peers, to ask for feedback on your ideas.
- If you know about user stories feel free to generate some to help you identify features.

This activity is recommended because development on this project will start in earnest in Week 3. It's better if you enter week 3 prepared, but you can try to jam this work into Week 3, if you prefer to live on the edge. 😄


### [REQUIRED] SECOND `AI2` APP
Last week you completed the [Space Invaders tutorial](http://appinventor.mit.edu/explore/ai2/space-invaders). This week you'll complete a second [tutorial](https://appinventor.mit.edu/explore/ai2/tutorials) (or you can complete one of the more advanced [AI-based tutorials](https://appinventor.mit.edu/explore/ai-with-mit-app-inventor)). I recommend you choose a tutorial that is in line with an app that you might be interested in developing as part of your MIT App Inventor project (due the week of Feb. 12). By the end of completing this second tutorial I expect that you'll be feeling fairly confident with `AI2` and will be prepared to start developing your own app.

However, there is a catch! For this second tutorial you will push your code to a repository on our GitHub organization and you will do the following:
1. Write some project-level documentation that describes the project; 
2. Participate in a brief code review with a peer; and
3. Submit your works in the Github repository. The link of the Github repo for this task: [GitHub Repo](https://classroom.github.com/a/HRSUtpAL)

The advantage to working on a defined project for these tasks is that you don't have to think too creatively when it comes to the project documentation. That doesn't mean you can just copy and paste content - write in your own words, or provide appropriate references if you use an external source - but it should be an easier process. 

The code review will be a little less comfortable. This is because the `AI2` code won't render on GitHub, so you'll have to download your peer's code, run it, and submit comments through a non-standard means. I'll demonstrate this via video during Week 2.

### [RECOMMENDED] START WORK ON PROGRAMMING PRACTICE ARTICLE
You can read more about the Programming Practice Article assignment on the Brightspace assignments tab. Suffice to say, the article is due the week of Feb. 12th - four weeks from now - and starting work on it now will help keep you on track. Take a read through the topic options, do some brainstorming around the angle you'd like to take, and perhaps start collecting some resources. Take a look at the [Programming Practice article guide](https://github.com/nic-dgl104-winter-2025/guide-programming-practice-article) I've written to get started!

### [REQUIRED] OPTIONAL RESOURCES
Since optional resources are... well... _optional_, I will rarely require you to engage with them. However, as you are becoming comfortable with this class and how to navigate required and recommended work I'd like you to take some time this week to engage with at least _one_ of the [optional resources](#optional-resources) below. 

There is no expectation that you read the entirety of any one of the optional resources, but you should at least skim through and try to "[get the gist](https://idioms.thefreedictionary.com/get+the+gist)" of what is being communicated.

Once you've read through your chosen optional resource, I'd like you to post on our Slack channel a short summary (a paragraph or so) describing what the resource is about and what you learned in reading it. I won't be assessing your paragraph for writing style or correctness, but I will be checking to see who has completed the work.

### [RECOMMENDED] FOLLOW-UP QUESTIONS AND REFLECTIONS
As with last week, these reflection questions are _highly_ recommended. You are still free to write them in whatever form is necessary, and no need to hand anything in. Even if you elect not to write your answers, it's valuable to read the questions and think through your answers.

1. What aspects of development in `AI2` feel familiar? What aspects feel different? What do you really like and dislike about `AI2`?
2. Consider your own programming practice in previous projects: What do you think you do well, and where do you think you could improve, in terms of writing code? If you have access to prior code-based assignments examine them carefully to assess strengths and weaknesses.
3. Consider your past documentation practices: What have you done well? What could be improved? If you have access to prior assignments examine your documentation approach and consider what works and what doesn't.


## OPTIONAL RESOURCES
- [An article about literate programming](https://codedocs.org/what-is/literate-programming)
- [How to do a code review](https://google.github.io/eng-practices/review/reviewer/)
- [MIT 6.005 Code Review](https://ocw.mit.edu/ans7870/6/6.005/s16/classes/04-code-review/)
- [Google Style Guides](https://google.github.io/styleguide/)
- [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript)
