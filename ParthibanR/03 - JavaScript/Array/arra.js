         //example
var arr = [1, 2, 5, 4, 5, 5, 6];
var newArr = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== 5) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);




           //1.

let arr=[[1,2,3],[4,5,6],[7,8,9]];
let value = arr => {
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
         let array = arr[i][j];
         arr[i][j] = arr[j][i];
         arr[j][i] = array;
      };
   }
}
value(arr);
console.log(arr);


              //2.      

let arr1 = [[1,4,5], [2,3,1], [7,2,1]]; 
let arr2 = [[2,3,2],[1,2,1],[5,6,1]]; 
let arr3 = []; 


      for (let i = 0; i <arr1.length; i++) {
         arr3[i] = [];
	  for (let j = 0; j < arr1[i].length; j++) { 
		arr3[i][j]= arr1[i][j] + arr2[i][j]; 
	} 
} 
console.log(arr3);


           //3.
let array1 = [[1, 2, 3], [4, 5, 6]];
let valuess = [];

for (let i = 0; i < array1[0].length; i++) {
    valuess.push([]);
    let sum = 0;
    for (let j = 0; j < array1.length; j++) {
        valuess[i].push(array1[j][i]);
        sum += array1[j][i];
    }
    valuess[i].push(sum);
}

console.log(valuess);









