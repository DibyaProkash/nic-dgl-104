# WEEK 5 (WEEK OF FEBRUARY 4)
## LECTURE - TESTING

> Primary contributor: **[Ashley Blacquiere](https://ca.linkedin.com/in/ashley-blacquiere)**
>
> Modified by: Dibya Prokash Sarkar

### TESTING
Testing is a critical stage of development, but interestingly, a stage that can be emphasized at the beginning, or the end, or even throughout development. In practice, tests are often developed on an as-needed basis (unless one is following the [test-driven development paradigm](https://en.wikipedia.org/wiki/Test-driven_development)), typically as new features are added and code complexity increases.

The goal of testing is to ensure that 1. the code meets design and business objectives; and 2. the code is correct. Although it's not quite this simple, these two goals can be loosely divided along the lines of [_validation_ and _verification_](https://en.wikipedia.org/wiki/Software_verification_and_validation).

Our focus in this course will primarily be on [unit testing](https://en.wikipedia.org/wiki/Unit_testing), which is a testing strategy used to ensure modular "units" of code produce the correct outputs given proper inputs. Unit testing can be associated with both validation (testing the validity of inputs) and verification (testing the correctness of output).

A key step to writing good tests is ensuring sufficient test coverage, and appropriate boundaries for test cases. In particular, it's critical that code units are independent, or decoupled, from the rest of the codebase to ensure that tests provide the correct coverage. And since in many cases it is impossible to test all possible inputs and situations, identifying representatives categories (defined by boundaries in the testing space) ensure that all possible inputs are addressed at some level of granularity.  


<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/FouNsDEVD-c"></iframe></div>


## ACTIVITIES

### [REQUIRED] WRITE TESTS FOR MAP IT
The [Map It MVC Testing Guide](https://github.com/nic-dgl104-winter-2024/guide-mapit-mvc-testing) contains an implementation of Map It that follows the Model View Controller (MVC) architecture pattern. Since `AI2` doesn't actually support MVC this is a fairly ad hoc effort, and those of you already familiar with MVC might note some bleeding of references and data between model and view. Nevertheless, the blocks are reasonably well-separated, and importantly, modular. 

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



