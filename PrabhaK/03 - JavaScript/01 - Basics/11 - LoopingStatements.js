/*

let i = 0;
while(i < 3)
{ // shows 0, then 1, then 2
    console.log(i);
    i++;
}
console.log("Next Program...")
let j = 3;
while(j)
{ // when j becomes 0, the condition becomes falsy, and the loop stops
    console.log(j);
    j--;
}
console.log("Next Program...")

let k = 0;
do
{
    console.log(k);
    k++;

}
while(k < 3);


for(let n = 0; n < 3; n++)
{
   console.log(n); 
}
console.log(n);

*/
let person = { name: "John", age: 30, job: "engineer" };
for (let key in person) {
    console.log( person[key]);
}

let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}