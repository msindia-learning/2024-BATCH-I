let arr1 = [[1, 2, 3], [4, 5, 6]];
let value = [];

for(let i = 0; i < arr1[0].length; i++)
{
    value.push([]);
    let sum = 0;
    for(let j = 0; j < arr1.length; j++)
    {
        value[i].push(arr1[j][i]);
        sum += arr[j][i];
    }
    value.push(sum);
}
console.log(value);

