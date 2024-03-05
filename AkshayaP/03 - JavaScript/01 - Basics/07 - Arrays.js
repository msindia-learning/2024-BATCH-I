const Animals = ["lion","Tiger","Elephant"];
/*const [0] = "lion";
const [1] = "Tiger";
const [2] = "Elephant";*/
console.log(Animals);
let values = Animals[0];
console.log(values);
Animals[1] = "Cheetah"
console.log(Animals.toString());
let length = Animals.length;
console.log(length);
let Wild = Animals[Animals.length - 1];
console.log(Wild);

/*const Pets = new Array("Cat", "Dog", "Rat");
console.log(Array);*/
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

