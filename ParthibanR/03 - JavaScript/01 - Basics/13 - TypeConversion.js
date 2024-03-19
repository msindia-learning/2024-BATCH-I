                         //Converting Strings to Numbers

Number("3.14");
console.log(Number);

Number("    ");
console.log(Number);

Number("99 88");
console.log(Number);

Number("John");
console.log(Number);
                                                  //Unary + Operator

let y = "5";
let x = +y;
console.log(x);                                      //5
console.log(typeof (x));                             //string
console.log(typeof (y));                             //number



let y = "Vijay";
let x = +y;
console.log(x);                                      //NaN
console.log(typeof (x));                             //number
console.log(typeof (y));                             //string

                              //Converting Numbers to Strings

let x = 123;
String(x)
console.log(x);
console.log(typeof String(x));



String(x = 10)
console.log(x);
console.log(typeof String(x));

let x = 123;
console.log(x.toString());
console.log(typeof (x));


                        //Converting Dates to Numbers
d = new Date();
console.log(typeof (Number(d)));
console.log(d);


d = new Date();
console.log(d.getTime());
console.log(d);


                       //converting Boolean to Numbers
let cars = false;
console.log(cars);                           //false
console.log(Number(false));                 // 0


let bike = true;
console.log(bike);                        //true
console.log(Number(true));               //  1