# WEEK 3 (WEEK OF May 19)
## LECTURE - REFACTORING

> Primary contributor: **[Ashley Blacquiere](https://ca.linkedin.com/in/ashley-blacquiere)**
>
> Modified by: Dibya Prokash Sarkar

---

## 1. WORKING CODE IS NOT THE SAME AS GOOD CODE
 
Take a moment to read this function carefully:
 
```javascript
function p(a, t) {
  let r = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i].t === t) {
      let x = a[i].q * a[i].pr;
      if (a[i].d) x = x * (1 - a[i].d);
      r = r + x;
    }
  }
  return r * 1.12;
}
```
 
It works. Tests pass. Your manager is happy. Ship it.
 
Now read it again. Tell me what it does — out loud, in one sentence. Hard, isn't it?
 
This is the central insight of refactoring: **working code is not the same as good code**. Working code passes tests. Good code is *also* readable, maintainable, and changeable. The same logic written differently can be the difference between a 30-second tweak and a three-hour debugging session next month.
 
Here's the same function, refactored:
 
```javascript
const TAX_RATE = 0.12;
 
function totalForCategory(items, category) {
  return items
    .filter(item => item.type === category)
    .map(itemSubtotal)
    .reduce(sum, 0) * (1 + TAX_RATE);
}
 
function itemSubtotal(item) {
  const base = item.quantity * item.price;
  return item.discount ? base * (1 - item.discount) : base;
}
 
const sum = (a, b) => a + b;
```
 
Read it. Tell me what it does, out loud.
 
Same behaviour. Same outputs for every input. But you now know what it does without having to *decode* it. That's refactoring.

## 2. REFACTORING — A WORKING DEFINITION
 
Martin Fowler — who literally wrote the book on this — defines refactoring as:
 
> *A disciplined technique for restructuring an existing body of code, altering its internal structure without changing its external behaviour.*
 
Three words in that definition do almost all the work:
 
- **Disciplined.** Refactoring is not "I'll clean this up while I'm here." It's a deliberate practice with named techniques and a workflow.
- **Restructuring.** You're changing the *shape* of the code, not what it does.
- **External behaviour.** Inputs and outputs remain identical. If the tests passed before, they pass after.
If your tests fail after refactoring, you didn't refactor — you broke something. That distinction matters more than it sounds.
 
### What refactoring is NOT
 
| Activity | Difference from refactoring |
|---|---|
| **Bug fix** | Changes behaviour (fixes incorrect output). Refactoring keeps behaviour the same. |
| **Feature addition** | Adds new behaviour. Refactoring adds no new behaviour. |
| **Rewrite** | Discards the original code and starts over. Refactoring preserves the original code's structure as a stepping stone. |
| **Performance optimization** | May change algorithms in ways that change subtle behaviour (memory use, ordering). Refactoring is purely for readability/structure. |
 
These are valid activities. They're just *not* refactoring. Mixing refactoring with any of them is one of the fastest ways to introduce bugs — which is why disciplined developers refactor *separately* from fixing or adding.
 
---
 
## 3. WHY REFACTOR? THE ECONOMIC ARGUMENT
 
Refactoring takes time. New features make money. Why do it?
 
Three answers, in order of how senior the engineer arguing the case is:
 
### Beginner: "It's cleaner."
 
True but unconvincing to a product manager. "Clean code" is not a goal in itself — readers don't pay for clean code, they pay for working software.
 
### Mid-level: "It prevents bugs."
 
Closer. Sloppy code hides bugs in plain sight. A 200-line function has dozens of places a typo can lurk; a 20-line function with five small helpers has very few.
 
### Senior: "It compounds."
 
**This is the real argument.** Every minute spent on a feature in a clean codebase is a minute of forward progress. Every minute in a messy codebase is partly spent *understanding what's already there*. Over a year, this difference is enormous.
 
A team that refactors as they go ships **faster** at month 12 than a team that doesn't, even if the refactoring team is slower at month 1. The cost is loaded at the front; the payoff compounds at the back.
 
> **Practical implication:** Your future self is the main beneficiary of refactoring. If you're going to maintain this code, refactor it.
 
---

## 4. CODE SMELLS — WHEN TO REFACTOR
 
You don't refactor "code in general." You refactor in response to a **smell** — a specific signal that something is off. The term comes from Kent Beck, and the canonical list is in Fowler's *Refactoring* book. The most common smells, in roughly decreasing order of how often you'll meet them:
 
### Smell 1 — Long Method
 
A function that does too much. Anything over ~25 lines deserves a hard second look. Long methods are hard to test, hard to name, and hard to reason about.
 
**Refactor:** Extract Method (pull a chunk into a well-named helper).
 
### Smell 2 — Magic Numbers and Strings
 
```python
if user.age >= 13:
    show_full_site()
```
 
What's special about 13? You know, but the next reader doesn't. Worse: what happens when the policy changes to 14? Every `13` in the codebase has to be hunted down and updated.
 
**Refactor:** Replace Magic Number with Named Constant.
 
### Smell 3 — Duplicated Code
 
The same logic appearing in two places means a future bug fix in one place silently fails to apply to the other.
 
**Refactor:** Extract Method (so both places call the same helper).
 
### Smell 4 — Poor Naming
 
`x`, `temp`, `data`, `helper`, `handleStuff` are all telling you the author didn't yet understand what they were writing. Names like `monthsSinceLastPayment` or `eligibleForRefund` are the result of *thinking*.
 
**Refactor:** Rename.
 
### Smell 5 — Long Parameter List
 
```javascript
function bookFlight(name, email, phone, departCity, arriveCity, departDate, returnDate, seatClass, mealPref, baggageCount) { ... }
```
 
Ten parameters. The reader has no chance.
 
**Refactor:** Introduce Parameter Object — group related parameters into a struct/class.
 
### Smell 6 — Large Class / God Object
 
A class that knows too much. The `User` class shouldn't also handle PDF generation, send emails, and validate credit cards. Each concern is a separate class waiting to be born.
 
**Refactor:** Extract Class.
 
### Smell 7 — Feature Envy
 
A method on class `Order` that mostly reads fields from class `Customer`. The behaviour wants to live on `Customer`, not `Order`.
 
**Refactor:** Move Method.
 
### Smell 8 — Comments That Apologize
 
```java
// HACK: I know this is bad, but it works for now.
// TODO: Refactor this when there's time.
```
 
Comments like these are flags planted by past-you for future-you. The right response isn't more apologetic comments — it's a small refactor today.
 
**Refactor:** Whichever pattern fits.
 
> There are more smells (Switch Statements, Divergent Change, Shotgun Surgery, etc.). Refactoring.com and Refactoring Guru have the full catalogues. Don't memorize them — recognize them when they appear.
 
---
 
## 5. THE CLASSICAL REFACTORING CATALOG
 
These are the named techniques. Most modern IDEs implement at least the first three as keyboard shortcuts:
 
| Refactoring | What it does | Trigger smell |
|---|---|---|
| **Extract Method** | Pull a code block into a named function | Long Method, Duplicated Code |
| **Inline Method** | The opposite — fold a too-small helper back in | Over-abstraction |
| **Rename Variable / Method / Class** | Change an identifier everywhere it appears | Poor Naming |
| **Replace Magic Number with Named Constant** | `0.85` → `STUDENT_DISCOUNT_RATE` | Magic Numbers |
| **Introduce Parameter Object** | Group related params into a struct | Long Parameter List |
| **Extract Variable** | Pull a sub-expression into a named local | Hard-to-read expression |
| **Extract Class** | Split a god-object into two cohesive classes | Large Class |
| **Move Method / Field** | Relocate behaviour to where its data lives | Feature Envy |
| **Replace Conditional with Polymorphism** | Swap a long `if/else` chain for subclasses | Switch Statements |
| **Decompose Conditional** | Pull a complex `if` test into a named function | Hard-to-read conditional |
 
You don't need to memorize this list. You need to recognize when a smell is present and reach for the right tool.
 
### A small example — Extract Method
 
**Before:**
 
```python
def print_invoice(order):
    print(f"Invoice for order {order.id}")
    print(f"Customer: {order.customer.name}")
    print(f"Address: {order.customer.address}")
    print(f"Email: {order.customer.email}")
    total = 0
    for item in order.items:
        line_total = item.qty * item.price
        if item.discount:
            line_total = line_total * (1 - item.discount)
        total = total + line_total
    print(f"Total: ${total * 1.12:.2f}")
```
 
**After:**
 
```python
TAX_RATE = 0.12
 
def print_invoice(order):
    print_header(order)
    print_customer(order.customer)
    total = calculate_total(order.items)
    print(f"Total: ${total:.2f}")
 
def print_header(order):
    print(f"Invoice for order {order.id}")
 
def print_customer(customer):
    print(f"Customer: {customer.name}")
    print(f"Address: {customer.address}")
    print(f"Email: {customer.email}")
 
def calculate_total(items):
    subtotal = sum(line_total(item) for item in items)
    return subtotal * (1 + TAX_RATE)
 
def line_total(item):
    base = item.qty * item.price
    return base * (1 - item.discount) if item.discount else base
```
 
The first version has **one function doing four jobs**. The second has **five functions each doing one thing**. The total behaviour is identical. The readability is not.
 
---
 
## 6. THE SAFE-REFACTOR WORKFLOW
 
Refactoring is dangerous without a safety net. Here's the workflow that prevents most disasters:
 
### Step 1 — Make sure tests exist and pass
 
If there are no tests on the code you're about to refactor, **write some first**. This isn't busywork — it's the only way to know if your refactor preserves behaviour.
 
What if the code is so messy you can't write tests? Write **characterization tests** — tests that simply pin down what the code *currently* does, even if "currently" includes some bugs. This locks the existing behaviour in place so you can refactor freely.
 
### Step 2 — Take the smallest possible step
 
Resist the urge to "fix it all at once." Refactor one thing. Run the tests. Commit. Then move to the next thing.
 
A good rule: if your refactor commit message can't be a single sentence ("Extract helper for line total calculation"), the step was too big.
 
### Step 3 — Commit frequently
 
Every passing test is a checkpoint. Commit. If the next refactor goes wrong, you can roll back to the last good commit without losing your earlier progress.
 
### Step 4 — Repeat until the smell is gone
 
Iteration is the trick. Five small refactors are dramatically safer than one big one.
 
### Visualizing the workflow
 
```
Original code (tests pass)
    │
    ├─ Refactor #1 (one small change) ──── tests pass? ── commit
    │                                  │
    │                                  └── tests fail? ── undo, try smaller
    │
    ├─ Refactor #2 ────────────────────── tests pass? ── commit
    │
    └─ ... continue until smell is gone ── final commit
```
 
Your git history becomes a *narrative* of how the code improved. This is also genuinely useful for code review.
 
---
 
## 7. TESTING AS THE REFACTORING SAFETY NET
 
> *"Refactoring without tests is just changing things and hoping."* — folk wisdom in the dev community
 
Why are tests so central to refactoring?
 
Because refactoring **must not change behaviour**. The only way to know you haven't is to have something that can confirm behaviour is preserved. That's what automated tests do.
 
### What kind of tests?
 
For refactoring purposes, you usually need **characterization tests** or **unit tests** — tests that pin down what the code does today. They don't have to be elegant. They have to *exist* and *run quickly*.
 
If you're using **Test-Driven Development (TDD)** more broadly, the rhythm is:
 
1. **Red** — write a failing test
2. **Green** — make it pass with the simplest code possible
3. **Refactor** — improve the structure now that you have green tests
That third step — every TDD cycle — is refactoring. Tests aren't just for catching bugs. They're permission to clean up.
 
### A safety-net example
 
Suppose you have this function and no tests:
 
```javascript
function calculateShipping(weight, zone, isPriority) {
  let base = weight * 0.5;
  if (zone === 'A') base = base * 1.0;
  else if (zone === 'B') base = base * 1.5;
  else if (zone === 'C') base = base * 2.0;
  if (isPriority) base = base + 10;
  return base < 5 ? 5 : base;
}
```
 
**Before refactoring**, write characterization tests:
 
```javascript
expect(calculateShipping(10, 'A', false)).toBe(5);    // min applies
expect(calculateShipping(10, 'B', false)).toBe(7.5);
expect(calculateShipping(10, 'C', true)).toBe(20);
expect(calculateShipping(0, 'A', false)).toBe(5);     // min still applies
```
 
Now you can refactor with confidence. Extract `zoneMultiplier(zone)`. Extract a `MIN_SHIPPING` constant. Rename `base` to `cost`. Any time the tests fail, you know you broke something and can roll back.
 
This is the rhythm of professional refactoring: **tests are the brake pedal that lets you drive fast.**
 
---
 
## 8. MODERN TOOLING
 
You don't refactor by hand in 2026. Three categories of tooling make refactoring safer and faster:
 
### Category 1 — IDE refactorings
 
VS Code (with the right language extensions), JetBrains IDEs, and Visual Studio all support the **named refactorings** directly:
 
- **Rename Symbol** — `F2` in VS Code. Renames a variable/function across the whole project, including imports.
- **Extract Method** — `Ctrl+Shift+R` (or right-click → "Refactor"). Highlight code, give it a name, done.
- **Extract Variable** — same menu.
- **Inline** — reverse the extractions when you over-shot.
Use these. They're transformations that have been tested by millions of developers. They handle the edge cases (closures, scoping, async boundaries) that you'll get wrong manually.
 
### Category 2 — Linters and analyzers
 
ESLint, SonarLint, Ruff, ktlint, clippy — these tools flag many code smells automatically. "This function is too long." "This variable name is unclear." "This branch is unreachable."
 
Treat the warnings as opportunities. The tool is doing free code review for you.
 
### Category 3 — AI-assisted refactoring
 
Claude, ChatGPT, Copilot — all can suggest refactors of code you paste in. They're particularly good at:
 
- **Spotting smells** you missed. "What's wrong with this function?" gives surprisingly useful answers.
- **Suggesting better names**. "Rename these variables to be more descriptive."
- **Explaining what an unfamiliar refactor pattern does.**
They're less good at:
 
- **Knowing your project's conventions**. They'll suggest patterns that don't fit your codebase.
- **Preserving behaviour reliably**. They sometimes silently change subtle behaviour.
**The rule:** AI suggestions are a starting point, not an ending point. Always read what the AI produced. Always run your tests. Never paste an AI refactor straight into main.
 
---

## 9. CONNECTING BACK TO WEEKS 1 AND 2
 
Refactoring is the third leg of the triangle we've been building:
 
| Week | Topic | How it connects |
|---|---|---|
| Week 1 | Platforms | Each platform creates *different* opportunities for code to drift toward smells |
| Week 2 | Documentation & review | Good docs make refactoring safer; bad docs are themselves a smell |
| Week 3 | Refactoring | The act of improving code that's already been written, reviewed, and documented |
 
Refactoring is when the practices we learned in Week 2 pay off:
 
- **Self-documenting code** (Week 2) is often the *destination* of a refactor. Bad names get renamed. Magic numbers get extracted. Functions get pulled out and given meaningful names.
- **Code review** (Week 2) is where most refactoring suggestions originate. "Could this be split into two functions?" is reviewer-speak for "I'd like an Extract Method here."
- **Style guides** (Week 2) define many of the rules that linters enforce, which then surface the smells you'll refactor.
These three weeks together form the **maintenance toolkit** that separates a professional codebase from a hobby project.
 
---



<!-- ### REFACTORING
Refactoring is a critical skill for effective software developers to build. All software projects that will see any form of use (whether by end-users, or by other developers) will need to be refactored for clarity, for efficiency, and often to fix assumptions made in first-pass attempts at solving specific problems.

The most critical thing to keep in mind when refactoring is that refactoring should preserve the original meaning and intent of the code. This should help point you to when refactoring is most beneficial: Only when you have a complete (or nearly complete) understanding of your program can you effectively refactor. 

It's also important to note that refactoring is **not** code rewriting: A code rewrite is a much more substantial effort that may include discarding some or all of the original code. Reasons for a rewrite could include major changes to a dependency, such as a framework or API, or porting the project to a new language or framework.

Best practices for refactoring include making incremental changes (commits!) that clearly demonstrate the progression from the original code to the final product. Small refactors are much easier to manage and to roll back, if necessary.

The following video builds on some of these ideas, but I do recommend you also take a look at the [optional material](#optional-resources), as varying perspectives on refactoring are important.

<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/iA5cFchPu0I"></iframe></div>

> The source to the YouTube video: [YouTube Video](https://www.youtube.com/watch?v=iA5cFchPu0I&ab_channel=AshleyBlacquiere)
>  -->
<!-- > The lecture notes for today's lecture can be found here: [The lecture notes on refactoring](https://mycourses.nic.bc.ca/d2l/le/lessons/41796/topics/739589) -->

## ACTIVITIES

### [REQUIRED] REFACTOR MAP IT
 
Map It is an MIT App Inventor (AI2) app that lets the user log physical addresses and view them in Google Maps. The [Map It tutorial](https://appinventor.mit.edu/explore/displaying-maps) describes the use of the app and demonstrates the code to produce it. The source code is available through a link at the bottom of that page.
 
Your task is to refactor a portion of the Map It code. To this end, I have provided a [repository in our organization](https://github.com/nic-dgl104-winter-2026/guide-mapit-refactor) that includes two versions of the completed Map It code. The repository in our GitHub organization contains:
 
1. The original Map It code
2. A "refactored" reference version
3. A short walkthrough of refactoring techniques you might consider
**What to do:**
 
- Identify at least **three code smells** in the original Map It code.
- Make at least **three small refactoring commits** that address them.
- For each commit, the message should be a single sentence that names the refactor (e.g., "Extract address-saving logic into helper procedure").
- Push your work to a new branch in your fork of the repository.
> **AI2 caveat:** Because AI2 is block-based, "refactoring" looks slightly different — there's no Extract Method shortcut. But the *principles* transfer. You'll be grouping related blocks into procedures, renaming variables, and breaking up long event handlers.

---

<!-- ### [REQUIRED] REFACTOR MAP IT
[Map It](https://appinventor.mit.edu/explore/displaying-maps) is an `AI2` app that allows the user to log physical addresses and view them in Google Maps. The tutorial describes the use of the app and demonstrates the necessary code to produce it. The source code is also available through a link at the bottom of the tutorial page.

Your task for this activity is to refactor a portion of the Map It code. To this end, I have provided a [repository in our organization](https://github.com/nic-dgl104-winter-2026/guide-mapit-refactor) that includes two versions of the completed Map It code, and a short walkthrough of some refactoring techniques you might consider as you work through this activity.  -->

<!-- ### [REQUIRED] POST PROGRAMMING PRACTICE ARTICLE SUMMARY ON MATTERMOST
You now have about three weeks to complete your Programming Practice article. By this time, you should definitely have an idea of the topic that you would like to write about. For this activity, please post a brief summary on our DGL 104 Mattermost channel describing your article. You can use the following as a template:

> For the Programming Practice article assignment I have chosen ___________ as a topic. I intend to write specifically about... and to provide code examples that demonstrate... At the end of the article I hope that my reader better understands...

Please write your Mattermost summary in complete sentences. Remember that your main topic should be chosen from the list I've provided. You should attempt to state around three subtopics (i.e. "I intend to write specifically about...") and to describe at least one code example per subtopic (though remember I want to see at least six code snippets in the final article!). Don't neglect explaining what you hope your reader will better understand - identifying your specific audience will help with the writing process. -->

<!-- ### [RECOMMENDED] OUTLINE YOUR PROGRAMMING PRACTICE ARTICLE
I know that some of you have already started the task of outlining. Some of you may have started writing already as well. I do encourage everyone to write a brief outline to help direct your efforts. An outline can be as simple as a bulleted list of headings for your article, with sub-bullets describing some of the main ideas you'd like to write about. 

If you need help with this you can reach out to me, or ask on Mattermost. The NIC Library also provides many [excellent resources](https://library.nic.bc.ca/writingsupport) to support your writing activities. -->

<!-- ### [REQUIRED] POST `AI2` PROJECT IDEA ON MATTERMOST
You now have about three weeks to complete your `AI2` project. By this time, you should have at least an idea of the type of app you'd like to build. In order to ensure that you have a productive idea that isn't out of scope I'd like you to post a brief description on Mattermost. You can use the following as a template:

> For the `AI2` project I'd like to build an app that does... Some features of my app include... The audience for my app is...

Please write your Mattermost summary in complete sentences. Do your best to be complete in your description - identifying specific `AI2` components you'd like to use for your major features is a good strategy to help you achieve this. Additionally, feel free to comment and provide feedback on other students' ideas. -->

### [RECOMMENDED] OUTLINE YOUR `AI2` PROJECT
The outline for your `AI2` project isn't as formal as the outline for your Programming Practice article, but is equally valuable. There are many potential strategies you can take to do some "outlining", including creating a bullet point list, or a mind map, or developing user stories. No matter which approach you choose, you'll find benefit in carefully considering your features and the components that you would like to use.

---

### [RECOMMENDED] FOLLOW-UP QUESTIONS AND REFLECTIONS
1. How has refactoring helped you in past projects?
2. What do you think is the single most important thing to keep in mind when refactoring? Or, what strategy do you think is the most effective when refactoring?
3. How does refactoring relate to the practice of code review and to documentation practices?  
---

## OPTIONAL RESOURCES
 
### Books
 
- **Martin Fowler — *Refactoring: Improving the Design of Existing Code*** (2nd edition). The book. If you read one programming book in the next year, read this one.
- **Robert C. Martin — *Clean Code*.** Opinionated, sometimes dogmatic, but full of useful principles.
- **Michael Feathers — *Working Effectively with Legacy Code*.** The bible for refactoring code you didn't write.
### Online
 
- **[Refactoring.com](https://refactoring.com/)** — Martin Fowler's own site. The catalog is the definitive reference.
- **[Refactoring Guru](https://refactoring.guru/refactoring)** — well-illustrated walkthroughs of every classical refactoring, plus design patterns.
- **[VS Code refactoring docs](https://code.visualstudio.com/docs/editor/refactoring)** — what's built-in, with shortcuts.
- **[Wikipedia — Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring)** — solid overview with historical context.
---
 
## A NOTE ON AI TOOLS
 
Use AI to *learn* refactoring, not to *replace* the practice:
 
- **Good use:** "Here's a function. What code smells do you see? Don't refactor it — just identify the smells."
- **Good use:** "Explain what 'Introduce Parameter Object' refactoring does, with a JavaScript example."
- **Less good use:** Pasting messy code and asking AI to "make it better" without specifying what you want changed. You'll get an opinionated rewrite, not a series of disciplined refactors — and you won't learn the technique.
The skill we're building this week is **recognizing smells and applying targeted fixes**. AI is a great tutor for the recognition step, but the application step has to live in your hands or you won't internalize it.
 
---
