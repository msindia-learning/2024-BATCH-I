const person = {
    firstname: "Prabha",
    lastname: "kannan",
    age: 50,
    eyecolor: "blue"
};

info = person.age;
console.log(info);
console.log("the person age is  " + info);

var obj = {
    name: "prabha" ,
    emailId: "kprabha0710@gmail.com",
phonenumber: 9790578061

}
console.log(obj);




function m()
{
    window.value = 90;

}
function n()
{
    console.log(window.value);
}

n();
function emp(id, name, salary)
{
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.changesalary = changesalary;
    function changesalary(othersalary)
    {
        this.salary = othersalary;
    }

}
user = new emp(87, "Prabha", 300000);
/*console.log(user.id + " " + user.name + " " + user.salary);*/
user.changesalary(456789);

console.log(user.salary);
const username = 'wholename';
let person = {
    firstname: 'prabha',
    lastname :'Kannan',
    age: 21,
    friends: ['Meraaa', 'Ranjani', 'Manuuu'],
    [username] : 'prahakannan',
    greet: function()
    {
        alert('Helloo world')
    },
    hobbies()
    {
        return `my name is ${this.name} , my age is ${this.age} , my friends nake is ${this.friends}`;

    }


}
person.isAdmin = true;
person.name = 'aathirah';
//delete person.age;
//console.log(person['name']);
//console.log(person);
//console.log(person[hobbies()]);

const { firstname, lastname, age } = person;
console.log(firstname);
console.log(person.friends);
console.log(person.hobbies());


//length finding



Object.objsize = function(myobj)
{
    var size = 0; var key;
    for(key in myobj)
    {
        if(myobj.hasOwnProperty(key))
            size++;
    }
    return size;

}
var student = {
    name: 'Prabha',
    class: 'finalyear',
    rollno: '921020104035'
};
var objsize = Object.objsize(student);
console.log(objsize);

let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};

console.log(Object.keys(student));


                          //reading status of person in library

var library = [
    {
        title: 'Bill gates',
        author: 'The road ahead',
        readingstatus: true
    },
    {
        title: 'Empowerment of women',
        author: 'Prabha kannan',
        readingstatus: true
    },
    {
        title: 'Life of Prabha',
        author: 'Aathirah',
        readingstatus: false

    }
];
for(var i = 0; i < library.length; i++) {
    var book = " '" + library[i].title + "'" + ' by ' + library[i].author + "'";
    if(library[i].readingstatus)
    {
        console.log("Already read " + book);
    }
    else
    {
        console.log("You still need to read" + book);
    }
}


                              // calculate the volume of a cylinder

function cylinder(h, d)
{
    this.h = h;
    this.d = d;
    this.volume = function() {
        var radius = this.d / 2;
        return this.h * Math.PI * radius * radius;
    };
}
var cylinder = new cylinder(7, 4);
console.log('volume = ' + cylinder.volume().toFixed(4));


//Sort an array using Bubble Sorting method



function bubbleSort(array)
{
    var isSorted = false;
    while(!isSorted)
    {
        isSorted = true;
        for(var n = 0; n < array.length - 1; n++)
        {
            if(array[n] > array[n + 1])
            {
                var temp = array[n + 1];
                array[n + 1] = array[n];
                array[n] = temp;
                isSorted = false;
            }
        }
    }
    return array;
}

console.log(bubbleSort([1, 5, 3, 2, 4]));

// Returns a subset of a string

String.prototype.Substring = function()
{
    var subset = [];
    for(var m = 0; m < this.length + 1; m++)
    {
        for(var n = m + 1; n < this.length + 1; n++) {
            subset.push(this.slice(m, n));
        }
    }
    return subset;
};
console.log("dog".Substring());












