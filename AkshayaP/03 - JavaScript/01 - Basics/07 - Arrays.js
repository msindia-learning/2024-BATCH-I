

const Animals = ["lion", "Tiger", "Elephant"];
const [0] = "lion";
const [1] = "Tiger";
const [2] = "Elephant";

console.log(Animals);
let values = Animals[0];
console.log(values);
Animals[1] = "Cheetah"
console.log(Animals.toString());
let length = Animals.length;
console.log(length);
let Wild = Animals[Animals.length - 1];
console.log(Wild);

const Pets = new Array("Cat", "Dog", "Rat");
console.log(Array);
const person = { firstName: "John", lastName: "Toe", age: 32 };
const agelength = String (person.lastName).length;
console.log(agelength);


const numbers = ["one", "two", "three"];
let nlen = numbers.length;
let text = "";
for(let i = 0; i < nlen; i++)
{
    text += numbers[i];
}
console.log(text);

var emp = ["ABC", "EFG", "IJK"];
for(i = 0; i<emp.length; i++)
{
    console.log(emp[i]);
}

//javascript newkeyword
var acc = new Array();
acc[0] = "Savings";
acc[1] = "Current"
for(i = 0; i < acc.length; i++)
{
    console.log(acc[i]);
}


var js = new Array("Variables,Datatypes,Objects");
for(i = 0; i < js.length; i++)
{
    console.log(js[i]);
}
//array methods

const Datatypes = ["int", "string", "float", "character"];
length = Datatypes.length;
console.log(length);

const operators = ["Arithmetic", "comparison", "logical"];
console.log(operators.toString());
console.log(operators.at(2));
console.log(operators.join("*"))
console.log(operators.pop());//removes an last elament from the array.
console.log(operators.push("Bitwise"));
console.log(operators);
console.log(operators.shift());//removes the first element from the array.
console.log(operators.unshift("Assignment"));
console.log(operators[operators.length] = "Comparison");


const arr1 = ["peacock", "parrot", "pigeon"];
const arr2 = ["crow", "woodpeaker", "peahen"];
const birds = arr1.concat(arr2);
console.log(birds);


const fruits = [[1,2], [3,4], [5,6]];
console.log(fruits.copyWithin(2, 0));
const newArr =fruits.flat();
console.log(newArr);



const flowers = ["lilly", "rose", "lotus"]
const spliced = flowers.toSpliced(1, 0,"Jasmine","sunflower");
console.log(spliced);

const vegtables = ["Potato", "Tomato", "chilli"]
const slice = vegtables.slice(2);
console.log(slice);
//array search
const arrmethods = ["length", "push", "pop", "push", "unshift"];
console.log(arrmethods.includes("length"));
let position = arrmethods.lastIndexOf("push");
console.log(position);

const number = [4,6,35,8,59];
let first = number.findIndex(myFunction);//find
console.log(first);
function myFunction(value,index,array)
{
    return value > 18;
}

const var2 = [12, 13, 14, 15, 16, 17];
let last = var2.findLastIndex(x => x > 10);
console.log(last);


//Array Sort
const item1 = ["Cows", "Animals", "Dogs", "Bugs"];
console.log(item1.sort());
console.log(item1.reverse());
console.log(item1.toSorted());
console.log(item1.toReversed());

const item2 = ["3", "1", "8", "9"];
console.log(item2.sort(function(a, b)
{
    return a - b;//for ascending
    return b - a;//for descending
}))

//Read methods

//.of
const myArray = [1,2,3,4,5];
console.log(myArray);
myArray[5] = 6;
console.log(myArray);
const myArray2 = Array.of(5);
console.log(myArray2);
//foreach
const myArray1 = ['A', 'B', 'C', 'D', 'E'];
myArray1.forEach((item) => console.log(item));
//map
const myArray4 = ['A', 'B', 'C', 'D', 'E'];
myArray4.map((x) => console.log(x));

//filter
const myArray5 = ['1', '2', '3', '4', '5'];
const newArray5 = myArray5.filter((x) => x % 3 === 0);
console.log(myArray5.slice(0, 3));
console.log(newArray5);


//slicing
const myArray6 = ['1', '2', '3', '4', '5', '6'];
console.log(myArray6.slice(-1));

//includes
const myArray7 = ['1', '2', '3', '4', '5', '6'];
console.log(myArray7.includes('A', '1'));

//every
const myArray8 = ['1', '2', '3', '4', '5'];
console.log(myArray8.every((item) => item > 0));

//some
const myArray9 = ['1', '2', '3', '4', '5'];
console.log(myArray9.some((item) => item > 6));

//find
const myArray10 = ['1', '2', '3', '4', '5'];
console.log(myArray10.find((item) => item > 4));

//reduce
const myArray11 = ['1', '2', '3', '4', '5'];
console.log(myArray11.reduce((pv, cv) => pv + cv));

const myArray12 = ['1', '2', '3', '4', '5'];
console.log(myArray12.reduceRight((pv, cv) => pv + cv));

//find index
const myArray13 = ['1', '2', '3', '4', '5'];
console.log(myArray13.findIndex((item) => item > 4));

//indexof
const myArray14 = ['1', '2', '3', '4', '5'];
console.log(myArray14.indexOf('3'));

//last indexof
const myArray15 = ['1', '2', '3', '4', '5'];
console.log(myArray15.lastIndexOf('6'));

//join 
const myArray16 = ['1', '2', '3', '4', '5'];
console.log(myArray16.join(""));

//toString
const myArray17 = ['A',40, 'B',90, [4, 5]];
console.log(myArray9.toString());

//Update

const myArray18 = [1, 2, 3, 4, 5];
myArray18[2] = 'A';
console.log(myArray18);

//reverse
const myArray19 = [1, 2, 3, 4, 5];
myArray19.reverse();
console.log(myArray19);

//sort
const myArray20 = [22,56,78,18,90];
myArray20.sort();
console.log(myArray20);

//splicing
const myArray21 = ['A','B','C','D','E'];
myArray21.splice(2, 1, 'X');
console.log(myArray21);

//fill
const myArray22 = ['A', 'B', 'C'];
myArray22.fill('A');
console.log(myArray22);

//copywithin
const myArray23 = [1,2,3,4];
myArray22.copyWithin(2,0);
console.log(myArray23);

//Delete
const myArray24 = ['A', 'B', 'C'];
myArray24.pop();
console.log(myArray24);
const myVar = myArray24.shift();
console.log(myVar);

//splice
const myArray25 = ['A', 'B', 'C'];
myArray25.splice();
console.log(myArray25);


//delete
const myArray26 = ['A', 'B', 'C'];
delete myArray26[2];
console.log(myArray26);
myArray26[2] = 'G';
console.log(myArray26);



