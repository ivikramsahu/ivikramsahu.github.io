---
title: "REDIS —Lighting fast NoSQL (Part 1)"
description: "It’s been quite a while I am using Redis, it is the lighting-fast NoSQL in-memory database among other databases which also supports disk storage for persistence. Since its a personal experience with Redis, I will try to keep things practical and mor..."
date: 2020-01-06
draft: false
readTime: 6
views: 3
---
It’s been quite a while I am using Redis, it is the lighting-fast NoSQL in-memory database among other databases which also supports disk storage for persistence. Since its a personal experience with Redis, I will try to keep things practical and more hands-on so that it is clear, understandable, and interesting.

Redis being an extensive topic I will divide into chunks which are as follows :

#### Part 1

1.  Introduction
2.  When to use Redis?
3.  Who are using Redis?
4.  Installation

#### Part 2

1.  Introduction to Data type & abstraction
2.  Diving deep into data structure  
    a. Strings  
    b. Hashes  
    c. Lists  
    d. Sets  
    e. Sorted sets
3.  Performance metrics.

#### Part 3

Redis modules …

### Introduction

**Redis** is an Open Source technology having more than 40,000+ stars on GitHub, used by most known organizations like Twitter, GitHub, Snap chat, Flickr and many more. Due to speed and data-structure stores, it has become the most loved NoSQL database among developers.

It has a wide range of data-structure in its store including strings, hashes, sets, sorted sets, etc and capabilities can be extended to implement many more advance data structures also.

#### If you Ask me how It feel to have Redis ?

i would be like …

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1720789405354/627bb3d9-1997-4d43-b96c-33db2528a5db.gif)

**Why?** here are some facts about Redis.

1.  **High Performance:** Its in-memory nature gives great stability, performance. The Commitment from REDIS maintainers are to keep the source code optimized with minimized complexities.
2.  **Lightweight without any external dependencies:** Written in ANSI C and no external dependencies. Works great with POSIX environment ie. Linux, Mac OS, \*BSD. For windows, there are less support but yes you can get **.exe** which is for an experimental purpose.
3.  **High Availability** — It has asynchronous, non-blocking, master/slave replication to ensure high availability of data these are provided built-in by Redis.

### When to use Redis ?

It is always confusing to choose stack, every technology has its advantages and limitations but choosing the right stack at the right time is what we can say having a cherry on the cake.

> REDIS is a master of reading and writing cache.

REDIS fits as the best option if you looking for one of the things mentioned below :

1.  Caching system which can handle millions of transaction at a single instance.
2.  Planning for building pub/sub mechanism.
3.  Queues.
4.  Counters (these can be any real-time increment data that changes on every action. This is atomic that means if there are 2 increment command triggered at the same time it will be executed sequentially. for example, if there is a key name:: burgers with value:: 1; if two increment updates are given at the same time the value will be 3 not 2).

### Who are using Redis ?

We will consider 3 different and famous organization who are using REDIS with scale for 3 different scenarios. Everyone has there own use case and implementation where REDIS is playing an vital role.

 **Twitter** : when someone likes, retweet or tag you on twitter how fast is that maybe some milliseconds. By deploying a massive Redis cluster twitter as been scaling its user’s timelines about 800 recent timelines are stored using Redis’s list data structure.  
You can listen to the [presentation here](https://www.infoq.com/presentations/Twitter-Timeline-Scalability/).

 **GitHub** :It was among the earlier adopters, using REDIS GitHub developed and open-sourced Resque which helps for the execution of backend jobs using queues. Not only this but Github has used made faster using Redis.

you can find out [here](https://github.blog/2009-10-20-how-we-made-github-fast/).

 **Stack overflow** : Whether its a StackExchange, StackOverflow or their sister companies. These guys are open to sharing each and everything about their tech stack similarly when it comes to caching, They cache everything and that to aggressively.

you can check [here](http://highscalability.com/blog/2014/7/21/stackoverflow-update-560m-pageviews-a-month-25-servers-and-i.html) how StackOverflow manages 560M page views a month.

and with more depth [here](https://meta.stackexchange.com/questions/69164/does-stack-exchange-use-caching-and-if-so-how/69172#69172)

> There are list of such use cases with [different scenarios](https://redis.io/topics/whos-using-redis).

### Installation

Since, it is primary developed for POSIX environment we can installed directly from their official repositories.

#### **1\. Installing REDIS on Ubuntu (18.04)**

sudo apt update  
sudo apt install redis-server

Since, we are running Redis on Ubuntu and Ubuntu uses supervised directive as **systemd init system** we need to make changes in Redis config file. Open below file with your favourite editor( i am using vim here)

```
sudo vim /etc/redis/redis.conf
```

Check for **supervised** option which will be by default “**no**” change it **systemd**

```
# If you run Redis from upstart or systemd, Redis can interact with your  
# supervision tree. Options:  
#   supervised no      - no supervision interaction  
#   supervised upstart - signal upstart by putting Redis into SIGSTOP mode  
#   supervised systemd - signal systemd by writing READY=1 to $NOTIFY_SOCKET  
#   supervised auto    - detect upstart or systemd method based on  
#                        UPSTART_JOB or NOTIFY_SOCKET environment variables  
# Note: these supervision methods only signal "process is ready."  
#       They do not enable continuous liveness pings back to your supervisor.  
supervised systemd
```

Save and close the file. Restart the service and check for status.

```
sudo systemctl restart redis.service && systemctl status redis
```

output should be :

\[root@localhost ~\]# sudo systemctl restart redis.service && systemctl status redis  
● redis.service - Redis persistent key-value database  
   Loaded: loaded (/usr/lib/systemd/system/redis.service; disabled; vendor preset: disabled)  
  Drop-In: /etc/systemd/system/redis.service.d  
           └─limit.conf  
   Active: active (running) since Mon 2020-01-06 17:52:26 IST; 20ms ago  
  Process: 9426 ExecStop=/usr/libexec/redis-shutdown (code=exited, status=0/SUCCESS)  
 Main PID: 9441 (redis-server)  
    Tasks: 4 (limit: 26213)  
   Memory: 6.6M  
   CGroup: /system.slice/redis.service  
           └─9441 /usr/bin/redis-server 127.0.0.1:6379

Jan 06 17:52:26 localhost.localdomain systemd\[1\]: Starting Redis persistent key-value database...  
Jan 06 17:52:26 localhost.localdomain systemd\[1\]: Started Redis persistent key-value database.

#### **2\. Installing REDIS on CentOS**

Add EPEL repository and update YUM to confirm the changes

```
sudo yum install epel-release  
sudo yum update
```

Install REDIS from yum

```
sudo yum install redis
```

Start redis

```
sudo systemctl start redis && && systemctl status redis
```

output should be :

\[root@localhost ~\]# sudo systemctl restart redis.service && systemctl status redis  
● redis.service - Redis persistent key-value database  
   Loaded: loaded (/usr/lib/systemd/system/redis.service; disabled; vendor preset: disabled)  
  Drop-In: /etc/systemd/system/redis.service.d  
           └─limit.conf  
   Active: active (running) since Mon 2020-01-06 17:52:26 IST; 20ms ago  
  Process: 9426 ExecStop=/usr/libexec/redis-shutdown (code=exited, status=0/SUCCESS)  
 Main PID: 9441 (redis-server)  
    Tasks: 4 (limit: 26213)  
   Memory: 6.6M  
   CGroup: /system.slice/redis.service  
           └─9441 /usr/bin/redis-server 127.0.0.1:6379

Jan 06 17:52:26 localhost.localdomain systemd\[1\]: Starting Redis persistent key-value database...  
Jan 06 17:52:26 localhost.localdomain systemd\[1\]: Started Redis persistent key-value database.

#### **3\. Installing REDIS on Fedora**

sudo dnf -y install redis

```
`sudo` `systemctl start redis` && `systemctl status redis`
```

Output will be same as CentOS and Ubuntu.

#### **4\. Mac OS**

You can find this cool posts for [installation on Mac](https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298) by [Pete Houston](https://medium.com/u/a941a33b8427)

**OR**

on [***GitHub***](https://gist.github.com/tomysmile/1b8a321e7c58499ef9f9441b2faa0aa8) by [tomy ismail](https://medium.com/u/fe96ae0767f6)

#### **5\. Windows**

You can find the MSI and ZIP version of Redis on its official [***GitHub***](https://github.com/microsoftarchive/redis/releases/tag/win-3.0.504) release.

Also there are step by step instruction for running [***Redis on windows***](https://redislabs.com/blog/redis-on-windows-8-1-and-previous-versions/)

### Conclusion

REDIS has been one of the fastest and stable NoSQL database, it has been used overall type of organization. No matter what kind of business it can be used with easy on platforms like eCommerce, Social Media, Developer platforms and many more.

Hope this post helped you understand the concept of Redis and use cases where it can be used. Stay tuned for PART 2 which will emphasis the inbuilt data structure of REDIS.

Thank You 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1720789407155/29db6321-7ed6-475a-a52c-71b509d5091f.png)

**Follow us on** [**Twitter**](https://twitter.com/joinfaun)  **and** [**Facebook**](https://www.facebook.com/faun.dev/)  **and** [**Instagram**](https://instagram.com/fauncommunity/)  **and join our** [**Facebook**](https://www.facebook.com/groups/364904580892967/) **and** [**Linkedin**](https://www.linkedin.com/company/faundev) **Groups** **.**

**To join our community Slack team chat**  **read our weekly Faun topics** , **and connect with the community**  **click here**

[![](https://cdn.hashnode.com/res/hashnode/image/upload/v1720789409367/11205c60-7564-401f-be70-164f6a6d6673.png)](https://www.faun.dev/join/?utm_source=medium.com%2Ffaun&utm_medium=medium&utm_campaign=faunmediumbanner)

#### If this post was helpful, please click the clap  button below a few times to show your support for the author! 
