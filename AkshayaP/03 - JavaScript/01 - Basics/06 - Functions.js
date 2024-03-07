function myFunction(p1,p2)
{
    return p1 * p2;
}
let result = myFunction(1, 2);
console.log(result);


function celsius(fahrenheit)
{
    return (5 / 9) * (fahrenheit - 32);
}
let text = "the temperature is" + celsius(22) + "celsius.";
console.log(text);

function celsius(fahrenheit)
{
    return (5 / 9) * (fahrenheit - 32);
}
let value = celsius();
console.log(value);

let Sample = "Outside:" + typeof carName;
console.log(Sample);
function vehicle()
{
    let carName = "volvo";
    let Sample = "Inside:" + typeof carName + "" + carName;
    console.log(Sample);

}
vehicle();

function getcube(number)
{
    return number * number * number;
}
getcube(4);

var add = new Function("num1", "num2", "return num1+num2");
console.log(add(2, 5));


const x1 = function(a, b) { return a * b };
//let z = x1(4, 3);
console.log(x1(4, 3));


(function()
{
    var x = 10;
    var y = 20;
    console.log(x + y);
})();


