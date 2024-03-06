/*const birds = ["Parrot", "Peacock", "Pigeon", "crow"];
let loop = "";
for(i = 0; i < birds.length; i++)
{
    loop += birds[i];
}
console.log(loop);*/

const stmt = ["for", "while", "do-while"];
let i, le, text1;
for(i = 0, len = stmt.length, text1 = ""; i < len ; ) {
    text1 += stmt[i];
    i++;
}
console.log(text1);


var i1 = 10;
for(var i1 = 0; i1 < 10; i1++)
{
    
}
console.log(i1);

let i2 = 10;
for(let i2 = 0; i2 < 10; i2++)
{
    
}
console.log(i2);


const person = { fname: "john", lname: "Toe", age: 25 };
let text = "";
for(let x in person)
{
    text += person[x];
}
console.log(text);


const numbers = [45, 4, 9, 16, 25];
let text2 = "";
numbers.forEach(myFunction);
function myFunction(value, index, array)
{
    text2 += value;
}


/*let text3 = "";
let i3 = 0;
while(i3 < 10)
{
    text3 += i3 ;
}
console.log(text3);*/


let text4 = "";
let i4 = 0;
do
{
    text4 += " the number is " + i4;
    i++;
}
while(i < 10);
console.log(text4);