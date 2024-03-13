//typeconversion

const frnds = ["jeni", "kabi", "anees", "fazal",];
function isArray(myArray)
{
    return myArray.constructor === Array;
}
console.log(isArray(frnds));


//date object
const myDate = new Date();
function isDate(myDate)
{
    return myDate.constructor === Date;
}
console.log(isDate(myDate));

//value undefined
let car;
console.log(car);

//type undefined
car = undefined;
console.log(car);

//empty values
let van = " ";
console.log(typeof (van));


//string to number 

let str = "123";
let num = parseInt(str);
console.log(num);

// string to floatnumber
let string = "11.789";
let number = parseFloat(string);
console.log(number); 


//number to string
let x = 123;
console.log(x.toString());