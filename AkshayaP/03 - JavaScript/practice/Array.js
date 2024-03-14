//fibonacci
var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;
for(var i = 3; i < 20; i++)
{
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
for(var i = 1; i < fibonacci.length; i++)
{
    console.log(fibonacci[i]);
}





//Push method pop method
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers[numbers.length] = 10;
numbers.push(10, 11, 12, 13, 14, 15);
console.log(numbers);





//insering Element to first Position
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for(var i = numbers.length; i >= 0;i--)
{
    numbers[i] = numbers[i - 1];
}
numbers[0] = -1;
console.log(numbers);







//unshift method
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.unshift(-2, -1);
console.log(numbers);





//shift method
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.shift(0);
console.log(numbers);




//splice method
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.splice(5,0,4,5,6,7,8);
console.log(numbers);





var averageTemp = [];
averageTemp[0] = [72, 74, 78, 60, 80];
averageTemp[1] = [69, 78, 45, 28, 59];
function printMatrix(myMatrix)
{
    for(var i = 0; i < myMatrix.length; i++)
    {
        for(var j = 0; j < myMatrix[i].length; j++)
        {
            console.log(myMatrix[i][j])
        }
    }
}
printMatrix(averageTemp);




var x = 10;
var abc = [5, 6, 7, 8, 9];
var def = [-1, -2, -3, -4, -5];
var numbers = def.concat(x, abc);
console.log(numbers);





/*iterator function*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var isEven = function(x)
{
    console.log(x);
    return (x % 2 == 0) ? true : false;
};

console.log(x);





//every
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result=numbers.every(isEven);
console.log(result);





////Some
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = numbers.some(isEven);
console.log(result);





//forEach
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function(x)
{
    console.log((x % 2 == 0));
})





//filter
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = numbers.filter(isEven);
console.log(result);





//map
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = numbers.map(isEven);
console.log(result);



//reduce
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = numbers.reduce(function(previous, current, index)
{
    return previous + current;
});
console.log(result);





//forEach
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = numbers.forEach(x=>
{
    console.log((x % 2 == 0));
});
console.log(result);





//for of
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let n of numbers)
{
    console.log((n% 2 == 0) ? 'even' : 'odd')
}




//iterator
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);





//entries
let aEntries = numbers.entries();
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);





//keys
let aKeys= numbers.keys();
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());





//copywithin
let copyArray = [1, 2, 3, 4, 5, 6];
let result4 = copyArray.copyWithin(0, 3);
console.log(result4);


let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let number2 = Array.of(1, 2, 3, 4, 5, 6);
console.log(number2);



