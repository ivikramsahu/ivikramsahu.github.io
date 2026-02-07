---
title: "Simplifying Computational Complexity {time and space}"
description: "Introduction\nWhen someone wants to master computer programming, the best way to start is to learn the complexity of the system. Before you start with coding common questions you should ask yourself are: \n\nWhy should I write the program in this way on..."
date: 2020-03-26
draft: false
readTime: 4
views: 6
---
### <b>Introduction</b>

When someone wants to master computer programming, the best way to start is to learn the complexity of the system. Before you start with coding common questions you should ask yourself are: 

 - Why should I write the program in this way only?
 - What will be the benefit of this program? 
 - How many resources my program will consume?
 - How fast it will execute?

These questions will help you write efficient code. 
> Computational complexity is all about the writing optimized, efficient and blazing fast programs/code.

In this blog, you will be going through a few amazing theories of the computer system with examples.

### <b>Before learning complexity</b> 

![Alt Text](https://cdn.hashnode.com/res/hashnode/image/upload/v1721022092756/47593690-3f49-4204-b0f8-c2d5d923ba7e.gif)

Let's learn a bit about an algorithm:

A sequence of logical computation is called as the algorithm of the program. These algorithms are analyzed by calculating their time or space complexity. It is proved that your algorithm will always execute in worst-case complexity or an average-case complexity.

 - [Worst-case complexity](https://en.wikipedia.org/wiki/Worst-case_complexity): Maximum resource utilized by your algorithm to execute with respect to the number of inputs.
 - [Average-case complexity](https://en.wikipedia.org/wiki/Average-case_complexity): Average resource utilized by your algorithm to execute with respect to the number of inputs.

I hope now you are getting a bit of an idea about the complexity theory. Let's dive deep to clear all our doubts...

### <b>Topics:</b>

 - Resources.
 - Asymptotic complexity.
 - Computational models.

### <b>1. Resources</b>

What are the resources as per you? 
You might be thinking Human, keyboard, electricity, CPU, monitor & all the hardware stuff that you need while using your system then that is wrong.

The actual resource that I will be talking about is 
 - Time.
 - Space. 

<b>Time complexity</b>

The time complexity of an algorithm is measured irrespective of hardware and software associated with the system. The complexity considers the maximum time required to run an algorithm which is measured in asymptotic notation.

<b>Space complexity</b>

The amount of memory your algorithm requires to run is called space complexity.

Other complexities are arithmetic complexities which depend on the arithmetic computation that has been used in the algorithm and totally depends upon the size of input n.

### <b>2. Asymptotic Complexity</b>

It is difficult to describe the compute of an algorithm precisely which falls between the worst-case and the average-case complexity. So in order to calculate the near to accurate complexity, it is always better to keep the input size n as infinity.

These asymptotic complexities are the boundary limits of an algorithm that includes upper bound(big-oh notation), lower bound(big-omega) and the tight bound(big-theta).

If you are pretty confident that your algorithm is good and won't hamper your system computational complexity below is the table of complexities you can assume your algorithm might take.

![Alt Text](https://cdn.hashnode.com/res/hashnode/image/upload/v1721022094626/40fb018b-a6f5-43ac-a785-218121b39d18.png)

For analyzing any algorithm, it is recommended to consider the big-oh notation because it helps us to get the idea of the upper limit of the execution time of the algorithm.

I would recommend a 5 minutes read on [hackerearth](https://www.hackerearth.com/practice/basic-programming/complexity-analysis/time-and-space-complexity/tutorial/) before proceeding further.

### <b>3. Computation Models</b>

![Alt Text](https://cdn.hashnode.com/res/hashnode/image/upload/v1721022095890/0f9d0942-ad53-4d04-bc4f-463e37343ff5.jpeg)

This is one of the vast topics which can be totally debatable. The model of computation describes how an output of the mathematical expression is computed when input is given. Similarly, the algorithms rely on these mathematical operations. So it is very important to choose the correct model for computation.

 - <b><u>Deterministic models</u></b>: These models are the exact opposite of random. It helps us to predict the exact event that will occur in the future without any involvement of randomness. So if you have some data you can predict the exact outcome with 100% certainty. for example :
    - Rolling a fair die.
    - Calculating Kelvin using Celsius.

 - <b><u>Non-Deterministic models</u></b>: These models are the opposite of deterministic where you will start with some sort of straightforward events later randomness will be getting added to it. Here you don't have the idea of what will be the future event. Since every time you run you will get a different output. In order to differentiate you can consider the below image.

![Alt Text](https://cdn.hashnode.com/res/hashnode/image/upload/v1721022097008/7b82fe45-b263-4537-aae8-489dbb52a2d2.png)
 
 - <b><u>Quantum computing models</u></b>:  These models follow the rules of quantum mechanics(the fundamental theory of physics describing the properties of nature.) The very famous example of quantum computing is AI(Artificial Intelligent). you can find more examples [here](https://www.forbes.com/sites/bernardmarr/2017/07/10/6-practical-examples-of-how-quantum-computing-will-change-our-world/#22fdd32c80c1)

![Alt Text](https://cdn.hashnode.com/res/hashnode/image/upload/v1721022098199/1c379b81-ee70-4c96-9ea1-f4ce94e245fa.gif)

#### <b>Concluding...</b>

Any algorithm without proper computational logic is just a waste of resources. you can save those resources or use them in a better way by optimizing, building concise code better.

I hope you understood the very basic fundamentals of Complexity. Do share & comment! 













