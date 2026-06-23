# WEEK 8 (WEEK OF June 23)
## MID-SEMESTER UPDATE

> Primary contributor: **[Ashley Blacquiere](https://ca.linkedin.com/in/ashley-blacquiere)**
>
> Modified by: Dibya Prokash Sarkar

Now that we've gotten through the first half of the semester we'll shift gears a bit. To date, we have spent time with foundational ideas about good coding practice, including topics such as documentation, code review, refactoring, debugging and testing, which we have explored through weekly required and recommended work, the Programming Practice Article assignment and the MIT App Inventor assignment. The concepts we've explored and the work we've done serve as a foundation for the rest of the term, where we will explore functional requirements, design patterns, architectures and programming paradigms. In the coming week we'll commence work on the Research and Reflection Journal and some of the Application Development Coding assignment, which will draw on those foundational concepts covered in the first half of the term, and on new knowledge generated in the second half of the term.

Most critical to this is a shift to the type of coding work that we'll be doing. In the first part of the semester we focused on MIT App Inventor to ensure a common experience and so that we could easily and rapidly develop mobile apps. While we will continue to use `AI2` as a tool to demonstrate some key architectural ideas, most of your coding work will now be centred on a particular language of your choice. The work you do with this language will be drawn from our conceptual topics, and will be embedded in your Research and Reflection and Application Development Coding assignments. 

More details on both assignments will be available on Brightspace.

---
## THE BRIDGE: BUILDING THE RIGHT THING

Through Weeks 1-5 we obsessed over **building things right** clean code, tests, documentation, refactoring. That's the verification side of software craft.
 
Now we shift to the *other* question:
 
> **How do we know we're building the right thing?**
 
A perfectly engineered feature nobody uses is a perfectly engineered waste of time. The skill of identifying *what to build* before you write a line of code is at least as important as the skill of writing code well.
 
The classical tool for this is **user stories** and the **functional user requirements** they generate.
 
---

## 4. USER-CENTRED DEVELOPMENT - A SHORT HISTORY
 
In the early days of software, requirements were written by analysts in dense formal documents. Developers then built whatever the document said. The result was famously bad: software that technically met the specification but didn't actually help anyone.
 
In the 1990s and 2000s, the industry shifted toward [user-centred design](https://en.wikipedia.org/wiki/User-centered_design). Instead of starting from technical specifications, you start from **the user's perspective**. What are they trying to accomplish? What's getting in their way? What do they expect from a tool that solves their problem?
 
The agile movement gave us a compact tool for capturing this: the **user story**.
 
---

## 5. ANATOMY OF A USER STORY
 
A user story is a short statement, written from the user's point of view, describing a specific use of the software.
 
The classic template:
 
```
As a <type of user>,
I want <some capability>,
so that <some benefit>.
```
 
Three parts, each non-negotiable:
 
| Part | What it answers |
|---|---|
| **As a <type of user>** | WHO are we building this for? |
| **I want <capability>** | WHAT do they want to do? |
| **so that <benefit>** | WHY do they want it? |
 
### A first example
 
A messaging app's new-contact feature:
 
```
As a user,
I want to add new contacts to my contact list,
so that I can message them without remembering phone numbers.
```
 
Notice what's *not* there: no mention of HTML, databases, REST APIs, or any technical detail. That's deliberate. User stories describe **the outcome the user wants**, not how you'll deliver it.
 
### More from the same feature
 
A single feature often spawns *many* user stories - each capturing a different angle:
 
```
As a user, I can open my contact list to send a message.
As a user, I can open my contact list from a new-message text field.
As a user, I can add new contacts to my contact list.
As a user, I can search my contact list when it gets long.
As a user, I can delete contacts I no longer message.
```
 
Each story is small. Each is implementable independently. Together they describe the whole feature.
 
---

## 6. WHAT MAKES A USER STORY *GOOD* INVEST
 
In 2003, Bill Wake coined the **INVEST** acronym for evaluating user stories. It still holds up:
 
| Letter | Property | What it means |
|---|---|---|
| **I** | Independent | The story can be built without waiting on other stories |
| **N** | Negotiable | It's a starting point for conversation, not a contract |
| **V** | Valuable | A real user benefits when this is built |
| **E** | Estimable | The team can guess how long it'll take |
| **S** | Small | Fits in a single sprint / iteration |
| **T** | Testable | We can verify it actually works |
 
A story that fails one of these is usually too vague, too big, or too technical.
 
### A bad story
 
> *"The app should be user-friendly."*
 
- **Independent?** Unrelated to any concrete capability.
- **Valuable?** Yes, but vague.
- **Testable?** *No.* What test would prove it's done?
This isn't a user story - it's a wish.
 
### A good story
 
> *"As a customer, I can save my shipping address to my profile, so that I don't have to re-enter it at every checkout."*
 
- **Independent?** Doesn't depend on payment processing or order history.
- **Negotiable?** Could be a dropdown, a default address, or a checkbox - conversation needed.
- **Valuable?** Saves the user time on every order.
- **Estimable?** Roughly half a sprint of work.
- **Small?** One coherent capability.
- **Testable?** Yes - we can verify the saved address is reused at checkout.
---

## 7. ACCEPTANCE CRITERIA - WHEN IS A STORY *DONE*?
 
The user story says *what*. The **acceptance criteria** say *when we're allowed to call it finished*.
 
Acceptance criteria are a checklist ideally testable attached to the story:
 
```
Story: As a customer, I can save my shipping address to my profile,
       so that I don't have to re-enter it at every checkout.
 
Acceptance criteria:
  -> User can enter and save a shipping address from their profile page.
  -> The saved address auto-fills on the checkout screen.
  -> The user can edit or delete the saved address from their profile.
  -> The system supports both Canadian and US address formats.
  -> An invalid postal code shows a clear error message.
```
 
This is the bridge from "user story" to "functional requirements". Each checkbox is verifiable. Each maps to one or more tests.
 
### The Given-When-Then format
 
A popular structured way to write acceptance criteria, borrowed from behaviour-driven development (BDD):
 
```
Given <the starting state>
When <the user action happens>
Then <the expected outcome>
```
 
Example:
 
```
Given I am logged in and on the checkout screen,
When I select "Use saved address",
Then my saved shipping address auto-fills the form.
```
 
This format is **testable by construction**. Each Given-When-Then maps almost directly to an automated test which is why teams adopt it as the bridge between user stories and the code that fulfils them.
 
---

## 8. FUNCTIONAL USER REQUIREMENTS
 
When user stories and acceptance criteria are mature, we can express them as **functional requirements** the precise technical specifications of features we'll implement.
 
A functional requirement says **what the system MUST do** to satisfy the user need. Common shapes:
 
```
FR-12: The system shall allow registered users to save a shipping address.
FR-13: The system shall display the saved address on the checkout page
       when the user selects "Use saved address".
FR-14: The system shall validate postal codes against both Canadian
       and US format rules.
```
 
Notice the language: *"the system shall"*. That's the conventional voice of functional requirements. Each statement is:
 
- **Testable** - we can write a test that proves the system does it
- **Atomic** - one requirement, one capability
- **Unambiguous** - no room for interpretation
In larger projects, functional requirements get numbered (FR-12, FR-13...) and traced back to specific user stories and forward to specific tests. This is called a **traceability matrix**, it lets you say with confidence: *"Every user need is covered by a requirement, which is covered by a test."*
 
### Functional vs non-functional
 
You'll also hear about **non-functional requirements** properties of the system that aren't tied to a specific feature. Examples:
 
- *"Pages must load in under 2 seconds."* (performance)
- *"The system must support 10,000 concurrent users."* (scalability)
- *"Personal data must be encrypted at rest."* (security)
Both kinds matter. Functional requirements answer *"what does it do?"*; non-functional requirements answer *"how well does it have to do it?"*
 
---

## 9. WHEN USER STORIES *DON'T* FIT
 
Not every feature is well-described by user stories. A few examples:
 
| Feature type | Why user stories struggle |
|---|---|
| **Performance tuning** | "As a user, I want pages to load fast" is true but vague |
| **Security hardening** | Users don't experience the absence of breaches |
| **Refactoring** | No user-visible change at all |
| **Infrastructure** | Migrating to a new database serves engineers, not users |
 
For these, teams use other tools **technical stories**, **engineering tickets**, **service-level objectives (SLOs)**. User stories remain the primary tool for *user-facing features*; the others fill in around them.
 
---

## 10. AI-ASSISTED REQUIREMENTS WORK
 
Generative AI is genuinely useful here  maybe more than for coding itself.
 
### Where AI helps
 
- **Generating user-story variations.** Paste a feature description, ask for 10 user stories from different user perspectives. Excellent for surfacing angles you'd miss.
- **Listing acceptance criteria.** "Given this user story, list the criteria a reviewer would check."
- **Spotting INVEST violations.** "Here's a user story score it against INVEST and flag any concerns."
- **Translating between formats.** Story  Given-When-Then functional requirement  test case.
### Where AI misleads
 
- **Inventing user types.** AI may add personas your product doesn't actually have ("As an administrator..." when there are no admins).
- **Confident vagueness.** AI happily produces stories like "As a user, I want a great experience", which are unfalsifiable.
- **Missing the human context.** AI doesn't know your real users. Use it to expand options, not to skip user research.
### A useful prompt
 
> *"Here's a feature description. Generate 8 user stories vary the user type, the context, and the motivation. For each, also list 3 acceptance criteria in Given-When-Then format. Do not invent user types I haven't mentioned."*
 
You get a structured first draft. You then edit it. The thinking still has to be yours.
 
---

## ACTIVITIES

<!-- ### [RECOMMENDED] READ THE RESEARCH & REFLECTION ASSIGNMENT
Make sure to visit the description of the Research & Reflection assignment on Brightspace. You should read the assignment description and the rubric in detail to familiarize yourself with expectations.

> The next two activities (each a research and reflection activity) are practice for what you will be doing on a regular basis in your Research and Reflection Journal assignment. The key difference is that for that assignment, I won't always post prompt questions for you to respond to - you must take some initiative yourself in writing your own questions to research and reflect on.  -->

### [REQUIRED] RESEARCH A NEW LANGUAGE 
> I recommend you do this activity in pairs, or in a group of three, if you can arrange it.

To practice the notion of research and reflection you will do a bit of research to learn more about one of the following programming languages: [Processing](https://processing.org/), [Haskell](https://www.haskell.org/), or [Lua](https://www.lua.org/).

#### To complete this task (~30 minutes):
1. Choose **one** of the three programming languages above; preferably one that you have never heard of before.
2. Answer the following questions about your chosen language:
    - What is the language used for?
    - Who uses the language?
    - What are some useful resources?
    - Why are these specific resources useful?
3. Post a short summary (a paragraph or less) on Mattermost that answers one or more (your choice) of the questions above and that is *different* from any other Mattermost post (i.e. the first to post have the advantage!)

I don't expect your answers to the questions above to be *complete* (i.e. when you tell me what the language is for, I don't expect you to tell me all of its uses), but you should be *specific*. In other words, if you tell me that Processing is used for database management (protip: it isn't) then you should show some evidence by pointing to a project website or repository. Similarly for the who, the what the the why questions.

<!-- ### [RECOMMENDED] REFLECT ON MATTERMOST NEW LANGUAGE RESPONSES
In theory, by the end of the week we should have a couple dozen or more responses on Mattermost to the required activity above. Take some time to read them, then write a short reflection on Mattermost stating what you've learned from the process. When writing your reflection consider both the research you've done and what you've learned in reading other posts. Your reflection need not be more than a paragraph, and can be a stand-alone post, or a reply to another post. -->

### [REQUIRED] WRITE A USER STORY
> I recommend you do this activity in pairs, or in a group of three, if you can arrange it. 

#### To complete this task (~20 minutes)
Pick out an app that you use regularly and choose a feature to write a user story about. You may begin by writing a relatively general user story, but you should endeavour then to write a collection of more specific user stories for the same feature. Consider writing about different contexts, or different uses (i.e. users with different motivations). You can also try to write some acceptance criteria (i.e. a checklist of qualities or properties that should be present in the feature for it to be "accepted").

As an example, imagine a generic messaging app:
- "As a user, I can open a contact list to send a message."
- "As a user, I can open a contact list from a new message text field."
- "As a user, I can add new contacts to my contact list."

Acceptance criteria for the last of these user stories may include:
- The contact list includes an 'Add new contact' button.
- The contact list clearly displays all existing contacts.
- The contact list provides a fast scroll (or similar) navigation tool for parsing long contact lists.

<!-- ### [REQUIRED] READ THE APP DEVELOPMENT PROJECT DESCRIPTION
Make sure to visit the description of the Application Development Project assignment on Brightspace. You should read the assignment description and the rubric in detail to familiarize yourself with expectations. After finalizing your group members, start forming the group and please fill out the [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1-35hbdRHeLw5NHOnC02vlY2vMeCqDxoB52vW2i52Xn8/edit?usp=sharing)  -->

<!-- ### [REQUIRED] CHOOSE A LANGUAGE FOR YOUR APP DEVELOPMENT PROJECT CODE
The Coding project requires that you spend time writing code in service of an open source community. What code you write will be determined by course content, community needs (among the peers), and your choice of programming language.

For this task you should spend time thinking about what language you might like to work with for the remainder of this course. I recommend that you consider using a language you are already familiar with and preferably one that is closely associated with mobile or web app development. This is also an opportunity to learn more about your chosen language, so think of it as a learning opportunity.

**Good choices include:**
- (Taught in DGL programs): Kotlin, JavaScript, React Native, PHP  
- (Not taught in DGL programs): TypeScript, Swift, Dart, Ruby

**Less good choices include:**
- Java - in part because the Java communities tend to cater less to novices, and because more folks write apps in Kotlin than Java these days.
- HTML or CSS - are markup and style sheet languages, respectively. Our goal is to focus on general purpose programming languages.

#### To complete this task (~30 minutes)
Write a Slack post that includes the following:
- The language you’d like to focus on (see list above for suggestions)
- The amount of experience you have with it (i.e. semesters, years, project - whatever makes to you)
- One specific reason why you’d like to learn more about the language -->

### [REQUIRED] STAR GITHUB TOPICS AND REPOSITORIES OF INTEREST
In preparation for the Coding project I'd like you to familiarize yourself with some communities of interest on GitHub. Doing so will help to increase the breadth of your knowledge of open source communities, and will give you a good starting point when searching for a community to contribute to.

#### To complete this task (~20 minutes)
1. Visit the [GitHub Explore tab](https://github.com/explore) on your profile (make sure you are logged in!)
2. If there is anything in your Explore feed, scroll through to see what GitHub is suggesting you follow. Star anything that looks interesting!
3. Click the [Topics tab](https://github.com/topics), scroll through the list (it's pretty long, and you'll have to press Load more...) a bunch of times. Star any topics that look interesting.
4. Click the [Trending tab](https://github.com/trending). Keep scrolling and starring! If you want to narrow what you see play with the filters at the top of this list.
5. Click the [Collections tab](https://github.com/collections) and browse through the items. This list is shorter, but clicking on each will open a curated list of repositories on that subject, which - you guessed it! - you can star if you think they're interesting.
6. Finally, head back to the [Explore tab](https://github.com/explore) and scroll through now that you've starred a bunch of interesting repositories. You should see some new content!

### [RECOMMENDED] FOLLOW-UP QUESTIONS AND REFLECTIONS
1. What is one interesting thing that you've learned from researching about programming languages and from reading other students' posting about programming languages in response to the first activity?  
2. What other programming languages might you consider to work with for DGL 104? What are your second choices, and why?
3. What did you find most interesting when examining repositories on GitHub? Is there anything that surprised you, or that you didn't expect? What similarities are there across some of the repositories you've starred?


## OPTIONAL RESOURCES
N/A