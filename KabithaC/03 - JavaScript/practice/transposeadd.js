let arr= [[1, 2, 3], [4, 5, 6]];
let result = [];
for(j = 0; j < arr[0].length; j++)
{
    result.push([]);
    let add = 0;
    for(i = 0; i < arr.length; i++)
    {  
        result[j].push(arr[i][j]);
        add += arr[i][j];

    }
    result[j].push(add);
}
console.log(result);