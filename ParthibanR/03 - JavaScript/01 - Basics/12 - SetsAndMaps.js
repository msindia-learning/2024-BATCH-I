                                       //new sets()

const letters = new Set(["a", "b", "c"]);
console.log(letters);

                                 // create set and add values

const cars = new Set();
cars.add("audi");
cars.add("bens");
cars.add("cava");

console.log(cars.size);
console.log(cars);


                                           //create a set and variables

const bike = new Set();

const a = "Duke";
const b = "Ktm";
const c = "Fz";

bike.add(a);
bike.add(b);
bike.add(c);

console.log(bike);
console.log(bike.size);
console.log(typeof (bike));


const players = new Set(["Abd","maxi"]);
players.add("virat");
players.add("msd");
players.add("rohit");

console.log(players)                      
console.log(players.size);                       //  5
console.log(players.values());                  // Set iterator
console.log(typeof (players));                 //  objects



const car = new Set();
car.add("bens");
car.add("bmw");
car.add("jackwar");

console.log(car);
console.log(car.values());
console.log(car.size);

                                                           //delete
car.delete("bmw");
console.log(car);




const bike = new Set(["ktm", "duke", "fz"]);
let spar = "";
bike.forEach(function (result){
    spar = spar+ result;
})

console.log(spar);
console.log(bike);
console.log(bike.values());
console.log(bike.size);

                                                              //map()

const fruits = new Map([
    ["apple",500],
    ["bananas",300],
    ["oranges",200]
]);

console.log(fruits);
fruits.set("bru", 400);
console.log(fruits);


const bike = new Map();

bike.set("ktm", 1200000);                                        //map added
bike.set("fz", 1000000);
bike.set("duke", 1100000);

console.log(bike);
bike.get("ktm");
console.log(bike.size);
console.log(bike.values());                            //values
console.log(bike.keys());                              //keys


bike.has("ktm");
console.log(bike.has("ktm"));                         //statement true



bike.delete("fz");                                     //map deleted
console.log(bike);          


bike.has("fz");
console.log(bike.has("fz"));                         //statement  false



const car = new Map();
let spar = "";
car.set("bmw",1300000);
car.set("bens",1200000);
car.set("audi",1000000);

console.log(car);

car.forEach(function (value,key) {
    spar = spar + key + "=" + value;

})

console.log(car);










                                  //bitwise



let a = 5;                       // 5=> 0 1 0 1 
let b = 1;                      //  1=> 0 0 0 1 &
                                
console.log(a & b);            //       0 0 0 1



let a = 5;                    //  5=> 0 1 0 1
let b = 1;                   //   1=> 0 0 0 1
                      
console.log(a | b);          //       0 1 0 1


let a = 5;                    //   5=> 0 1 0 1

console.log(~a);              //       1 0 1 0


let a = 5;                    //  5=> 0 1 0 1
let b = 1;                   //   1=> 0 0 0 1

console.log(a ^ b);         //        0 1 0 0



