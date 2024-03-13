let arr = [[1, 2, 3],
[4, 5, 6]];

let finalArr = [];

for (let i = 0; i < arr[0].length; i++) {
    finalArr.push([]);
    let add = 0;
    for (let j = 0; j < arr.length; j++) {
        finalArr[i].push(arr[j][i]);
        add += arr[j][i];
    } finalArr[i].push(add);
}

//for (let i = 0; i < finalArr.length; i++) {
//    let sum = 0;
//    for (let j = 0; j < finalArr[i].length; j++) {
//        sum += finalArr[i][j];
//    }
//    finalArr[i].push(sum);
//}

console.log(finalArr);

