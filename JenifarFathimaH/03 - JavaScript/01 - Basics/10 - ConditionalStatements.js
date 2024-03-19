
//if-else condition
let a = 20;
if (a == 10) {
    console.log("a is equal to 10");
}
else if (a == 15) {
    console.log("a is equal to 15");
}
else if (a == 20) {
    console.log("a is equal to 20");
}
else {
    console.log("a is not equal to 10, 15 or 20");
}  

//switch statement

let grade = 'B';
let result;
switch (grade) {
    case 'A':
        result += " A Grade";
    case 'B':
        result += " B Grade";
    case 'C':
        result += " C Grade";
    default:
        result += " No Grade";
}
console.log(result);  