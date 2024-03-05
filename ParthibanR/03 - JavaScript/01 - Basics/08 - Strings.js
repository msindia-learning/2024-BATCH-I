let text = 'hi';
console.log(text);
console.log(typeof (text));


let text = "hi";
console.log(text);
console.log(typeof (text));

let text = `hi`;
console.log(text);
console.log(typeof (text));

                                      //Quotes Inside Quotes

let number = "It's alright";
console.log(number);

let num = "He is called 'Johnny'";
console.log(num);

let give = 'He is called "Johnny"';
console.log(give);

                                     // string length
let alb = "ABCDEFGHIJKLMNOPURSTUVWXYZ";
console.log(alb);
console.log(alb.length);



let text = " We are the called \"vikings\" from the north";
console.log(text);

                                  //String object
let name = new String('hi hello');
console.log(name);
console.log(typeof (name));

                                 //equal or not
let name = 'vijay';
let names = new String('vijay');
                                                                   //true
console.log(name == names);


let name = 'vijay';
let names = new String('vijay');
                                                                   //false
console.log(name === names); 




                                      //String methods
var name = "Beautiful";
console.log(name.charAt(0));                                  //charAt()

var name = "Beautiful";
var names = "most"
var c = name.concat(names);                                  //concat()
console.log(c);


var name = "Beautiful";
console.log(name.indexOf("i"));                               //indexof()

var name = "Beautiful";
console.log(name.lastIndexOf("uti"));                        //lastIndexOf()

var names = "vijay";
console.log(names.toUpperCase());                            //toUpperCase()
console.log(names.toLowerCase());                            //toLowerCase()


var names = "pandiyarajan";
console.log(names.slice(2, 6));                              //slice(start,end)
console.log(names.slice(-2));

var names = "vijaypandi";                                    //split()
console.log(names.split());


var names = "            vijaypandi              ";                                    //trim()
console.log(names.trim());


var subject = "tamil,english,maths";
console.log(subject.substring(4, 9));                             //substring

var subject = "tamil,english,maths";
console.log(subject.search(ngl));                               //search


var subject = "tamil,english,maths";
console.log(subject.includes('english'));                      //includes


var firstName = "hello";
var lastName = "welcome";

var result = `Welcome ${firstName}, ${lastName}!`;




                    //string add,sub,div,multiply

var x = '10';
var y = '20';
var z = x + y;          //1020
var z = x - y;          //-10
var z = x * y;          //200
var z = x / y;          //0.5
console.log(z);


                 //NAN (not a number)

var x = 20;
var y = 'apple'

console.log(x / y);






let x = 10;
let y = 20;
let z = x + y;
console.log(z);
console.log(z.toString());
console.log(typeof (z));





