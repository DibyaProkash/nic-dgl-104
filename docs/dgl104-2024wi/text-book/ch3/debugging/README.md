# High Level Debugging Strategies

## Introduction

Bugs are generally caused by one of a few things: typos / syntax errors, implementation errors (like trying to modify a data structure in a way that doesn’t work, integer overflow, etc), and logic errors.

## Understanding the Problem

The most important thing when debugging is understanding the problem. If you don’t know what is going wrong, trying to find the source of the problem can be incredibly difficult, especially when the source of the bug is an error with the logic used to write the code. Start by comparing what did happen with what was supposed to happen, to try to find potential sources for the bug. If you aren’t sure what the source of the bug is, it can also be very helpful to explain the code and the problem out loud as a way to make you make you think more about the code and the bug, and potentially help find any potential logic errors or forgotten edge cases.

## Techniques
This section will highlight a few techniques that can be useful for helping to find the location and nature of a bug.

### Print/Log Statements
A common and simple technique for debugging is the use of print or log statements in order to confirm the state of a variable or that a function / branch of a conditional statement is being entered when it should (and not entered when it shouldn’t). For example, if you have a error that you know involves a function that receives an integer as input, and you know based on how the code is supposed to work that it should always receive a value between 1 and 20, you could add a print or log statement to the beginning of the function like so:

```Kotlin
fun foo(bar: Int) {
  println(bar)
  //Rest of Function
}
```
Now when you next run the code, you'll know all of the values that are passed into the function as it runs, and you'll know if the input the function is receiving is within expected bounds

If a section of code is repeated a lot, either in a loop or in a function that gets called repeatedly, this method can result in a lot of clutter in the console, making it difficult to check if there are any unexpected values. In these cases, it can help to wrap the print/log statement in a conditional statement, so that the only values that get printed out are the unexpected ones, like so:

```Kotlin
fun foo(bar: Int) {
  if(bar < 1 || bar > 20) {
    println(bar)
  }
}
```

### Simplification

Another basic technique that can be useful sometimes is simplification of the code: commenting out lines to see when the bug stops occurring. How easy and effective this technique is to implement can vary a based on the structure and nature of the code.

As an example, look at this function:

```Kotlin
fun foo() {
  x()
  y()
  z()
}
```
if the function `foo()` is not working as expected, the bug might be in any one of the three successive function calls. To find where the bug is, you could comment out the function calls one-by-one until the bug stops occurring, like so:

```Kotlin
fun foo() {
  //x()
  y()
  z()
}
```
With this technique, it's important to understand the effect commenting out a chunk of code will have on later sections. In particular you need to make sure that commenting out a chunk of code won't cause a crash or other error that could prevent you from checking for the original bug. For example, look at the code:

```Kotlin
fun baz() {
  var foo = x()
  var bar = y(foo)
  z(foo, bar)
}
```
Both `y()` and `z()` rely on the output of the functions that were called before them, so commenting out `x()` first will result in a new error. In a situation like this, you could start by commenting out `z()`, since both `x()` and `y()` don't rely on that code. Another option would be to use a placeholder value, so long as you know what the code is supposed to do when the commented out code results in that value, like so:

```Kotlin
fun baz() {
  //var foo = x()
  var foo = 10
  var bar = y(foo)
  z(foo, bar)
}
```
Regardless, when using this technique it is important to remember to add the commented-out code back in once you are done.

### Manual Trace and Backtracking

A manual trace is where you step through the code one line at a time, either by hand with a pencil and paper, or using a debugger to step through individual lines of code. As you walk through the code, ask yourself what the computer sees when it runs each line of code, and don't just assume that it works like you intended. 

A manual trace can become tedious and time-consuming for larger programs, but can still be useful for smaller sections when combined with a debugger to set a breakpoint just before where you want to begin your manual trace. That said, it's important to at least understand the nature of the bug and the general section of code that it's in before doing this, or you might set the breakpoint after the source of the bug, and potentially waste a lot of time looking for something you already skipped past.

Another option with manual tracing is backtracking: starting from the location of an error, such as a statement that you know received the wrong value, or the line where the program crashed, and work backwards until you find the source of the error. That said, this technique can also be very time-consuming if the source of the problem is far away from where you know it caused an issue. For larger programs where you aren't sure of the location of the bug, the next technique can be a much more efficient way of searching.

### Divide-and-Conquer
For larger programs where you are unsure of the location of the bug, using a divide-and-conquer approach can be helpful. How this technique works is you use a debugging tool to set a breakpoint at around the halfway point of the code. At that breakpoint, you then check the variables and behaviours of the code up until that point to see if the bug you are looking for as already occurred. If it has, the bug is somewhere in the first half of the code, and if not, it's in the second half. From there. you repeat the process, using a breakpoint to divide the section of code that you know contains the bug in two and checking which of those halves contains the bug, until you've narrowed down the location to a small, much more manageable section of code to debug. Essentially, it is applying the binary search algorithm to debugging.

### Test Early, Test Often
Finally, when debugging, it's best to not wait until all of your code is written before you begin. When possible, test check for bugs early and often. By testing often, figuring out what is going wrong is often much easier than if you leave all of your testing until the end. This is because, if everything worked when last tested and now something has gone wrong, you immediately know that it involves the code that was written since the last test.

## Conclusion
With debugging techniques, the important thing is to aid the programmer in accurately and effectively determining the nature and location of any errors in the code. Simply guessing and checking what the programmer assumes are the most likely sources of the bug can work, but it is not always clear what is causing a bug, and the source of a bug can sometimes be far removed in the code from the place where the programmer detected the bug. That is why a proper analysis of the code and its logic, as well as systematic methods of locating the sources of bugs, can save a lot of time and frustration while writing and debugging code. 



## References
1. 10 Useful Tips for Debugging and Troubleshooting in Programming, Aiden Huang, August 7, 2013
https://onextrapixel.com/10-useful-tips-for-debugging-and-troubleshooting-in-programming/

2. Modern Debugging: The Art of Finding a Needle in a Haystack,   Diomidis Spinellis, November 2018
https://cacm.acm.org/magazines/2018/11/232215-modern-debugging/fulltext

3. Debugging Techniques and Their Role in Software Development, Elizabeth Moss, March 10 2021
https://www.bairesdev.com/blog/debugging-techniques-software-development/

4. Debugging Strategies and Techniques, Ethan Blanton, Nov 1 2020
https://cse.buffalo.edu/~eblanton/misc/debugging/
8 Debugging Techniques, Rocio Belfiore, Jan 27 2021
https://www.bairesdev.com/blog/debugging-techniques/
