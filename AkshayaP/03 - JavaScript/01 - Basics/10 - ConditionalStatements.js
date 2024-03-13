if(new Date().getHours() < 10)
{
    console.log("It's day time!");
}
else if(new Date().getHours()<=12){
    console.log("it's afternoon");
}
else
{
    console.log("it's night time");
}
var grade = 'A';
var result;
switch(grade)
{
    case 'A':
        result = "A Grade";
        break;
    case 'B':
        result = "A Grade";
        break;
    case 'C':
        result = "A Grade";
        break;
    case 'D':
        result = "A Grade";
        break;
    case 'E':
        result = "A Grade";
        break;
    default:
        result = "no Grade";
}
console.log(result);

/*let Day;
switch(new Date().getday())
{
    case 0:
        Day = "Sunday";
        break;
    case 1:
        Day = "Monday";
        break;
    case 0:
        Day = "Tuesday";
        break;
    case 0:
        Day = "Wednesday";
        break;
    case 0:
        Day = "Thursday";
        break;
    case 0:
        Day = "Friday";
        break;
    case 0:
        Day = "Saturday";
        break;
}
console.log(Day);*/

var x = "1";
var text;
switch(x)
{
    case 0:
        text = "off";
        break;
    case 1:
        text = "on";
        break;
    default:
        text = "No Value Found";
        break;
}
console.log(text);