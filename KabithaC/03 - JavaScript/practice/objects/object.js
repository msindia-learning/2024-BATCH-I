//create a object

const person = {
    name: 'kabi',
    age: '21',
    friends: ['jeni', 'anees', 'fazal']
};
console.log(person);
console.log(person.friends);

//add and update a properties using dot notation
const vechiles = {
    vechile: 'car',
    model: 'BMW',
    color: 'black'
};
vechiles.fuel = 'diesel';
vechiles.color = 'blue';

console.log(vechiles);

// let to create a new object
const person1 = {
    name: 'alice',
    age: 30
};
let newperson1 = {
    name: 'ammu',
    age: 25
};
//wperson1.age = 34

console.log(person1);
console.log(newperson1);
 
//using let keyword
const person3 = {
    name: 'abarna',
    age: 20
};
let newperson2 = {
    name: 'sri',
    age: 21
};
let newperson4 = {
    name: 'sai',
    age: 22
};
console.log(newperson4);
console.log(newperson2);
console.log(person3);
 
//new keyword to create a object

const friend = new Object();
friend.name = 'Anees';
friend.lname = 'fathima';
friend.age = 22;
friend.college = 'nscet';
console.log(friend);
console.log(friend['name']);

//delete properties

let houseown = {
    type: "newhouse",
    flat: "Individual",
    place: "anna nagar",
    rentamount: 10000
};
delete houseown['rentamount'];
console.log(houseown);

//for in

const per = {
    first: 'deepa',
    second: 'lakshmi',
    age: 15
};
for(let prop in per)
{
    console.log(per[prop]);
}

console.log(per.second);

//nested obj
const myObj = {
    name: 'jackiechan',
    tv: 'chutti tv',
    characters:
    {
        char1: "jackie",
        char2: "uncle",
        char3: "julie",
        char4: "shendu",
        char5: "shadowkhan"
    }
}

console.log(myObj.characters.char3);
console.log(myObj);
console.log(myObj.characters);

//spread operator
let person5= {
    name: 'kamal',
    age: 30,
    hobbies: [
        'reading', 'playing', 'sleeping'
    ]
}

const details = {
    ...person5
};
console.log(details);

///this keyword 

const colors = {
    fav1: "green",
    fav2: " yellow",
    fav3: "blue",
    fav4: "pink"
};
   colors.favcolor = function()
    {
       return (this.fav1 + " " + this.fav2 + " " + this.fav3).toUpperCase();                 //toUpperCase
    };

console.log(colors.favcolor());

//method and shorthand
const frnds = {
    name: "srinithi",
    age: 22,
    hobbies: ["watching anime", "sleeping", "playing"],
    speak()
    {
        return this.hobbies;

    }
};
console.log(frnds.hobbies);

//object destructuring

const marks = {
    maths: 88,
    science: 94,
    socialscience: 97
};
const
    { maths, science, socialscience } = marks;
console.log(maths);
console.log(socialscience);

//this keyword

let students =
{
    name1: 'kabi',
    name2: 'jeni',
    name3: 'akshu',
    name4: 'prabha',
    name5: 'parthiba',
    task()
    {
        return `Student name is  ${this.name1}, ${this.name2} , ${this.name3}`;
    }

};
console.log(students.task());

//display object 

const color = {
    name1: 'green',
    name2: 'yellow',
    name3:'blue',
}

for(let key in color)
{
    console.log(` ${color}`);
}

//display object in a loop  and object values

const god = {
    god1: 'murugan',
    god2: 'lord krishna',
    god3: 'shivan',
    god4: 'Ayyapan'
}
console.log(Object.values(god));
for(let key in god)
{
    console.log(`${key}: ${god[key]}`);
}

//JSON Stringify
const Obj = {
    name1: "kabi",
    name2: "jeni",
    name3: "anees"
}
let myString = JSON.stringify(Obj);
console.log(myString);

//Stringify Dates
const Obj1 = {
    name: "kabi",
    today: new Date()
}
let mystr= JSON.stringify(Obj1);
console.log(mystr);

//Stringify Functions
const task1 = {
    fname: "kabi",
    sname: "jeni",
    tname: "akshu",
    demo()
    {
        return (this.fname + " " + " " +this.sname);
    }
}
let str = JSON.stringify(task1);
console.log(str);

//Stringify arrays
const arr = ["murugan", "krishna", "shivan", "vinayagar"];
let json = JSON.stringify(arr);
console.log(json);


