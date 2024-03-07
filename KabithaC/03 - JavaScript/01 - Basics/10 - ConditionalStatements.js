//if statement

const hour = new Date().getHours();
let greet;

if(hour < 36)
{
   greet= "good day";
}
else
{
   greet= "good evening";
}
console.log(greet);

//statement
let task;
var x = 20;
var y = 10;

if(x > y)
{
    task=("hello eveyone");
}
else
{
    task=("All are fine");
}

console.log(task);


//switch case
switch(new Date().getDay())
{
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log(day);


//default
let text;
switch(new Date().getDay())
{
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend";
}
console.log(text);


// switch case use strict comparison

let n = "0";

switch(n)
{
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
}
console.log(text);