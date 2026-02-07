---
title: "Learning ES6/JavaScript - Part 2"
description: "Introduction: Let's revise a bit\nAn amazing curve of learning is to learn facts and then implement it. I started JavaScript with the curiosity of learning front-end technologies but now it is getting more interesting as I move forward with this langu..."
date: 2020-03-29
draft: false
readTime: 6
views: 5
---
### **Introduction: Let's revise a bit**

An amazing curve of learning is to learn facts and then implement it. I started JavaScript with the curiosity of learning front-end technologies but now it is getting more interesting as I move forward with this language.

I started with facts [here](https://dev.to/snipperbytes/learning-es6-javascript-part-1-1i3l) and now I think its time to dive deep with the basics so that while implementation we are not left out with theoretical questions in mind.

### **Topics**

* Everything about Objects.
    
* Unique datatypes.
    

###**1\. Everything about Objects**

Objects are used almost in every programming language, it is used to store the keyed collection of various data and probably the complex entities. The data is store in a key-value structure where the key has to always string or any symbol(special type will discuss below) and value can be anything.

**How to create an object?** There are two ways of creating an empty object either using the object constructor or literal.

I will try to explain using an example of a register which as a piece of developer information like their name, age, years of experience and a few more...

```js
let register = new Object{}; //using object constructor syntax. 
// OR
let register = {};   // using object literals syntax.
```

**1.1 Adding, Accessing and deleting**

> Key = property name. Value = property value.

In an object, the key and value should be separated using (:)colon while initialization. An object can be added using a (.)dot notation or \[\]square bracket for the multiword key. Let's look at the simplest example for each of the cases.

```js
let register = {
  user:"vikram",
  age:24,
  isAdmin:true,
};

console.log(register); 
// Output: { user: 'vikram', age: 24, isAdmin: true } 

register.experience = 78; // adding data in object

register["university education"] = "Mumbai"; 
/* adding data with the multiword key
you can't access multiword key by (.), you need to access in the same way of addition. 
ie. alert(register["university education"])
*/

delete register.isAdmin; // deleting key

//do check the output and spot the difference.
console.log(register);
```

I think I don't need to explain the above code. It is a simple and self-explanatory right.

**1.2 Property value shorthand**

Shorthand is a way of optimizing code and removing complexities. let's learn by using an example:

```js
//before shorthand
function myUser(name,age){
return {
  name:name,
  age:age,
 }
}
let getUser = myUser("vikram",24);
alert(getUser.name);
```

As you can see the above example becomes complex if the key name conflicts with the argument. so let's see at the shorthand version.

```js
function myUser(name,age){
return {
 name,
 age,
 }
}
let getUser = myUser("vikram",24)
alert(getUser.name)
```

isn't is simplified? the fact is you can use both the normal property value assignment and shorthand.

**1.3 Cloning and Merging**

Cloning is creating a copy of an object without affecting the original one. Ya! the copying by reference can be used most of the time instead of cloning. Cloning an object is doable though it is not a built-in function. Let's look at an example:

```js
let register = {
  "name":"vikram",
  "age":24,
}

let clone_register = {}

//copying register properties to clone_register
for (let key in register){
  clone_register[key] = register[key];
}
console.log(clone_register);
```

Above example is self-explanatory. There is one more way of directly getting clone of an object by using object.assign, you can find syntax in below example.

```js
let newObjectName = Object.assign(dest,[src1,src2,src3....srcN])
```

Let's learn by building a user access level using the below example

```js
let clone_register = {};
for (let key in register){
  clone_register[key] = register[key];
}

let permission1 = {canView : "true"};
let permission2 = {canRead : "true"};

Object.assign(clone_register, permission1, permission2);
console.log(clone_register);
/* output:
{ user: 'vikram',
  age: 23,
  experience: 78,
  'university education': 'Mumbai',
  canView: 'true',
  canRead: 'true' }
*/
```

**2\. Unique datatypes**

Javascript is unique in its own way in the previous part you might have seen from interesting datatypes like maps, sets, and iterables like an array, strings, list and few more.

I will mention a few more in this part like

* WeakMap and WeakSet.
    
* Destructing assignments.
    

**2.1 WeakMap and WeakSet**

**WeakMaps**: Let's learn by comparing Map and WeakMap. The very first difference is that WeakMap must have Object as Key, not usual primitive values. Since you will be using an object as a key in it all the other references will be removed automatically and memory will be released. I know it is confusing, OK let us assume `Vikram` as key for Map now and `sahu` as key for WeakMap. When we delete the keys from respective Maps then key `Vikram` will be removed but memory allocated will not be released but in case of `sahu` as key in WeakMap, the memory reference to the key will be automatically released.

Example of WeakMap:

```js
let john = { name: "Vikram" };
let weakMap = new WeakMap();
weakMap.set(Vikram, "...");

Vikram = null; // overwrite the reference

// Vikram is removed from memory!
```

WeakMap has similar methods as compared to Maps like:

```js
weakMap.get(key)         //returns value for the key if exists
weakMap.set(key, value)  //Adds new entry in WeakMaps
weakMap.delete(key)      
weakMap.has(key)
```

**WeakSet** WeakSet is similar to WeakMap.

* It is analogous to Set, but you can only add objects to WeakSet and not primitives datatypes.
    
* An object exists in the set while it is reachable from somewhere else.
    
* Like Set, it supports add, has and delete, but not size, keys() and no iterations. Let's take an example where we will add some users as visited website and later will remove the same by redeclaring as `null`.
    

```js
let visitedSet = new WeakSet();

let Vikram = { name: "Vikram" };
let Nikhil = { name: "Nikhil" };
let Anish = { name: "Anish" };

visitedSet.add(Vikram); // Vikram visited us
visitedSet.add(Nikhil); // Then Nikhil
visitedSet.add(Vikram); // Vikram again

// visitedSet has 2 users now

// check if Vikram visited?
alert(visitedSet.has(Vikram)); // true

// check if Anish visited?
alert(visitedSet.has(Anish)); // false

Vikram = null;
// visitedSet will be cleaned automatically
```

**2.2 Destructuring assignments**

In Javascript, the most used datatype for storing, retrieving and manipulating data are `Object` or `Arrays`.

Sometimes, you might just need to pass a single value at a particular index instead of passing the whole object or Array to the function for computing right? here's were destructing assignments comes into the picture.

It is simply assigning the Array to a single variable. Let's make it clear using an example:

```js
let myData = ["Ed","Eed","Eddy","tom And jerry"];

let [pyscho,pyschoFriend,pyschoFriend2,EveryOneFvrt] = myData;

console.log(EveryOneFvrt); //tom And jerry
```

Isn't it simple? yes, I know it quite easy. Destructing assignments doesn't mean destructive instead it means **destructurizes** has it assigns the array/object element to variables.

### **Concluding...**

I hope you have enjoyed the above blog. I will be back again with some basics but tricky fun Javascript like **proto**, getter and setter and few more.

Thank you! Do share 
