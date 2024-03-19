/*unction multiplication(m1, m2)
{
    return  m2 - m1;

}
let result = multiplication(32, 10);
console.log(result);



function toCelsius(fahrenheit)
{
    return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius(77);

console.log(value); */
function getsum(first, second)
{
    var sum = first+second;
    console.log(sum)
}

let first = 3;
const second = 5;
getsum(first, second);

function m()
{
    window.value = 100;//declaring global variable by window object  
}
function n()
{
    console.log(window.value);//accessing global variable from other function  
}

n();