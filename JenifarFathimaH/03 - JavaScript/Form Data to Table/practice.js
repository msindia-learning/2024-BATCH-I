const map = new Map();

// Define a complex object
const keyObj= { id: 1, name: 'John' };

// Define a function
const keyFunc = function () { return 'keyFunc'; };

// Set values in the Map using the complex object and function as keys
map.set(keyFunc, 'Value associated with keyFunc');

// Get values from the Map using the complex object and function as keys
console.log(map.get(keyObj)); // Output: Value associated with keyObj
console.log(map.get(keyFunc)); // Output: Value associated with keyFunc
