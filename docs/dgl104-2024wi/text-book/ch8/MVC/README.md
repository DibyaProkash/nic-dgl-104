# Model View Controller Pattern

## Introduction
Model View Controller (MVC) is a design pattern that helps to divide an application into three parts user interfaces, data and controlling logic. Let’s try to dive into its first.

## History

Trygve Reenskaug was the first who proposed the idea of MVC to this world. According to Wikipedia, when he was a visiting scientist at Xerox Palo Alto Research Laboratory (PARC) in 1978/79, he wrote the initial reports on MVC. MVC was originally known as "Thing Model View Editor," but it was soon changed to "Model View Controller."

As with every technology, it keeps updating over time, something similar happened to MVC. It gets evolved over the years as Trygve & his mates designed it to address the issue of users controlling a large and complex data set.

From the book Naked Objects <sup>[16]</sup> , the motivation behind MVC was to allow the creation of a graphical interface for any object.

According to Matin Fowler 2006 GUI Architectures blog <sup>[17]</sup> , MVC pattern started giving rise to other architectures like the hierarchical model–view–controller (HMVC), model–view–adapter (MVA), model–view–presenter (MVP), model–view–ViewModel (MVVM), etc.

<img src="https://user-images.githubusercontent.com/61209227/159332175-013dffe1-11ad-4cb8-a5bd-370b0dc16815.png" />


## MVC Architecture:

<img src="https://user-images.githubusercontent.com/61209227/159610172-24ec9d1a-d867-4f41-b328-af83c5001ef4.png" />

**1.	User View Interaction:** First of all a user will interact with the views present in the app or website. Views are like Textview, EditText, ImageView, etc.

**2.	View Controller Interaction:** When a view is displayed to the user, it alerts the controller of that particular event.

**3.	Controller Model Interaction:** Now, the controller updates the Model i.e. view requires data to show the user.

**4.	Model View Interaction:** Model alerts View that data is changed now in the Model.

**5.	View Model Interaction:** Final work of View is to get that updated data from the Model and display it to the user.

This cycle keeps rotating until and unless the user closes the app or website. Here, Model, View, and Controller are the main components of the MVC architecture let’s look more closely at each of them.


### Model
Model is the heart of your application. Complete work related to data is managed using Model.

For example, if we have to collect data of a user which includes his name, date of birth and a profile picture then we will simply create a data class with three variables of name, date of birth and profile picture. It is like being a type of data we can model. Model’s work is to notify Controller about their current state.

### View
Views are like user-interface in an application. Like we have HTML to render your application. The main work of a View reflect changes in the model to the user, but this data is passed through the controller.

### Controller
The controller prohibits the direct connection between the View and Model and its work is to connect both of them. Whenever a user gets to see a View element, the View alerts Controller that it requires data and then Controller alerts Model to send data to View via the Controller. Basically, it is like an alarm for Model and View.

## Why use MVC?

- First and the most important advantage of the using MVC or any architectural pattern in your app or website is the organized code.

- MVC is great if you are working on any large-size projects.

- One more reason to use MVC in your project is that it can be easily modifiable and easy to maintain.

## Demand & its Future:

From the answers to [this question](https://www.quora.com/Do-most-software-companies-that-use-Microsoft-technologies-use-mostly-ASP-net-MVC-design-patterns) on Quora, MVC’s future is bright and demanding. Most of the top companies like Microsoft, Dell, Go Daddy, Visual Studio, etc. uses MVC design patterns for User interface and models. So, for new developers, MVC is a complete package of new skills and methods. Learning MVC can easily boost a developer’s career.

## Prerequisites

MVC is an architectural pattern so it can be used in both phone and web applications. Before start learning MVC, you should have a prior understanding of the below points-

- Basic knowledge of Coding and language such as C++, Java, Kotlin or Python.
- Object-Oriented Programming.
- Understanding of a framework related to web or mobile applications


## MVC Example

Let’s try to understand the MVC architecture pattern using a very simple Android application.

Here we will be building an app for login or authentication. We will be using Kotlin but you can also use Java.

### Step 1. - Create a new Android Project

Click on your Android Studio icon and create a new project with an empty activity. You can
name your project anything you like, we named it as MVC Example.

### Step 2. – Create three packages

To implement MVC architecture in this project we have to create three different packages-

1. Model

2. View

3. Controller

Each package will be containing classes and interfaces. To create these package folders right click on the project name > New > Package

### Step 3. – Create interfaces and classes

Now, we have to create files and interfaces in the package we created above. In Model Package create two files:

#### iUser.kt
```Kotlin
interface iUser {
  fun getEmail(): String?
  fun getPassword(): String?
  fun isValid(): Int
}
```

#### User.kt
```kotlin
class User(
    private val email: String?,
    private val password: String?
) : iUser {

    override fun getEmail(): String? {
        return email
    }

    override fun getPassword(): String? {
       return password
    }

    override fun isValid(): Int {
        if (TextUtils.isEmpty(getEmail()))
            return 0
        else if (!Patterns.EMAIL_ADDRESS.matcher(getEmail()).matches())
            return 1
        else if (TextUtils.isEmpty(getPassword()))
            return 2
        else if (getPassword()?.length!! <= 6)
            return 3
        else
            return -1;
    }
}
```
Now, for the Controller package, we have to create one interface `iLogin`, and a class named as `Login`.

#### iLogin.kt
```kotlin
interface iLogin {
    fun onLogin(email: String?, Password: String?)
}
```

#### Login.kt
```kotlin
class Login(
    private val loginView: LoginView
) : iLogin {

    override fun onLogin(email: String?, password: String?) {
        val user = User(email, password)
        val loginCode = user.isValid()

        when (loginCode) {
            0 -> loginView.OnLoginError("Enter Email")
            1 -> loginView.OnLoginError("Enter a valid Email")
            2 -> loginView.OnLoginError("Enter Password")
            3 -> loginView.OnLoginError("Enter Password greater the 6 char")
            else -> loginView.OnLoginSuccess("You logged in.")   
        }
    }
```
We are done with model and controller. Now, its time to design UI using View so that data will be displayed in the views.

#### LoginView.kt
```kotlin
interface LoginView {
    fun OnLoginSuccess(message: String?)
    fun OnLoginError(message: String?)
}
```

#### Output 

<img src="https://user-images.githubusercontent.com/61209227/159333316-b352134f-0978-49d8-8739-4bd50e41c5d1.png" />

With this example, we learned how we can implement MVC architecture in an Android App using Kotlin. Below are some recommended posts by which you can understand MVC examples more clearly.

## Wrapping up:

So, here’s a short bullet-point summary of what we have learned:

- MVC architecture was first discussed by Trygve Reenskaug.
- MVC is an architectural pattern that divides an application into tree parts 1) Model, 2) View, 3) Controller
- Most of the big companies uses MVC ad it offers a huge demand and great future for industry and developers.
- MVC is good for large-size projects, is easy to maintain, easy to extend and grow.

That is all about MVC. Hope you got most of it. Below are some resources and references.

## Resources

1.  [All about MVC from Wikipedia](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

2.  [Notes and Historical documents from Trygve Reenskaug, inventor of MVC.](https://folk.universitetetioslo.no/trygver/themes/mvc/mvc-index.html)

3.  [The Evolution of MVC and other UI architectures from Martin Fowler](https://martinfowler.com/eaaDev/uiArchs.html)

4.  [Model View Controller Theory from raywenderlich](https://www.raywenderlich.com/books/advanced-android-app-architecture/v1.0/chapters/2-model-view-controller-theory)

5.  [What is wrong with MVC from cocoasts](https://cocoacasts.com/what-is-wrong-with-model-view-controller)

6.  [Benefits of using MVC from gfg](https://www.geeksforgeeks.org/benefit-of-using-mvc/)

7.  [FreeCodeCamp- What is MVC, and how is it like a sandwich shop?](https://www.freecodecamp.org/news/simplified-explanation-to-mvc-5d307796df30/)

8.  [Video- The Principles of Clean Architecture by Uncle Bob Martin](https://www.youtube.com/watch?v=o_TH-Y78tt4&feature=youtu.be)

9.  [Video- MVC Explained in 4 minutes.](https://www.youtube.com/watch?v=DUg2SWWK18I)

10.  [Video- Why ASP.NET MVC and MVC vs WebForms ?](https://www.youtube.com/watch?v=bGpBgDDDVlM)

11. [MVC Architecture Pattern in Android with Example](https://www.geeksforgeeks.org/mvc-model-view-controller-architecture-pattern-in-android-with-example/)

12. [Use MVC pattern to create very basic Shopping Cart](https://androidexample.com/Use_MVC_Pattern_To_Create_Very_Basic_Shopping_Cart__-_Android_Example/index.php?view=article_discription&aid=116)

13. [Implementing MVC pattern in Android with Kotlin](https://www.codementor.io/@dragneelfps/implementing-mvc-pattern-in-android-with-kotlin-i9hi2r06c)

14. [The Model View Controller – MVC Architecture and Frameworks Explained.](https://www.freecodecamp.org/news/the-model-view-controller-pattern-mvc-architecture-and-frameworks-explained/)

15.  [MVC Login Validation Example in JAVA](https://protocoderspoint.com/model-view-controller-android-mvc-example-login-validation/)

16.  [MVC Login Validation Example in Kotlin](https://medium.com/@anilkumar2681/kotlin-login-demo-using-mvc-pattern-with-validation-a4e030b50f9f)

17. [Book Naked Objects by Richard Pawson & Robert Mathews](https://www.amazon.com/Naked-Objects-Richard-Pawson/dp/0470844205)

18. [Matin Fowler 2006 GUI Architectures blog](https://martinfowler.com/eaaDev/uiArchs.html)







