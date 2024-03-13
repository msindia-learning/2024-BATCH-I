                 //creating an array

let person = ["leo", "das", "pandi", "vijay"];
console.log(person);
console.log(person[0]);               //leo
console.log(person[3]);              //vijay
console.log(person[4]);             //undefined

console.log(person.length);              // 4
console.log(typeof (person));            // object
console.log(person.constructor);        // function:[array]


for (i = 0; i < person.length; i++) {
    console.log(person[i]);
}

let i = 0;
while (i < person.length) {
    console.log(person[i]);
    i++;
}

let i = 0;
do {
    console.log(person[i]);
    i++;
}while(i<person.length)



let bike = new Array();
bike[0] = "KTM";
bike[1] = "FZ";
bike[2] = "duke";
bike[3] = "fashion";
bike[4] = "herohonda";

console.log(bike);
console.log(typeof (bike));
console.log(bike.length);

for (i = 0; i < bike.length; i++) {
    console.log(bike[i]);
}

               //push method()

var car = ["bmw", "rollsroys", "audi", "bens"];
console.log(car);

car.push("maruthi");
console.log(car);                //elements added  last position.

          //unshift method()

car.unshift("jackwar");
console.log(car);              //elements added first position.


                 //pop method()

var phones = ["apple", "vivo", "redmi", "oppo"];
console.log(phones);

phones.pop();   
console.log(phones);              //last element removed.

               //shift method()

phones.shift();
console.log(phones);            //first element removed.


                       //Adding and removing elements from a specfic position

var fruits = ["apple", "orange", "banana", "berry", "papaya"];
console.log(fruits);
console.log(fruits[3]);
console.log(fruits.length);

fruits.splice(2, 1);                         //splice
console.log(fruits);

fruits.splice(2, 3);
console.log(fruits);


       /*                   //two dimensional & multidimensional arrays

function myFunction(myMatrix) {
    for (i = 0; i <= myMatrix.length; i++) {                  //i represent rows
        for (j = 0; j <= myMatrix.length; j++) {             // j represent columns
            console.log(myMatrix[i][j]);
        }
    }
}
*/
                  //reference for js array methods

const car = ["bmw", "audi", "rollsroys", "maruthi"];
const bike = ["fz", "duke", "rs100", "MT15"];
console.log(car.concat(bike));                                                  //concat()

const car = ["bmw", "audi", "rollsroys", "maruthi"];
const bike = ["fz", "duke", "rs100", "MT15"];
var fruits = ["apple", "orange", "banana", "berry", "papaya"];
console.log(car.concat(bike,fruits)); 

const firstname = ["leo", "vijay", "pandi", "Ms"];
const lastname = ["das", "king", "hittuu", "mahi"];
const store = firstname.join(lastname);
console.log(store);                                                          //join()

const phone = ["vivo", "redmi", "oppo", "apple"];
const index= phone.indexOf("redmi");                                        //indexOf()
console.log(index);              

const car = ["bmw", "audi", "rollsroys", "maruthi","audi"];
const lstindex = car.lastIndexOf("audi");                                   //lastindexOf()
console.log(lstindex);


const phone = ["vivo", "redmi", "oppo", "apple"];
const x = phone.reverse();                                                 //reverse()
console.log(x);

const car = ["bmw", "audi", "rollsroys", "maruthi"];
const y = car.slice(1, 3);                                                //slice()
console.log(y);  

var fruits = ["apple", "orange", "banana", "berry", "papaya"];
const x = fruits.sort();                                                 //sort()
console.log(fruits);



const phone = ["vivo", "redmi", "oppo", "apple"];
console.log(typeof (phone));
console.log(typeof phone);                                             //typeof()

const phone = ["vivo", "redmi", "oppo", "apple"];
const c = phone.toString();                                           //toString()
console.log(s);
console.log(typeof (s));




var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
if (numbers % 2 == 0) {
    console.log("Even")
}
else {
    console.log("Odd")
}

                                              //some() and every()
const free = [1, 2, 3, 4, 5];
const fre = [3, 5, 8, 9, 11];

const result = free.every(num => num < 10);
const resultt = fre.every(num => num < 10);
console.log(result, resultt);

const num = [1, 2, 3, 4, 5, 6];
const phoe = [1, 3, 5, 7, 9];
const mnb = num.some(num => num % 2 === 0);
const vcx = phoe.some(phoe => num % 2 === 0);

console.log(phoe, num);

                                              //forEach()

const car = ["bmw", "audi", "rollsroys", "maruthi"];
car.forEach(myFunction);
           
function myFunction(items) {
    console.log(items);
}


const bike = ["fz", "duke", "ktm"];
bike.forEach(myFunction);

function myFunction(item) {
    console.log(item);
}


var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function myFunction(add, value) {
    return add + value;
}

function myFun(item) {
    console.log(numbers.reduce(myFunction));
}
myFun();

let numbers = [10, 20, 45, 64];
numbers.forEach(function (x) {
    console.log(x % 2 == 0);
});


let number = [10, 20, 45, 64];
number.forEach(x => {
    console.log(x % 2 == 0);
});

                           //for on loop
let number = [25, 45, 67, 89];
for (let n of number) {
    console.log((n % 2 == 0) ? 'even' : 'odd');
}

                          //array enteries() return key,value pairs.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let n of f) {
    console.log(n);                                             //return key values pair
}

                                   //from() create new arr from existing array
let alphabet = "ABCDEFGH";
let alp = Array.from(alphabet);
console.log(alp);
                                 //array.of() create new arr from given arrgu   
let alpp = Array.of("A","B","C","D");
console.log(alpp);

                                //fill()
const car = ["bmw", "audi", "rollsroys", "maruthi"];
car.fill("BIKES");
car.fill("ktm", 2, 4);
console.log(car);

                               //copywithin()

const bike = ["ktm", "fz", "duke", "pashion", "hero", "rx100"];
console.log(bike.copyWithin(3, 5));
console.log(bike.copywithin(1));

                            //sorting()

const bike = ["ktm", "fz", "duke", "pashion", "hero", "rx100"];
//console.log(bike.sort());
bike.sort(function (a, b) {
    return a - b
});
console.log(bike);
console.log(bike[2]);




const num = [2, 56, 8, 34, 23, 4, 11,];
num.sort(function (a, b)
{
    return a - b
});
console.log(num);
console.log(num[3]);

                                  //filter()
let votersage = [18,11,34,67,89,10,45];
let coo = votersage.filter(myFun);
console.log(coo);

function myFun(votage) {
    return votage >= 18;
}

                                 //find()
let agee = [12, 8, 34, 11, 9, 4, 5];
let x = agee.find(myFunn);
console.log(x);

function myFunn(age) {
    return age > 18;
}

                                                        //flat() ->added subarray concat methods
let numbers = [[1, 2], [3, 4], [5, 6]];
let nuu = numbers.flat();
console.log(nuu);