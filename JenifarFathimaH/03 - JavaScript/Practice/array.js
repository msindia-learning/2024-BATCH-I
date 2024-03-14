//create new array
let ArrayName = new Array(1, 2, 3, 4, 5, 5); // created array using new keyword
let ArrayName1 = [10, 11, 12, 13, 14, 15, 16, 17]; //create array using square bracket

console.log("ArrayName is " + ArrayName);
console.log("ArrayName1 is " + ArrayName1);

//to print length of the array
console.log("Length of the ArrayName is: " + ArrayName.length);
console.log("Length of the ArrayName1 is: " + ArrayName1.length);

//fibonacci series example until  50

let fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;

for(let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
for (let i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}

// adding elements in an array

let arr1 = ["Nivetha", "Parama", "Riya", "Kannu", "Modi"];

arr1.push("Chinrasu"); // add element at last
arr1.unshift("Kanmani"); //add element at first
console.log("Array arr1 elements are: ")
for (let i in arr1) {
    console.log(arr1[i]);
}


// removing element in an array
let arr2 = ["Jeni", "Kabi", "Akchu", "Prabhu", "Parthi"];

arr2.pop(); //remove element at last
arr2.shift(); //remove element at first
console.log("Array arr2 are: ");
for (let i in arr2) {
    console.log(arr2[i]);
}


//adding and removing element from specific position

arr2.splice(1, 2, "Jeni", "Anees", "Fazal");// first argument is starting index, 2nd argument is no. of elements to be deleted,from third argument is to insert new elements
console.log("Array arr2 are: ");
for (let i in arr2) {
    console.log(arr2[i]);
}

//multidimentional array
let x = [];
x[0] = [1, 2, 3, 4, 5];
x[1] = [6, 7, 8, 9, 10];
printMatrix(x);
function printMatrix(myMatrix) {
    for (var i = 0; i < myMatrix.length; i++) {
        for (var j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);
        }
    }
}


let multiArr = [[1, 2, 3, 4, 5],
[1, 4, 9, 16, 25],
    [2, 4, 6, 7, 8, 10]];

for (var i = 0; i < 5; i++) {
    multiArr[i] = [];
    for (var j = 0; j < 5; j++) {
        multiArr[i][j] = [];
        for (var z = 0; z < 5; z++) {
            multiArr[i][j][z] = i + j + z;
        }
    }
}
console.log(multiArr)
//concatenated
let newArray = arr1.concat(arr2, ArrayName);
console.log("Concatenated array of arr1 and arr2 is: " + newArray);


function isEven(x) {
    return x % 2 == 0 ? true : false;
}
//foreach method to ensure the number is even
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (x) {
    console.log(x%2 == 0);
});

//created new arry from the output of another array using map
let a = numbers.map(isEven);
console.log("mapped array : "+a);

//filtered the array based on the constraint and store it in another array
let b = numbers.filter(isEven);
console.log("filtered array : " + b);

//accumulate all values using reduce function
let c = numbers.reduce(function (previous, current) {
    return previous + current;
});
console.log("summ od the Array numbers is: " + c);


let numSqrt = [1, 4, 9, 16, 25];

let iterator = numSqrt[Symbol.iterator]();
console.log(iterator.next().value); 
console.log(iterator.next().value); 
console.log(iterator.next().value); 
console.log(iterator.next().value); 
console.log(iterator.next().value); 


let aKeys = numSqrt.keys(); 
console.log(aKeys.next()); 
console.log(aKeys.next()); 
console.log(aKeys.next()); 
console.log(aKeys.next());
console.log(aKeys.next()); 
console.log(aKeys.next());//true


let bKeys = numSqrt.values();
console.log(bKeys.next());
console.log(bKeys.next());
console.log(bKeys.next());
console.log(bKeys.next());
console.log(bKeys.next());
console.log(bKeys.next());

let cartoon1 = ["Doremon", "Nobita", "Sizuka", "Doremi"];
let cartoon2 = Array.from(cartoon1);
console.log(cartoon2);

let var1 = numbers.fill(1,3,5);
console.log(var1);

let var2 = numbers.copyWithin(4,2,4);
console.log(var2);

let frds = ["A", "E", "Z", "P", "Q"]
console.log(frds.sort());

let joinArr = numbers.join('-');
console.log(joinArr)

const num4 = [5, 10, 15, 20];
const firstEven = num4.find(number => number % 2 === 0);
console.log(firstEven); 

//let arr1 = ["Nivetha", "Parama", "Riya", "Kannu", "Modi"];
const ModiIndex = arr1.findIndex(name => name === "Kannu");
console.log(ModiIndex);

const hasName = arr1.includes("Riya");
console.log(hasName);