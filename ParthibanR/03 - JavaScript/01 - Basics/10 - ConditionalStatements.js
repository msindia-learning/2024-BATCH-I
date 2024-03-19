                        /*1.if statement
                         * 2.if-else statement
                         * 3.else if
                         * 4.switch statements
                         * */

                                       //1.if statement
let age = 23;
if (age > 18) {
    console.log("eligible");
}

                                     //2.if-else statement

let age = 56;
if (age > 18) {
    console.log("Eligible");
}
else {
    console.log("Not eligible")
}

                                  //3.if else if statement

let age = 34;
if (age > 18) {
    console.log("Eligible");
}
else if (age < 18) {
    console.log("Not Eligible");
}
else if (age = 18) {
    console.log("You also Eligible");
}
else { 
    console.log("Nothing");
}


                                //4.Switch statement
var grade = 'B';
var result;
switch (grade) {
    case 'A':
        result = "A Grade";
        break;
    case 'B':
        result = "B Grade";
        break;
    case 'C':
        result = "C Grade";
        break;
    default:
        result = "No Grade";
}
console.log(result);


                             //5.Break statement
let text=' ';
for (i = 0; i <= 20; i++) {
    if (i == 3) 
        {
            break;                        //0 1 2
        }
    text = text + i;  
}
console.log(text);


                           //6.continue

let text = ' ';
for (i = 0; i <= 20; i++) {
    if (i == 3) {
        continue;                        //0 1 2 4 5 6 7 8 9
    }
    text = text + i;
}
console.log(text);