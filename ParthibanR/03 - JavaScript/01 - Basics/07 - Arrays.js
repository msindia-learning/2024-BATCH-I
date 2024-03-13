                 //Array

const cars = ["BMW", "audi", "maruthi", "jackwar"];

console.log(cars);
console.log(typeof (cars));
console.log(cars[2]);


                      //Array literal

const car = ["BMW", "audi", "maruthi", "jackwar"];
for (i = 0; i < car.length; i++) {
    console.log(car[i]);
}

                     //Array instances
const car = new Array();
car[0] = "bmw";
car[1] = "jackwar";
car[2] = "maruthi";
car[3] = "audi";


for (i = 0; i < car.length; i++) {
    console.log(car[i]);
}

                //Array Constructor

const car = new Array("bmw ", "audi ", "maruthi ");
for (i = 0; i < car.length; i++) {
    console.log(car[i]);
}


const car = ["bmw", "audi", "jackwar", 19, true, 18.99];
console.log(car);
console.log(typeof (car));



const cars = ["BMW", "audi", "maruthi", "jackwar"];

console.log(cars);
console.log(cars.length);
console.log(cars[0]);
console.log (cars.length - 1);


                      //forEach

const cars = ["BMW", "audi", "maruthi", "jackwar"];

cars.forEach(myFunction);

function myFunction(item) {
    console.log(item);
}

                      //Array methods


const cars = ["BMW", "audi", "maruthi", "jackwar"];
console.log(cars.length);                                         //length

console.log(cars.toString);                                       //toString





                   //Adding a new element in array

const cars = ["BMW", "audi", "maruthi", "jackwar"];
cars.push("rolesroys");
console.log(cars);


const cars = ["BMW", "audi", "maruthi", "jackwar"];
cars[2] = "rolesroy";
console.log(cars);

const cars = ["BMW", "audi", "maruthi", "jackwar"];
cars.unshift("rolesroy");
console.log(cars);

                //remove element in array

const cars = ["BMW", "audi", "maruthi", "jackwar"];
cars.pop();
console.log(cars);

const cars = ["BMW", "audi", "maruthi", "jackwar"];
cars.shift();
console.log(cars);


               //reverse
const cars = ["BMW", "audi", "maruthi", "jackwar"];
cars.reverse();
console.log(cars);


                        //concat 2 elements

const cars = ["BMW", "audi", "maruthi", "jackwar"];
const bike = ["duke", "MTK", "Yamaha", "Ktm"];
const store = cars.concat(bike);

for (i = 0; i < store.length; i++) {
    console.log(store[i]);
}

var i = 0;
while (i < store.length) {
    console.log(car[i]);
    i++
}

i = 0;
do {
    console.log(store[i]);
    i++

} while (i = 0)

console.log(store);



const cars = ["BMW", "audi", "maruthi", "jackwar"];
const bike = ["duke", "MTK", "Yamaha", "Ktm"];
const mobile = ["vivo", "samsung", "oppo", "redmi"];

const store = cars.concat(bike, mobile);

store.forEach(myVar);

function myVar(values) {
    console.log(values)
}
console.log(store);


const cars = ["BMW", "audi", "maruthi", "jackwar"];
(cars.splice(2, 0,'car','bike'));                                           //splice to added
console.log(cars);




const cars = ["BMW", "audi", "maruthi", "jackwar"];
cars.splice(0, 1 ,car ,bike);                                           //splice to remove
console.log(cars);



const cars = ["BMW", "audi", "maruthi", "jackwar"];
const group=cars.slice(0,1);                                           //slice to remove
console.log(group);                               



const cars = ["bMW", "audi", "maruthi", "jackwar"];
cars.sort();                                                        //Array sort
console.log(group);

const number = [12, 34, 21, 8, 9, 10];
const num = number.match(myFun);

function myFun(value, index, array) {
    return value * 4;
}


const da = new Date();
console.log(da);

const d = new Date(2024 - 03 - 05);
console.log(d);





