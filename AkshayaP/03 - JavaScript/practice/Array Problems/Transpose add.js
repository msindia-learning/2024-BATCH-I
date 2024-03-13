let arr1 = [[1, 2, 3], [4, 5, 6]];
let result = [];
for(let i = 0; i < arr1[0].length; i++)
{
    let row = [];
    let sum = 0;

    for(let j = 0; j < arr1.length; j++)
    {
        row.push(arr1[j][i]);
        sum += arr1[j][i];
    }

    row.push(sum);
    result.push(row);
}

console.log(result);