# Design Patterns in App Development

**DGL 104 — App Development Foundations | Week 9**  
*Primary contributor: Ashley Blacquiere | Modified by: Dibya Prokash Sarkar*

---

## What Are Design Patterns?

When you've written enough code, you start noticing something interesting: the same kinds of problems keep showing up in different projects. How do I manage a single shared resource across my app? How do I notify multiple parts of my UI when data changes? How do I swap out one implementation for another without rewriting everything?

[Design patterns](https://en.wikipedia.org/wiki/Design_pattern) are the community's accumulated answers to those recurring questions. A design pattern is a **reusable, named solution to a commonly occurring problem in software design**. It's not a library you import or a block of code you copy-paste — it's more like a blueprint or recipe. It tells you *what* to do and *why*, while leaving the exact implementation up to you and your language.

> Think of design patterns like recipes. A carbonara recipe doesn't tell you which brand of pasta to buy or which pan to use — it gives you the technique, the ratios, the sequence. You adapt it to what you have. Design patterns work exactly the same way.

### Why Bother?

- **Shared vocabulary.** When you say "this uses an Observer pattern," any experienced developer immediately understands the structure, the intent, and the trade-offs. No lengthy explanation needed.
- **Proven solutions.** Patterns have been battle-tested across countless projects and languages. Using one means you're not reinventing the wheel — and not introducing the subtle bugs that come from rolling your own solution.
- **Maintainable code.** Because patterns are recognizable and named, they're easier to document, easier to hand off, and easier to revisit six months later.

---

## A Brief History: The Gang of Four

Design patterns as a formal discipline trace back to a landmark 1994 book: **"Design Patterns: Elements of Reusable Object-Oriented Software"** by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides — collectively known as the **Gang of Four (GoF)**. They catalogued 23 patterns, organized into three families:

| Category | Concerned With | Example Patterns |
|---|---|---|
| **Creational** | How objects are created | Singleton, Factory, Builder |
| **Structural** | How objects are composed | Adapter, Decorator, Facade |
| **Behavioral** | How objects communicate | Observer, Strategy, Command |

We'll focus on two of the most widely used patterns today: **Observer** and **Singleton**.

---

## Pattern 1: The Observer Pattern

### The Problem It Solves

Imagine a news agency and its subscribers. The agency publishes stories; subscribers receive them. The agency doesn't need to know *how* each subscriber uses the news — it just broadcasts. Subscribers don't need to poll the agency every second asking "anything new?" — they just wait to be notified.

This is the **Observer** pattern (also called Publish-Subscribe, or Pub/Sub). It defines a **one-to-many dependency** between objects: when one object (the *subject* or *publisher*) changes state, all its dependents (*observers* or *subscribers*) are notified automatically.

### The Core Structure

```
┌──────────────┐        notifies       ┌────────────────┐
│   Subject    │ ──────────────────▶  │    Observer    │
│  (Publisher) │                       │  (Subscriber)  │
│              │                       │                │
│ subscribe()  │       implements      │   update()     │
│ unsubscribe()│ ◀──────────────────  │                │
│ notify()     │                       └────────────────┘
└──────────────┘
```

Three key roles:
1. **Subject** — maintains a list of observers, notifies them when state changes
2. **Observer interface** — defines the `update()` contract all observers must implement
3. **Concrete Observers** — implement `update()` to react to changes in their own way

### JavaScript Example: Stock Price Tracker

Let's build a minimal stock ticker where multiple UI components respond to price changes — without any of them knowing about each other.

```javascript
// The Subject: manages a list of observers and notifies them
class StockTicker {
  #price;
  #observers = [];

  constructor(initialPrice) {
    this.#price = initialPrice;
  }

  subscribe(observer) {
    this.#observers.push(observer);
  }

  unsubscribe(observer) {
    this.#observers = this.#observers.filter(obs => obs !== observer);
  }

  // Called internally whenever price changes
  #notifyAll() {
    for (const observer of this.#observers) {
      observer.update(this.#price);
    }
  }

  setPrice(newPrice) {
    console.log(`Price updated: $${this.#price} → $${newPrice}`);
    this.#price = newPrice;
    this.#notifyAll();
  }
}

// Observer 1: Updates the chart display
class ChartDisplay {
  update(price) {
    console.log(`  📈 Chart updated: plotting $${price}`);
  }
}

// Observer 2: Fires an alert if price drops below threshold
class PriceAlertSystem {
  #threshold;
  constructor(threshold) { this.#threshold = threshold; }

  update(price) {
    if (price < this.#threshold) {
      console.log(`  🚨 ALERT: Price $${price} fell below $${this.#threshold}!`);
    }
  }
}

// Observer 3: Logs all prices to a history feed
class PriceHistoryLog {
  #history = [];
  update(price) {
    this.#history.push(price);
    console.log(`  📋 History: [${this.#history.join(', ')}]`);
  }
}

// --- Wire it together ---
const ticker = new StockTicker(150);

const chart = new ChartDisplay();
const alert = new PriceAlertSystem(140);
const log   = new PriceHistoryLog();

ticker.subscribe(chart);
ticker.subscribe(alert);
ticker.subscribe(log);

ticker.setPrice(155);  // All three observers react
ticker.setPrice(138);  // Alert fires + chart + log all react
ticker.unsubscribe(chart);
ticker.setPrice(142);  // Only alert + log react now
```

**Output:**
```
Price updated: $150 → $155
  📈 Chart updated: plotting $155
  🚨 (no alert — 155 > 140)
  📋 History: [155]

Price updated: $155 → $138
  📈 Chart updated: plotting $138
  🚨 ALERT: Price $138 fell below $140!
  📋 History: [155, 138]

Price updated: $138 → $142
  🚨 (no alert — 142 > 140)
  📋 History: [155, 138, 142]
```

### Step-by-Step Knowledge Extraction

**Step 1 — Identify the publisher.** `StockTicker` is the subject. It owns the data (`#price`) and the subscriber list (`#observers`).

**Step 2 — Define the subscription contract.** `subscribe()` and `unsubscribe()` let observers opt in/out at runtime — nobody is hard-wired together.

**Step 3 — Enforce the observer interface.** Every observer must implement `update(price)`. In TypeScript you'd formalize this with an interface; in JavaScript, it's a convention enforced by documentation and testing.

**Step 4 — Trigger notification from state change.** `setPrice()` changes the data, then calls `#notifyAll()`. The subject never reaches directly into any observer's internals.

**Step 5 — Each observer reacts independently.** `ChartDisplay`, `PriceAlertSystem`, and `PriceHistoryLog` all receive the same price update but do completely different things with it. They don't know about each other.

### Real-World Observer

You already use Observer patterns constantly:

- **DOM Events** — `button.addEventListener('click', handler)` — the button is the subject, your handler is the observer
- **React's useState + useEffect** — component re-renders are notifications triggered by state changes  
- **RxJS / Observables** — the entire reactive programming model is Observer at its core
- **Node.js EventEmitter** — `emitter.on('data', callback)` is pure Observer

---

## Pattern 2: The Singleton Pattern

### The Problem It Solves

Some resources should exist exactly once in an application. A database connection pool. An application configuration store. A logger. Creating multiple instances of these wastes resources at best, and causes hard-to-debug inconsistencies at worst (two config objects disagreeing on a setting, two loggers writing to the same file from different handles).

The **Singleton** pattern ensures a class has **only one instance**, and provides a **global point of access** to that instance.

### The Core Structure

```
┌─────────────────────────────────────────┐
│               Singleton                 │
│─────────────────────────────────────────│
│  - instance: Singleton  (static, private)│
│─────────────────────────────────────────│
│  - constructor()        (private)        │
│  + getInstance(): Singleton  (static)   │
│  + someMethod()                         │
└─────────────────────────────────────────┘
         ▲              ▲
         │              │
   Client A         Client B
(both get the same object)
```

Two enforcement mechanisms:
1. **Private constructor** — prevents `new Singleton()` from being called directly
2. **Static `getInstance()` method** — creates the instance on first call, returns the cached one on every subsequent call (lazy initialization)

### JavaScript Example: Application Logger

```javascript
class AppLogger {
  // Step 1: private static field to hold the one instance
  static #instance = null;

  // Step 2: private state — no one else touches this directly
  #logs = [];
  #level;

  // Step 3: private constructor — enforces "no new AppLogger()"
  constructor(level = 'INFO') {
    this.#level = level;
    console.log(`Logger initialized (level: ${level})`);
  }

  // Step 4: the controlled entry point
  static getInstance(level) {
    if (AppLogger.#instance === null) {
      AppLogger.#instance = new AppLogger(level);
    }
    return AppLogger.#instance;
  }

  log(message, level = 'INFO') {
    const entry = `[${level}] ${new Date().toISOString()}: ${message}`;
    this.#logs.push(entry);
    console.log(entry);
  }

  getLogs() {
    return [...this.#logs];  // return a copy, not the original array
  }

  clearLogs() {
    this.#logs = [];
  }
}

// --- Usage ---
const logger1 = AppLogger.getInstance('DEBUG');
const logger2 = AppLogger.getInstance();  // "DEBUG" arg ignored — already initialized
const logger3 = AppLogger.getInstance();

console.log(logger1 === logger2);  // true ✅
console.log(logger2 === logger3);  // true ✅

logger1.log('App started', 'INFO');
logger2.log('User logged in', 'INFO');
logger3.log('Database query failed', 'ERROR');

console.log(logger1.getLogs());
// All three entries are visible from any reference — same object
```

### Step-by-Step Knowledge Extraction

**Step 1 — Declare a private static holder.** `static #instance = null` lives on the class itself, not on any instance. It's the single source of truth for "do we have an instance yet?"

**Step 2 — Make the constructor private (conceptually).** JavaScript doesn't have a true `private` constructor keyword, but we document and enforce it via `getInstance()`. TypeScript does support `private constructor`.

**Step 3 — Lazy initialization in `getInstance()`.** The instance is only created on the first call. This is called *lazy* initialization — we don't pay the cost until we actually need it.

**Step 4 — Return the same object every time.** After the first call, every subsequent `getInstance()` returns the already-created object. The arguments are irrelevant on subsequent calls — the first caller "wins."

**Step 5 — All clients share state.** `logger1`, `logger2`, and `logger3` are not three loggers — they are three variable names pointing at the same object. A log written via `logger1` is visible from `logger3`.

### Real-World Singleton

- **Database connection pools** in Node.js/Express — you create the pool once, every route handler reuses it
- **Redux/Zustand store** — one global state object for the whole app
- **`window` object in the browser** — there is literally only one
- **`process` in Node.js** — a single process object for the running environment
- **Game engine managers** — audio manager, input manager, resource manager are all typically Singletons

### ⚠️ When NOT to Use Singleton

Singletons have earned a reputation as an anti-pattern when overused:

- They introduce **global mutable state**, which makes testing and reasoning harder
- They create **hidden dependencies** — a function that secretly calls `AppLogger.getInstance()` is harder to test in isolation
- They can cause **concurrency issues** in multi-threaded environments (less of a concern in single-threaded JS, but critical in Java/Kotlin)

**Rule of thumb:** Use Singleton when the resource genuinely must be shared and unique. Don't use it as a lazy shortcut to avoid passing things around.

---

## Comparing the Two Patterns

| | Observer | Singleton |
|---|---|---|
| **GoF Category** | Behavioral | Creational |
| **Core idea** | One-to-many notification | One instance only |
| **Problem solved** | Decoupled event propagation | Shared, unique resource |
| **Key risk** | Memory leaks (forgotten subscriptions) | Hidden global state, testing friction |
| **Best for** | UI updates, event systems, reactive streams | Config, logging, connection pools |

---

## Four More Patterns Worth Knowing

For your Research & Reflection journal activity, here are four additional patterns to explore, with a brief orientation for each:

### Factory Method (Creational)
Creates objects without specifying the exact class. A `VehicleFactory` might produce `Car` or `Truck` objects based on a parameter — the caller just asks for "a vehicle" without knowing the concrete type. Great for plugin architectures and dependency injection.

**Explore:** [Refactoring Guru — Factory Method](https://refactoring.guru/design-patterns/factory-method)

### Decorator (Structural)
Adds behaviour to an object dynamically, without modifying its class. Like a coffee order: `Espresso` + `MilkDecorator` + `SugarDecorator` — each wrapper adds a feature without changing the base object. React Higher-Order Components (HOCs) are a classic JS implementation.

**Explore:** [Refactoring Guru — Decorator](https://refactoring.guru/design-patterns/decorator)

### Strategy (Behavioral)
Defines a family of algorithms, encapsulates each one, and makes them interchangeable. A payment system might have `CreditCardStrategy`, `PayPalStrategy`, and `CryptoStrategy` — the checkout flow doesn't change, only the strategy injected at runtime.

**Explore:** [Learning JavaScript Design Patterns — Strategy](https://jsdp.addyosmani.com/)

### Module (JS-Specific)
Not in the original GoF book, but fundamental to JavaScript. The Module pattern uses closures to create private scope and expose a clean public API. The modern `import/export` system is a language-level implementation of this idea.

**Explore:** [Learning JavaScript Design Patterns — Module](https://jsdp.addyosmani.com/)

---

## Further Reading

- [Refactoring Guru — Design Patterns](https://refactoring.guru/design-patterns/) — beautifully illustrated explanations with code in many languages
- [Learning JavaScript Design Patterns (Addy Osmani)](https://jsdp.addyosmani.com/) — patterns specifically through a JS/ES6 lens
- [Wikipedia — Software Design Pattern](https://en.wikipedia.org/wiki/Design_pattern) — historical context and classification

---







<!-- # WEEK 9 (WEEK OF June 30)
## LECTURE - DESIGN PATTERNS

> Primary contributor: **[Ashley Blacquiere](https://ca.linkedin.com/in/ashley-blacquiere)**
>
> Modified by: Dibya Prokash Sarkar

### DESIGN PATTERNS
[Design patterns](https://en.wikipedia.org/wiki/Design_pattern) are reusable fragments of code that provide a solution to a specific - and typically well-understood - coding problem. On their own, in the sense of a program, design patterns don't really do anything; however, when applied to the correct problem domain they can provide safe and easy to maintain solutions that are immediately recognizable by other programmers or software engineers who are familiar with them. This is a huge advantage to the long-term maintainability of a codebase.  

You can think of design patterns as recipes for solving commonly encountered coding problems. Much like a recipe, a design pattern is not intended to be entirely prescriptive, but allows for some flexibility in its implementation. And, again like recipes, there are many different flavours of a single design pattern, often separated by specific programming languages, or families of programming languages. 

The design patterns presented in the following video are a couple of the more well-known and commonly encountered. The video below presents code in both Java and Kotlin, though there are plenty of examples online of implementations in other languages at [Refactoring.guru](https://refactoring.guru/design-patterns/) and at the [Learning JavaScript Design Patterns](https://jsdp.addyosmani.com/) code example site (this is a companion site to the associated text, so there is less description; you'll have to dig into the browser developer tools to see the examples, or follow the links back to GitHub).

<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/A9sAIokPGsQ"></iframe></div> -->

## ACTIVITIES

### [RECOMMENDED] RESEARCH ON DESIGN PATTERNS
Conduct thorough research on design patterns and carefully select four key design patterns that you need to study further. In your R&R journal, write a summary of these design patterns, including their purpose, real-world applications, and concrete examples. You can use links like: [Learning JavaScript Design Patterns](https://jsdp.addyosmani.com/) or [Refactoring Guru](https://refactoring.guru/design-patterns/).

### [REQUIRED] READ THE APPLICATION DEVELOPMENT CODING PROJECT ASSIGNMENT
Make sure to visit the description of the assignment on Brightspace. You should read the assignment description and the rubric in detail to familiarize yourself with expectations.

### [REQUIRED] READ THE RESEARCH AND REFLECTION GUIDE
I've added a new [Research and Reflection Journal guide](https://github.com/nic-dgl104-winter-2025/guide-research-reflection-journal) on GitHub. This document should be a big help to you if you are having trouble identifying how to use your Research and Reflection journal.

### [REQUIRED] READ "HOW TO CONTRIBUTE TO OPEN SOURCE"
GitHub's [Open Source Guides](https://opensource.guide/) site includes a guide titled ["How to Contribute to Open Source"](https://opensource.guide/how-to-contribute/), which is a fantastic overview of the variety of contributions that may be possible in healthy open source communities. The guide is written a bit like a how-to, so that you have an opportunity to put into practice what you learn as you read.

#### To complete this task (~45 minutes):
1. Read the complete ["How to Contribute to Open Source"](https://opensource.guide/how-to-contribute/) guide
2. Read section 2 ["What it means to contribute"](https://opensource.guide/how-to-contribute/#what-it-means-to-contribute) especially carefully, and consider how you might like best to contribute to an open source project. Keep in mind the requirements of the Community Code assignment.
3. Read section 4 ["Finding a project to contribute to"](https://opensource.guide/how-to-contribute/#finding-a-project-to-contribute-to) especially carefully and follow some of the suggested links (i.e. [GitHub Explore](https://github.com/explore/), [Open Source Friday](https://opensourcefriday.com/), etc.) and examine some of the projects that you see there.

Write a short summary and reflection in your Research and Reflection Journal that describes what you've learned about open source contributions and the ways in which you'd like to contribute.

### [REQUIRED] FIND POTENTIAL PROJECTS TO CONTRIBUTE TO
This activity requires you to find three potential projects that you might be interested in contributing to. Remember that ["contribution" can mean many things](https://opensource.guide/how-to-contribute/#what-it-means-to-contribute) and doesn't necessarily mean writing complex code.

#### To complete this task (~60 minutes):
1. Visit one or all three of [Good First Issue](https://goodfirstissue.dev/), [Up for Grabs](https://up-for-grabs.net/#/), and [CodeTriage](https://www.codetriage.com/). You can stick with just one site, or use all three (I recommend spending time with all three). Play around with the search and filter functionality to find projects that interest you and, in particular, you should consider searching or filtering on the **programming language that you chose last week** for the Community Code project.
2. Identify **three** projects/repositories that you think are interesting and complete a short analysis of each by doing the following:
    1. Open the [checklist](https://opensource.guide/how-to-contribute/#a-checklist-before-you-contribute) provided in the ["How to Contribute to Open Source"](https://opensource.guide/how-to-contribute/) guide.
    2. Go through the checklist for each of the three projects you identified and check the boxes when appropriate. Take a screenshot when you have completed all checklist questions (you may need to zoom out your browser window). You also need to reset the checkmarks/page for each of the three projects.
    3. Write a short summary about each project and what you've discovered during your analysis in your Research and Reflection journal. Make sure to write down the url and point out any very interesting discoveries.

### [RECOMMENDED] EXPLORE COMMUNITY CONNECTIONS
Most well-known open source projects are supported by well-established communities, typically housed on async messaging platforms like Discord, Slack or Zulip. Even less well-known (but active!) open source projects are likely to have some connections back to other communities (either directly, due to particular tools or languages used, or indirectly through contributor involvement).

Spend some time researching community connections extending out from one or more of the projects identified in the last activity. If you find the community "home" right away (i.e. if it's as obvious as, for example, a Discord server) then spend some time familiarizing yourself with the community. If finding a community is harder, then follow as many relevant links from the repository back to potential communities that you can find (this might include looking carefully at maintainer GitHub profiles, websites and socials). Write a summary of your discoveries in your Research and Reflection Journal.

<!-- ### [REQUIRED] WORK ON THE APPLICATION DEVELOPMENT CODING PROJECT ASSIGNMENT (GROUP)

> By now, I hope you have already formed your group and created your project’s GitHub repository. Once the repository is set up, please share the link with your course instructor. 

You will be collaborating with your group members on this project and should regularly discuss your plans and development strategies with your instructor to ensure a successful outcome. -->

<!-- ### [REQUIRED] IDENTIFY ISSUES TO SUPPORT
> Note that it might take more than one try to find an appropriate issue for this activity. Keep trying, but if you run into too many dead ends don't hesitate to reach out for help!

For this activity you will revisit the projects discovered in the last activity to identify specific issues that you believe you may be able to contribute to. Remember that  ["contribution" can mean many things](https://opensource.guide/how-to-contribute/#what-it-means-to-contribute) and doesn't necessarily mean writing complex code.

#### To complete this task (~60 minutes)
1. Visit the GitHub repository for each of the three projects that you have identified in the "Find Potential Projects to Contribute To" activity above and open the Issues tab.
2. Take a look at the different tags available under the "Labels" dropdown. Note down any tags that you think might contain interesting issues, including the "good first issue" or "help wanted" tags.
3. Read through the available issues tagged by "good first issue" or "help wanted" tags (or any other that you think is interesting). Identify at least one issue that you think you might be able to support / contribute to.

    > I want to pause here and say that the two most important measures of whether or not you think you could contribute to an issue is: if you _understand_ what the issue is saying, and if you have an idea where you might start to look for solutions. 

4. For each identified issue write a summary of the issue in your Research and Reflection Journal. Your summary should include a url, a brief description of the issue, and an explanation of how you think you can contribute (or, at least where you would start). Make sure to summarize any discussion that might have already occurred between community members in the issue.  -->

<!-- ### [REQUIRED] WRITE A SUMMARY ON MATTERMOST
Share a summary on Mattermost of **one** of the issues identified in the "Identify Issues to Support" activity. Make sure you include a link back to the issue/repository, briefly describe the project/repository, and clearly explain why you think this issue is potentially a good one for you to contribute to.  -->

### [RECOMMENDED] FOLLOW-UP QUESTIONS AND REFLECTIONS
<!-- 1. What is the most surprising thing that you've learned about open source development and/or open source communities during your research this week?
2. What types of open source projects do you find yourself most drawn to? Is there an obvious connection between them?  -->
1. Is the programming language that you chose last week still the right choice? Should you consider alternatives?
2. What is your plan to develop your application? Have you started creating a tentative timeline to meet the deadline?