let arr = [[1, 2, 3,22],
     [4, 5, 6,11],
    [7, 8, 9,66]]

let finalArr = [];

for (let i = 0; i < arr[0].length; i++) {
    finalArr.push([]);
    for (let j = 0; j < arr.length; j++) {
        finalArr[i].push(arr[j][i]);
    }
}
console.log(finalArr);