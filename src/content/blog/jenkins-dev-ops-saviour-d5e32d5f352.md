---
title: "Jenkins: Dev-Ops Saviour"
description: "Jenkins\n\nJenkins a mighty sword for Dev-Ops Engineer.\n\nWe all know Dev-Ops is evolving very fast and making it powerful yet vital slots for all Linux lovers who not only love to code but like to automate things in a unique way. Similarly, in this cru..."
date: 2018-11-29
draft: false
readTime: 4
views: 10
---
Jenkins

> Jenkins a mighty sword for Dev-Ops Engineer.

We all know [Dev-Ops](https://aws.amazon.com/devops/what-is-devops/) is evolving very fast and making it powerful yet vital slots for all Linux lovers who not only love to code but like to automate things in a unique way. Similarly, in this cruel world of AI, the Automation is must due to which developers can seamlessly deploy their code without any worry of making it live on production.

Dev-Ops without tools is helpless for automation. In order to make these things seamless and smooth tools such as Jenkins, Docker, Git, Nagios (& Icinga), etc. are introduced.

### All about Jenkins

> **defination** : Jenkins is automation tool written Java programming language which helps you to set an environment of continuous integration or delivery for almost all type of combination of languages and source code repositories by using the pipeline, as well as you can also automate other routine development tasks.

> **Simplified**: Handy automation tool use for continuous deployment of your project which supports muliple testing and deployment plugins/technologies.

**Usage**:  
1\. To build and test software projects with multiple test cases without any manual intervention.   
2\. This makes easier for developers to integrate new changes and obtain a fresh build of the project.   
3\. It also has the functionality of integrating a large number of testing and deployment technologies.

The software development process has taken apace in many organizations due to Jenkins. All kind of development life-cycle processes can be integrated using Jenkins such as creating build, document, test, package, stage, static analysis and much more.

### What makes Jenkins better than any other automation tool?

1\. **Adoption**: Jenkins as over 1 million users around the world with 1,50,000 active installations.   
2. **Plugins**: As 1000+ plugins and allows integrating with most of the development, testing and deployment tools.

### Advantages

1.  It is very [easy to install and start with service](https://jenkins.io/doc/book/installing).
2.  It is an open source tool means you can avail totally free of cost with great community support.
3.  It has 1000+ plugins which make easy to work.
4.  Build in Java so easily portable to any major platform.

### Playing with Continuous Integration

Whenever a new project use to be assigned I had two question in my mind

1.  How will I deploy the project once it is done? 
2.  Will I be able to spend enough time to make my code bug free what if bugs start popping out, will I be debugging complete codebase? 

After spending ample time I came to a resolution which comes out to great for me that is Continuous Integration.

There was a scenario where we all developer use to start with a project and deploy on the test server for testing. which is the perfect way of software development, but what about the imperfections in the project?

For example(let's give this list of bug a name as a ***caterpillar ***)

1.  we use to wait unless the test result is ready by QA.
2.  Possibilities of bugs in the project, which might turn out to be tough because we don’t know the exact commit where actual bug is so we use to debug the complete codebase to find out the single bug. ridiculous  isn’t it?
3.  Project delivery process was delayed.
4.  Recursive feedback regarding code quality, build, an architecture of the project was missed.
5.  Due to Manual procedure risk of project failure was increased.

So we implement the generic flow of Jenkins which was simple yet powerful.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1720789395583/42680089-f263-44e0-9f2a-5ae310235bff.gif)

Jenkins - generic flow

How did this work for us?

1.  Once we have committed the code to the source code repository. Meanwhile, the Jenkins server checks the repository at regular intervals for changes.
2.  Jenkins pulls the changes which have been made in the source code repository and start preparing fresh build.
3.  If the build is successful it will start deploying on the test server.
4.  If the build fails it will be notified by various ways either by mail or ping on slack, etc.
5.  Once testing is done, Jenkins generates reports which can be given to developers about their build and result.

**Are we successful in removing caterpillar from our project?**

> of course “**YES..**”

1.  Waiting time for the result was totally discarded: now we know the better result for every commit and failure no need to wait for the QA to point out bugs.
2.  Debugging complete source code was discarded: On every commit, build is made if it fails we were notified at that point in time.
3.  Development process accelerated due to the reduction of waiting and debugging time.

**What's next?**

> Will be coming soon with the next blog on getting notified for build status 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1720789397189/16a06732-f98c-4357-9787-e4ff330ee25b.png)

**Join our community Slack and read our weekly Faun topics **

[](https://www.faun.dev/join/?utm_source=medium.com%2Ffaun&utm_medium=medium&utm_campaign=faunmediumbanner)

#### If this post was helpful, please click the clap  button below a few times to show your support for the author! 
