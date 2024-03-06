// Example 1: Variable Hoisting
console.log(x); // Output: undefined
var x = 5;

// Above code is equivalent to:
var x; // Declaration is hoisted to the top
console.log(x); // Output: undefined
x = 5; // Assignment remains in place

/*console.log(y);  Output: Reference Error
let y = 5;*/


// Example 2: Function Hoisting
foo(); 
function foo() {
    console.log("Hello, world!");
}

// Above code is equivalent to:
function foo() {
    console.log("Hello, world!");
}
foo(); 

// Example 3: Scope
var a = 10;

function testScope() {
    var b = 20;
    console.log(a); 
    console.log(b); 
}

testScope();
console.log(a); 
//console.log(b);  Output: ReferenceError: b is not defined
