# Program Structure

Structured programming is one of the several different ways in which a program can be constructed. Structured programming was introduced as a way to get away from the “spaghetti code” that was being used in the early days of computer programming. It was also intended to provide a way for programmers to follow code written by other programmers. At low levels, structured programs are composed of simple, hierarchical program flow structures. 

## Basic Structure of a Python Program
### Expressions
An expression is any legal combination of symbols that represents a value. An expression represents something which Python evaluates and which produces a value.

### Statements
A statement is a programming instruction that does something, i.e. some action takes place. A statement executes and may or may not result in a value. All expressions are statements, but not all statements are expressions!

### Comments
Comments are the additional readable information to clarify the source code. Comments in Python are the non-executable statements in which begin with a hash symbol (`#`) and generally ends with the end of the line. 

### Function
A function is a code blocks that has a name, and it can be reused (executed again) by specifying its name in the program, where needed. In Python, a function begins with a `def` statement.

### Blocks and indentation
A group of statements which are part of another statement, or a function are called block, code-block, or suite in Python. Indentation is used to show blocks in Python. Four spaces together mark the next indent level.

## Basic Structure of a Java Program
### Project package
```java
package helloworld;
```
A package is a folder of classes and related files for your project.  `helloworld` is the name of this example package. 

### Class header 
```java
public class HelloWorld 
``` 
`public` is the access specifier. Classes can either be `public` or `private`. When the class is public, you can access this class anywhere throughout your program. When the class is private, it can only be accessed inside its own class. Curly braces are used extensively in Java to indicate the start and the end of a code block. 

### Method header
```java
public static void main(string[] args { 
    System.out.println(“Hello World”);}
}
``` 
`public` means that it can be accessed anywhere throughout the files, `static` means you can use this method without creating an instance or an object of that class.  `void` is the return type of the method `main`. `void` simply tells the compiler that the main method does not return a value. The keyword `static` allows the `main` method to be called without having to instantiate a particular instance of the class.  `main` is the name of the method, and inside the parentheses is the parameter of the method. The square brackets after the word `string` mean that this method can accept an `array` of `string` elements. `main` is the entry point of all Java applications. It is the first method to be called. Also, inside the main method is a `println` statement telling the compiler to print the words Hello World. Finally, there is the semicolon. All Java statements end with a semicolon to indicate to the compiler where an instruction ends and where the next instruction begins. 

## Coding Standards and Best Practices
Coding standards and practices will vary, depending on what the product is being built for. Coding software for gaming will have different standards and practices from code that is being developed for automobiles. Sticking to the specific standards for the industry you are writing the code for will make it easier to write accurate code that matches product expectations. Coding standards help in the development of software programs that are less complex, therefore reducing errors. Many computer programs remain in use for long periods of time, so any rules need to facilitate both initial development and subsequent maintenance and enhancement.  Sticking to coding standards and best practices will in turn, help us write good code.

## Writing Good Code
What are the qualities of good code? Some programmers will say that it’s code with 100% test coverage. Other programmers might say that it’s code that will run on 10-year-old hardware. Good code should also be code that is easily maintainable by an organization, and will live longer than the year that it was written in. In any programming language, it’s possible to write good code or bad code. Writing code that is easily read and understood by the author and team is what will potentially make or break that code. Code should also be as intuitive and self-documenting as possible. 

## Writing Bad Code
What are the qualities of bad code programmers might say that bad code has no documentation and is hard to read. A programmer might say that the code is complex, and not straight forward. The code could have typos, or the programmer could have failed to indent or format the code. Bad code is  also considered to be code that has been poorly tested, or the program has bugs and gives unexpected errors, or has faulty behaviors. Using bad naming conventions is another example of what a programmer might consider to be badly written code.  

## How Do We Make Code More Readable?
Well encapsulated code tends to be more readable. According to [Wikipedia](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)): “Encapsulation is used to hide the values or state of a structured data object inside a class, preventing direct access to them". But why would we hide data? And for what purpose? Hiding data provides a way to protect it from the outside world. If you make your instance variable public, then anyone can change it’s state. But if you make your instance variable private/protected then you are restricting outside entities from making changes to it. Names also matter. Putting careful thought into variable and method names can pay significant dividends. A well-named variable can make the code much more intuitive, whereas a poorly named variable can lead to head shakes and confusion. Consistency in style also improves code readability. Functions and classes can also be easily distinguished from one another. They should consist of descriptive titles that are delimited by using conventions.  Some types of variable naming conventions are as follows:
- __Multiword Delimited__: Use to separate multiple words in a variable name without white space.
- __Hungarian Notation__: This convention describes the purpose or type of the variable in the first part of the variable name, and then uses a descriptor to indicate the variable’s function. In Hungarian notation, the camelCase notation is used to delimit the words.  

## Comments and Document
Comments are specially marked lines of text in the program that are not evaluated. There are two ways to comment. Single line comments, and block comments. Single line comments are a single line in the source code. Block codes refer to a paragraph of text. Block comments have a start symbol and an end symbol, and everything between those two points is ignored by the computer. Start every routine you write (function or method) with a comment outlining what that routine does, its parameters, what it returns, and possible errors and exceptions. Comments should be written in such a manner to easily describe the purpose of the code and any algorithms used to accomplish the purpose. 

## Indentation
Formatting and indentation are a necessity when it comes to organizing code. Code formatting and indentation includes correct spacing, line length, wraps and breaks. Program languages make use of indentation to define program structure. Indentation is used in the visual structure of how your code is laid out. It uses tabs to organize code into a hierarchy. Having correct indentation is a crucial aspect of programming style. 

## Code Organization
Most programming languages use specific structures to organize their code. These are called procedures, functions, or methods. Code organization is used to make sure that people can understand the code well enough that they will be able to maintain and evolve the code with a degree of efficiency and confidence. Code can be organized by encapsulating everything within one directory. This makes it easier to find things or makes sharing your code with others on your team an easy process. Programmers also separate the data from the code by using separate subdirectories. 

# References
* Encyclopedia.com - Program Structure https://www.encyclopedia.com/computing/dictionaries-thesauruses-pictures-and-press-releases/program-structure
* InfoQ Readable Code - Why, How and When You Should Write It https://www.encyclopedia.com/computing/dictionaries-thesauruses-pictures-and-press-releases/program-structure
* GeeksforFeeks - Coding Standards and Guidelines https://www.geeksforgeeks.org/coding-standards-and-guidelines/
* python-guide.org - Structuring your project https://docs.python-guide.org/writing/structure/
* javapoint.com - Structure of a Java Program https://www.javatpoint.com/structure-of-java-program
