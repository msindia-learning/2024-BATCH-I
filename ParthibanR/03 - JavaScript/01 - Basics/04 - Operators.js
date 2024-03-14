                                                               //1.Airthmetic Operators

let x = 19;
let y = 20;
console.log(x + y);  //Add
console.log(x - y);  //Sub
console.log(x * y);  //Multiply
console.log(x / y);  //Div
console.log(x ** y); //Exponetitation
console.log(x % y);  //Modulus
console.log(x++);   //Increment
console.log(y--);  //Decrement


                                                               //2.Assignment Operator

var a = 10;
a += 20;
a -= 4;
a *= 9;
a /= 5;
a %= 2;
a **= 10;

console.log(a);


                                                              //3.Comparison Operators

var a = 20;
var b = 12;

console.log(a == b);  //Equal

console.log(a < b);   //Less than

console.log(a > b);   //Greater then

console.log(a <= b);  //Less then or equal to

console.log(a >= b);  //Greater than or equal to

console.log(a != b);  //Not equal

                                                         //4.String Operators

let z = 'Apple';
let y = 'Orange';
                               //compare to string (number of char)
let compare = z < y;

console.log(compare);


let z = '234';
let y = '4';
                             //compare to number                           [true]
let compare = z < y;

console.log(compare);


let z = '45';
let y = '345677';
                                        //                                  [false]
let compare = z < y;

console.log(compare);


let z = 'Apple';
let y = 'Orange';
                                    //Add 2 String                       [AppleOrange]
let compare = z + y;

console.log(compare);

let z = '12';
let y = 'apple';
                                   //Add 1 String & 1 number              [12apple]
let compare = z + y;

console.log(compare);


let z = 'Good Morning';

z += 'Have a Nice day' 

console.log(z);

                                     //5.Logical Operators

const x = 20;
const y = 10;

const z = x < y && x > y;                         //false

console.log(z);



const x = 20;
const y = 10;

const z = x < y || x > y;                         //true

console.log(z);


const x = 20;
const y = 10;

const z = !(x == y);                            //true

console.log(z);

                                                                //6.Conditional Operators

let age = 20;

let a = (age < 18) ? "True" : "false";           //false
console.log(a);



let age = 13;

let a = (age < 18) ? "True" : "false";          //true
console.log(a);








