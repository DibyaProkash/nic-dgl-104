<!-- # ![Programming for Mobile App Development](images/1366x768-kotlin2022_2.png) -->

# WEEK 4 (WEEK OF JANUARY 30)
## LECTURE - FUNCTIONAL PROGRAMMING AND DEVICE CONSTRAINTS

### FUNCTIONAL PARADIGM
<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/_uXZ8HvHH7o"></iframe></div>

### DEVICE CONSTRAINTS
<div class="video-container-16by9"><iframe width="560" height="315" src="https://youtube.com/embed/QWxAoUPG3jc"></iframe></div>


## ACTIVITIES
### RESEARCH
- Determine if your chosen programming language is functional programming capable. To what extent does it support functional? Fully, partially, or not at all? Are there any functional-like tools (e.g. functions, methods) that replicate some functional behaviours?
- What Git tools are available to your IDE or code editor of choice? Is there a GitHub integration? Are features provided natively in the IDE / editor, or through a plugin / extension? Is there a diff tool available?  

### REFLECT
- What device constraints have you experienced in your own mobile device usage? Have you experienced any pain points, or friction in the use of a device? Do you use any accessibility features, or are there any accessibility features that you wish were available (considering either your usage, or a friend's usage)?
- How has your Git knowledge improved in the last few weeks? In the last few months? What is one area of Git that you know little about, or that you are confused about?  

### COMMUNITY CODE
At this you should *start* formulating a clear idea how you would like to contribute to your community; your idea need not be complete right now, but you should be at the stage of being able to articulate at initial steps. If you are having trouble with this check out the list of ideas in the assignment description.

You should also have in hand some code representing a handful of hours of work: This could be a continuation of the code experimentation started last week, or it could be a completely new path. Whether this code is 10 lines or 100 isn't important, but you should be able to demonstrate (through documentation or presentation) what that code represents in your learning process.

### RECYCLERVIEW PSEUDOCODE EXERCISE
Write some code in the language your choice that mocks up what is represented by the [RecyclerView pseudocode](https://github.com/nic-dgl-104-winter-2023/recycler-view-pseudo) presented in class. **Note** that there is no expectation that your code should *run*, I only need you to write representations (as described below) in your programming language of choice as a demonstration of how these components may appear in your language.

1. Create some sample data written in any way that you choose. Remember that the data points aren't actually how the data is represented in code; the data representation in code is via the model. Your data points should includes:
    - Student name
    - Student ID
    - Courses for which the student is currently enrolled 
2. Write a class to model the data. The class should contain:
    - A constructor that builds an instance of the class from the given data points
    - Class members, or variables that can be used to access the data points.
    - You could include some behaviour if required by your language (for example, Java typically requires getter methods to access class data)
3. Write a representation of the view. You can use HTML to do this, even if it's not relevant to your programming language:
    - Write some HTML that displays each view appropriately
    - Use HTML `<div>` tags to organize views appropriately
    - Try to use semantically correct HTML tags where possible (i.e. use `<ul>` to display a list).

At this point you should have two parts of the RecyclerView complete, and you should notice that there is *no connection between these two parts*: The model has no knowledge of the view, and the view has no knowledge of the model. This is a theme we will continue to explore later with the Model View Controller (MVC) pattern.

4. Write an adapter in your chosen programming language that connects your model and view. Follow the presentation in the pseudocode, but use conventions from your chosen programming language. A couple important notes:
    - **Remember, your code won't run**. Your code is only a short step from pseudocode itself, and doesn't have the necessary infrastructure (as in the Kotlin example) to execute.
    - Since your code won't run **some errors and warnings from your IDE are ok**.
    - Whatever you've used to represent your view (HTML or other) probably doesn't have any "hooks" to allow you to access it through your adapter code. **So we can pretend a little bit and make some assumptions about how to access that HTML**. For example, in your adapter you could additionally write a supporting class to represent the view (much like you did for the model) that contains properties for all the view elements that you've defined. For example, in Java, you might write something like the following:

    ```java
        class HTML() {
            String studentName;
            int studentNumber;
            // and others...
        }
    ```