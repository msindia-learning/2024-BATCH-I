
                             //Function Syntax:

                                            /*function name(parameter1, parameter2, ....,) {
                                                code to be executed
                                            }*/

//Ex; JavaScript that does not has arguments

function lastFun() {
    alert('hi');
}

console.log(lastFun());



  //JavaScript Function Arguments


function Fname(number) {
    alert(number * number);
}
console.log(Fname(4));

  //Function with Return Value

function FunctionAge() {
    return "hi hello welcome";
}

document.write(FunctionAge());



function myFunction(a, b) {
    return a * b;
}

console.log(myFunction(10, 20));

                                      //Arrow function










let functionName = (a, b) => a * b;
console.log(functionName(6, 8));



let hello = () => {
    return "Hello World..!!!";
}
console.log(hello());                             //Hello World..!!!



const welcome = () => "hello world..!!!";
console.log(welcome());                           //hello world..!!!


var val = "Document object model";
var hello = (val) => {
    return "Hello"+ " " +val;
}
console.log(hello(val));


var valuee ="Script"
var welcome = () => "Java" + " " + valuee;

console.log(welcome(valuee));



let person = {
    fname: "leo",
    lname: "das",
    age: 23,
    degree: "Emgineering",
    fullname: function () {
        return (this.fname + " " + this.lname).toUpperCase();
    }
};
person.fullname();
console.log(person.fullname());


           //function constructor

function myFunction(arg1, arg2) {
    this.firstname = arg1;
    this.lastname = arg2;
}

const namesss = new myFunction("Leo", "Das");

console.log(namesss.firstname);
console.log(namesss.lastname);



const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "Antony",
    lastName: "Das"
}
const person2 = {
    firstName: "Hari",
    lastName: "Das"
}
console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2)); 


const person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person1 = {
    firstName: "Leo",
    lastName: "Das"
}

const person2 = {
    firstName: "Anoty",
    lastName: "Das"
}

console.log(person.fullName.call(person1, "Chennai", "India")); 


const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "Muruga",
    lastName: "Das"
}

console.log(person.fullName.apply(person1)); 



const person = {
    firstName: "Ram",
    lastName: "Das",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Namah",
    lastName: "Shivaya",
}

let fullName = person.fullName.bind(member);

console.log(fullName());