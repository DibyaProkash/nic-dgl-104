# WEEK 5 (WEEK OF June 2)
## LECTURE - TESTING

> Original primary contributor: **[Ashley Blacquiere](https://ca.linkedin.com/in/ashley-blacquiere)**
>
> Modernized for Summer 2026 by: **Dibya Prokash Sarkar*

---

## 1. WHY TESTING IS NOT OPTIONAL
 
You write code. The code works. You ship it.
 
Six weeks later, you add a new feature. The new feature works. You ship it.
 
Did the *old* feature still work? You assume so. You haven't actually checked.
 
This is the silent danger every working developer faces. **Code that worked yesterday is not guaranteed to work today.** Every change you make is a new opportunity to break something you already finished. Without a safety net, your only defence is your memory — and your memory is much worse at this than you think.
 
**Tests are that safety net.** They are small, automated, repeatable checks that prove your code still does what it should. Run them in 5 seconds. Run them after every change. Run them in CI on every pull request. They are the difference between "I think it works" and "I know it works."
 
> **The framing for this week:** Tests are not extra work. Tests are how you go fast without breaking things.
 
---

## 2. WHAT TESTING ACTUALLY DOES
 
The textbook definition is straightforward — testing exists to ensure:
 
1. **The code meets design and business objectives** (does it do what we set out to build?)
2. **The code is correct** (does it produce right outputs for given inputs?)
Loosely speaking, these two goals are the difference between:
 
| **Validation** | **Verification** |
|---|---|
| *"Are we building the right thing?"* | *"Are we building the thing right?"* |
| Tests against business / user needs | Tests against technical specifications |
| Often involves UI testing, user feedback | Often involves unit tests, type checking |
| Example: "Does the checkout flow work for real users?" | Example: "Does `calculateTax(100)` return `12`?" |
 
You'll see both terms used loosely in industry. What matters is recognising that "test" can mean different things at different levels.
 
---

## 3. THE FOUR LEVELS OF TESTS
 
Modern teams use a **pyramid** of tests, with cheap-and-fast tests at the bottom and slow-but-realistic tests at the top:
 
```
                  ▲
                 ╱ ╲     E2E tests
                ╱   ╲    (full app, browser, real backend)
               ╱─────╲
              ╱       ╲   Integration tests
             ╱         ╲  (multiple units together)
            ╱───────────╲
           ╱             ╲   Unit tests
          ╱               ╲  (one function, isolated)
         ╱─────────────────╲
```
 
You write **many** unit tests (fast, focused), **fewer** integration tests (slower, more realistic), and **very few** end-to-end tests (slow, expensive, but closest to a real user). Each level catches different kinds of bugs.
 
### 3.1 — Unit tests
 
Test a **single function or class** in isolation. No databases, no network, no UI. The function takes inputs and returns outputs; you check the outputs.
 
```javascript
// JavaScript with Jest
test("priceWithTax adds 12% tax to a positive amount", () => {
  expect(priceWithTax(100)).toBe(112);
});
```
 
```python
# Python with pytest
def test_price_with_tax_adds_12_percent():
    assert price_with_tax(100) == 112
```
 
Unit tests run in **milliseconds**. You should have hundreds of them. They're your first line of defence.
 
### 3.2 — Integration tests
 
Test **multiple units working together**. A function that calls a database. A controller that talks to a service. A class that uses three other classes.
 
```python
def test_order_workflow_saves_to_database():
    order = create_order({"item": "Notebook", "qty": 2})
    process_payment(order, card_token="tok_test")
    saved = db.find_order(order.id)
    assert saved.status == "paid"
```
 
Integration tests are slower (database calls, file I/O). You have fewer of them, but they catch the bugs unit tests can't — the bugs that live in the *seams* between modules.
 
### 3.3 — End-to-end (E2E) tests
 
Test the **whole application** as a user would. Open a browser, click buttons, fill forms, verify what appears on screen.
 
```javascript
// Playwright (modern E2E framework)
test("user can sign up and reach dashboard", async ({ page }) => {
  await page.goto("https://app.example.com");
  await page.click("text=Sign up");
  await page.fill('input[name="email"]', "test@example.com");
  await page.fill('input[name="password"]', "SecurePass123!");
  await page.click("text=Create account");
  await expect(page).toHaveURL(/\/dashboard/);
});
```
 
E2E tests are **slow** (multiple seconds each), **expensive** to maintain (any UI change breaks them), and **invaluable** (they prove the whole system works for a real user). Have a handful, not hundreds.
 
### 3.4 — Acceptance / contract tests (briefly)
 
Specialised forms: **acceptance tests** verify a business requirement is met; **contract tests** verify that two services agree on the shape of data they exchange (common in microservices). You'll meet these in larger codebases.
 
---

## 4. ANATOMY OF A UNIT TEST
 
Every unit test, in every framework, follows the same three-act structure:
 
```
ARRANGE → ACT → ASSERT
```
 
- **Arrange** — set up the inputs and any required state
- **Act** — call the function under test
- **Assert** — check that the output matches what you expect
```javascript
test("filter keeps only adults", () => {
  // ARRANGE
  const people = [
    { name: "Ada", age: 35 },
    { name: "Tim", age: 12 },
    { name: "Grace", age: 28 }
  ];
 
  // ACT
  const adults = filterAdults(people);
 
  // ASSERT
  expect(adults).toHaveLength(2);
  expect(adults.map(p => p.name)).toEqual(["Ada", "Grace"]);
});
```
 
```python
def test_filter_keeps_only_adults():
    # ARRANGE
    people = [
        {"name": "Ada",   "age": 35},
        {"name": "Tim",   "age": 12},
        {"name": "Grace", "age": 28},
    ]
 
    # ACT
    adults = filter_adults(people)
 
    # ASSERT
    assert len(adults) == 2
    assert [p["name"] for p in adults] == ["Ada", "Grace"]
```
 
Same shape, different syntax. **Once you've internalised Arrange-Act-Assert, you can read tests in any language.**
 
---

## 5. WHAT MAKES A GOOD UNIT TEST
 
Six properties separate good tests from tests that waste your team's time:
 
### 5.1 — Fast
 
A unit test should run in **milliseconds**. If your test suite takes 10 minutes, developers stop running it. If it runs in 5 seconds, they run it every save.
 
### 5.2 — Independent
 
Test #5 should pass whether Tests #1–4 ran first or not. Tests should not depend on each other or share mutable state. The order they run shouldn't matter.
 
### 5.3 — Repeatable
 
Run the test today, tomorrow, in CI, on your laptop — same result every time. **Tests that pass on Tuesday and fail on Wednesday** ("flaky tests") destroy team trust faster than any other problem.
 
### 5.4 — Self-validating
 
The test passes or fails with no human interpretation. No log files to read. No "looks about right." A green check or a red X.
 
### 5.5 — Timely
 
Written *while* the code is being written — or before. Not "I'll add tests later." Tests added six months later are dramatically less useful: by then, the code's shape has hardened around the assumptions you no longer remember.
 
### 5.6 — Focused on one thing
 
A good test fails for **exactly one reason**. If your test has five assertions, when it fails you don't know which assertion broke first. Prefer many small tests over one giant one.
 
> **Mnemonic: F.I.R.S.T.** — Fast, Independent, Repeatable, Self-validating, Timely.
 
---

## 6. TEST COVERAGE — HOW MUCH IS ENOUGH?
 
A common metric is **code coverage** — what percentage of lines / branches / functions are exercised by tests. Tools like Istanbul (JS) and coverage.py (Python) report this.
 
Two honest things to know:
 
1. **High coverage is necessary but not sufficient.** Code can be 100% covered by tests that don't actually check anything meaningful.
2. **100% coverage is rarely worth the effort.** Aim for ~80% on the parts of your code that *matter most* (business logic, data transforms). Don't waste hours testing trivial getters.
A better mental model is **risk coverage**: what could go wrong, and is each thing tested? Critical paths, edge cases, common failures — these matter more than chasing a percentage.
 
---

## 7. BOUNDARY VALUE ANALYSIS — WHERE BUGS LIVE
 
You cannot test every possible input. So which inputs do you pick?
 
Bugs cluster at **boundaries** — the edges between valid and invalid, the transitions between cases. The classical technique is to pick tests at each boundary:
 
For a function that accepts ages 18–65:
 
| Test case | Why |
|---|---|
| `17` | Just below the lower bound — should fail |
| `18` | The lower bound — should pass |
| `19` | Just above the lower bound — should pass |
| `64` | Just below the upper bound — should pass |
| `65` | The upper bound — should pass |
| `66` | Just above the upper bound — should fail |
| `-1`, `0` | Far edges and zero |
| `null`, `undefined`, `"abc"` | Wrong types entirely |
 
You don't need to test `20`, `21`, `22`… `63`. They're all the same case. **Pick representatives of each equivalence class plus the boundaries between classes.**
 
---

## 8. TEST-DRIVEN DEVELOPMENT (TDD)
 
A different philosophy: **write the test FIRST, then write the code to make it pass.**
 
The TDD cycle has three steps, called the **Red-Green-Refactor** loop:
 
```
   RED              GREEN              REFACTOR
   │                │                  │
   ▼                ▼                  ▼
Write a test     Make the test       Improve the code
that fails       pass (the           without breaking
(red \u274c)         simplest way        the test
                 — green \u2713)        (still green \u2713)
```
 
### Why TDD works (when it works)
 
- **You can't ship code with no tests.** It's literally impossible — the test exists before the code.
- **The code is testable by construction.** You can't write hard-to-test code if you write the test first.
- **Tests document the intent.** Each test name says what the code is supposed to do.
- **Refactoring is fearless.** You have a safety net from minute one.
### When TDD is hard
 
- **Exploratory code** (you don't know what you're building yet)
- **Heavy UI work** (visual judgments don't fit unit tests)
- **Code that talks to external systems** (network, hardware)
TDD is a tool, not a religion. Some teams use it everywhere; others use it for business logic only. **The valuable habit is "write tests close to the code they test"** — whether that's seconds before or seconds after.
 
### A TDD example
 
You need a function that returns `"FizzBuzz"` for 15, `"Fizz"` for 3, `"Buzz"` for 5, and the number otherwise.
 
**Step 1 — Write the failing test (RED):**
 
```javascript
test("returns FizzBuzz for multiples of 15", () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
});
```
 
Run it. It fails — `fizzBuzz` doesn't exist yet.
 
**Step 2 — Make it pass (GREEN):**
 
```javascript
function fizzBuzz(n) {
  return "FizzBuzz";  // ridiculous but it passes the test
}
```
 
**Step 3 — Add the next test (RED):**
 
```javascript
test("returns Fizz for multiples of 3", () => {
  expect(fizzBuzz(3)).toBe("Fizz");
});
```
 
**Step 4 — Make it pass (GREEN):**
 
```javascript
function fizzBuzz(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  return String(n);
}
```
 
Continue: add the Buzz test, the generic-number test, the edge cases (0, negatives). Each test drives the code one step forward.
 
> The exercise feels artificial because it is — FizzBuzz is a toy problem. The same loop applied to real business logic transforms how robust your code is.
 
---

## 9. MOCKING, STUBS, AND TEST DOUBLES
 
Some code can't be tested in isolation because it depends on something **slow, expensive, or external**:
 
- A function that calls an HTTP API
- A function that reads from a database
- A function that uses the current date/time
- A function that sends emails
For these, we use **test doubles** — fake versions of the dependency:
 
- **Stub** — returns canned data. *"When asked for user #42, return this hard-coded user object."*
- **Mock** — records how it was called and lets you assert on those calls. *"Was `sendEmail` called exactly once with the right arguments?"*
- **Fake** — a working implementation that's simpler than the real thing (e.g., an in-memory database).
```python
# pytest with monkeypatch
def test_sends_welcome_email(monkeypatch):
    sent_emails = []
    monkeypatch.setattr(
        "myapp.email.send",
        lambda to, subject, body: sent_emails.append((to, subject))
    )
 
    create_user(email="ada@example.com", name="Ada")
 
    assert ("ada@example.com", "Welcome to MyApp!") in sent_emails
```
 
```javascript
// Jest
test("sends welcome email on signup", () => {
  const sendEmail = jest.fn();
  createUser({ email: "ada@example.com", name: "Ada" }, { sendEmail });
 
  expect(sendEmail).toHaveBeenCalledTimes(1);
  expect(sendEmail).toHaveBeenCalledWith(
    "ada@example.com",
    expect.stringContaining("Welcome")
  );
});
```
 
**Use mocks sparingly.** Over-mocked tests stop testing reality — they test your own mock setup. A good rule: mock the things at the edges (network, time, randomness); test the rest with real objects.
 
---

## 10. TESTING IN CI — WHERE TESTS EARN THEIR KEEP
 
Tests on your laptop catch *your* bugs. Tests in **Continuous Integration** catch *your team's* bugs.
 
A modern CI pipeline (GitHub Actions, GitLab CI, CircleCI) does this on every push:
 
```yaml
# .github/workflows/test.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm install
      - run: npm test
```
 
- **A pull request is opened** — CI runs every test
- **Tests pass** — green check, merge allowed
- **Tests fail** — red X, merge blocked
Over a year of work, CI saves a team hundreds of regressions that would otherwise reach users. Your project grade for this term will benefit from setting up CI on at least one assignment.
 
---

## 11. AI-ASSISTED TESTING
 
Generative AI is genuinely useful for testing — often **more useful** than for writing the application code itself. Why? Because tests are repetitive, pattern-heavy, and verifiable by running them.
 
### Where AI helps
 
- **Generating boundary cases.** *"Here's a function. List 10 edge cases I might forget."*
- **Writing the boilerplate.** *"Here's a function signature. Write a Jest test scaffolding using Arrange-Act-Assert."*
- **Suggesting test names.** *"Rename these tests to be more descriptive."*
- **Translating between frameworks.** *"Convert these Jest tests to pytest."*
### Where AI misleads
 
- **Inventing assertions.** AI may confidently write `expect(result).toBe(42)` when the actual value is something else. Run every generated test.
- **Suggesting tests that pass tautologically.** *(`expect(add(2, 3)).toBe(add(2, 3))`)*. Watch for this.
- **Missing the test the bug actually needs.** AI tends to produce coverage of happy paths; bugs live in the edges.
### A useful prompt pattern
 
> *"Here's a function. Don't write code. Give me a list of 10 test cases I should write — including edge cases, error conditions, and likely-forgotten inputs. For each, just state the input and what you expect."*
 
That gives you a checklist. Then you write the tests yourself, run them, and learn the framework as you go.
 
---

## 12. CONNECTING BACK TO WEEKS 1–4
 
| Week | Topic | How it connects to testing |
|---|---|---|
| Week 1 | Platforms | Each platform has its own testing toolchain (Jest, pytest, Espresso for Android, XCTest for iOS) |
| Week 2 | Docs & review | Test names are documentation. Tests are how reviewers verify claims about behaviour. |
| Week 3 | Refactoring | Tests are what make refactoring **safe**. Without them, refactoring is just hoping. |
| Week 4 | Debugging | A failing test is a perfect bug report — automated, reproducible, and you can rerun it after the fix. |
 
This is the engine of the four-week loop: **build, document, refactor, debug — and tests run through all of it**. Tests are what hold the rest together.
 
---

## ACTIVITIES
 
### [REQUIRED] WRITE TESTS FOR MAP IT
 
The [Map It MVC Testing Guide](https://github.com/nic-dgl104-winter-2025/guide-mapit-mvc-testing) contains an implementation of Map It that loosely follows the Model-View-Controller pattern. Since AI2 doesn't natively support MVC, the separation is imperfect, but the blocks are modular enough to test.
 
**Your task:**
 
1. Identify at least **three units** of the block-based code you can meaningfully test in isolation.
2. For each unit, write a list of test cases following Arrange-Act-Assert. (You can write these as comments or in a Markdown file — AI2 has no built-in test runner.)
3. For each test case, **manually verify** the unit produces the expected output by running the app with that input.
4. Submit:
   - A Markdown file listing your test cases (test name, inputs, expected outputs, actual outputs)
   - At least one screenshot showing a successful manual test
   - At least one screenshot showing a *failing* test (deliberately break the code to confirm the test would catch it)
> The point: even without a test framework, **thinking like a tester** transfers across platforms.
 
### [REQUIRED] COMPLETE PROGRAMMING-PRACTICE ARTICLE AND AI2 PROJECTS
 
Both are **due this week**. Check Brightspace for submission instructions and review the rubric one more time before submitting.
 
### [RECOMMENDED] FOLLOW-UP QUESTIONS AND REFLECTIONS
 
1. Think of a past project that broke when you changed something. Would tests have caught the regression? Which tests, specifically?
2. What is the most valuable thing you'll take from this week — even if you don't feel ready to use a testing framework professionally?
3. Look at a popular open-source project (try [Lodash](https://github.com/lodash/lodash/tree/main/test) or [Requests](https://github.com/psf/requests/tree/main/tests)). Browse the test directory. What patterns do you notice in how tests are named and organised?
4. If you were going to add ONE test to your AI2 project — the single most important thing to verify automatically — what would it be?
---
 
## OPTIONAL RESOURCES
 
### Foundational
 
- **[MIT 6.005 — Testing](https://ocw.mit.edu/ans7870/6/6.005/s16/classes/03-testing/)** — Academic but precise. The boundary-value analysis section is exceptional.
- **[Assertion (Wikipedia)](https://en.wikipedia.org/wiki/Assertion_(software_development))** — the building block of every test
- **[Exception handling (Wikipedia)](https://en.wikipedia.org/wiki/Exception_handling)** — what tests catch when things go wrong
- **[Unit testing (Wikipedia)](https://en.wikipedia.org/wiki/Unit_testing)** — solid overview
### JavaScript
 
- **[Jest documentation](https://jestjs.io/docs/getting-started)** — the most-used JS test framework
- **[Vitest](https://vitest.dev/)** — modern alternative (Jest-compatible API, faster)
- **[Testing Library](https://testing-library.com/)** — for testing user-facing components
### Python
 
- **[pytest documentation](https://docs.pytest.org/)** — the de facto Python framework
- **[unittest](https://docs.python.org/3/library/unittest.html)** — built into Python, more verbose
### E2E / Browser
 
- **[Playwright](https://playwright.dev/)** — modern, fast, multi-browser
- **[Cypress](https://www.cypress.io/)** — popular, friendly developer experience
### Books
 
- **Kent Beck — *Test-Driven Development: By Example***. The original TDD book. Short. Worth reading.
- **Vladimir Khorikov — *Unit Testing Principles, Practices, and Patterns***. Modern, opinionated, excellent.
---
 
## A NOTE ON AI TOOLS
 
Use AI to **scaffold** tests, not to **own** them. A good workflow:
 
1. **You write the function** you want to test.
2. **You ask AI to suggest test cases** — just a list, no code.
3. **You write the tests yourself**, learning the framework as you go.
4. **You run them.** Both the green ones and the unexpectedly red ones.
5. **You decide** which tests stay and which were noise.
This produces tests you understand and trust. Pasting AI-generated test files wholesale produces a coverage number but not real confidence.
 
---

<!-- 
### TESTING
Testing is a critical stage of development, but interestingly, a stage that can be emphasized at the beginning, or the end, or even throughout development. In practice, tests are often developed on an as-needed basis (unless one is following the [test-driven development paradigm](https://en.wikipedia.org/wiki/Test-driven_development)), typically as new features are added and code complexity increases.

The goal of testing is to ensure that 1. the code meets design and business objectives; and 2. the code is correct. Although it's not quite this simple, these two goals can be loosely divided along the lines of [_validation_ and _verification_](https://en.wikipedia.org/wiki/Software_verification_and_validation).

Our focus in this course will primarily be on [unit testing](https://en.wikipedia.org/wiki/Unit_testing), which is a testing strategy used to ensure modular "units" of code produce the correct outputs given proper inputs. Unit testing can be associated with both validation (testing the validity of inputs) and verification (testing the correctness of output).

A key step to writing good tests is ensuring sufficient test coverage, and appropriate boundaries for test cases. In particular, it's critical that code units are independent, or decoupled, from the rest of the codebase to ensure that tests provide the correct coverage. And since in many cases it is impossible to test all possible inputs and situations, identifying representatives categories (defined by boundaries in the testing space) ensure that all possible inputs are addressed at some level of granularity.  


<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/FouNsDEVD-c"></iframe></div>


## ACTIVITIES

### [REQUIRED] WRITE TESTS FOR MAP IT
The [Map It MVC Testing Guide](https://github.com/nic-dgl104-winter-2025/guide-mapit-mvc-testing) contains an implementation of Map It that follows the Model View Controller (MVC) architecture pattern. Since `AI2` doesn't actually support MVC this is a fairly ad hoc effort, and those of you already familiar with MVC might note some bleeding of references and data between model and view. Nevertheless, the blocks are reasonably well-separated, and importantly, modular. 

Your task is to identify appropriate units of the block-based code to test, and to create tests that demonstrate the units of code operate correctly on valid inputs.

### [REQUIRED] COMPLETE THE PROGRAMMING PRACTICE ARTICLE AND `AI2` PROJECTS
I think this goes without saying, but I'll repeat it anyway: Both the Programming Practice article and the `AI2` projects are due this week! See the [week 5 content](dgl104-2024wi/week-05) to understand how best to submit both of these projects.

Don't forget to carefully examine both project requirements and expectations and the rubric for each project. These together define how your work will be evaluated. 

### [RECOMMENDED] FOLLOW-UP QUESTIONS AND REFLECTIONS
1. When would testing have helped you most on past projects? Can you recall any past projects that would have benefitted from a test-first approach?  
2. What is the most important learning you will take from this week (even if you don't feel comfortable using a testing framework, what can you take from the principles of testing and use in future projects)?

## OPTIONAL CONTENT
- [MIT 6.005 Testing](https://ocw.mit.edu/ans7870/6/6.005/s16/classes/03-testing/)
- [Assertion - Wikipedia](https://en.wikipedia.org/wiki/Assertion_(software_development))
- [Exception handling - Wikipedia](https://en.wikipedia.org/wiki/Exception_handling)
- [Unit testing - Wikipedia](https://en.wikipedia.org/wiki/Unit_testing)


 -->
