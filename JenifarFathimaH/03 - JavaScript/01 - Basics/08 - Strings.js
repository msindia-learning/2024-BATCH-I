var str = "javascript";
console.log("Char at example :" +str.charAt(2)); //character at

var s1 = "javascript ";
var s2 = "concat example";
var s3 = s1.concat(s2);
console.log("Concatenation example :" + s3);//concatenation

var s1 = "javascript from javatpoint indexof";
var n = s1.indexOf("from");
console.log("Indexof Example : " + n);  //give the index value of given number

var s1 = "javascript from javatpoint indexof";
var n = s1.lastIndexOf("java");
console.log("lastIndexOf : " + n);  //give the last index of given value

var s1 = "abcdefgh";
var s2 = s1.slice(2, 5);
console.log("Slice example : " +s2);  // slice the part based on the start and end index

var s1 = "     javascript trim    ";
var s2 = s1.trim();
console.log("trim : " + s2);  //remove white spaces in heading and trailing part

var str = "This is JavaScript Learning";
console.log(str.split(" ")); //splits the given string.

var s1 = "JavaScript toUpperCase Example";
var s2 = s1.toUpperCase();
console.log("upper case example : " + s2);  //upper case

var s1 = "JavaScript toLowerCase Example";
var s2 = s1.toLowerCase();
console.log("lower case example : " + s2);  //lower case example

const stringLength = s1.length; // length is 2
console.log("String length:", stringLength); // Output: 2
