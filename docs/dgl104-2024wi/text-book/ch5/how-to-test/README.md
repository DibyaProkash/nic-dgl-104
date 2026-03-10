
# How to Test
## How to Decide What to Test and When

In this unit we will be exploring the topic of how to decide what to test and when. This topic is heavily swayed by how large the budget is and how much time the developer(s) has to get everything finished. There are also a multitude of things to consider prior to testing and you should always consider everything testing related before even starting the project. Also always remember to think about both the hardware and software when testing. When something is going wrong on a particular user’s device they most likely will not be blaming their device so it's important to try to accommodate for as many scenarios as possible.

### When To Start Testing

When it comes to testing, a good strategy is to test often and test as early as possible in your development. However there are a lot of questions about what exactly you should be testing because if you test everything constantly you may run into budget issues either in terms of cost or time. So then it begs the question of when I should be testing.

#### Test Often, Test Early

Test often, test early is a saying you will hear from almost anyone talking about good testing practices. Testing should be starting right at the beginning of the application design process, even before any coding has started. In some cases, you may even want to build your tests before anything else.

#### Test-First Programming
Test-first programming is a technique where you design automatic tests before writing any code. This technique can feel strange at first although it enhances your ability and speed at catching bugs.

Essentially the technique involves creating a production test for an output you want and then writing your code until you successfully pass your test(s). It is quite a simple technique but is extremely efficient. This allows things like refactoring or other small changes in code to be done much more easily as well as if anything is to go wrong the tests will pick it up right away.

## What Should I Test
I will once again mutter the motto of “test often, test early”. This is because frankly it is the best way to prevent as many bugs in your app’s as possible. So then should you be testing everything? Well the answer to that is if possible yes, however, sometimes it is hard to just think about how you have to test everything. So we will go a bit more step by step and highlight some areas that should be prioritized.

Let's talk about residual defect rates per kloc (1 thousand lines of code). According to [mit.edu](https://ocw.mit.edu/ans7870/6/6.005/s16/classes/03-testing/index.html) the following are typical rates for released products:

* 1-10 defects/kloc: Typical industry standard

* 0.1-1 defects/kloc: High-quality

* 0.01-0.1 defects/kloc: The best, safety critical

So as you can see, the rates in which defects occur are low. Obviously as developers we would all like our projects to have no issues whatsoever although, this is just not possible. So there are bound to be problems, but where are these problems showing up?

When it comes to what to look for in terms of issues, it is important to take note of what bugs are caused by. So let's look at what are some common causes of bugs according to bitbar.com:

### 33% of issues are caused by the hardware
* 10% - Display
* 10% - Memory
* 7% - Sensors
* 4% - Chipset
* 2% - Other Hardware

### 67% of issues are caused by software
* 32% Platform
* 29% OEM Customizations
* 6% Other Software

Now, with this information we can start to prioritize what to test and watch out for. Although always keep in mind to test everything if possible.

Now, let's go over a bit more in depth on testing best practices to determine what we will be testing. 

* Plan your tests in advance. As we talked about previously, start planning your tests before or at the start of development.

* Define the test scope. Figure out what to prioritize as its not always possible to test every OS, device model, etc so it should be planned out based on what your application has to offer.

* Test the network capabilities. The app should be able to operate in all kinds of connectivity areas.

* Test client AND server side. This helps to estimate how much size of load the app can handle.

* Use a real device when testing. We will cover this more in depth below but to sum it up. An emulator cannot predict the outcomes of a real device.

* Choose your testing frequency. Decide on how you are wanting to run test throughout the design of your app and stick to it.

* Test in a multitude of languages. It is important to be accessible in all ways possible. This also will help to eliminate issues through translation that may offend someone.

* Battery testing. It is extremely important to test the consumption of battery your app uses as nobody will keep an app that drains their phone too fast.

* Different hardware features. Since smartphones have so many sensors etc that interact with their surroundings etc. you need to make sure they interact properly with your app.

* Test for updates. Since updates may affect how your app will run you need to keep on top of the updates.

* Check for restricted permissions. This is extremely important! You need to make sure your app is only using permissions that the user allows as they are sensitive about data security.

* Automate testing. Automating your tests is another important thing to keep in mind. It increases your productivity and can actually save on a lot of money overall.



## Testing With An Emulator VS A Real Device

When deciding between an emulator or a real device you must first ask yourself what your budget is like. Testing on real devices can become fairly expensive however it is almost necessary to do so if you are wanting to publish a globally accepted app. Let's first look at some of the pros and cons of testing on an emulator vs real devices.

### Real Device

Pros:
* Accurate when testing user interactions
* Real occurring events (interrupts, battery, charge effects)
* Overall performance
* Consistent results

Cons:
* Can be expensive
* Tricky to debug with

As you can see, testing with real devices has tons of positive effects when testing. I will elaborate some more on what this all means. When testing user interactions you can reliably test actions such as pinching, zooming, and scrolling. Overall performance is another thing that testing with real devices offers as crucial results.

### Emulator

Pros:
* Free
* Great for debugging
* Good for cross-platform testing

Cons:
* Only can mimic a real device
* Inconsistent results
* Different network environment

Emulators are best suited for debugging and cross-platform testing. Any other kind of test has way too many variables going in to trust the results.

Now that we have gone over some of the pros and cons for real devices and emulators you can kind of see how important it will be to test using real devices. However most if not all of your debugging should be done on an emulator as they are usually suited for that.

## References

* [BitBar](https://bitbar.com/blog/10-best-practices-for-mobile-app-testing/) – 10 Best Practices for Mobile App Testing

* [BrowserStack](https://www.browserstack.com/guide/testing-on-emulators-simulators-real-devices-comparison) – Testing on Emulators vs Simulators vs Real Devices

* [Qualitest](https://qualitestgroup.com/insights/white-paper/mobile-emulators-vs-real-devices/) – Mobile Emulators vs Real Devices

* [Digital](https://digital.ai/glossary/test-driven-development) – Test Driven Development

* [OutSource2India](https://www.outsource2india.com/software/mobile-applications/articles/mobile-application-testing-best-practices.asp) – 12 BEST PRACTICES FOR MOBILE APPLICATION TESTING

* [mit.edu](https://ocw.mit.edu/ans7870/6/6.005/s16/classes/03-testing/index.html) – Testing