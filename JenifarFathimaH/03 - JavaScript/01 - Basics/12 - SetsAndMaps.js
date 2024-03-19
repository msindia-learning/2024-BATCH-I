const fruits = new Map();

fruits.set("apple", "red");
fruits.set("banana", "yellow");
fruits.set("orange", "orange");

console.log(fruits.get("apple")); // Output: "red"
console.log(fruits.has("mango")); // Output: false

for (const [fruit, color] of fruits.entries()) {
    console.log(fruit, color);
}
console.log("mapped elements are :" ,fruits);
console.log(fruits.size); // Output: 3

fruits.delete("banana");
fruits.set("strawberry", "rose");
console.log(fruits.size); // Output: 2

//set example
// Create a Set
const uniqueNumbers = new Set([1, 2, 2, 3, 4]); 

console.log("Size of the set : ",uniqueNumbers.size);

uniqueNumbers.add(5);
uniqueNumbers.add(9);
console.log(uniqueNumbers.has(2)); 

for (const number of uniqueNumbers.values()) {
    console.log(number);
}

uniqueNumbers.delete(3);
console.log(uniqueNumbers); 

uniqueNumbers.clear();
console.log(uniqueNumbers.size); 
