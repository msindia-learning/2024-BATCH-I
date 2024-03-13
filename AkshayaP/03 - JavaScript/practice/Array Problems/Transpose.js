var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let row = arr[0].length;
let column = arr.length;

for(i = 0; i < row; i++)
{
    for(j = 0; j < column; j++)
    {
        console.log([j][i]);
    }
}