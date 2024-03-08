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

function mypro()
{
    let carName = "BMW";
    let text = "Inside: " + typeof carName + " " + carName;
    console.log(text);
}
mypro();


// function constructor

const myFunction = new Function("a", "b", "return a * b ");
console.log(myFunction(9, 8));

const myFunc = function(a, b)
{
    return a * b
};

let x = myFunc(4, 3);

//functions can be used as values
function Func(a, b)
{
    return a * b;
}
let m = Func(4, 3);
console.log(m);

// arrow functions
const n = (x, y) => x * y;
console.log(n(5, 5));

//default function

function lord(x, y)
{
    if(y === undefined)
    {
        y = 10;
    }

    return x * y;
}

console.log(lord(14));

//function rest parameter
function sum(...args)
{
    let sum = 0;
    for(let arg of args) sum += arg;
    return sum;
}

let x1 = sum(2,4,6,8,12);

console.log(x1);

//argument object
x3 = findMax(10,68,42,11);

function findMax()
{
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++)
    {
        if(arguments[i] > max)
        {
            max = arguments[i];
        }
    }
    return max;
}

//sumall 
function sumAll()
{
    let sum = 0;
    for(let i = 0; i < arguments.length; i++)
    {
        sum += arguments[i];
    }
    return sum;
}
console.log(sumAll(1, 500, 115, 88));

//invoking function as a function

function sT(a, b)
{
    return (a + b);
}
console.log(sT(25, 30));

//function 
function t(p1, p2)
{
    return p1 * p2;
}
let rest = task(5, 4);
console.log(rest);

//global object

let murugan = krishna();
function krishna()
{
    return this;
}
console.log(murugan);


//function call - this

const myobj = {
    fname1: "Kabi",
    fname2: "Jeni",
    fname3: "Anees",
    friends: function()
    {
        return this.fname1 + " " + this.fname2 + " " + this.fname3;
    }
}
console.log(myobj.friends());


//call method

const ob = {
    frnds: function()
    {
        return this.fname8 + " " + this.fname9 + " " + this.fname0;
    }
}
const myobj1 = {
    fname8: "Kabitha",
    fname9: "Jesha",
    fname0: "Anees"
}

const myobj2 = {
    fname8: "fazal",
    fname9: "sri",
    fname0: "sai",
}

console.log(ob.frnds.call(myobj1));
console.log(ob.frnds.call(myobj2));


//call method with arguments and function apply

const person = {
    fullName: function(city, country)
    {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person1 = {
    firstName: "krishna",
    lastName: "radha"
}

console.log(person.fullName.call(person1, "Brindavan", "flute"));

// math.max()
let max = " ";
console.log(Math.max(20, 45, 16));


//bind method()
const people = {
    firstName: "John",
    lastName: "Doe",
    fN: function()
    {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
    fN: function()
    {
        return this.firstName + " " + this.lastName;
    }
}

let fN = people.fN.bind(member);
console.log(fN());

//function closures
// counter Dilemma

let counter = 0;
function add()
{
    counter += 2;
}

add();
add();
add();
add();
console.log(counter);