// Local Scope 

myfunction();
function myfunction()
{
    let color = "GREEN";
    console.log(color);
}
console.log(typeof (color));

//Global Scope

let colors = ("Violet");
myfunction();

function myfunction()
{
    num = "Paints";
}
console.log(num + colors);


//hoisting undefine

console.log(x);
var x = 5;

//define
y = 10;
console.log(y);
var y = 20;
console.log(y);

//let hoisting
//carName = "BMW";
//let carName = "Volvo";
//console.log(carName);

//var

var z = 46;
console.log(z + k);
var k = 22;
