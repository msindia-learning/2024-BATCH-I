
const num = 42;
const numString = num.toString();

console.log("Number:", num);      
console.log("Number as string:", numString);


const strNum = "123";

// Using Number(string)
const num1 = Number(strNum);
console.log("String to number:", num1); 
const invalidStr = "abc";
const num2 = Number(invalidStr);
console.log("Invalid string to number:", num2); // Output: NaN (Not a Number)

// Using parseInt(string, radix)
const hexString = "FF"; // Hexadecimal string
const num3 = parseInt(hexString, 16);
console.log("hexa-decimal string " + hexString +" to number: ",Number(num3));
const boolTrue = true;
const boolFalse = false;

console.log("true as string:", boolTrue.toString()); 
console.log("true as number:", boolTrue);            

console.log("false as string:", boolFalse.toString()); 
console.log("false as number:", boolFalse);          