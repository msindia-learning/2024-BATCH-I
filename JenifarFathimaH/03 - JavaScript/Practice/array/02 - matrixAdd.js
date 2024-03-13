let arr1 = [[1, 4, 5], [2, 3, 1], [7, 2, 1]];
let arr2 = [[2, 3, 4], [1, 2, 1], [1, 6, 1]];

let addArr = [];

for (let i = 0; i < arr1.length; i++) {
    addArr.push([]);
    for (let j = 0; j < arr1[i].length; j++) {
        addArr[i].push(arr1[i][j] + arr2[i][j]);
    }
}
console.log(addArr);