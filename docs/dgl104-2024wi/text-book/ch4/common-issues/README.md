
# Five Common Mistakes You Might Be Making As An Aspiring Developer

Now that you’ve learned how to debug your code, it's time to take a look into what makes good code so good. And how you as a programmer can write like a senior developer. [IntentHQ](https://intenthq.com/blog/it-audience/what-is-good-code-a-scientific-definition/) asked 65 developers what makes good code, and by far the most common answer was that the code had to be readable by humans, not just computers. 

But what does that actually mean? Readable by humans? Isn’t all code readable? The short answer is yes but not all readable code is of the same caliber. Let's say you have a file with multiple functions written out in the file. You wrote these functions knowing their intent and purpose, and at the time of writing them, all of these things made sense. But 6 months or maybe even a year later it's time for your codebase to receive a slight upgrade. Confidently you pass off your excellent functions to another developer as this new developer will be overseeing the upgrades. And that's when things go awry. 

The developer comes back to you and gives you a list of things wrong with your perfectly created functions. No code commenting, poor naming conventions, repeating code, variables have multiple purposes, and whitespace is essentially non-existent. 

This is where refactoring comes to the rescue. Refactoring is the process of restructuring existing code & changing the factoring without actually changing any of the code behavior. This can be something as simple as upgrading your code by changing the naming conventions to something that better reflects your functions & variables, or this could be something such as changing your basic JavaScript function to an ES6 arrow function. 

So now that you’re aware of how you can refactor code, let's dive into a few examples of where beginner programs often leave their biggest mistakes.

And what better place to start than where we just left off! The most common problem that any developer could make across the board, whether you’re a junior or a senior not using comments is a massive problem! Let’s take a look at this THREE.JS code. First without comments, and then again with an explanation

```javascript
const scene = new THREE.Scene(); const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); const renderer = new THREE.WebGLRenderer(); renderer.setSize( window.innerWidth, window.innerHeight ); document.body.appendChild( renderer.domElement );
```


As someone who’s maybe just getting started with JavaScript frameworks can be confusing enough, but there can come times when you are thrown into a mix of code and you are not entirely sure what the purpose is. So now let’s take a look at this code, but with some proper commenting and explanations involved.

```javascript
//To be able to create anything within three.js, first, we need to create a scene. And that's exactly what we’re doing below

const scene = new THREE.Scene(); 

//From here to render our `scene`, we need some eyeballs on the `scene`. But since three.js doesn't have an eyeball option, it looks like these cameras will work! So first thing to get us started we’re going to be adding a `camera` to our `scene`. These `camera`s take a few parameters before we can get them into action, these include things such as a field of view and an aspect ratio. 

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 

//Next up here is the renderer, This is where our `scene` truly comes to life. Because we’ll be setting our entire `scene` up to be rendered, by our renderer. 

const renderer = new THREE.WebGLRenderer(); 

//Next we’ll be setting the size of our `renderer`, for this example, we’ll be using the entire page. And then we’re going to append our `renderer` to our DOM so that we can view it in our browser.

renderer.setSize( window.innerWidth, window.innerHeight ); 
document.body.appendChild( renderer.domElement );
```

See the difference a few comments can make? While these comments may be slightly over the top, the better of an explanation you can give, the more it can clear up some foggy code for a teammate.

When team environments are working on multiple projects on a daily basis and writing bits and pieces of code all over the place, it’s pretty much guaranteed that we will forget what we have written. This is because programmers often find themselves jumping between one complex problem after another, requiring their full attention. So the practice of refactoring your code to include comments (or just writing them as you code!) will be helpful to us in the future, as well as respectful practice for your teammates. When it comes to problem-solving commenting allows you or a team member to easily dive into a section that could have a bug in it, therefore with the combination of good clean refactored code and your debugging knowledge, nothing should get in your way of writing excellent code.

The second mistake that can lead to a debugging and refactoring nightmare can be writing code to solve a problem that you as a developer, don't fully understand. Working in a team environment you can sometimes be broken off to write a chunk of code, requiring that piece of code to later be integrated into your codebase. This can quickly become a headache if you do not understand the problem, therefore in my own architecture, I believe it's important to seek first to understand before being understood. This is an extremely important principle in writing clean code. And this is just another example of how abstract the art of refactoring can truly be. Before even writing a line of code you can be refactoring ideas and structurally sound architecture maps in your head. And this leads us to our next item on the list!

Let’s say for example that we’ve got a client who is searching for an eCommerce store to be built, our client has chosen to go with a fully custom build and does not want to use Shopify. Someone new to development may dive in and begin to write some code and solve the problems as they arise. However, the correct approach would first be to brainstorm your options, talk about solutions amongst your team and then begin developing some code. 

Brainstorming. The reason refactoring exists is because there are so many ways that you can write code. You can write some terrible code and often times it can still manage to get the job done. However, it may not look too sharp within your portfolio when you’re applying for jobs! We all wanna get better at what we do, it's human nature to improve. Therefore before we write code we should always weigh our options before going with our first immediate thought. In design, there is a commonly known and talked about principle that “your first idea may not always be your best idea”. Most designers will take days and sometimes weeks to map out their ideas, before selecting one to move forward with. As your first idea is unfortunately seldom the best or most creative possible solution to a problem, actually it's often said that your first idea was the most obvious. In the world of programming, the designers have often completed their work before passing it off to us, and as the project crunch comes down to meeting the deadline we often don't have those extra days we would like to take for brainstorming. And that's where your team can come in handy. Getting together for a quick 2-3 hour brain-storm before writing a single line of code and just throwing ideas at the wall can oftentimes be just enough to eliminate any of those poor ideas that you may have. So remember, always refactor ideas before you refactor any code! It saves time in the end and can make you a better programmer in the end.

Taking small steps. Many people fresh learning how to code can easily find themselves getting lost within the many different communities that take place in coding, Whether that's through Youtube, Discord, Twitter, Reddit. Pick your poison they aren't hard to find! But one thing that can become increasingly scary and overwhelming, to begin with, is where and how to start carving out your own path within this ever-evolving world of development. When I was first getting started I was heavily influenced by a few YouTuber's skillsets so much so that I ended up trying to take a course in React without ever really having the basics of JavaScript down. Small steps are extremely beneficial to big-picture learning. That’s why it's important to get a strong base knowledge in things such as javascript before learning TypeScript, or CSS before learning Sass. 

Taking small but prominent steps forward in your learning allows you to later take small steps within your refactoring process. If you can’t translate the code you wrote from code to English in your head, line by line; refactoring in itself can become extremely difficult and you could potentially be putting in hours to a problem that should only take minutes. Given the nature of code, especially a language such as JavaScript that I have chosen to focus on throughout this entire introductory blog post. JavaScript on a good day can be incredibly finicky to get just right, so throwing the wrench of refactoring without a strong base knowledge can trip you up very fast. Leaving you and your team in a worse position than you were to start. in the end, this might be one of the most important aspects to consider next time you are refactoring code. This issue ties in strongly with writing code to solve a problem that you as a developer, don't fully understand. 

And our last, but not least important topic of this post has to be saving time by making duct-tape fixes within your work. There's a good chance as a programmer you are constantly busy with one thing or another. When one piece of code is fixed another one breaks, that's essentially the way things go. It can oftentimes be tempting to throw a quick, mediocre fix within an error that will at least temporarily stop the bleeding and you can get back to your main priorities. However, the issue with this is, that as one fix becomes another fix this can be a fast and effective way to kill the quality of your organization's codebase. If you’re in a hurry and can’t fix this bug at the time of it being spotted, then it's best that you or a member on your team put a quick fix in, but schedule time to refactor the code that caused the bug to occur in the first place.

Now that you’re familiarized with some of the best practices in refactoring, as well as some of the best practices for becoming a better developer. Let's get started in the next section by diving into our refactoring principles!


## Common Code Issues

Now that you’ve got some insight regarding issues that can occur as a programmer, it’s time to dive into the most common code issues that we as developers can encounter while on the job. As you’ve learned previously through the study of debugging and introduction to refactoring, you’re probably familiar with how these issues can start, and snowball over time. When it comes to refactoring we often are not aiming to fix mistakes, that comes in the debugging process. The majority of code issues usually stem from things such as incorrect variables names, poor code structure, and of course undocumented code.

When refactoring it is good practice to test often and make sure you are not introducing any new problems that had not been previously there before. Understanding that refactoring is not just a single job but an ongoing process that spans the lifetime of the codebase you are working with is something that many programmers could benefit from. adapting, altering, and tweaking is all a part of the job; and our job as refactoring experts is to make sure that the code is in a better condition than the way we found it. With the goal of creating a welcoming environment for other developers to jump in and out of. 

If you’ve ventured into the world of programming, via self-taught projects, tutorials, or through a class, you’ve likely heard the term “don’t repeat yourself”. This is one of the simplest phrases but has become ingrained in all programmer's heads as it is one of the most important pieces of advice that can be given. Duplicated code and many functions that ultimately do the same thing can cause processes to become slower and more tedious. This problem can come in many forms, from code to logic this is all something we’re guilty of from time to time. But with this knowledge in mind, you can take your programming skills to the next level. Let’s take a look at an example and how we could improve upon it. 

```javascript
function logText(text) {
    console.log(text)
}
```

In this function, we are taking in some text and we are going to log it into our console and see what we get. But let's say perhaps this file we wrote this in pertains to only one section in our codebase, and as we begin writing code in a new file we forget about what we’ve written there. 

```javascript
const logSameText(message, text) => {
    console.log(message, text)
}
```
Now we’ve written this function because in our new file we’d like to see a message and that original piece of text. There is nothing wrong with either of these functions, the issue actually arises with our duplicated code. And as these functions are living in very different sections of our codebase, finding them can be a pain in the neck. As you begin to build out various sections of your website or web app these things can begin to add up. The proper solution here would be to create a single function that we can then call upon in various sections of our app. This practice is known as keeping code DRY (Do Not Repeat Yourself). Becoming a DRY programmer can be a tough task at first but after you’ve begun to mindfully implement this practice, it will become second nature. 

Another main refactoring issue that we run into on our journey is poor naming conventions. When we create functions and variables it makes sense to give these things names that play into the regard of what they actually do. However, while that may sound simple on the surface, that does not mean that you should name your next variable `my_Favoruite_Number_Is_ThirtyTwo` Instead there are three basic concepts that we should keep in mind when we name our variables, and those are as follows.

The variable name must describe the information that is represented by this said variable. We should aim to quickly display what value this variable holds, simply by looking at the name

Your code will be read infinitely more than your code will be written, with this in mind its important that we as developers always aim to prioritize how easy the legible of our code is over than how quickly it is constructed.

Implementing standard code practices for naming -  for your specific language, as different languages follow different naming practices this is something important to look into.

So in theory this sounds easy enough to follow, but what does this actually look like in practice? Well let's take a look at some poor naming conventions and some good ones, and you can decide for yourself if, located inside a codebase, this would make a difference to you.

For this example we’ll be creating someone's full name, so to do that we’ll need 3 variables. A user's first name, last name, and the user's middle name. I’ll give you 3 different sets of variables and let you choose which section of variables you think follows the proper conventions. 

### Section one

```javascript
var FIRSTNAME = “Ryan”
let MIDDLENAME = “Wayne”
const LASTNAME = “Stich”
```


### Section Two
```javascript
let firstName = “Ryan”
let middleName= “Wayne”
let lastName = “Stich”
```

### Section Three

```javascript
let FIRST_NAME= “Ryan”
let MiddleName = “Wayne”
let LAST_NAME = “Stich”
```

Given those three sections, if you had chosen anything outside of code block #2, you would be conforming to poor naming convention standards. The above code is written in JavaScript and JavaScript is known for its use of camelCase variables, as well as PascalCase. However, this can get messy as JavaScript variables are case-sensitive. This means that you could generate three different variables that all look identical, such as name, Name & NAME. That’s why it's equally as important to choose the correct type of variables, such as `let` for something that is mutable and `const` for something that is immutable. 

We all desire to write the perfect code that follows all best practices and of course, is bug-free, but the reality of the engineering code is that just simply isn't possible as human error will forever be unavoidable. But one thing that can assist us in our process, especially when we’re working in teams can be design patterns. Design patterns enable us to implement tried and true solutions to common problems that other developers have faced and overcome. Implementing well-documented solutions, allows us to inch our code closer to that perfect code we’re all aiming for. This is something you’ll learn more about in chapter 7. So until then, we’ll just be focusing on the next section which is a step-by-step guide on how to refactor. 

## References
IntentHQ - https://intenthq.com/blog/it-audience/what-is-good-code-a-scientific-definition/

Refactoring - https://www.bmc.com/blogs/code-refactoring-explained/
https://medium.com/swlh/the-ultimate-engineers-guide-to-code-refactoring-c38372632906

Ideas for choosing common mistakes 
https://www.toptal.com/web/top-10-mistakes-that-web-developers-make
https://medium.com/geekculture/9-common-mistakes-that-developers-often-make-4ceeab9ca09a

Design Philosophy - https://hbr.org/2021/01/your-best-ideas-are-often-your-last-ideas
https://hbr.org/2017/08/to-come-up-with-a-good-idea-start-by-imagining-the-worst-idea-possible


Refactoring Problems https://blog.devgenius.io/problems-that-we-may-run-into-when-refactoring-96ba081cabe
https://www.altexsoft.com/blog/engineering/code-refactoring-best-practices-when-and-when-not-to-do-it/
https://www.merixstudio.com/blog/10-signs-your-codebase-needs-refactoring/