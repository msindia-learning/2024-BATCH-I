// same variable hold different data types

let a;
a = 789;
a = "nscet";
console.log(a);

//strings

let btn1 = "LORD's KRISHNA";
let btn2 = 'LORD KRISHNA';
console.log(btn1);
console.log(btn2);


//with or without decimals
let car1 = 456.8;
let car2 = 63;
let car3 = 2345.0000;
console.log(car1);
console.log(car2);
console.log(car3);

//js numbers
let hid1 = 875e7;
let hid2 = 875e-7;
let hid4 = hid1 + "  " + hid2;
console.log(hid4)


//bigint

let xr = BigInt("123456789012345678901234567890");
console.log(xr);

//boolean

let item1 = "doll";
let item2 = "barbie";
let item3 = "doll";
console.log(item1 == item3);
console.log(item2 == item3);

//array

const thrill = ["crime", "cybercrime", "forensic", "detective"];
thrill.push = "pshyo";
console.log(thrill);
thrill[1] = "horror";
console.log(thrill[1]);
console.log(thrill);

//object

const pers = { firstName: "abirami", lastname: "rajesh", age: "23", native: "Trichy" };
pers.qualification = "B.Com";
console.log(pers);
console.log(pers.qualification);

//typeof
let dif1 = typeof " ";
console.log(dif1);
let dif2 = typeof "julie";
console.log(dif2);
let dif3 = (typeof "true");
console.log(dif3);
let dif4 = typeof 345;
console.log(dif4);
let dif5;
console.log(dif5);