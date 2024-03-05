//array literal
let interns = ["Akshaya", "Jenifar", "Kabitha", "Prabha", "Parthiban"];
let array = ["habibi", "dubai"];
interns.pop();//delete last element
interns.shift();//delete first element
interns.push("Abi");//add element at the end
interns.unshift("Aanandhi");//add element at the first
interns[3] = "Sam"; //update the element at the particular index
let concatArr = array.concat(interns);//concat
let str = "Habibi, Come to Dubai!";//from method
let DubaiArr = Array.from(str);
console.log(concatArr);
console.log(interns);
console.log(DubaiArr);

// using array directly
let arr = new Array();

arr[0] = 123;
arr[1] = 163;
arr[2] = 183;
arr[3] = 123;
arr[4] = 103;

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log(arr[1]);

//using array constructor
var emp = new Array("Jasin", "Ajay", "Sumitha");
for (i = 0; i < emp.length; i++) {
   console.log(emp[i]);
}  
