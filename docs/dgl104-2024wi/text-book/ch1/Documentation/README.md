# Documentation 

## What is Documentation?

In a broad sense, documentation refers to any written documents or information about a technical project, such as an app, a website, or a piece of software. Documentation provides context and additional information to code, which is crucial regardless of whether you are working on an solo project, or on a team with other developers. 

If you are working on a solo project, you might wonder why you need to document your code, since you're the one writing it. However, you'll often find that when you leave a project then revisit it weeks, months, or even years later, you won't recognize your code at all! 

With proper documentation, you'll be thanking yourself for the descriptive information you left behind for yourself, or other developers, to read.

## Types of Documentation

While documentation can take many forms, we're going to focus on three main divisions: Commenting, API/Standard Documentation, and Project Documentation. You may sometimes hear the terms "comments" and "documentation" used interchangeably, but there are important distinctions between each that you will need to know in your career as a developer.

## Commenting

Commenting refers to short pieces of documentation (comments) that are written into code, in either line or block format. Typically they are used to provide context for segments of code, or for an entire file. Let's take a look at the example below, written in the Swift programming language:

```swift
/* 
    Says hello, either to a specific name or to 
    "World" as a default value. 
*/

func sayHello(to name: String = "World") {
    print("Hello, \(name)!")
}

sayHello() // Output is "Hello, World!"

sayHello(to: "Bob") // Output is "Hello, Bob!"
```

Each language has it's own way of writing line and block comments. In the Swift example above, we use `//` to write a line comment, and `/* */` to write a block comment. Line comments only span one line, so you only need to use `//` at the beginning of the comment. If you want to write a comment that spans more than one line, start your comment with `/*`, and end it with `*/`.

Make sure to check your programming language to ensure you are using the correct commenting syntax for your line and block comments! While many languages follow the `//` and `/* */` style Swift uses, others use different syntax, such as `<!-- -->` for HTML, or `#` for Python.

### When to Use Commenting

While we should always strive to write "self-documenting code", meaning code that is so clear and easy to read that it doesn't need comments to explain it, there are many times when comments are appropriate.

Depending on the programming language you are coding in, there may be specific style conventions that dictate when to use comments. In general though, there are a few times where a comment is a good idea:

* When you've written a snippet of code, typically a function, class, or method, that is somewhat ambiguous. 
* When you've taken an approach where there were multiple options, to justify your decision to other developers.
* When you need to come back and add something, to mark a to-do item
* When you will be passing your work onto other developers, and they will need context to clearly understand your code.

### Good vs. Bad Commenting

While it's important to leave comments behind when you code, it's arguably more important to make sure the comments are good! 

According to Brian Yee's [Article about Documentation and Comments](https://medium.com/swlh/why-documentation-and-comments-are-important-in-code-9b64a0068792) on Medium.com, there are several Documentation Do's and Don't that new developers should consider (paraphrased):

**Do Include:**
* What the function, class, or snippet of code does.
* What arguments, if any, the function or code snippet expects in order to work properly.
* Any known issues or bugs in the code snippet
* Up to date information: Ensure that whatever you write, it is either evergreen, or is updated as appropriate. Try to avoid comments that will be difficult to maintain!
* Credit to other sources if applicable: if you borrowed code from another project or other source, make sure to mention it to avoid plagiarism!

**Don't Include:**
* Unnecessary information. Avoid mentioning anything not relevant to the code, as well as over-explaining code that explains itself! 
* Comments that assume the reader's level of knowledge. Make sure your code can be understood by beginners as well as experts!
* Ambiguous language or slang. To ensure everyone reading your comments understands what you're trying to say, write in clear, concise and simple language.
* Confusing code formatting. If your comment can fit on one line without needing to scroll, use a line comment. For longer comments, use block commenting syntax. 

## API/Standard Documentation

API or Standard Documentation is official information that offers clarity about the language you are writing in, such as style guide directives, parameter information, or other information relevant to the code you are writing. It is often automatically generated by third-party tools.

While you may not be writing Standard Documentation right away in your career, you will definitely see it as you learn to code, either online, or built into your IDE (Integrated Development Environment). You may have noticed that you can hover over pieces of code, and information pops up in a dialogue explaining that code; you're looking at Standard Documentation!

### When to use API/Standard Documentation

According to [FreeCodeCamp](https://www.freecodecamp.org/news/code-comments-the-good-the-bad-and-the-ugly-be9cc65fbf83/), "if you are building a library or framework that other developers will use, you need some form of API documentation." Because of this, API/Standard documentation isn't commonly written by new developers. Instead, as you learn you will likely find yourself referring to API/Standard documentation that has been previously written. 

## Project Documentation

Project documentation is used to provide information about the overall project, and often takes the form of a `README.md` file. This file is a text document written in Markdown language, describing the project and providing onboarding information. 

Product documentation can also include licensing information and any other written information relevant to the project. 

### When to use Project Documentation

Each project should have a `README.md` file at the very minimum. This should introduce the project, explain the different parts of the project, and track major milestones or progress. It's a great practice to use a `README.md` file to reflect on work, and in open source projects, it will often detail the opportunities for developers to jump in and help. 

If you have a very large project with a lot of supplementary information, your `README.md` might contain a brief summary of the project, with links to the various relevant documents.


## References

Bill Sourour (April 20, 2017). Putting Comments in Code: the Good, the Bad, and the Ugly. FreeCodeCamp.com
[https://www.freecodecamp.org/news/code-comments-the-good-the-bad-and-the-ugly-be9cc65fbf83/](https://www.freecodecamp.org/news/code-comments-the-good-the-bad-and-the-ugly-be9cc65fbf83/)

Gitlab (December 1, 2020). Technician Documentatino in Software Development: Best Practices and Tools.  Altexsoft Software R&D Engineering
[https://www.altexsoft.com/blog/business/technical-documentation-in-software-development-types-best-practices-and-tools/](https://www.altexsoft.com/blog/business/technical-documentation-in-software-development-types-best-practices-and-tools/)

Brian Yee (July 19, 2019). Why Documentation and Comments are Important in Code. Medium.com
[https://medium.com/swlh/why-documentation-and-comments-are-important-in-code-9b64a0068792](https://medium.com/swlh/why-documentation-and-comments-are-important-in-code-9b64a0068792)
