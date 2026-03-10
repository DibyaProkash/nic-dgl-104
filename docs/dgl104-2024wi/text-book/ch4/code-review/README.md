# Code Review

## Introduction
As part of the refactoring process, code review is an essential part of software
development. When refactoring, you do not want to accidentally change the function of
the code or introduce new bugs. Software is limited in how it can assist with code
review. A human brain is required to truly understand and review any code that is
refactored and having a fellow developer review your code might catch issues or
problems that you have overlooked.

## Code Review Purpose
The purpose of code review is to ensure code quality. Perfect code is impossible, and
developers should be striving for better code during review rather than perfect code. Code
review also encourages communication within programming teams and acts as a
learning opportunity for new developers as well as senior developers.

## Code Review Etiquette
Two parties are involved in the code review process, the reviewer, and the reviewee.
Before the code is submitted for review, the reviewer should be confident that their
code works as intended and should be prepared to justify the choices they made during
refactoring or development. The reviewer should be prepared to take constructive
criticism and take notes on the suggestions the reviewer gives to them. The reviewer
needs to be respectful of the reviewee. 

The purpose of code review is to teach your
fellow programmer and help them improve the code, providing constructive criticism
rather than just criticizing them with no sense of respect.
Good feedback: “I suggest using a loop for loop to input the values into the linked list
rather than writing a call to the function for each value.”
Bad feedback: “Why are you using if-else statements when you can just as easily
use a switch statement! It makes your code almost unreadable!

## What to Look for in Code Review.
The first thing to look for during code review is the overall design of the code.
What is the intended purpose of the program? How do all the components of the
code fit together to make the program work? Understanding how the code is
supposed to work is essential to review the code properly. Good practice is to
have documentation outlining the intended purpose of the code.


After understanding the design of the code, the next step is to review the styling
of the code. Why styling before testing functionality? Because if the code is
readable, then it will be easier to find bugs. The style of the variable names and
methods should be consistent with the official styling guide for whatever
programming language is given. Variable names should be descriptive rather
than shortened, future programmers may not be able to decipher what “jwlry”
means, especially if English is not their first language, a better name would be
“jewelry”. Avoid repeating variables and names since it can make calling a
specific function in the future hard. Each variable should have its own name.
### Bad example 
```java
public int TBooth(int p) {
    int pTaxes = p * 1.12;
    return pTaxes
}
```
### Good example
```java
public int ticketBooth(int price) {
    int priceAfterTaxes = price * 1.12;
    return price;
}
```
After cleaning up the styling of the code, the next thing to test for is the
functionality of the code. Does the code work as intended? This is the time to
look for any bugs and find any logical errors in the code. When testing the code,
one should strive to make the code fail and fail fast. Test as many values as
possible and note which ones work with the program and which make the code
fail. That way you can know exactly what the program is and is not capable of.
Static code will fail faster than dynamic code which will fail faster than the wrong
answer. When appropriate, choose for methods to return a value rather than print
a value, that way the value can be used for other functions rather than for only
printing the answer.

Avoid over complicated code. Code that is too complicated can make it harder for
other programmers to update in the future. Over complicated code is usually the
result of over engineering, usually because of programmers anticipating what the
code might need in the future. Good practice to avoid over engineering is to
focus on what need to be programed now, rather than what need to be
programmed in the future. Deal with issues as they come along.


## Code Review Methods
There are many ways to conduct code review. The most straightforward method is to
have a colleague look at the code with you at your computer. This allows for real time
code review and allows you to talk about the code directly. Another method is to email
multiple numbers of colleagues for code review, this allows for your code to be reviewed
even if there is no one physically there to look at your code and provide feedback
directly. The downside is that with multiple reviews comes a variety of different methods
that you as the reviewee will have to filter out. Two programmers may decide to work on
their projects concurrently and review each others code while the code is in
development, and software tools can be used to aid in code review.

## Ensure Code is Adaptable
All in all, whenever changes are made to the code, whether you are refactoring or
whether you are adding a new feature, always ensure that the code can be updated in
the future. Due to the constant changes in technology, code that is not consistently
refactored and updated will become stale and lose its function over time. That is why
when writing code, it should be done in a way that allows the code to be updated over
time. This can be achieved by following good coding practice which is improved by code
review.

## References
1. [MIT 6.005 Code Review](https://ocw.mit.edu/ans7870/6/6.005/s16/classes/04-code-review/index.html)
2. [The Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html) 
3. [What to look for in a code review](https://google.github.io/eng-practices/review/reviewer/looking-for.html)
4. [What Is Code Review?](https://smartbear.com/learn/code-review/what-is-code-review)