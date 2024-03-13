                                           //local scope
let a = 20;
let b = 10;
{
    console.log(a + b);
}



/*
{
    let a = 10;
    let b = 20;                                   //Not working
}
console.log(a + b);              
*/

const a = 20;
const b = 30;
{
    console.log(a + b);                    
}

/*
const a = 10;
{
    const b = 40;
    const c = 30;
    //console.log(a + b + c);
}
console.log(a + b + c);
*/

var a = 20;
var b = 30;
var c = 20;
{
    console.log(a + b + c);
}


                                //Global scope

var a = 30;
{
    var b = 20;
    var c = 20;
    console.log(a + b + c);
}
console.log(a + b + c);


let car = "rollsroys";
functionMyname();


function functionMyname() {
    console.log(car);
}


function myFunction(a, b) {
    return a * b;
}

console.log(myFunction(10, 20));




                                                      //Hoisting

var a;
a = 20;
var b;                              
b = 30;
var c;
c = 40;

console.log(a + b + c);



a = 20;
b = 30;
c = 40;
console.log(a + b + c);

var a;
var b;
var c;


car = "BMW";
let car;                             //Reference Error
console.log(car);


bike = "KTM";
const bike;                       //syntax error or code will not run
console.log(bike);


var car = 12;
var bike = 5;
console.log(car + " " + bike);           // 12 3

/*var car = 12;
var bike = 5;
console.log(car + bike);               //17
 * 
 * */



var bike = "Ktm";
console.log("Bike is:"+bike,"Car:"+car);            // Bike: Ktm  car: undefind

var car = "jackwar";


var bike = "Ktm";
var car;
console.log("Bike is:" + bike, "Car:" + car); 
                                                   // Bike: Ktm  car: undefind
car = "jackwar";
