                                          // Object Literal

const car =
{
    type: "BMW",
    model: "500Cdt",
    color: "White"
};

console.log(car.model);
console.log(car.color);
console.log(car.type);

console.log(car);
console.log(typeof (car));


                                    //Creating instance of object

var person = new Object();
person.name = "vijay";
person.age = 18;
person.degree = "Engineering";
console.log(person.name + " " + person.age + " " + person.degree);


var person = new Object();
person["name"] = "pandi";
person["age"] = 17;
person["degree"] = "Engineering";
console.log(person["name"] + " " + person["age"] + " " + person["degree"]);




var person = new Object();
person["name"] = "pandi";
person["age"] = 17;
person["degree"] = "Engineering";
console.log(person["name"] + " " + person["age"] + " " + person["degree"]);

delete person["age"];
console.log(person);



                                  //object constructor

function person(id, name, salery) {
    this.id = id;
    this.name = name;
    this.salery = salery;
}

var vijay = new person(18, "vijay", 1200000);
var pandi = new person(18, "pandi", 110000);

console.log(vijay);
console.log(pandi);




function person(id, name, salery) {
    this.id = id;
    this.name = name;
    this.salery = salery;

    this.changesalery = changeSalery;
    function changeSalery(otherSalery) {
        this.salery = otherSalery;
    }
}

var emp= new person(18, 'vijay', 1200000);
document.write(emp.id, emp.name, emp.salery);
emp.changeSalery(130000000);
doucment.write(e.id, e.name, e.salery);



                                         //Nested Objects
const car = {
    name: "Bmw",
    model: "ABCD",
    year: 2019,
    rate: 120000,

    differents: {
        car1: "audi",
        car2: "maruthi",
        car3: "bens"
    }
}
console.log(car);
console.log(typeof (car));
console.log(car.year);
console.log(car.differents.car2);
console.log(car.differents);


                                     //Nested Arrays and Objects

const car = {
    name: "Bmw",
    model: "ABCD",
    year: 2019,
    rate: 120000,

    cars:[
        { name: "Ford", models: ["fiesta", "Fouces", "mustang"] },
        { name: "audi", models: ["320", "x3", "x5"] },
        {name:"jackwar",models:["500","panda"]}
    ]
}

console.log(car);
console.log(car.cars);
console.log(car.cars.name);

delete car.year;
console.log(car);

delete car.cars;
console.log(car);


                                       //object methods

const person = {
    fname: "leo",
    lname: "Das",
    age: 23,
    id: 2341,
    fullname: function () {
        return this.fname + " " +this.lname;
    }
};

person.fullname();
console.log(person.fullname());


                                           //built-in methods

let msg = "Hello world..!!!";
let x = msg.toUpperCase();
console.log(msg);
console.log(x);


let mass = "ROYAL KINGS";
let y = mass.toLowerCase();
console.log(mass);
console.log(y);



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


const bike = {
    bike: "KTM",
    year: 2023,
    model: "ABCD",
    condition: "Good",
};

console.log(bike);
console.log(typeof (bike));


const phone = {
    model: "vivo",
    version: "Current y12",
    year: 2023,
    services: "latest",

    get ser() {

        return this.services;
    }
};

console.log(phone.ser);
console.log(phone);



const clg = {
    name: "ABCD",
    type: "Engineering",
    grade: "Good",
    avg: " ",

    set ver(ver) {
        this.avg = "77%";
    }
};
clg.avg = "77%";
console.log(clg.avg);


                                          //object constructors

function person(first, last, age, degree) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.degree = degree;

}

const vijay = new person("Vijay", "leo", 18, "Engineering");
const pandi = new person("pandi", "das", 17, "Engineering");
console.log(vijay);
console.log(pandi);

vijay.course = "cse";
console.log(vijay);

vijay.name = function () {
    return this.first + " " + this.last;
}
vijay.name();
console.log(vijay.name());


function person(first, last, age, degree) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.degree = degree;

}

const virat = new person("virat", "kohli", 35, "degree");
console.log(virat);

person.prototype.country = "India";
console.log(virat.country);

const dhoni = new person("Mahi", "dhoni", 41, "degree", "Indian");
console.log(dhoni);

person.prototype.country = "indian";
console.log(dhoni.country);


                        //set methods

const letters = new Set(["a", "b", "c"]);
console.log(letters);

const cars = new Set();
cars.add("audi");
cars.add("bens");
cars.add("cava");

console.log(cars.size);
console.log(cars);

const bike = new Set();

const a = "Duke";
const b = "Ktm";
const c = "Fz";

bike.add(a);
bike.add(b);
bike.add(c);

console.log(bike);
console.log(bike.size);
console.log(typeof (bike));


const players = new Set(["Abd", "maxi"]);
players.add("virat");
players.add("msd");
players.add("rohit");

console.log(players)
console.log(players.size);                       
console.log(players.values());                  
console.log(typeof (players));                 



const car = new Set();
car.add("bens");
car.add("bmw");
car.add("jackwar");

console.log(car);
console.log(car.values());
console.log(car.size);


car.delete("bmw");
console.log(car);




const bike = new Set(["ktm", "duke", "fz"]);
let spar = "";
bike.forEach(function (result) {
    spar = spar + result;
})

console.log(spar);
console.log(bike);
console.log(bike.values());
console.log(bike.size);



                                            //map()
const fruits = new Map([
    ["apple", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(fruits);
fruits.set("bru", 400);
console.log(fruits);


const bike = new Map();

bike.set("ktm", 1200000);                                   
bike.set("fz", 1000000);
bike.set("duke", 1100000);

console.log(bike);
bike.get("ktm");
console.log(bike.size);
console.log(bike.values());                           
console.log(bike.keys());                              


bike.has("ktm");
console.log(bike.has("ktm"));                        



bike.delete("fz");                                    
console.log(bike);


bike.has("fz");
console.log(bike.has("fz"));                         



const car = new Map();
let spar = "";
car.set("bmw", 1300000);
car.set("bens", 1200000);
car.set("audi", 1000000);

console.log(car);

car.forEach(function (value, key) {
    spar = spar + key + "=" + value;

})

console.log(car);