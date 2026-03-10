
# Typical Debugging Tools


Bugs can be one of the most frustrating things in code and they would only be worse if it wasn’t for debugging tools. A debugging tool helps you pinpoint and fix errors in code. The following documentation is going to be based on the IDE, “Visual Studio Code”, but most of the concepts and features are applicable to other programs.

One of the best things about Visual Studio Code is its great debugging support. VS Code has built-in debugging support for JavaScript, TypeScript, or any other language that gets transpiled to JavaScript with Node.js. For debugging other languages, you can look for “Debuggers extensions” in the VS Code Marketplace or select “Install Additional Debuggers” in the “Run” dropdown menu. To launch your app with the debugger attached, select Run and debug start view or press F5.

These next features talked about are some of the most important features in the debugging process. A “breakpoint” is a feature in VSCode that allows breaking the execution of code at a specific point to help narrow down where the bug occurred. Some more features of a breakpoint are “pause/resume, step over, step into, step out, restart, and stop”.

![VSCode Debugging Controls](https://cdn.discordapp.com/attachments/545335773939892259/958873040685502535/updatedcontrols.jpg)

### Pause/Resume 

Pause/resume allows you to either continue the execution of the code when it is in a paused state or pause the execution when a function is currently being executed. 

### Step Over

Step over lets you skip functions altogether (aka step over the code). You can do this by pressing F11 or pressing the “step over” button and it can be used for skipping through code that you aren’t interested in. 

### Step Into

Step into is similar to step over, but it lets you only execute the next function before pausing on the first line inside, so you can more easily keep track of what is happening in your code. The keyboard shortcut to Step into is F10. 

### Step out

The step out button executes all the code in the current function before pausing at the next. You can step out by pressing the “step out” button as shown on the diagram or using Shift+F11.

### Conditional Breakpoint
A little more advanced feature in VS Code’s built-in debugger is you can create a conditional breakpoint. A conditional breakpoint allows you to pause the execution of your code after certain conditions have been met which gives you much more control to stop exactly where you might want to stop. To create a conditional breakpoint, just right click where you would want it then select "Add Conditional Breakpoint".





## References
 - [Debugging in Visual studio code](https://code.visualstudio.com/Docs/editor/debugging/)
 - [Beginner series to Visual Studio Tooling By Charlies Amat](https://docs.microsoft.com/en-us/shows/beginners-series-to-vs-tooling-for-unity-developers/conditional-breakpoints-4-of-5--beginners-series-to-vs-tooling-for-unity-developers)
 - [Basic debugging in Visual studio code by Matthew MacDonald](https://medium.com/young-coder/basic-debugging-in-visual-studio-code-b9a5d193fe7b)
 - [VSCode Debugging - Conditional Breakpoints](https://ephos.github.io/posts/2017-9-10-VSCode-Debugging-CondBreakPoint#:~:text=To%20add%20a%20conditional%20breakpoint,options%2C%20Hit%20Count%20and%20Expression.)
