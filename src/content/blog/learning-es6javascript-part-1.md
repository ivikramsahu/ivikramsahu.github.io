---
title: "Learning ES6/JavaScript - Part 1"
description: "Note: javascript & java both are very different from each other\nWhat is javascript?\nJavascript is a programming language that was developed to add life to web pages ie. displaying realtime props by loading pages dynamically.\nAnything & everything you..."
date: 2020-03-25
draft: false
readTime: 6
views: 9
---
*Note: javascript & java both are very different from each other*

### What is javascript? 

Javascript is a programming language that was developed to add life to web pages ie. displaying realtime props by loading pages dynamically.

Anything & everything you are browsing on the internet has javascript in it. Right from googling things to scrolling videos to reading blogs, Even this blog is having Javascript. Isn't it impressive? let's dive deep.

### Adding Life to webpages, How? 

![Alt Text](https://cdn.hashnode.com/res/hashnode/image/upload/v1720797478791/5aefb266-0f8f-4ba4-8a58-b341bc2151af.jpeg)

The HTML (*structure*) is just a skeleton for your web page and CSS (*style*) is all about beautifying the web page but what about all the major logical things?

Here comes the JavaScript (*behavior*) who is responsible for handling each and every behavior of your webpage.

Common Behavior includes :
 - Action to be taken when the button is clicked.
 - Pop-ups to notify your user with information.
 - Scrolling and Animations. 
 - Tracking and capturing data (scrapping).

### What is ES6? Is it different from Javascript?

As per [Wikipedia](https://en.wikipedia.org/wiki/ECMAScript), ES or ECMAScript is a scripting language specification that was introduced to standardized Javascript. ES6 is the 6th version of ECMAScript which was released in 2015 which brought some changes to javascript. I will be discussing those changes in this blog which will start from very basics.

Before starting I would recommend you going through basics of [Javascript](https://javascript.info/first-steps) suggested by the Open source guy [<b>Ameer</b>](twitter.com/ameerthehacker)

### Topics 

 - Declaration and scope: Let vs var vs const
 - Arrow functions
 - for..of vs for..in
 - Spread attributes
 - Map & Set
 - Static methods

### 1. Declaration and scope: <b>Let vs var vs const</b>

Declaring a variable in javascript is all about using one of these. In simple words 
 - Let is a block scope. 
 - var is function scope.
 - const can be only declared once and its value can't be changed throughout the script. 

You can assume that the variable declared with <b>var</b> is defined throughout the program as compared to <b>let</b>. Consider the below example

```js
var b= 40;
if(true){
  let a = 20;
  console.log(a + b); // output:60
}
//console.log("value of a : " + a); 
//if above uncommented "error : *ReferenceError: a is not defined*"
console.log("value of b : " + b); // 40
```
I think the above block of code is self-explanatory. The scope of <b>let</b> is within the <b>if block</b> and if you try to access the variable outside the block it will throw an error, but <b>var</b> will be accessible throughout the program within the if block and outside also. 

Using <b>const</b>:
The difference between const and other variable declaration are <b>const</b> cannot be reassigned. let's consider the below example:

```js
const PI = 3.14 //can't be changed through the program
let radius = 5;
let c_o_c = 2 * PI * radius;
console.log(c_o_c);
```
The value of PI can't be change so it will remain same through out the program where other values can change dynamically.

### 2. Arrow Functions (() =>)

A simplest and concise way of defining the function better than function expression. let's learn by example

```js
//The older approach
function sum(n1,n2){
  return n1+n2
}
console.log("This is older approach : " + sum(34,54))

//The new approach
var es6_sum = (n1,n2) => {
  console.log("The new approach : ", n1+n2);
}
es6_sum(55,65)
```
The above example is simple and self-explanatory.Its straightforward. 

### 3. for..in vs for..of

Humans are for innovation not for doing the same tasks repeatedly but machines are built for doing such repetitive tasks without getting tired. Here come the <b>Loops</b> for doing repetitive task. For loop is one of the widely used loops in computer science. Let's dive deep with these for..of and for..in 

<b>for..in</b>
This loop over the enumerable properties of an object. The syntax looks something like:

```js
for (variable in object){
// your logic here
}
```

example:

```js
var person = { 
  firstName: "Vikram", 
  lastName: "Sahu",  
}; 
var userId = ""; 
var i; 
for (i of person) { 
  console.log(person[i]) // prints the value of object
  userId += person[i]; 
} 

```

<b>for..of</b>
This loops over the iterable data structure like an array, maps, strings, nodes, and lists. The syntax looks something like this

```js
for (variable of iterable){
// your logic here
}
```

example:

```js
let fruits = ["pineapple","mango","watermelon","banana"]
for (let fruit of fruits){
  console.log(fruit)
}
```
### 4.Spread attributes

As the name suggests Spread attributes helps to spread the expression. ie. it converts the list of elements to an array.

Example without Spread attribute:
```js
let s_att = (arr) => {
  console.log(arr);
  let sum = 0;
  for (let ele of arr){
    sum += ele
  }
  console.log(sum)
}
s_att([2,42,51,12,32,98,08])
```
As you can see the above example is straightforward where it accepts the array and give the sum of an array.

Example with Spread attribute:
```js
let s_att = (...arr) => {
  console.log(arr);
  let sum = 0;
  for (let ele of arr){
    sum += ele
  }
  console.log(sum)
}
s_att(2,42,51,12,32,98,08)
```
small task for you spot the difference.. you have 3 sec 

1.. 2.. 3..

I hope you have so very small change we have just converted the argument from array to single arguments and convert <b>(arr)</b> to <b>(...arr)</b> in the function.

### 5. Map & Set

<b>MAP</b>

A map is a collection of keyed data item the same as an object but the difference is it allows the key of any type.

- Methods & Properties 
  - new Map()          : creates new map. 
  - map.set(key,value) : adds/store the value by key
  - map.get(key)       : greturns the value by the key, undefined if key doesn’t exist in map.
  - map.has(key)       : returns true if key exists
  - map.delete(key)    : removes key from the map
  - map.clear()        : removes everything from map
  - map.size()         : returns the count of map

```js
let map = new Map();
map.set("name","Vikram")
map.set("designation","Developer Evangelist")

// looping over map
for (let [ele_key, ele_value] of map){
  console.log(ele_key + " -- > " + ele_value)
}
console.log(map.get("name"))
console.log(map.keys())  //return all the keys within map
console.log(map.size())  
console.log(map.values()) // return all the value within map
console.log(map.delete("designation"))
console.log(map.clear()) 
```
<b>SET</b>

A set is a unique type collection that has a "set of values"(without keys), where each value occurs once(no duplicate values will be inserted). Let's assume a simple example :

```js
var mysets = new Set();
mysets.add("a");
mysets.add("b");
mysets.add("a"); // We are adding duplicate value.
//looping over sets
for (let element of mysets) {
 console.log(element);
}
mysets.has("b")
mysets.delete("b")
```
### 6. Static methods
You can assign a method to the class function itself, not to its "prototype". Such methods are called static. you can find the syntax as follows:

```js
class Mydata{
  static CallMe(){
  console.log("Hello i am static function")
  }
}
Mydata.CallMe() // returns "Hello i am static function"
```

what you need to notice is that:
 - I have not written <b>function</b> within the class still I can access the function.
 - I have called the function without creating an instance of the class.

<u><b>Concluding...</b></u>

Javascript/ES is a weird but amazing language. This was the start of my learning curve will update with the further path soon. 

I hope you like the blog. Do share!  








