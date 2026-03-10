# Refactoring
## What is refactoring? 
Simply refactoring is the process of restructuring the code, making it small, and improving it without altering the outcome of the program. If the outcome of the program is the same then why do you have to have a headache about refactoring if it does not have anything about the program. Yes, it does not have anything to do with the output of the program however refactoring is necessary for everyone to be a better developer. Why?  The main goal of refactoring is to make code easier to understand and maintain in the future and avoid technical debt. Sometimes if you write a code for your project or something and you just give poor variables names, bloated classes, functions, and your code is messy then when you come to look at the code later you will be just lost in your own code. Clean code is easier to understand and if you are working in a group that will be easier for yourself and your colleague too. Similarly clean and less code will have fewer bugs and less maintenance tends to pass the tests.

## Technical Debt
Suppose you wanna buy something but you don’t have money at all and you end up taking a loan from the bank. So now you will be able to purchase with that money but you have to pay the interest and principal back and sometimes you can end up paying more than you are able to and place you in a really bad situation. The exact same thing can happen with your code. You write a code without testing and refactoring and keep on adding new features but at some point it can put you in a situation where it slows your project as you need to test and force you to rewrite code at all.

## Clean code and Dirty code
Clean code is easier to get and understand; You can see the differences in the examples below:

```javascript
if(!foo){
    foo = 'apple';         bar(foo || 'apple', kip);
  }
  bar(foo, kip);
``` 
```javascript
TAX = 15000000; 
const SALARY = 150000000,
```

The above code can be written as:
```javascript
TAX = 15e6;
const SALARY = 15e7,
```

```javascript
let words = [];
 
function setWords(...theWords) {
    words = [...theWords];
}
 
setWords( 'education', 'dog', 'cat', 'jumped' );
 
let showButton = document.getElementById('show');
showButton.addEventListener('click', showWords);

 
function showWords (e) {
let edWords = document.getElementById('edwords');
let otherWords = document.getElementById('otherwords');
var ed = [];
var other = [];
 
for (let i=0; i<words.length; i++) {
    if ( words[i].includes ("ed")) {
        ed.push(`<li class="list-group-item"> ${words[i]} </li>`)
    }
    else{
        other.push (`<li class="list-group-item" >${words[i]} </li>`);
    }
}

console.log (ed);
edWords.innerHTML = ed.join("");
otherWords.innerHTML = other.join("");
```
```javascript
'use strict';
 
let words = [];
 
function setWords(...theWords) {
    words = [...theWords];
}
 
setWords( 'education', 'dog', 'cat', 'jumped' );
 
let showButton = document.getElementById('show');
showButton.addEventListener('click', showWords);
 
function showWords (e) {
 
    let edWords = document.getElementById('edwords');
    let otherWords = document.getElementById('otherwords');
 
    var ed = [];
    var other = [];
 
    for (let i=0; i<words.length; i++) {
    
        if ( words[i].includes ("ed")) {
        ed.push(`<li class="list-group-item"> ${words[i]} </li>`)
    }
 
        else {
        other.push (`<li class="list-group-item" >${words[i]} </li>`);
        }
    }
 
    console.log (ed);
 
    edWords.innerHTML = ed.join("");
    otherWords.innerHTML = other.join("");
}
```

## When To Refactor?
Whenever adding new features you should refactor and make sure your existing code and design are good so that it will be easy for writing new code. If you have to deal with somebody else dirty code first try to refactor it so that clean code is easier to get for you. If you have to fix bugs first try to make your code clean by refactoring so the bugs will appear themselves.

## Refactoring Principles
Key things you could focus on while refactoring: 
- Removing the duplication as it will make your code smaller by making different functions and strings. 
- Give the proper names to the functions and variables as it will be more specific to understanding the code. 
- Try to make your code small as it will help you to better understand, test and maintenance. 
- Always keep testing frequently as you refactor so that no bugs are introduced and the outcome of the program is not altered.
- Try to give specific names to your functions, methods, variables related to its purpose like `createOrder()`, `getFirstName()`, `getSecondName()`, instead of giving short forms as it will be harder for yourself to get your own code later. 

## Refactoring Examples
The code below...
```kotlin
if (diceRoll == 1) {
    diceImage.setImageResource(R.drawable.dice_1)
} 
else if (diceRoll = 2) {
    diceImage.setImageResource(R.drawable.dice_2)
}
else if (diceRoll = 3) {
    diceImage.setImageResource(R.drawable.dice_3)
}
else if (diceRoll = 4) {
    diceImage.setImageResource(R.drawable.dice_4)
}
else if (diceRoll = 5) {
    diceImage.setImageResource(R.drawable.dice_5)
}
else {
    diceImage.setImageResource(R.drawable.dice_6)
}
```

...can be refactored as:

```kotlin
private fun rollDice() {
    //Create new Dice object with 6 sides and roll it
    val dice = Dice(6)
    val diceRoll = dice.roll()
    val diceImage: ImageView = findViewById(R.id.imageView)
    val drawableResource = when (diceRoll) {
        1 -> R.drawable.dice_1
        2 -> R.drawable.dice_2
        3 -> R.drawable.dice_3
        4 -> R.drawable.dice_4
        5 -> R.drawable.dice_5
        6 -> R.drawable.dice_6
    }
    diceImage.setImageResource(drawableResource)
}
```

## References
1. [Refactoring Guru](https://refactoring.guru/refactoring)
2. [The Pragmatic Programmer](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/)
 