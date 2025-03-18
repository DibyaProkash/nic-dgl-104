# WEEK 11 (WEEK OF MARCH 18)
## LECTURE - OBJECT ORIENTED PROGRAMMING

> Primary contributor: **[Ashley Blacquiere](https://ca.linkedin.com/in/ashley-blacquiere)**
>
> Modified by: Dibya Prokash Sarkar

The following videos outline some key considerations in object-oriented programming (OOP). Many of the ideas in the first video should be familiar to you, while the second video will likely present some new ideas. Primarily, we examine these ideas in _contrast_ to functional programming paradigm, which is our final topic of the semester, presented in week 12.

### OOP PART 1
<div class="video-container-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/hdVYcOgNKfc"></iframe></div>

### OOP PART 2
<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/jzP2sw3I1nc"></iframe></div>

#### OOP Concept - Encapsulation
Encapsulation restricts direct access to an object's data and allows controlled access through methods. For example:


```java
// Java
class BankAccount {
    private String owner;
    private double balance;

    public BankAccount(String owner, double balance) {
        this.owner = owner;
        this.balance = balance;
    }

    // Getter method for balance
    public double getBalance() {
        return balance;
    }

    // Setter method for deposit
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        }
    }

    // Setter method for withdraw
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        } else {
            System.out.println("Insufficient funds!");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("Alice", 5000);
        account.deposit(1000);
        account.withdraw(2000);
        System.out.println("Current Balance: $" + account.getBalance());
    }
}

```

- **balance** is private to restrict direct modification.
- **deposit()** and **withdraw()** provide controlled access.



#### OOP Concept - Abstraction
Abstraction hides implementation details and only exposes relevant functionality. For example:

```java
// Java
abstract class Animal {
    abstract void makeSound(); // Abstract method

    void sleep() {
        System.out.println("Sleeping...");
    }
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("Woof! Woof!");
    }
}

class Cat extends Animal {
    void makeSound() {
        System.out.println("Meow! Meow!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        myDog.makeSound();
        myDog.sleep();
    }
}
```

#### OOP Concept - Inheritance
Inheritance allows a class to reuse properties and methods of another class. For example:

```java
// Java
class Vehicle {
    String brand = "Toyota";

    void honk() {
        System.out.println("Beep! Beep!");
    }
}

class Car extends Vehicle {
    String model = "Camry";
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.honk();
        System.out.println("Car brand: " + myCar.brand + ", Model: " + myCar.model);
    }
}

```

#### OOP Concept - Polymorphism
Polymorphism allows a single interface to represent different data types. For example:

```java
// Java
class Animal {
    void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("Woof! Woof!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myAnimal = new Dog();
        myAnimal.makeSound();
    }
}
```

#### Summary

| Principle  | Explanation | Example  |
| ------------- | ------------- | ------------- |
| Encapsulation  | Restricts access to internal details  | BankAccount class  |
| Abstraction  | 	Hides complex implementation details  | Animal class with **make_sound()**  |
| Inheritance  | Allows code reuse via parent-child relationships  | Car class inheriting from Vehicle  |
| Polymorphism  | Allows methods to have different implementations in subclasses  | Different objects implementing **fly()**  |


### Importance of Object-Oriented Programming (OOP) in Coding
**Object-Oriented Programming (OOP)** is one of the most widely used programming paradigms. It provides a structured and modular approach to coding, making development more efficient, scalable, and maintainable. Here’s why OOP is crucial in modern programming:

#### 1. Code Reusability
> Reduces Duplication & Enhances Maintainability:
> - Using Inheritance, we can create a base class and extend its functionality to multiple subclasses, reducing redundant code
> - Example: Instead of writing the same code for every vehicle type, a Vehicle class can be inherited by Car, Bike, and Truck classes.

Example: 

```java
// Java
class Vehicle {
    void start() {
        System.out.println("Vehicle is starting...");
    }
}

class Car extends Vehicle {
    void showCar() {
        System.out.println("This is a car.");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.start();  // Inherited from Vehicle
        myCar.showCar();
    }
}
```

#### 2. Modularity & Better Organization
> Encapsulation Helps Manage Complex Systems:
> - OOP allows large projects to be divided into smaller, manageable modules (i.e., classes).
> - Each class focuses on a single responsibility, making the system easier to debug, modify, and extend.

Example: 

```javascript
// JavaScript
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    displayUser() {
        console.log(`User: ${this.name}, Email: ${this.email}`);
    }
}

const user1 = new User("Alice", "alice@example.com");
user1.displayUser();
```

#### 3. Scalability & Maintainability
> Easier to Update and Expand:
> - OOP makes adding new features easy without breaking existing code.
> - Large-scale applications (like web frameworks, game engines, and enterprise software) benefit from organized, modular architecture.

Example: 

```c++
// C++
class Employee {
public:
    virtual void work() {
        cout << "Employee is working..." << endl;
    }
};

class Developer : public Employee {
public:
    void work() override {
        cout << "Developer is coding..." << endl;
    }
};

int main() {
    Employee* emp = new Developer();
    emp->work();  // Calls Developer's version of work()
    delete emp;
}
```

#### 4. Security & Data Hiding
> Encapsulation Protects Sensitive Data:
> - Private attributes ensure that data is only modified via controlled methods.
> - Prevents accidental modification of critical data.

Example: 

```java
// Java
class BankAccount {
    private double balance;

    public BankAccount(double balance) {
        this.balance = balance;
    }

    public double getBalance() { // Controlled access
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(5000);
        account.deposit(1000);
        System.out.println("Balance: " + account.getBalance());
    }
}
```

#### 5. Real-World Representation
> Models Real-World Entities More Naturally:
> - OOP follows a real-world approach where objects have attributes (data) and behaviors (methods).
> - Ideal for developing simulations, games, and business applications.

Example: 

```javascript
// JavaScript
class Player {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    attack() {
        console.log(`${this.name} attacks!`);
    }
}

const player1 = new Player("Warrior", 100);
player1.attack();

```

#### 6. Makes Debugging & Testing Easier
> Unit Testing Becomes More Manageable:
> - Modular classes can be tested individually before integrating into the main project.
> - Helps in automated testing frameworks like JUnit (Java), Jest (JavaScript), and GoogleTest (C++).

Example: 

```java
// Java
import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class BankAccountTest {
    @Test
    public void testDeposit() {
        BankAccount account = new BankAccount(5000);
        account.deposit(1000);
        assertEquals(6000, account.getBalance(), 0.001);
    }
}

```

## ACTIVITIES

### [RECOMMENDED] CONNECT WITH YOUR EXTERNAL COMMUNITY
Last week you started work on your selected issue for your external community. This week I recommend that you take some time to engage with your community, if you haven't yet done so. Seek out community outlets, such as Slack, Discord and Zulip, and introduce yourself, if you haven't already done so. If you would like to do so, explain that you are working on a project for a college course and that you are interested in contributing. 

Making connections like this can be stressful, but if you are able to do so it's a great way to gauge how welcoming a community is. If you receive a positive response then you know you're in the right place; if you receive no response at all, then perhaps another community would be a better one to devote your time to. 

<!-- ### [REQUIRED] READ THROUGH PATTERN LIBRARY ISSUES
Our second [pattern-library milestone](https://github.com/nic-dgl104-winter-2024/pattern-library/milestone/2) was yesterday, the goal of which was to ensure we had a complete accounting of all possible issues that should be completed before the deadline at the end of the semester. At the completion of this milestone the backlog should be locked and we should add no more new issues (except as possible stretch goals) to ensure we have a good chance at completing what remains. -->

<!-- #### To complete this task (~30 minutes)
1. Visit the [pattern-library issues](https://github.com/nic-dgl104-winter-2024/pattern-library/issues) tab and read through all open issues. 
    - Please comment on issues that you have an opinion on (an issue need not be assigned to you for you to comment on it!)
    - Request to be assigned to issues (first priority should be unassigned open issues; second priority should be to issues that already have assignees)
    - Keep note of anything that you think is missing and please feel free to [open a new issue](https://github.com/nic-dgl104-winter-2024/pattern-library/issues/new) if there is something you think is missing!
2. Visit the [pattern-library pull requests](https://github.com/nic-dgl104-winter-2024/pattern-library/issues) tab and read through all open pull requests.
    - Please comment on any pull requests that you have an opinion on (a pull request need not be assigned to you for you to comment on it!)
    - Request to be assigned to pull requests if you can provide a code review, or if you are able to test the given code.
3. Take a look at other similar pattern library repositories (there are a few noted in [comments in issue #1](https://github.com/nic-dgl104-winter-2024/pattern-library/issues/1#issuecomment-1980263348)) and identify anything we might like to add to our repository.

Make sure to record the actions you've taken on the above in your Research and Reflection journal, and please do send me an email or message if there is something you'd like to add or see changed. -->

<!-- ### [REQUIRED] CONTINUE CONTRIBUTIONS TO EXTERNAL COMMUNITY
If all is going well with the issues identified last week for your external community, then please continue to work on those issues.

On the other hand, if you have run into problems, or cannot otherwise complete the issue that you have identified, please don't throw your work away! The work you have done is equally valid, and even if you haven't completed solving an issue, you can still include the work you've done in your CONTRIBUTING.md document. -->

<!-- #### To complete this task (~60 minutes):
1. If you have been successful in working on your identified issue, please continue.
2. If you have run into problems and can't continue, then please do the following:
    - Compile all information that you collected in attempting to solve the issue and write about it in your CONTRIBUTING.md file.
    - Make sure to include all relevant and supporting links in your CONTRIBUTING.md documentation (i.e. to the original issue, to any attempts you made in your fork, to any relevant documentation or commentary)
    - Describe the challenge you faced, and why it became a block to your progress. Describe any attempts to solve the block, or explain why solving it was impossible.
    - Reflect on any successes and describe how they will help you in the future.

After you have completed work on your issue (either by completing it, or by hitting a roadblock and reflecting on it as described above) then you may move onto completing a second issue! -->

<!-- ### [REQUIRED] CONTRIBUTE TO PATTERN-LIBRARY
By now you should have at least one [pattern-library](https://github.com/nic-dgl104-winter-2024/pattern-library) task assigned to you. Please continue work on this, and be vocal! Update the class with any comments on the issue or PR comment thread, and remember to commit regularly.

As with your chosen external repository, please move on to a new issue once you have completed any assigned to you. -->

### [REQUIRED] READ THE OOP DOCUMENTATION AND CHECK THE VIDEO CAREFULLY
Write a summary on how you envision applying Object-Oriented Programming (OOP) in your group programming assignment, including relevant examples.

### [REQUIRED] WORK ON YOUR CODING PROJECT (GROUP)
As the semester gradually approaches its end, I encourage all of you to focus on your project and ask any questions related to it during lecture time. Initially, I was considering having dedicated sessions for project discussions, but I believe addressing your questions during class will provide more flexibility and immediate support.

### [REQUIRED] FOLLOW-UP QUESTIONS AND REFLECTIONS
1.  Determine if your chosen programming language is OOP capable. To what extent does it support OOP? Fully, or partially? Does it support any other paradigms? Wikipedia has a good list of [multi-paradigmatic programming languages](https://en.wikipedia.org/wiki/Comparison_of_multi-paradigm_programming_languages).