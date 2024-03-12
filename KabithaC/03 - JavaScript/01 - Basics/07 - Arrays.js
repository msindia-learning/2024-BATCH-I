// create

const cre = [3, 8, 5, 7, 3, 1, 4, 65, 8,];
console.log(cre);

// array
let cars = ["BMW", "Volvo", "Saab"];
console.log(cars[1]);

let toys = [];
toys[0] = "barbie";
toys[1] = "shinchan";
toys[2] = "unicorn horse";
toys[3] = "parrot";
console.log(toys);
toys[0] = "mickeymouse";
console.log(toys);
console.log(toys.toString());             //covert array to string
console.log(toys.length);                //length property
toys[6] = "rabbit";                      // undefined value
console.log(toys);
                                                                      

// array are obj
const demo = ["kabi", "B.E", 21];
console.log(demo[0]);
console.log(demo[2]);

//looping array elements
const f= ["mango", "papaya", "apple", "strawberry", "watermelon"];
let task = "<ul>";
for(i = 0; i < f.length; i++)
{
    task += "<li>" + f[i] + "</li>";
   
}
task +="<ul>";
console.log(task);


//associative arrays
console.log("associative array");
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
console.log(person.length);  
console.log(person[1]);
const pr = [];
pr[0] = "John";
pr[1] = "Doe";
console.log(pr.length);     

//typeof

const colors = ["green", "yellow", "blue", "pink", "violet"];
console.log(typeof colors);

const temp = [1, 2, 3, 4, 4, 5, 9];
console.log(typeof temp);

//new array - isArray() method

var arr = new Array(1,2);
console.log(arr); 

//array

const myArray = [1, 2, 3, 4, 5];
console.log(typeof myArray);
console.log(Array.isArray(myArray));
const myVar = "kabi";
console.log(typeof myVar);
console.log(Array.isArray(myVar));

//pushing -  add a new element at the end

const sub = ["Tamil", "English", "Maths", "Science"];
sub.push("SocialScience");
console.log(sub);                                                

//unshift - add a new element at the beginning

const fam = ["Biomaths", "pure science", "commerce", "history"];
fam.unshift("Computer Science");
console.log(fam);

//splice  - it perform the addition and deletions

const homeappliances = ["fan", "fridge", "washing machine"];
homeappliances.splice(1, 0, "Air Conditioner", "Furnitures");
console.log(homeappliances);
homeappliances.splice(1, 2);
console.log(homeappliances);

//concat - join the two strings.

const var1 = ["anees", "jeni", "kabi", "sai"];
const var2 = ["sound", "fazal", "sri"];
const var3 = var1.concat(var2);
console.log(var3);
const var4 = var1.concat("abu");
console.log(var4);

//from() method - normal string change into array value
const var5 = Array.from("kabitha");
console.log(var5);


//READ
   // Traversing all elements in an array
//foreach() method

const var6 = ["n", "s", "c", "e", "t"];
var6.forEach((item) => console.log(item));


//map
const var7 = [8, 7, 4, 5, 2, 9];
var6.map((x) => console.log(x));
const newNum = var7.map((x) => x * x);
console.log(newNum);
                                           

//filter
const deArray = [1, 2, 3, 6, 9];
console.log(deArray.filter((x) => x % 3 == 0));

//slice - insert and delete based on the input
const Alpha = ["A", "B", "C", "D", "E", "F"];
console.log(Alpha.slice(0, 4));
console.log(Alpha.slice(-1));
console.log(Alpha.slice(1, -3));


//conditional checks in an array

   //include method is used to data or value found in the array it will show true or otherwise false.
const beta = ['A', 'B', 'C', 'D', 'E'];
console.log(beta.includes('C'));
console.log(beta.includes('c'));
console.log(beta.includes('Q'));


//every() -all the elements are true.
//some() - Anyone of the element is true.
const numbers = [10, 20, 30, 70, 180];
console.log(numbers.every((item) => item > 5));
console.log(numbers.every((item) => item <105));
console.log(numbers.every((item) => item > 150));
console.log(numbers.some((item) => item <5));                   //some()
console.log(numbers.some((item) => item > 150));

var days = ['monday', 'tuesday', 'wednesday', 'Thursday', 'friday'];
console.log(days.length);
console.log(days[2]);
days.push('saturday', 'sunday');
console.log(days);
