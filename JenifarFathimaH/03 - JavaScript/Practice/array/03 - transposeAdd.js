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
console.log(finalArr);

