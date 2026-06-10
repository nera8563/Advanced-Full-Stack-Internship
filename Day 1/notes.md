# Advanced JavaScript Notes

## 1. Variables

A variable is used to store data or values in JavaScript.

There are three ways to declare variables:

var
let
const

### Before ES6

Before ES6, only `var` was available for creating variables.

var name = "Nera";

### After ES6

ES6 introduced `let` and `const`.


let age = 20;
const country = "India";

### Problems with var

1. Redeclaration is allowed.
2. It has function scope instead of block scope.
3. Creates issues inside loops.

Example:

for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

Output:

4
4
4


All callbacks share the same variable `i`, therefore the final value (4) is printed three times.

### Why let was introduced

* Redeclaration is not allowed.
* Provides block scope.
* Solves loop-related issues.


for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}


Output:


1
2
3


## 2. Scope

### Global Scope

Variables declared outside any block or function can be accessed from anywhere.


let name = "Nera";


### Block Scope

Variables declared with `let` and `const` are only accessible inside the block where they are declared.


{
    let age = 20;
}

console.log(age); // Error


## 3. const Keyword

A variable declared using `const` cannot be reassigned.


const age = 20;
age = 25; // Error


However, object properties can still be modified.


const user = {
    name: "Nera",
    age: 20
};

user.name = "Aseem";

console.log(user.name);


Output:

Aseem


## 4. Hoisting

Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution.

Example:

console.log(a);

var a = 10;


Output:

undefined

### Important Points

* `var` is hoisted and initialized with `undefined`.
* `let` and `const` are hoisted but remain inaccessible until their declaration.

## 5. Temporal Dead Zone (TDZ)

TDZ is the time between entering a scope and declaring a variable with `let` or `const`.

console.log(a);

let a = 10;

Output:

ReferenceError

During TDZ, the variable exists in memory but cannot be accessed.



## 6. Functions

A function is a reusable block of code used to perform a specific task.

function add(a, b) {
    return a + b;
}

let result = add(5, 6);

console.log(result);


Output:
11


## 7. Arrow Functions

Traditional Function:

function greet(name) {
    return "Hello " + name;
}

Arrow Function:

const greet = (name) => {
    return "Hello " + name;
};


### Implicit Return

const multiply = (a, b) => a * b;

console.log(multiply(8, 7));

Output:
56

### Common Syntax

x => x * x

(a, b) => a + b

() => "Hello"

() => ({
    name: "Nera"
})


## 8. Template Literals

Template literals use backticks ( ` ` ).

const name = "Nera";

console.log(`My name is ${name}`);

Output:

My name is Nera


### Multiline Strings

const msg = `
Hello
My name is Nera
`;

## 9. Destructuring

Destructuring is used to extract values from arrays or objects and store them in separate variables.

### Array Destructuring

const arr = [10, 20, 30];

const [a, b, c] = arr;


### Object Destructuring

const user = {
    name: "Ram",
    age: 25
};

const { name, age } = user;

### Renaming Variables

const { name: userName } = user;


## 10. Default Parameters

Default parameters provide a callback value when no argument is passed.

function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet();
greet("Prachi");

Output:

Hello Guest
Hello Prachi

## 11. Rest Operator (...)

The rest operator collects multiple values into a single array.

function addValues(...nums) {
    console.log(nums);
}

addValues(1, 2, 3, 4, 5);

Output:

[1, 2, 3, 4, 5]


## 12. Spread Operator (...)

The spread operator expands arrays or objects into individual values.

const arr1 = [1, 2, 3];

const arr2 = [...arr1];

### Rest vs Spread

| Rest Operator      | Spread Operator        |
| ------------------ | ---------------------- |
| Collects values    | Expands values         |
| Used in parameters | Used in arrays/objects |
| `(...nums)`        | `[...arr]`             |

---

## 13. Why These Features Matter

Modern JavaScript applications heavily use:  

* let and const..
* Arrow Functions
* Template Literals
* Destructuring
* Rest & Spread Operators

Understanding these concepts is important before learning React, Node.js, Express.js, and full-stack development.

Today I learned Git basics