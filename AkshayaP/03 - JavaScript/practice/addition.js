let arr1 = [[1, 4, 5, 20], [2, 3, 1, 10], [7, 2, 4, 1], [1, 1, 1, 1]];
let arr2 = [[2, 3, 4, 20], [1, 2, 1, 10], [5, 6, 8, 1], [1, 1, 1, 1]];

let result = [];
for(let i = 0; i < arr1.length; i++)
{
    result.push([]);

    for(let j = 0; j < arr1[i].length; j++)
    {
        result[i].push(arr1[i][j] + arr2[i][j]);
    }
}


