// Number data type
let myNumber = 5;
console.log("Number:", myNumber);

// String data type-we can use either single or double quotes
let myString = 'Hello, world!';
console.log("String:", myString);

// Boolean data type
let myBoolean = true;
console.log("Boolean:", myBoolean);

// Undefined data type
let myUndefined;
console.log("Undefined:", myUndefined);

// Null data type
let myNull = null;
console.log("Null:", myNull);

//object data type
let Object = {
    "Text": "Peace",
    "Fav no.": 21
};
for (let i in Object) {
    console.log(i+ ": " +Object[i]);
}

//array
let Arraynum = [ 1, 2, 3, 4, 5, 6, 7, 8];

for (let i in Arraynum) {
    console.log(i);
}

// Regular expression
let regex = /\d{3}-\d{3}/;

let testString1 = "123-456";
let testString2 = "123-egf";

console.log(regex.test(testString1)); 
console.log(regex.test(testString2)); 
