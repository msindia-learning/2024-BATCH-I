let string = `she's \"is a good"\ "girl"`;
console.log(string);
console.log(string.length);

console.log("Disney" + "World");

let x = 'one';
let t = new String("one")
console.log(t == x);

let string1 = "FIRST PROGRAM";
console.log(string1.charCodeAt(0));

let string2 = "FIRST PROGRAM";
console.log(string1.at(2));

let string3 = "FIRST PROGRAM";

console.log(string3.slice(-12));

let string4 = "Apple, Banana, Kiwi";
let part = string4.substr(-4);
console.log(part);

let string5 = "FIRST ";
let string6 = "PROGRAM";
console.log(string5.concat("", string6));

let string7 = "     FIRST PROGRAM!     ";
console.log(string7.trimEnd());

let string8 = "45";
console.log(string8.padStart(3, 0));

let string9 = "45";
console.log(string9.padEnd(3, 0));

let string10 = "FIRST PROGRAM";

console.log(string10.repeat(4));

let string11 = "FIRST PROGRAM";
console.log(string11.replace("FIRST","Changed"));


let String12 = "The Cat is Behind the Door";
console.log(String12.lastIndexOf("Door"));

let String13 = "The Cat is Behind the Door";
console.log(String13.search("Behind"));