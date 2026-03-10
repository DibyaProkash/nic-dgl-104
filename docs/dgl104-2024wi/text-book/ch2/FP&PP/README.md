<p align = "center"><img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/004935cd-848e-4eb4-aefe-252ce0cfc041/fp-preview.png"></p>
<p align = "center"> Image from <a href="https://www.smashingmagazine.com/2014/07/dont-be-scared-of-functional-programming/">Smashing Magazine</a></p>


# Functional Programming and Functional Paradigms

## Intro

Here, I will introduce you to functional programming and some of its paradigms. A new and learning programmer may be reluctant to learn a different method to achieve the same result, especially when the functional approach can be a difficult approach to understand. However, Functional Programming and its paradigms are best served when software **evolves** over its lifetime, as it was so eloquently put here on [StackOverflow](https://stackoverflow.com/questions/2078978/functional-programming-vs-object-oriented-programming):

> Object-oriented languages are good when you have a fixed set of operations on things, and as your code evolves, you primarily add new things. This can be accomplished by adding new classes which implement existing methods, and the existing classes are left alone. 
> 
> Functional languages are good when you have a fixed set of things, and as your code evolves, you primarily add new operations on existing things. This can be accomplished by adding new functions which compute with existing data types, and the existing functions are left alone.
> 
> Norman Ramsey

As noted here, object oriented programming addresses software evolution by creating more content to accomplish the task at hand, often by creating new classes which can bloat the software and scales poorly. Functional programming on the other hand would minimize the amount of new code added, solving complex problems in a simpler way with the use of lambda operators, improving modularity, and code maintainability by use of nested functions. This isn't to say that OOP and Functional Programming are mutually exclusive; though being able to recognize where a developer is able to use functional programming is beneficial to development as a whole.

**_What is Functional Programming?_**
 
 Functional programming is best understood as an approach towards coding-- using functions most effectively to create concise and rectifiable code. This is what is meant to be a paradigm, a pattern, model, or methodology for how something is done or accomplished.

 In functional programming, it's important to recall what sets it apart from its object oriented counterpart. As object oriented programming works with mutable objects and variables, one of the goals in the functional programming paradigm is to have all of the variables or objects it works with be immutable-- functional programming does not change the original values of what it works with.
 
 ## Functional Tools

  Here, I will cover some methods that are used in functional programming, particularly the most common ones such as `map*`, `reduce`, `flatmap`, and `sort`. JavaScript will be the language used in the following examples.
 
 ### map()
   
 The functional `map()` method **takes a given array** and **a function** and modifies the elements within the array based on the function to **output a new array**. Below are a few examples on applications of the method, albeit rather simple.

 <p align='center'><img src = 'https://upload.wikimedia.org/wikipedia/commons/0/06/Mapping-steps-loillibe-new.gif' width = "400"></p>
  <p align = "center"> Image from <a href="https://en.wikipedia.org/wiki/Map_(higher-order_function)">Wikimedia Images</a></p>
 
 A use of `map()` that takes a numeric array and creates a new array of the modified numbers. In the above image, we can see observe that the initial array `X` is taken as the input, and the `map()` function looks at each array, adds 1 to the value of that index, and sends the new value to be stored into a new array.

 The following code snippet takes an array of numbers, and outputs their square root.

 ```javascript
const numberArray = [9, 16, 81];
const numberRoots = numbers.map((num) => Math.sqrt(num));
// A new array numberRoots with the content of [3, 4, 9] is created.
 ```
 > `map()` code by PalaKollu Sri Manikanta
 
  This use of `map()` takes an array of objects and modifies them to a new array of objects.
 ```javascript
 const kvArray = [{ key: 1, value: 10 },
                 { key: 2, value: 20 },
                 { key: 3, value: 30 }];

const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));

// A new array reformattedArray with the content of [{1: 10}, {2: 20}, {3: 30}]
 ```
  > `map()` code by PalaKollu Sri Manikanta

  This code snippet uses `map()` on a string to create an array representing the character values ASCII bytes.
 ```javascript
const map = Array.prototype.map;
const charCodes = map.call('Hello World', (x) => x.charCodeAt(0));

// charCodes now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
 ```
  > `map()` code by PalaKollu Sri Manikanta

  Where might a programmer want to use `map()`? There are simple applications as demonstrated above, where the developer may want to evaluate a formula of numbers, reorganize the appearance of an array, or convert a string to ASCII format.

  Let's consider an interaction between a glove-like input device that receives information from five fingers, and sends the information in the form of an array. The map() function may be used to interpret the array into a form that the software may use for other existing functions in its code:

  ```javascript
  // Presume the input provides a input of 'a#' where 'a' might be the angle and '#' the angle the finger is currently at. We map the array to simply provide the value as angle alone.
  const gloveInput = [{f:1, a:90},
                      {f:2, a:90},
                      {f:3, a:0 },
                      {f:4, a:0 },
                      {f:5, a:0 }];

  const interpretedInput = gloveInput.map((f, a)) => ({a});
  // interpretedInput is an array of [90, 90, 0, 0, 0];
  ```

 
 ### `reduce()`
 
According to Mozilla's documentation, _the simplest way of thinking of functional method `reduce()`, adds the sum of all values in an array_, but that isn't quite right. What the reducer does is takes two arguments, which can be an object, array, or function, and **returns only a single value**. The terminology of these arguments are known as the reducer and accumulator; the latter of which is the value we end with, and the reducer the action we will perform on the two arguments. Let's take a look at what some reducer examples can perform:

  <p align='center'><img src = 'https://cdn.discordapp.com/attachments/910117718924099594/948954099339116564/unknown.png' width = "400"></p>
 <p align = "center"> Image from <a href="https://www.educative.io/edpresso/how-to-use-the-reduce-method-in-python">Educative.io</a></p>

 The above image shows `reduce()` in its most basic form. It takes a function, a variable, and outputs a single value.
  
  The following use of `reduce()` simply adds and then returns the sum of all the values in the array.
  ```javascript
  //this is our initial value i.e. the starting point
  const initialValue = 0;
  
  //numbers array
  const numbers = [5, 10, 15];
  
  //reducer method that takes in the accumulator and next item
  const reducer = (accumulator, item) => {
    return accumulator + item;
  };
  
  //we give the reduce method our reducer function and our initial value
  const total = numbers.reduce(reducer, initialValue)
  ```
  > `reduce()` code by Paul Ryan

  This use of `reduce()` takes an array of arrays, and concatenates all of the indexes of the sub-arrays into a new single array. 
  ```javascript
  function flattenArray(data) {
    // our initial value this time is a blank array
    const initialValue = [];

    // call reduce on our data
    return data.reduce((total, value) => {
        // if the value is an array then recursively call reduce
        // if the value is not an array then just concat our value
        return total.concat(Array.isArray(value) ? flattenArray(value) : value);
      }, initialValue);
    }
  )
  // flattened is [2, 4, 6, 8, 10, 12]
  ```
  > `reduce()` code by Paul Ryan
  Finally, let's do an example where we have some objects with a pair of defined variables, and we want to display the information in a particular way, as shown in the code below:
  ```javascript
  //We have an array of objects that looks like this:
  const person = [
    { name: "Alice", age: "8" },
    { name: "Steve", age: "21" },
    { name: "Belmont", age: "32" }
  ]
  
  //And we want it to look like this:
  const simplePeople = {
    Alice: { age: "8" },
    Steve: { age: "21" },
    Belmont: { age: "32" }
  };
  
  //To do so, we make use of reduce():
  const simpleObjects = info =>
  info.reduce((acc, item) => {
    // add object key to our object i.e. Alice: { Age: '8' }
    acc[item.name] = { age: item.age };
    return acc;
  }, {});
  ```
> reduce() code by Paul Ryan

Where would a developer like to use `reduce()`? Generally, `reduce()` is a flexible function that can be thought of evaluating two things interacting with each other in a particular way. For example, mixing colours together, comparing the difference between two objects, or finding the result of the composition of two objects.

 ### `flatmap()` and `flat()`

 
 The `flatmap()` method is actually a combination of two other methods-- as the name would imply, `flat()` and `map()`. Before touching on `flatmap()`, we should first cover what `flat()` itself does.

  <p align='center'><img src = 'https://cdn.discordapp.com/attachments/910117718924099594/948956015234256966/unknown.png' width = "400"></p>
 <p align = "center"> Image from <a href="https://download.eclipse.org/microprofile/microprofile-reactive-streams-operators-1.0/apidocs/org/eclipse/microprofile/reactive/streams/operators/PublisherBuilder.html">Eclipse.org</a></p>
 
 Like we were able to do with the `reduce()` method, `flat()`'s exclusive roll is to create a new array from all of the values of arrays that may be nested within other arrays. In the following example:
 ```javascript
 const nested = [['a', 'b'], ['c']];

const flattened = nested.flat();

console.log(flattened);
// ['a', 'b', 'c']
 ```
 > `flat()` code by Samantha Ming


 We simply receive a new array from a nested array that contained two additional arrays.
 
 Thinking back to the `map()` method, `flatmap()` would simply apply both methods onto the given array. However it's important to note that the `map()` function is done first, and then the `flat()` method after, contrary to what the name would otherwise suggest. The only thing you should keep in mind as you use `flatmap()` is that it is only able to flatten arrays that are nested 'one level deep'. Nests of nested arrays would only flatten the array by one level. In this event, you would want to call the methods separately using `flat()` and `map()`.

An example of `flatmap()`:
```javascript
const names = ['jane', 'john'];

const result = names.flatMap((name, index) => [name, index]);

// [ 'jane', 1, 'john', 2 ]
```
> `flatmap()` code by Samantha Ming

Where might a developer want to use `flatmap()`? To be perfectly honest, it's difficult to think of an event where you unwillingly come across a deeply nested array you want to reiterate to a flattened one-- and therein lies our answer.

`flatmap()` may be a useful function for a developer that is entering into an existing project, where the original code was instructed not to be changed, but if the variables exist in such a fashion-- as in a nested array, then `flatmap()` could be used in such an event where the new developer outputs a new array to suit the results of a new developed feature.
 
 ### `sort()`
 
 The `sort()` method as it sounds, sorts the contents of a given array. Unlike the previous methods of functional programming, this JavaScript `sort()` method does in fact change the contents of the array as it returns it. The `sort()` method aligns the contents alphabetically, even if they are numbers. Meaning that an array of ascending numbers would first be sorted by the first character the compiler sees.
 
 Sorting Names and Numbers:
 
 ```javascript
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
// expected output: Array [1, 100000, 21, 30, 4]
 ```
 > `sort()` code by Mozilla Documentation

# References

- [Why Programmers are falling in love with Functional Programming](https://towardsdatascience.com/why-developers-are-falling-in-love-with-functional-programming-13514df4048e)
- [How and why to use Functional Programming](https://www.freecodecamp.org/news/how-and-why-to-use-functional-programming-in-modern-javascript-fda2df86ad1b/#:~:text=Advantages%20Of%20Functional%20Programming,improve%20maintainability%20of%20the%20code.)
- [What is Functional Programming](https://www.infoworld.com/article/3613715/what-is-functional-programming-a-practical-guide.html)
- [Can your Programming Language do this?](https://www.joelonsoftware.com/2006/08/01/can-your-programming-language-do-this/)
- [Mozilla Javascript developer Tools](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Reducers in Javascript](https://enlear.academy/reducers-in-javascript-f5317b34cba2)
- [Understanding Reduce](https://www.digitalocean.com/community/tutorials/js-finally-understand-reduce)
- [How to flatten an array](https://www.samanthaming.com/tidbits/71-how-to-flatten-array-using-array-flat/)
- [Map Fusion and Haskell performance](http://www.randomhacks.net.s3-website-us-east-1.amazonaws.com/2007/02/10/map-fusion-and-haskell-performance/)
- [What is a Platform?](https://en.wikipedia.org/wiki/Computing_platform)
- [Guide to Cross Platform Development](https://www.netsolutions.com/insights/cross-platform-app-frameworks-in-2019/)
