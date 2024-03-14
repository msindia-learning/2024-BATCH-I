let person = { name: "Akshu", age: 20, Marks: [90, 80] };
console.log(person.name);
console.log(person["Marks"]);
person.height = '3ft';
person['gender'] = 'female';
console.log(person);
console.log(delete person.age);


//Create an object using the object literal

let person1 = {};
person1.fname = "akshu";
person1.lname = "akshu";
person1.age = "20";
console.log(person1);



//create an object using the new word(new Object())

const person2 = new Object();
person2.name = "Akshu";
person2.class = "4";
console.log(person2);



//Lopping through the properties in object

const person3 = {
    fname: "akshu",
    lname: "akshu",
    age: 20,
};
person3.nationality = "english";
let text = "";
for(let x in person3)
{
    text += person3[x]+"";
}
console.log(text);
console.log(person3);




//nested Objects


myObj = { name: "Cars", version: "ES13", Frameworks: { frame1: "ES1", frame2: "ES2" } };
console.log(myObj.Frameworks.frame1);


//javascript object methods

const person4 = {
    firstName: "akshu",
    lastName: "akshu",
    age: 20,
    fullName: function()
    {
        return this.firstName + "" + this.lastName;
    }

};
person4.name = function()
{
    return (this.firstName + "" + this.lastName);
};
console.log(person4.fullName());
console.log(person4.name());




//replace the values


const person5 = {
    firstName: "akshu",
    lastName: "akshu",
    age: 20,
    fullName: function()
    {
        return this.firstName + "" + this.lastName;
    }
};
person5.isAdmin = true;
person5.firstName = "anu";
console.log(person5.firstName);
console.log(delete person5.age);


//spread operator
const person6 = {
    fname: "anu",
    lname: "akshu",
    age: 20,
};
console.log(person6);
const person7 = { ...person6 };
console.log(person7.age);



//Object Destructing
const person8 = {
    fname: "anu",
    lname: "akshu",
    age: 20,
};
const { fname, lname, age } = person8;
console.log(fname);
console.log(lname);
console.log(age);



//javaScript Getter

const person10 = {
    fname: "john",
    lname: "joe",
    language: "en",
    get lang()
    {
        return this.language.toUpperCase();
    }


}
console.log(person10.lang);




//Setter

const person11 = {
    fname: "john",
    lname: "joe",
    language: "",
    set lang(lang)
    {
        this.language = lang.toLowerCase();
    }
}
person11.lang = "en";
console.log(person11);



//object.DefineProperty(used to add the getter & setter Values)

const obj = { counter: 0 };

Object.defineProperty(obj, "reset", {
    get() { this.counter = 0; }
});
Object.defineProperty(obj, "increment", {
    get() { this.counter++; }
});
Object.defineProperty(obj, "decrement", {
    get() { this.counter--; }
});
Object.defineProperty(obj, "add", {
    set(value) { this.counter += value; }
});
Object.defineProperty(obj, "subtract", {
    set(value) { this.counter -= value; }
});

obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
console.log(obj);




//constructor

function person12(first, last, age, eye)
{
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eye = eye;
    this.name = function()
    {
        return this.firstName + "" + this.lastName;
    }
}
const object = new person12("john", "toe", 50, "blue");
console.log(object.age);






//prototypes
function person13(){
    this.fname= fname,
    this.lname = lname,
    this.age = age
}
person13.prototype.fullname = function()
{
    return this.fname + "" + this.lname
};
const myPro = new person13 ( "john", "toe", 20 );
console.log(myPro.fullname());



//for of
const variable = "akshu";
let text2 = '';
for(const x of variable)
{
    text2 += x;                     //no break so it should not print oone by one
}
console.log(text2);





//iterators


function mynumber2()
{
    let n = 0;
    return{
        next: function(){
            n += 10;
            return { value: n, done: false };
        }
    };
}
const n = mynumber2();

n.next();
n.next();
n.next();
n.next();

console.log(n.next().vlaue);