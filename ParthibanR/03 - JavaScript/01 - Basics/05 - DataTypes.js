                                                                   //primitive data types
                               //1.Number

let weight = 34;
let height = 128.26;
let food = -23;

console.log(typeof (weight));
console.log(typeof (height));
console.log(typeof (food));


                             //2.BigInt

let x = BigInt(12345678900987654321);
console.log(typeof (x));


                             //3.String

let a = 'Om';
let b = 'Muruga';
let c = (a +' '+ b);                                          //output:  Om Muruga
console.log(c);
console.log(typeof (c));



let a = '18';
let b = 'Muruga';
let c = (a + b);                                               //output:   18Muruga
console.log(c);
console.log(typeof (c));



let a = 18;
let b = 20;
let c = 'Muruga';                                              //output:   38Muruga
let d = (a + b + c);
console.log(d);
console.log(typeof (d));



let a = 'Muruga';
let b = 20;
let c = 18;                                                      //output:  Muruga2018
let d = (a + b + c);
console.log(d);
console.log(typeof (d));


                         //4.Boolean

let x = 10;
let y = 20;
let z = (x < y);                          //true

let z = (x > y);                          //false

let z = (x == y);                        //false

let z = (x != y);                        //tru>

let z = (x <= y);                       //true

let z = (x >= y);                      //false
console.log(z);



                        //5.undefind

let a
console.log(a);                       



let a 
let b                              //undefind
let c = (a + b);
console.log(a); 



let a = ;
console.log(a);


                                                                       //2. prefences datatypes

                                     //1.Array

let actor = ["vijay", "Ajith", "rajini", "kamal"]
console.log(actor);

console.log(actor[0]);
console.log(actor[1]);
console.log(actor[2]);
console.log(actor[3]);
console.log(typeof (actor));


                                  //2.Object

const person =
{
    name: "virat",
    age: 35,
    sports: "cricket",
    team: "india"
    
};
console.log(person.name);
console.log(person);
console.log(person.age);
console.log(typeof (person));
console.log(person.team);