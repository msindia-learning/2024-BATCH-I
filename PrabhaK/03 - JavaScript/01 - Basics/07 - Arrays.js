/*let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[2] = "Prabha";
console.log(fruits[2]);


fruits[3] = "Javiii"
console.log(fruits);

console.log(fruits.length);

console.log(fruits.pop());
console.log(fruits);

console.log(fruits.pop());
console.log(fruits);

fruits.push("Cat");
console.log(fruits);


fruits.shift();
console.log(fruits);


let arr = ["Apple", { name: "Prabha" }, function() { console.log("hello"); }];
console.log(arr[1].name);
*/



//adding to array  elements
/*
const myarr = Array.of(7);
console.log(myarr);
const value = Array.of(1, 2, 3, 4);
console.log(value);

//unshift method

myarr.unshift('prabha');
console.log(myarr);

//splice method

const letter = ['a', 'b', 'c', 'd'];
letter.splice(2, 0, 'new' , 'movie');
console.log(letter);

//concat method
const myarr1 = [1, 2, 3, 4, 5];
myarr2 = [6, 7, 8];
newarr = myarr1.concat(letter);
console.log(newarr);

const some = Array.from('Prabha');
console.log(some);
*/

//read --> Map method
const value = Array.of(1, 2, 3, 4);
value.map((x) => console.log(x));

const newarray = value.map((x) => x * x);
console.log(newarray);

// filer() method

const myarray = [1, 3, 6, 9, 12];
console.log(myarray.filter((x) => x % 3 == 0));

const array = myarray.filter((item) => item > 4);
console.log(array);

delete myarray[2];
console.log(myarray);









