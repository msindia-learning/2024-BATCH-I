function myfunction(a, b)
{
    return arguments.length//return a * b;
}
console.log(myfunction(2, 3));

//Arrow functions
const x = (x, y) => x * y;
console.log(x(6, 3));


function myfunction2(x, y)
{//Sometimes Accepts missing values
    if(y === undefined)
    {
        y = 2;
    }
    return x * y;
}
console.log(myfunction2(4));



function myfunction3(x, y = 80)//assign a value to one of the parameter
{
    return x * y;
}
console.log(myfunction3(2));


function sum(...args)
{
    let sum = 0;
    for(let arg of args) sum += arg;
    return sum;
}
let x5 = sum(4, 15, 20, 67, 98, 36);
console.log(x5);


x5 = max(1, 2, 3, 4, 5, 6);
function max()
{
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++)
    {
        if(arguments[i] > max)
        {
            max = arguments[i];
        }
    } return max;
}
console.log(max(4, 5, 6));

function sum()
{
    let sum = 0;
    for(i = 0; i < arguments.length; i++)
    {
        sum += arguments[i];
    } return sum;
}
console.log(sum(1, 2, 3, 4, 5));

function myfunction7(args1, args2)
{
    this.firstname = args1;
    this.lastname = args2;

}
const myobj2 = new myfunction7("john", "toe");
console.log(myobj2.firstname + myobj2.lastname);
//console.log();

const person = {

    fullName: function(city, country)
    {
        return this.fname + " " + this.lname + " " + city + ", " + country;
    }
}
const person1 = {
    fname: "john",
    lname: "toe",
}
const person2 = {
    fname: "john",
    lname: "toe",
}
//console.log(person.fullname.apply(person1,[oslo,Norway]))
console.log(person.fullName.call(person1, "Oslo", "Norway"));


const person9 = {
    firstName: "john",
    lastName: "Doe",
    fullName: function()
    {
        return this.firstName + " " + this.lastname;
    }
}
const member = {
    firstName: "Hege",
    LastName: "Nilson",
}
let fullName3 = person9.fullName.bind(member);
console.log(person9.fullName());


const person10 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function()
    {
        return this.firstName + " " + this.lastName;
    }
}

const member2 = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let fullName1 = person10.fullName.bind(member2);

console.log(fullName1());





console.log(add());
function add()
{
    let counter = 0;
    function plus() { counter += 1; }
    plus();
    plus();
    return counter;
}
