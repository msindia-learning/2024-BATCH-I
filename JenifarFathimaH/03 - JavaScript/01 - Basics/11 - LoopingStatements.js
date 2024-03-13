let numArray = [21, 20, 22, 34, 56, 67, 98 ];

//for loop
console.log("Using for loop, i will iterate the index and print the value in the array: ");
for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
}
//for in 
console.log("using for in loop");
for (let i in numArray) {
    console.log(numArray[i]);
}
//for of
let pattern = "***********";

let structure = "";
for (let x of pattern) {
    structure += x;
    console.log(structure);
} 

//while loop
let n = 5;
console.log("Using while loop : ")
while (n <= 10) {
    console.log(n);
    n++;
}
//do-while
console.log("Using do-while loop :")
let sum = 0;
do {
    
    sum += sum + 1;
    console.log(sum);
}
while (sum < 10);