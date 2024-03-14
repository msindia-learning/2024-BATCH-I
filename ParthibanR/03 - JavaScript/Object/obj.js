                      //By Object Literal

let person = {
    firstName: "Leo",
    lastName: "Das",
    age: 25,
    degree: "Engineering",
}
console.log(person);
console.log(typeof (person));
console.log(person.lastName);


let txt = " ";
for (let x in person) {
    txt += person[x];
}
console.log(txt);


let bike = {
    firstName: "Duke",
    lastName:"bike",
    model: "super ultra",
    year: 2020,
    owner: "persons",
    Names: function () { return this.firstName + this.lastName },
}
console.log(bike);
console.log(bike.Names());



                          //creating a js object

                          //1.objectName.property
let car = new Object;
car.name1 = "BMW";
car.name2 = "audi";
car.name3 = "rollsroys";
car.name4 = "bens";
console.log(car);
console.log(car.name1 + " " + car.name2 + " " + car.name3 + " " + car.name4);

                        //using VariableName[properties]
let person = new Object;
person["fName"] = "vijay";
person["lName"] = "Das";
person["degree"] = "Engineering";
person["interest"] = "Sports";
console.log(person);
console.log(typeof (person));



                         //object constructor
function person(fname, lname, age, degree) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.degree = degree;
}

var vijay = new person("leo", "das", 23, "Engineering");
var pandi = new person("pandi", "das", 24, "Arts&science");
console.log(vijay);
console.log(pandi);
console.log(typeof (person));
console.log(pandi.constructor);

                                     //adding & delete  properties
const person = {
    fname: "vijay",
    lname: "pandi",
    age: 21,
    degreee: "Engineering",
    }
console.log(person);

person.city = "Chennai";                   //added
console.log(person);

delete person.age;                        //deleted
console.log(peson);                       


                              //Nested Objects
const car = {
    names: "Rollsroys",
    model: "ultratechnology",
    year: 2020,
    bike: {
        namee: "FZ",
        model: "sonytech",
        year:2021,
        }
    }
console.log(car);
console.log(car.bike);               //only print for bike obj
console.log(typeof (car));          //obj

car.km = "its good";
console.log(car);                  //add km in obj

delete car.bike;
console.log(car);                 //del bike obj

delete car.bike.year;
console.log(bike);


                       //Nested Array and Objects

const details = {
    fnamee: "leo",
    lnamee: "das",
    age: 20,
    city: "Theni",
    company: "M&S",

    othersDetails: [
        {
            fname: "vijay",
            lname: "das",
            age: 20,
            degree: "engineering",
            sports:["cricket","kabadi","vollyball","football"],

        },
        {
            fname: "pandi",
            lname: "das",
            age: 21,
            degree: "Arts",
            sports:["kabadi","throwball","basketball"]

        },
        {
            fname: "hari",
            lname: "das",
            age: 22,
            degree: "doctor",
            sports:["runner","baseball","hockey"]
            
            }
        ]     
    }
console.log(details);
console.log(typeof (details));
console.log(details.othersDetails);
console.log(details.othersDetails.sports);
let x = "";
for (let i in details.othersDetails) {
    x += details.othersDetails[i].degree
    for (let j in details.othersDetails[i].sports) {
        x += details.othersDetails[i].sports[i];
    }
}

                 //obj method()

let person = {
    fName: "leo",
    lName: "das",
    age: 20,
    degree: "Engineering",
    names: function () {
        return this.fName +" "+ this.lName;
    }
};
console.log(person.names());

                    //Adding a Method to an object
let person = {
    firstName: "Leo",
    lastName: "Das",
    age: 25,
    degree: "Engineering",
}
console.log(person);

person.fullName = function () {
    return this.firstName + " " + lastName;
}
console.log(person.fullName());
console.log(person);


                       //Using Built in Methods
const car = {
    names: "Rollsroys",
    cars:"MAHI",
    model: "ultratechnology", 
    year: 2020,
}
console.log(car);
console.log(typeof (car));

console.log(car.names.toUpperCase());                     //uppercase
console.log(car.cars.toUpperCase());                      //lowercase

let person = {
    firstName: "Leo",
    lastName: "Das",
    age: 25,
    degree: "Engineering",
    sports1: "kabadi",
    sports2: "cricket",
    namess: function () {
        return (this.firstName + " " + this.lastName).toUpperCase();
    }
   
}
console.log(person);
console.log(person.namess);

                 // using object.values()
let person = {
    firstName: "Leo",
    lastName: "Das",
    age: 25,
    degree: "Engineering",
    sports1: "kabadi",
    sports2: "cricket",
    namess: function () {
        return (this.firstName + " " + this.lastName).toUpperCase();
    }
}

console.log(person);
const Arr = Object.values(person);
console.log(Arr);

                 //using JSON.Stringify() 
const car = {
    names: "Rollsroys",
    cars: "MAHI",
    model: "ultratechnology",
    year: 2020,
}
console.log(car);

const str = JSON.stringify(car);
console.log(str);

                  //stringify date

const person = {
    name: "leo",
    age: 20,
    date: new Date()
}
console.log(person);

const late = JSON.stringify(person);
console.log(late);

             //stringify array

let array = ["abc", "def", "ghi", "jkl"];
console.log(array);

let arr = JSON.stringify(array);
console.log(arr);

          //js Accessors(getter & setter)
 //getter

const car = {
    names: "Rollsroys",
    cars: "MAHI",
    model: "ultratechnology",
    year: 2020,
    get mod() {
        return this.model;
    }
};
console.log(car.mod);

//setter

const car = {
    names: "Rollsroys",
    cars: "MAHI",
    model: "ultratechnology",
    year: " ",
    set mod(mod) { 
        this.model = mod;
    }
};
car.mod = 2020;
console.log(car.year);

                              //JavaScript Function or Getter

//ex1:

let person = {
    firstName: "Leo",
    lastName: "Das",
    age: 25,
    degree: "Engineering",
    name: function () {
        return this.firstName + " " + this.lastName;      
    }
}
console.log(person.name());

//ex2:
let person = {
    firstName: "Leo",
    lastName: "Das",
    age: 25,
    degree: "Engineering",
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName);

              //JavaScript Object Constructors

function person(fName, lNname, age, degree, city) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.degree = degree;
    this.city = city;
}
const vijay = new person("Vijay", "Das", 20, "Engineering", "Theni");
const pandi = new person("Pandi", "Das", 20, "Doctor", "Chennai");
const hari = new person("Hari", "Das", 20, "Atrs", "Madurai");
console.log(vijay, pandi, hari);

                  //Built -in JavaScript Constructors

const x1 = new String();
console.log(x1);
console.log(typeof (x1));

const x2 = new Number(); 
console.log(x2);
console.log(typeof (x2));

const x3 = new Boolean(); 
console.log(x3);
console.log(typeof (x3));

const x4 = new Object(); 
console.log(x4);
console.log(typeof x4);

const x5 = new Array(); 
console.log(x5);
console.log(typeof (x5));

const x6 = new RegExp(); 
console.log(x6);
console.log(typeof (x6));

const x7 = new Function();
console.log(x7);
console.log(typeof (x7));

const x8 = new Date();  
console.log(x8);
console.log(typeof (x8));


function Person(first, last, age, height) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.height = height;
}

let perr = Person.prototype.city = "chennai";
console.log(perr);

Person.prototype.name = function () {
    return this.firstName + " " + this.lastName;
}
console.log(Person.name());

                  //sets

const letter = new Set(["a", "b", "c"]);                      //new set
console.log(letter);
console.log(letter.size);

const letters = new Set();
letters.add("a");                               //added element to set
letters.add("b");
letters.add("c");
console.log(letters);
console.log(letters.size);


const bike = new Set();
bike.add("bmw");
bike.add("ktm");
bike.add("duke");
bike.add("hero");
console.log(bike);
console.log(bike.size);

bike.delete("bmw");                                    //delete element to set
console.log(bike);
console.log(bike.size);

bike.clear();                                         //clear all element to set
console.log(bike);
console.log(bike.size);



console.log(bike.has("duke"));                       //has return their value true
console.log(bike.has("fz"));                         //has return their value false


console.log(bike.keys());                            //key return values

console.log(bike.values());                         // values returns all values in a set


const cars = new Set();
cars.add("bmw");
cars.add("jackwar");
cars.add("maruthi");
cars.add("bens");
console.log(cars.size);
console.log(cars);


const letter = new Set(["a", "b", "c"]);                      
console.log(letter);
console.log(letter.size);
console.log(letter.values());
console.log(letter.entries(letter));                  //entires() returns (value,value) pairs


let text = "";
letter.forEach(function (value) {
    text += value;
})
console.log(letter);
console.log(typeof (letter));                        //sets are also objects

                     //Map()

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges",200]
]);
console.log(fruits);
console.log(fruits.apples);
                              //set
const phones = new Map();
phones.set("vivo", 12000);       
phones.set("oppo", 10000);
phones.set("redmi", 11000);
console.log(phones);

phones.set("vivo",200000);
console.log(phones);

                             //get
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits.get("apples"));
console.log(fruits.size);                               // map size()

fruits.delete("bananas");                              //map delete
console.log(fruits);
console.log(size);

console.log(fruits.has("bananas"));                 //has return false
console.log(fruits.bananas);

console.log(fruits.has("apples"));                 //has return true
console.log(fruits);

fruits.clear();
console.log(fruits.size);                        //clear() their map

console.log(typeof (fruits));                   //maps are also object

console.log(fruits.keys());                  //it return keys 
 
console.log(fruits.values());                //it return values

let person = {
    name: "leo",
    age: 20,
    degree: "engineering",
    master: "correct",
    myFunction() {
        console.log(`Name: ${this.name}`);
        console.log(`leo age: ${this.age}`);
        console.log(`leo degree: ${this.degree}`);
        console.log(`leo called master: ${this.master}`);
    }
};
person.myFunction();
