# JavaScript Cheat Sheet

## Output

### console.log()
The `console.log()` method is used to log messages to the console.

Syntax:
```javascript
console.log(value1, value2, ..., valueN);
```

Example:
```javascript
var name = "John";
console.log("Hello, " + name + "!"); 
```

### console.error()
The `console.error()` method is used to log error messages to the console.

Syntax:
```javascript
console.error(message);
```

Example:
```javascript
console.error("An error occurred!");
```

### console.warn()
The `console.warn()` method is used to log warning messages to the console.

Syntax:
```javascript
console.warn(message);
```

Example:
```javascript
console.warn("This is a warning!"); 
```

The `console` object provides methods for outputting messages, errors, and warnings to the console for debugging and logging purposes.


## Comments
Comments are used to add explanations or notes to your code. They are not executed by the JavaScript engine.
```javascript
// This is a single-line comment

/* 
   This is a multi-line comment
   It can span multiple lines
*/
```
Sure, here's a Markdown code for variables in JavaScript:


## Variables in JavaScript

### Syntax
Variables are declared using the `var`, `let`, or `const` keywords followed by a variable name.

```javascript
var x = 5; // Using var (function scoped)
let y = 10; // Using let (block scoped)
const PI = 3.14; // Using const (block scoped, constant value)
```

## Types
JavaScript has dynamic typing, meaning variables can hold values of any data type. The main data types are:
- `Number`: Floating point numbers.
- `String`: Sequence of characters.
- `Boolean`: Logical value, true or false.
- `Array`: Ordered collection of values.
- `Object`: Collection of key-value pairs.
- `Undefined`: Variable has been declared but not assigned a value.
- `Null`: Represents the intentional absence of any object value.

## Description
Variables in JavaScript are used to store data values. 

They are declared using the `var`, `let`, or `const` keywords.


`var` is function-scoped, 


`let` and `const` are block-scoped. 


`let` allows reassignment, while `const` creates a read-only reference to a value.


## Operators

### Arithmetic Operators
Arithmetic operators perform arithmetic on numbers.

- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`
- Remainder: `%`

Example:
```javascript
var sum = 5 + 3; 
var difference = 5 - 3;
```

## Comparison Operators
Comparison operators compare values and return a Boolean result.

- Equal to: `==`
- Not equal to: `!=`
- Greater than: `>`
- Less than: `<`
- Greater than or equal to: `>=`
- Less than or equal to: `<=`

Example:
```javascript
var x = 5;
var y = 3;
console.log(x > y); // Output: true
```

## Logical Operators
Logical operators perform logical operations on values and return a Boolean result.

- AND: `&&`
- OR: `||`
- NOT: `!`

Example:
```javascript
var x = 5;
var y = 3;
console.log(x > 3 && y < 10);
```

# Data Types

## Primitive Data Types
Primitive data types are the basic building blocks of JavaScript.

- Number: Numeric data, e.g., `5`, `3.14`
- String: Text data, e.g., `"Hello, world!"`
- Boolean: Logical data, e.g., `true`, `false`
- Undefined: Default value of variables not assigned a value
- Null: no value

## Object Data Type
Objects are complex data types that can store collections of data and functionality.

Example:
```javascript
var person = {
    name: "John",
    age: 30,
    isStudent: false,
    greet: function() {
        console.log("Hello, my name is " + this.name + ".");
    }
};
person.greet(); 
```

## Functions

### Function Syntax
Functions are blocks of code designed to perform a specific task.

Syntax:
```javascript
function functionName(parameters) {
    // Function body
    return result; // Optional
}
```

### Types of Functions
- Named Function: Functions with a specified name.
- Anonymous Function: Functions without a name, often used as callbacks.
- Arrow Function: Concise syntax for writing functions.

Example:
```javascript
// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
var greet = function(name) {
    return "Hello, " + name + "!";
};

// Arrow function
var multiply = (x, y) => x * y;
```

## Array
Arrays are used to store multiple values in a single variable.
```javascript
var fruits = ["apple", "banana", "orange"]; 
var numbers = [1, 2, 3, 4, 5]; 
```
### Operations in array
#### Create
- `push()` - add item at last

- `unshift()` = add item at first

- `splice(start, delete, item0,item1,item2,...)` - modifies the contents of an existing array by adding, removing, or replacing elements.

- `concat()` - add one array to another to form new array

- `from()` - used to create a new array from various data sources.

### Read
Here are the most important methods in JavaScript for reading arrays with a 10-word description:

`join(separator)`: Creates a string from elements (",join")

`forEach(callback)`: Executes a function for each element (loop)

`map(callback)`: Creates a new array with transformed elements (map & create)

`toString()`: Returns a string representation of the array (basic string)

`filter(callback)`: Creates a new array with elements passing a test (filter & keep)

`slice(start, end)`: Extracts a portion of the array into a new array (extract & copy)

`includes(element)`: Checks if the array contains a specific element (find & exist)

`some(callback)`: Checks if at least one element passes a test (check & any)

`find(callback)`: Returns the value of the first element passing a test (find & first)

### update
`push(element)`: Adds element(s) to the end (append)

`pop()`: Removes and returns the last element (remove last)

`shift()`: Removes and returns the first element (remove first)

`unshift(element)`: Adds element(s) to the beginning (prepend)

`splice(start, deleteCount, item1, ..., itemN)`: Cut/replace/insert elements (multipurpose)

### DELETE

- `pop()`: Remove last element (delete back)
- `shift()`: Remove first element (delete front)
- `splice(start, deleteCount)`: Cut elements (delete range)

## String
Strings are sequences of characters, enclosed within single or double quotes.
```javascript
var greeting = "Hello, world!";
var name = "John";
```
### Create:

- `fromCodePoint(code1, code2, ...)`: Creates a new string from a sequence of Unicode code points.
- `fromCharCode(code1, code2, ...)`: Creates a new string from Unicode code unit values.
### Read:

Most string methods: Methods like `charAt, slice, indexOf, etc.` are used to read and access parts of the string without modifying it.
### Update :

- Concatenation methods: `concat` and the spread syntax (...) - used to create new strings by combining the original string with other strings.
- Replacement methods: Methods like `replace and replaceAll` create new strings with replacements based on patterns in the original string.
### Delete :

Slicing methods: `slice` and `substring` can be used to extract portions of the string

## Object
Objects are collections of key-value pairs, where each key is a string and each value can be of any data type.
```javascript
var person = {
    name: "John",
    age: 30,
    isStudent: false
};
```

## Conditional Statement
Conditional statements are used to execute different actions based on different conditions.
```javascript
var x = 10;
if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is less than or equal to 5");
}
```

## Looping
Loops are used to execute a block of code multiple times.
```javascript
// For loop
for (var i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

// While loop
var count = 0;
while (count < 5) {
    console.log("Count:", count);
    count++;
}
```

## Sets and Maps
Sets and Maps are data structures introduced in ES6 for storing unique values and key-value pairs respectively.
```javascript
// Sets
var mySet = new Set();
mySet.add(1);
mySet.add(2);

// Maps
var myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);
```

## Type Conversion
Type conversion is the process of converting one data type to another.
```javascript
var numString = "10";
var num = parseInt(numString); 
var strNum = num.toString(); 
```

## Scope and Hoisting
Scope determines the visibility and lifetime of variables and functions within a program.
Hoisting: Declarations moved to top; assignments remain in place.
```javascript
var x = 10; // Global scope
function test() {
    console.log(x); // Output: undefined (hoisting)
    var x = 20; // Local scope
}
```

## Precedence
Operator precedence determines the order in which operations are performed in an expression.
```javascript
var result = 5 + 3 * 2; // Operator precedence: Multiplication (*) has higher precedence than addition (+)
console.log(result); 
```
`Set` is used for storing unique values,

`Map` is used for key-value pairs with arbitrary keys,  

`Object` is a general-purpose data structure for storing properties and their values.