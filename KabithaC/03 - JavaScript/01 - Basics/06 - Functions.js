//function

function task(p1, p2)
{
    return p1 * p2;
}
let res = task(5, 4);
console.log(res);


let result = demo(10, 78);

function demo(a1, a2)
{
    return a1 + a2;
}

console.log(result);

//local variable


let text = "Outside: " + typeof carName;
console.log(text);

function myFunction()
{
    let carName = "Volvo";
    let text = "Inside: " + typeof carName + " " + carName;
    console.log(text);
}
myFunction();