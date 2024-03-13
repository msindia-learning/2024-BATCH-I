let mat1 = [[1, 4, 5], [2, 3, 1], [7, 2, 1]];
let mat2 = [[2, 3, 4], [1, 2, 1], [5, 6, 1]];
let firstmat;
let secondmat;
let add = [];
let sum = [];
for(let i = 0; i < mat1.length; i++)
{
    for(let j = 0; j < mat1[i].length; j++)
    {
        firstmat = mat1[i][j];
        secondmat = mat2[i][j];
        sum.push(firstmat + secondmat);
    }  
}
add.push(sum);
console.log(add);
