// JavaScript Object by object literal
Intern = {
    Name: "Jenifar",
    Id: 20
};

Intern["DOB"] = "21-02-2003";

let result = Intern["Name"];
console.log(result);

for (let i in Intern) {
    console.log(i + ": " + Intern[i]);
}

//By creating instance of Object

let newObj = new Object();
newObj.Id = 21;
newObj.Name = "ABCD";
newObj.email = "abcd@gmail.com";
console.log(newObj);

//using constructor
function Emp(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;

    this.changeSalary = function (otherSalary) {
        this.salary = otherSalary;
    };
}

let e = new Emp(103, "Sonoo Jaiswal", 30000);
console.log(e.id + " " + e.name + " " + e.salary);
e.changeSalary(45000);
console.log(e.id + " " + e.name + " " + e.salary);
 //crud operation methods
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

//Create
person.middleName = "Andrew";

//Read
const firstName = person.firstName;

//Update
person.age = 31;
person.job = "Engineer";

let person2 = Object.assign({}, person);
person2.status = "Unmarried";

Object.freeze(person);
person.status = "Married";
console.log("original object : " , person);
console.log("Copied object : " ,person2)

console.log("is person in freeze state : ", Object.isFrozen(person));
//Delete
delete person.lastName;

console.log(person); 

const animal = {
    makeSound() {
        console.log("Generic animal sound");
    }
};

const dog = Object.create(animal); // Create dog object with animal as prototype
dog.makeSound = function () {
    console.log("Woof!");
}; // Override makeSound method for dog

dog.makeSound(); // Calls the overridden method on dog
/*
// 1. Object creation and property access
const person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30
};

console.log("First name:", person.firstName); // Access property using dot notation
console.log("All property names:", Object.keys(person)); // Get all property names

// 2. Property manipulation and copying
person.job = "Software Developer"; // Add a new property
person.age++; // Update an existing property
const friend = Object.assign({}, person); // Copy properties to a new object (shallow copy)

console.log("Original person:", person);
console.log("Friend (copied):", friend);

// 3. Property configuration
Object.freeze(friend); // Prevent modifications to the friend object
friend.city = "New York"; // This won't work because the object is frozen

// 4. Checking object state
console.log("Is friend frozen?", Object.isFrozen(friend));

// 5. Prototype example (simplified)

*/