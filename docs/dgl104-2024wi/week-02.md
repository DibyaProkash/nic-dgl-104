<!-- # WEEK 2 (WEEK OF May 12)
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
3. Submit your works in the Github repository. The link of the Github repo for this task: [GitHub Repo](https://classroom.github.com/a/32YS1ypl)

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
- [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript) -->



// New content

# WEEK 2 (WEEK OF May 12)
## LECTURE — DOCUMENTATION, CODE REVIEW & STYLE GUIDES
 
> Original primary contributor: **[Ashley Blacquiere](https://ca.linkedin.com/in/ashley-blacquiere)**
>
> Modernized for Summer 2026 by: **Dibya Prokash Sarkar**
 
![Documentation and Code Review](images/code-documentation.jpg ':class=banner-image')

 
> **Class note:** This week is half lecture, half hands-on workshop. Come to class having read this page — we'll spend the in-class time *practicing* rather than introducing concepts cold.
 
---
 
## 1. WHY DOCUMENTATION ACTUALLY MATTERS
 
Here's a question to sit with for a moment:
 
> *"What do you do when you come back to your own code six months later — and have no idea why you wrote it that way?"*
 
If you've written enough code, you already know the answer: you stare at it, you swear quietly, and you eventually realize that **past-you was effectively a different person** — one who is no longer available for questions.
 
Documentation is the conversation you leave for future-you (and for everyone else who will read your code). It is not "extra work after the real work." It *is* part of the real work.
 
A few claims I'll defend over the next two hours:
 
- **Good documentation is a competitive advantage.** Teams ship faster when new contributors can onboard themselves.
- **Bad documentation is worse than none at all.** A stale comment that lies is more dangerous than no comment at all.
- **The best documentation is the code itself.** When the code is clearly written, it doesn't need much explaining.
- **AI tools magnify documentation's value.** When Copilot or Claude reads your code, well-named functions and clear docstrings dramatically improve the help they can give you.
---
 
## 2. THE THREE LEVELS OF DOCUMENTATION
 
Most developers think of "docs" as one thing. It's really three.
 
### Level 1 — Project-level documentation
 
This is the documentation a **new contributor or user** encounters first. It lives outside the code, usually in your repository's root:
 
- `README.md` — the front door. What is this project? How do I run it?
- `CONTRIBUTING.md` — how to contribute (style rules, branch conventions, etc.).
- `CHANGELOG.md` — what changed when, and why.
- A `/docs` folder for longer-form guides, architecture notes, ADRs (Architecture Decision Records).
If someone clones your repo and can't run the project within 10 minutes by reading the README alone, your project documentation has failed.
 
### Level 2 — Code-level documentation
 
This is documentation **inside the code** — inline comments, function docstrings, type annotations. Different languages have different conventions:
 
- **JavaScript / TypeScript** — JSDoc / TSDoc comments
- **Python** — docstrings (PEP 257)
- **Java / Kotlin** — Javadoc / KDoc
- **Swift** — Swift Markup
- **Dart** — Dartdoc
- **C / C++** — Doxygen
A consistent thread runs through all of them: **good code-level documentation explains *why*, not *what***. The code shows what it does. The comment explains why it does it that way.
 
### Level 3 — In-context documentation
 
This is documentation that lives **alongside the work** — commit messages, pull request descriptions, code review comments, issue trackers. It captures the *story* of how the code came to be the way it is.
 
A great PR description is worth more than a paragraph of inline comments, because it gives the *full context* for a change in one place.
 
> **Ashley's preference, which I share:** Focus most of your documentation effort on Level 1 (project) and Level 3 (in-context). Use Level 2 (in-code) sparingly, and only when the code itself can't be made clearer.
 
---
 
## 3. THE GOLD STANDARD: SELF-DOCUMENTING CODE
 
The single highest-return habit in programming is writing **code that explains itself**. Most "comments needed" moments are actually "naming and structure needed" moments in disguise.
 
### Example A — A function that needs comments
 
```javascript
// Calculate the final price after applying student discount
// and tax. Only apply discount if customer is a student.
// Tax is 12% for BC.
function calc(p, s) {
  let r = p;
  if (s) r = p * 0.85;   // 15% off for students
  return r * 1.12;        // add tax
}
```
 
Every comment is doing the work the code should have done. Let's rewrite:
 
### Example A — The same function, self-documenting
 
```javascript
const BC_TAX_RATE = 0.12;
const STUDENT_DISCOUNT_RATE = 0.15;
 
function priceAfterStudentDiscountAndTax(basePrice, isStudent) {
  const discountedPrice = isStudent
    ? basePrice * (1 - STUDENT_DISCOUNT_RATE)
    : basePrice;
  return discountedPrice * (1 + BC_TAX_RATE);
}
```
 
Same logic. No comments. *More* readable. Future-you knows exactly what `STUDENT_DISCOUNT_RATE` means without having to scan for a comment.
 
Two design moves carried the weight:
 
1. **Magic numbers became named constants.** `0.85` and `1.12` are now `STUDENT_DISCOUNT_RATE` and `BC_TAX_RATE` — the *intent* lives in the name.
2. **The function name describes what it returns.** `calc(p, s)` is mystery meat. `priceAfterStudentDiscountAndTax(basePrice, isStudent)` is a sentence.
> **Rule of thumb:** Before you write a comment, ask *"can I rename or restructure something so this comment becomes obvious?"* Eight times out of ten, you can.
 
---
 
## 4. WHEN COMMENTS ARE ACTUALLY GOOD
 
Self-documenting code is the goal, but comments earn their keep in five specific situations:
 
### Good comment #1 — Explaining *why*, not *what*
 
```javascript
// We use a 200ms debounce because the search API
// rate-limits at 5 requests per second.
const debouncedSearch = debounce(search, 200);
```
 
The code says *what* (200ms debounce). The comment says *why* (rate limits). Future-you will not remember the API limit. The comment is genuinely useful.
 
### Good comment #2 — Warning about non-obvious behavior
 
```python
# WARNING: this function modifies the input list in place.
# Pass a copy if you need to preserve the original.
def sort_by_priority(items):
    items.sort(key=lambda x: x.priority)
```
 
### Good comment #3 — Linking to context
 
```javascript
// See bug #4521 — Safari < 16 incorrectly handles
// the negative margin here. Workaround required.
const offset = isSafari ? margin * 2 : margin;
```
 
### Good comment #4 — Documenting a public API (docstrings)
 
```python
def calculate_grade(score: float, max_score: float) -> str:
    """Convert a numeric score into a letter grade.
 
    Args:
        score: The student's score, must be >= 0.
        max_score: The maximum possible score, must be > 0.
 
    Returns:
        A letter grade: 'A', 'B', 'C', 'D', or 'F'.
 
    Raises:
        ValueError: If max_score is zero or score is negative.
    """
```
 
This is the contract for callers. It belongs in the code.
 
### Good comment #5 — TODO/FIXME with intent
 
```javascript
// TODO(dibya, 2026-05-12): switch to the v3 API
// once the rate-limit increase is approved.
```
 
Author, date, and *what to do when* — not just "TODO: fix this."
 
---
 
## 5. COMMENTS THAT ARE NOISE (DELETE THESE)
 
```javascript
// Increment counter
counter++;
 
// Loop through users
for (const user of users) { ... }
 
// Check if logged in
if (user.isLoggedIn) { ... }
```
 
These add zero information. The code already says what's happening. Worse, when the code changes and the comment doesn't, the comment becomes a lie.
 
> **Stale comments are dangerous.** A comment that *used* to be true but now isn't will mislead readers worse than no comment at all. Maintain comments like you maintain code, or delete them.
 
---
 
## 6. THE README — YOUR PROJECT'S FRONT DOOR
 
If a stranger clones your repository, the README is the first (and often *only*) thing they read. A good README answers seven questions:
 
1. **What is this?** (one sentence)
2. **Why does it exist?** (the problem it solves)
3. **How do I install / run it?** (copy-paste commands)
4. **How do I use it?** (a small, working example)
5. **How is it structured?** (key directories / files)
6. **How do I contribute?** (or link to CONTRIBUTING.md)
7. **What's the license?** (and credits)
### Anatomy of a strong README
 
```markdown
# Project Name
 
> One-sentence description of what this project does.
 
[![Build Status](badge-url)](link)
[![License](license-badge)](license-link)
 
## Quick start
 
```bash
git clone https://github.com/you/project.git
cd project
npm install
npm start
```
 
Open http://localhost:3000 in your browser.
 
## Why this exists
 
A short paragraph explaining the problem this project solves
and who it's for.
 
## Usage example
 
```js
import { Greeter } from 'project';
const g = new Greeter('world');
console.log(g.greet()); // Hello, world!
```
 
## Project structure
 
- `src/` — source code
- `tests/` — test files
- `docs/` — additional documentation
## Contributing
 
See [CONTRIBUTING.md](./CONTRIBUTING.md). PRs welcome.
 
## License
 
MIT — see [LICENSE](./LICENSE).
```
 
Notice what's *not* there: no marketing fluff, no walls of text, no "this project does many things." Just answers to the seven questions, in order.

```
 
## 7. COMMIT MESSAGES ARE DOCUMENTATION TOO
 
The git history is one of the richest forms of documentation you have — but only if you write it like documentation.
 
### Bad commit messages
 
```
fixed stuff
asdf
WIP
final
final final
final final v2
```
 
### Good commit messages
 
```
Fix: search returns no results when query has trailing space
 
The search endpoint was passing the raw query string to the database
without trimming. Adding .trim() on input resolves the issue and
matches the behavior of similar competitor APIs.
 
Fixes #142
```
 
The structure is **subject line + blank line + body explaining why**. Limit the subject to ~50 characters; wrap the body at ~72.
 
Modern teams often use **Conventional Commits**: `feat:`, `fix:`, `docs:`, `refactor:`, `test:` — a small prefix that makes the history scannable and even *machine-parseable* for changelogs.
 
---
 
## 8. CODE REVIEW — DOCUMENTATION IN MOTION
 
Code review is where documentation gets exercised. Reviewing someone's code is essentially asking the question:
 
> *"Reading this in isolation, do I understand what it does, why it exists, and whether it's correct?"*
 
If the answer is no, the documentation has failed — and that's part of what review surfaces.
 
### What good reviewers look for
 
| Category | Example questions |
|---|---|
| **Correctness** | Does this actually do what it claims to? Edge cases? |
| **Clarity** | Can I read this without context? Are names meaningful? |
| **Design** | Is this in the right file? Is the abstraction right? |
| **Testing** | Are tests present? Do they cover failure cases? |
| **Documentation** | Is the README updated? Are public APIs documented? |
| **Style** | Does it follow project conventions? |
 
### How to *receive* code review well
 
This matters as much as how to give it.
 
- Treat review comments as **gifts**, not attacks. A reviewer who spends time on your code is helping you.
- Default to assuming **good intent**. If a comment feels harsh, re-read it as if a trusted friend wrote it.
- **Resolve every comment** — either by changing the code or by explaining why you disagree. Silence is rude.
- If a comment teaches you something new, **say so**. ("TIL — I didn't know about Array.flat(). Thanks!") This makes reviewers want to keep helping.
 
### How to *give* code review well
 
- Be specific. "This is confusing" is unhelpful. "I had to re-read this three times because of the double negative — could we rename `shouldNotSkip` to `shouldProcess`?" is helpful.
- Ask questions rather than make demands. "Have you considered X?" lands better than "Use X instead."
- Praise good code, not just critique bad code. People remember.
- Distinguish **must-fix** from **nice-to-have**. Many teams use prefixes: `[blocking]`, `[nit]`, `[question]`.
 
---
 
## 9. STYLE GUIDES — WHY THEY EXIST
 
A style guide is a project's (or team's) agreed-upon answer to questions like:
 
- camelCase, snake_case, or PascalCase?
- 2 spaces or 4 spaces for indentation?
- Single quotes or double quotes for strings?
- Where do braces go?
- Maximum line length?
 
The honest truth: **most of these choices don't matter in isolation.** Tabs vs. spaces is a religious war fought over an aesthetic preference. What matters is **consistency** within a codebase.
 
When every file in a project looks the same, three things happen:
 
1. **Readers don't get distracted by style.** Their brain focuses on logic, not formatting.
2. **Code reviews focus on substance.** No one wastes time arguing about indentation.
3. **New contributors onboard faster.** The patterns are predictable.
 
### Don't write style rules by hand — automate them
 
In 2026, you almost never enforce style by reading. You enforce it with tools:
 
- **Prettier** (JS/TS, CSS, HTML, JSON) — opinionated auto-formatter
- **ESLint** / **TSLint** — JS/TS linting
- **Black** (Python) — opinionated formatter
- **Ruff** (Python) — fast linter
- **gofmt** (Go) — built into the language
- **rustfmt** / **clippy** (Rust)
- **dart format** + `analysis_options.yaml` (Dart)
- **ktlint** / **detekt** (Kotlin)
- **clang-format** (C/C++)
 
These tools run on save in your editor, on every commit (via git hooks like Husky), and in CI (via GitHub Actions). By the time a human sees the code, style is already correct.
 
### Famous published style guides (for reference)
 
- [Google Style Guides](https://google.github.io/styleguide/) — many languages, well-reasoned
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) — still influential
- [PEP 8](https://peps.python.org/pep-0008/) — Python's official style guide
- [Effective Dart](https://dart.dev/effective-dart) — official Dart style
- [Swift API Design Guidelines](https://www.swift.org/documentation/api-design-guidelines/)
 
These are useful reading even if you don't adopt them wholesale.
 
---
 
## 10. DOCUMENTATION IN THE AI ERA
 
A new and unexpected benefit of good documentation: **it makes AI tools dramatically better at helping you.**
 
When you ask Copilot or Claude for help with a function, the model reads:
 
- The function name
- The parameter types
- The docstring
- Surrounding code
 
The clearer those signals, the better the help. Sloppy naming and missing types degrade AI assistance just as much as they degrade human assistance.
 
### Two examples of the same task
 
**Poor documentation, poor AI assistance:**
 
```javascript
function p(x, y) {
  // ...
}
```
 
Ask Copilot to "complete this function" and it has nothing to go on. It will guess. The guess will probably be wrong.
 
**Good documentation, good AI assistance:**
 
```javascript
/**
 * Calculate the great-circle distance between two GPS coordinates.
 * @param {{lat: number, lng: number}} from - origin coordinate
 * @param {{lat: number, lng: number}} to - destination coordinate
 * @returns {number} distance in kilometres
 */
function distanceKm(from, to) {
  // ...
}
```
 
Copilot now has type information, semantic intent, and units. It'll generate the Haversine formula correctly.
 
The same principle holds when you ask an LLM to **refactor**, **debug**, or **review** your code. The richer the context you've embedded in the code itself, the better the AI's help will be.
 
> **Practical takeaway:** Good documentation is no longer just for humans. It's for your collaboration with AI tools too. Investing in clear naming and types now compounds for the rest of your career.
 
---
 
## ACTIVITIES
 
> **Class note:** Required activities should be completed before next week. Recommended activities are worth doing if you have the time.
 
<!-- ### [REQUIRED] DOCUMENT YOUR WEEK 1 LAB
 
Add a real README to your Week 1 lab repository. It must answer the seven questions from Section 6 of this page. Keep it concise — quality over length.
 
Commit and push. Submit the GitHub link on Brightspace.
 
**Suggested time:** 30–45 minutes.
 
### [REQUIRED] PARTICIPATE IN A PEER CODE REVIEW
 
You'll be paired with a classmate in Tuesday's lab. You will:
 
1. **Clone their Week 1 lab repo.**
2. **Open at least three review comments** on GitHub:
   - One about **clarity** (naming, structure, readability)
   - One about **documentation** (something missing or misleading)
   - One **positive** (something you genuinely liked)
3. **Respond to every comment** they leave on *your* repo. Even just `Thanks, fixed in <commit hash>` counts.
This is your first real exposure to async code review. It will feel slightly awkward. That's normal. -->
 
### [REQUIRED] MIT APP INVENTOR — SECOND APP + DOCUMENTATION
 
If you completed the Space Invaders tutorial in Week 1, this week pick one more AI2 tutorial (or one of the more advanced AI-based tutorials from the [AI2 tutorials page](http://appinventor.mit.edu/explore/ai2/tutorials)). Recommended choices:
 
- [PaintPot](http://appinventor.mit.edu/explore/ai2/paintpot-part1) — sensors and drawing
- [BallBounce](https://appinventor.mit.edu/explore/sites/all/files/hourofcode/BallBounceTutorial.pdf) — animation and physics
<!-- - [PersonalImageClassifier](http://appinventor.mit.edu/explore/ai-with-mit-app-inventor) — AI in AI2 -->
For this second tutorial:
 
1. Push your work to a repository in our GitHub organization.
2. Write a real README (use Section 6 as your guide).
3. Participate in code review on your repo.
> **Heads up on AI2 + GitHub:** Because AI2 code blocks don't render on GitHub, the code-review process will be a bit unusual — your reviewer will need to download your `.aia` file and import it. We'll demonstrate the workflow in class.
 
### [RECOMMENDED] DOCUMENTATION SELF-AUDIT
 
Pick **one** old assignment from a previous course (any language, any topic). Spend 20 minutes asking yourself:
 
- Would a stranger understand what this code does without you explaining?
- Do the function and variable names tell a clear story?
- Are there comments that contradict the code?
- Is there a README? Does it work?
Write a short journal entry describing what you'd change and *why*. Don't actually fix it — just diagnose.
 
### [RECOMMENDED] PROGRAMMING PRACTICE ARTICLE — START BRAINSTORMING
 
The Programming Practice Article has its first post due soon. Start thinking about topics. Some ideas tailored to this week:
 
- "Five comments I deleted today, and why"
- "Anatomy of a README that actually works"
- "What I learned giving my first peer code review"
- "How I name variables now vs. how I named them last year"
### [RECOMMENDED] FOLLOW-UP QUESTIONS AND REFLECTIONS
 
Add these to your journal:
 
1. Look at code you wrote more than six months ago. Can you understand it without effort? What would have helped your past self?
2. What kinds of comments do *you* tend to write? Are they explaining *why*, or describing *what*?
3. When you receive critical feedback on your code, what's your immediate emotional response? How might you reframe that response?
4. If you had to enforce one style rule across your team forever, which would you pick — and why?
---
 
## RESOURCES
 
### Documentation & READMEs
 
- [Make a README](https://www.makeareadme.com/) — short, opinionated, excellent.
- [Awesome README](https://github.com/matiassingers/awesome-readme) — curated examples of great READMEs.
- [Diátaxis](https://diataxis.fr/) — a framework for thinking about documentation types (tutorials, how-to, reference, explanation). Powerful once it clicks.
- [Write the Docs](https://www.writethedocs.org/) — community + guides for technical writers.
### Code review
 
- [Google's code review developer guide](https://google.github.io/eng-practices/review/) — how Google reviews code, written by Googlers. Excellent.
- [Conventional Comments](https://conventionalcomments.org/) — a simple convention for labelling review comments (`praise:`, `nitpick:`, `suggestion:`, `issue:`, etc.).
- [How to Do Code Reviews Like a Human](https://mtlynch.io/human-code-reviews-1/) — Michael Lynch, the gold-standard read.
### Style guides
 
- [Google Style Guides](https://google.github.io/styleguide/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [PEP 8 — Python](https://peps.python.org/pep-0008/)
- [Effective Dart](https://dart.dev/effective-dart)
### Commit messages
 
- [Conventional Commits](https://www.conventionalcommits.org/) — the spec.
- [How to Write a Git Commit Message](https://cbea.ms/git-commit/) — the classic Chris Beams essay.
### Literate programming (optional, advanced)
 
- [Wikipedia — Literate programming](https://en.wikipedia.org/wiki/Literate_programming) — Knuth's idea, still influential.
- [Jupyter notebooks](https://jupyter.org/) — literate programming for data science.

 
<!-- ## A NOTE ON AI TOOLS
 
Use AI to *practice* documentation skills, not to skip them:
 
- **Good use:** "Here's my function. Suggest a docstring." Then write it yourself in your own words.
- **Good use:** "Critique this README. What's missing?"
- **Less good use:** Letting AI generate a wall of comments you don't read — that's the opposite of self-documenting code.
A well-documented codebase is the gift that keeps giving: it helps humans, it helps AI tools, and most importantly, it helps **future-you**.
 
---
 
> **Next week:** Software design principles in practice — separation of concerns, DRY, single responsibility, coupling, cohesion. We start refactoring deliberately bad code into clean code. -->