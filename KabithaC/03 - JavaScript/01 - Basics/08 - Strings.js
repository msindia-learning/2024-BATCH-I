// double and single  quotes

let carName1 = ("BMW", "Suzkuki");
let carName2 = ('Saab', 'Volvo')
console.log(carName1);
console.log(carName2);

//string length
let text = "ABCDEFGHIJK";
console.log(text.length);


//template string
let tex1 = (`The quick
 brown fox 
 jumps over 
 the lazy dog`);
console.log(tex1);

//string and object 
let x = "kabi";
let y = new String("Kabitha");
console.log(typeof (x));
console.log(typeof (y));
console.log(x === y);

//== equal operator
let x1= "moon";
let y1 = "moon";
console.log(x1 == y1);
console.log(x1 === y1);

//methods
//charAt() - return the character at a specified index position.
let text41 = "DESTINY NUMBER";
console.log(text41.charAt(3));
//charCodeAt3() -it return the character  of the code in a specifiy index
console.log(text41.charCodeAt(7));

//slice - insert or delete

const Alpha = ["A", "B", "C", "D", "E", "F"];
console.log(Alpha.slice(0, 4));
console.log(Alpha.slice(-1));
console.log(Alpha.slice(1, -3));

//substring - similar to slice
let str = "Apple, Banana, Kiwi";
console.log(str.substring(6, 10));


//replace ;

let new1 = ("Don't make unnecessary noise ");
console.log(new1.replace("Welcome to our website"));

//string indexof
let new2 = ("Please locate where 'locate ' occurs!");
console.log(new2.indexOf('locate'));
console.log(new2.lastIndexOf('where'));

// string match

let new3 = "The rain in SPAIN stays mainly in the plain SPAIN spain";
console.log(new3.match("ain"));


//starts with

let text6 = "Hello world, welcome to the universe.";
text6.startsWith("Hello");


//variable substitution 
let firstName = "John";
let lastName = "Doe";

let star = `Welcome ${firstName}, ${lastName}!`;
console.log(star);


