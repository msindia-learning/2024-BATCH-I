const person = Object.freeze({ //object literal creation
    name: 'Jeni',
    age: 21,
    role: 'intern'
});
console.log(person);
console.log(person.name);
console.log(delete person.role);

const person1 = {};
person1.fname = "Jenifar";
person1.lname = "Fathima";
person1.age = 21;
person1.place = "Theni";
console.log(person1);

const person2 = new Object();
person2.fname = "Mohammed";
person2.lname = "Azarudeen";
person2.age = 25;
person2.place = "Theni";
console.log(person2);

const x = person1;
x.age = 10;
console.log("The age of person1 is: "+person1.age);//objects are mutable 

 //can't change the thing that const point, but we can modify the content of the const object

const interns = {
    name: ['Jeni', 'Kabi', 'akshu', 'prabhu', 'parthi'],
    greeting: () => {
        for (let i in interns.name) {
            console.log(interns.name[i]);
        }
        return interns.name.length;
    }
};
console.log(interns.greeting()); 


const vehicle = {
    count: 5,
    customer: 100,
    cars :{
        car1: "ford",
        car2: "Audi",
        car3: "BMW"
    }
}

console.log("nested object: " + vehicle.cars.car1);//nested object concept

const food = {
    hotel: "Saravana Bhavan",
    Place: "Chennai",
    type: {
        veg: ["Dosa", "Chappathi", "Poori", "Pongal"],
        nonveg: ["Mutton Briyani", "Chicken Kuruma", "Vanjaram fry"]
    },
    today: new Date(),
    order: function(){
        const final = []; 
        for (let i in this.type.veg) {
            final.push(this.type.veg[i].toUpperCase()); 
        }
        return final;
    }
};
console.log(food);
console.log(food.order());
console.log("Result of object to array" + Object.values(food));//to convert object into array
console.log("Result of object to STRING" + JSON.stringify(food));//to convert object into string, json stringify will not stringify function

console.log("Result of array to STRING: " + JSON.stringify(food.type.nonveg));

//object accessor

const employee = {
    fname: "Shabeer",
    lname: "Ahamed",
    age: "25",
    Place: "",
    get fullname() {
        return this.fname + " " + this.lname;
    },
    set placename(salem) {
        this.Place = salem;
    }
}
employee.Place = "Salem";
console.log(employee.fullname); //using getter function
console.log(employee.Place); // using setter  function


Object.defineProperty(employee, "fname", {
    value: "Jenifar",
    writable: false,// can be modify if it is true
    enumerable: false,//show the property inloop if it is true
    configurable: false//allow deleting property if it is true
});
employee.fname = "Azar";
console.log(employee.fname);


for(let i in employee) {
    console.log(i);
}

delete employee.fname;
console.log(employee.fname)

function StudentDetails(name, age, dept, subject) {
    this.name = name;
    this.age = age;
    this.dept = dept;
    this.subject = subject;
    this.getDetails = function () {
        return `Name: ${this.name}  Age: ${this.age}  Dept: ${this.dept}  Subject: ${this.subject}`;
    };
}

const student1 = new StudentDetails('Jenifar', 22, 'CSE', 'Maths');
const student2 = new StudentDetails('Achu', 21, 'CSE', 'Physics');
const student3 = new StudentDetails('Kabi', 23, 'CSE', 'Chemistry');
const student4 = new StudentDetails('Prabha', 20, 'CSE', 'Biology');

console.log(student1.getDetails()) // constructor 


function Booking(name, date, movieName, amount) {
    this.name = name;
    this.date = date;
    this.movieName = movieName;
    this.amount = amount;
}

Booking.prototype.notification = function () {;
    return `Hi ${this.name},Your movie ${this.movieName} is booked on ${this.date}. Total amount is ${this.amount}`;
}

const book1 = new Booking("Jenifar", "12-02-2024", "Manjummel Boys", 175);
const book2 = new Booking("Azar", "12-02-2024", "Manjummel Boys", 175);
const book3 = new Booking("Shabeer", "13-02-2024", "Manjummel Boys", 175);
const book4 = new Booking("Hakkeem", "14-02-2024", "Manjummel Boys", 175);
const book5 = new Booking("Regina", "15-02-2024", "Manjummel Boys", 175);

console.log(book1.notification());
console.log(book2.notification());
console.log(book3.notification());
console.log(book4.notification());