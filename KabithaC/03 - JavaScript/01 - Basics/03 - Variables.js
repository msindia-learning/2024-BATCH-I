//VAR 

var x = 10;
var y = 30;
var z = x * y;
console.log(z);

//LET
 let a = 10;
  let b = 30;
  let c = a+ b;
console.log(c);

//CONST

const task = "palani";
const task1 = "murugan"
const  demo = task + task1;
console.log(demo);

//MIXED 
const price1 = 10;
const price2 = 30;
let totalamount = price1 + price2;
console.log(totalamount);

//MIXED
const amt = 20;
var amt1 = 50;
let cart = amt + amt1;
console.log(cart);

//Declare a variable
let carname;
console.log(carname);     

//Declare a variable to values
let fruits = "apple", car = "BMW", bike = "MT";
console.log(bike);
console.log(car);

//Redeclaring a variable using var

var x = 10;
{
    var x = 20;
}

//var

var mat = 20;
var mat = 100;
console.log(mat);


console.log(x);

// var hoisted

carName = "Volvo"; //declare first after initialize
var carName;
console.log(carName);

// var hoisted undefine

cName = "Suzuki";
console.log(cName);

//Redeclaring a variable using let - update

let star ="Kabi";
{
    star = "beach";
}

console.log(star);

// let

let start = "sun";
{
    let start = "moon";
}
console.log(start);




//constant array
const arts = ["physics", "zoology", "commerce", "tamil", "english"];
arts[1] = "maths";
console.log(arts);


// push the element into array
const cartoon = ["jackiechan", "shinchan", "ben10", "Ninja hattori", "power rangers", "doreamon"];
cartoon.push("Roll no 21");
console.log(cartoon);

//constant obj

const house = { type: "flat", model: "5000", color: "green" };
console.log(house);
house.area =  "chennai";
console.log(house.area);