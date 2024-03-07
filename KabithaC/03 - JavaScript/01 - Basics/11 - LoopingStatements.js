// for loop

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text=" " ;
for(let i = 0; i < cars.length; i++)
{
    text += cars[i] + "<br>";
}
console.log(text);

//for
let num = 10;
let res = " ";
for(i = 0; i < num; i++)
{
   res = res  + i;
}
console.log(res);

//var loop

var i = 5;
for(var i = 0; i < 10; i++)
{
   //statements
}

console.log(i);

//let loop
let j = 5;
for(let j = 0; j < 10; j++)
{
    //statements
}
console.log(j);

//for in loop

const person = {
    fname1: " Kabi",
    fname2: "Jeni",
    fname3: "Anees"
};

let text8 = "";
for(let x in person)
{
    text8 = text8 + person[x] + " ";
}
console.log(text8);

//for in over array
const numbers = [45, 4, 9, 16, 25];

let pro = "";
for(let x in numbers)
{
    pro += numbers[x];
}

console.log(pro);

//foreach

const num1 = [10, 29, 9, 178, 2];

let chan = "";
num1.forEach(myFunction);

function myFunction(value, index, array)
{
  chan += value;
}

console.log(chan);

//looping over a array

const colors = ["Green", "Yellow", "Blue", "Purple"];

let item = " ";
for(let x of colors)
{
    item += x; 
}
console.log(item);


//looping over a string

let language = "Tamil";
let tom = "";
for(let x of language)
{
    tom += x;
}
console.log(tom);

//while loop

let hattori = " ";
let k = 0;
while(k < 10)
{
    hattori = hattori + k;
    k++;
}
console.log(hattori);

//do-while

let barbie = " ";
let m = 0;
do
{
    barbie = barbie + m;
    m++
}
while(m < 25);
console.log(barbie);

//break
let naruto = " ";
let c = 0;
for(let c = 0; c < 10; c++)
{
    if(c === 6)
    {
        break;
    }
    naruto = naruto + c;
}
console.log(naruto);

//continue

let lordkrishna = " ";
let d = 0;
for(let d = 0; d < 10; d++) {
    if(d === 5)
    {
        continue;
    }
    lordkrishna = lordkrishna + d;

}
console.log(lordkrishna);

// iterating over a string

const name = "Murugan";

let Thiruthani = ""
for(const x of name)
{
    Thiruthani += x + "<br>";
}
console.log(Thiruthani);


// over a set 

const letters = new Set(["a", "b", "c"]);
let alpha = "";
for(const x of letters)
{
   alpha += x + "<br>";
}
console.log(alpha);

