// new keyword to create array
var days = new Array('monday', 'tuesday', 'wednesday');
console.log(days);


// create the array
var days = ['monday', 'tuesday', 'wednesday', 'Thursday', 'friday'];
console.log(days);

//accessing a array an items
var days = [];
var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
for(i = 0; i < days.length; i++)
{
    console.log(days[i]);
}

// length find
var days = ['monday', 'tuesday', 'wednesday', 'Thursday', 'friday'];
console.log(days.length);
console.log(days[2]);
days.push('saturday', 'sunday');
console.log(days);

//fibonacci 
var fibonacci = [];
 fibonacci[0] = 1;
 fibonacci[1] = 1;
for(var i = 2; i < 10; i++)
{
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
for(var i = 0; i < fibonacci.length; i++)
{
    console.log(fibonacci[i]);
}


//Insert in first positon
var demo = [1, 2, 3, 4, 5];
var newElement = 10;
for(var i = demo.length; i >= 1; i--)
{
    demo[i] = demo[i - 1];

}
demo[0] = newElement;
console.log(demo);

// unshift method 
var num = [1, 2, 3, 4, 5, 6, 8, 23, 42, 453];
num.unshift(-2,-4,-3);
console.log(num);

//pop 
var num1 = [1, 2, 3, 4, 5, 6, 7];
num1.pop(4, 5, 6);
console.log(num1);

//Shift
var num2 = [1, 45, 32, 56, 35, 73];
num2.shift();
console.log(num2);

// splice() - delete
var num3 = [24, 25, 23, 63, 257, 8543, 808];
num3.splice(2, 2);
console.log(num3);


//insert-- using splice
var num4 = [24, 25, 23, 63, 257, 8543, 808];
num4.splice(3, 0, 10, 5, 2, 5);
console.log(num4);

//two dimensional
var x = [];
 x[0] = [1, 2, 3, 4, 5];
 x[1]= [6, 7, 8, 9, 10];
printMatrix(x);
function printMatrix(myMatrix)
{
    for(var i = 0; i < myMatrix.length; i++)
    {
        for(j = 0; j <myMatrix[i].length; j++)
        {
            console.log(myMatrix[i][j]);
        }
    }
}

//Array methods

//concat()

var x = [];
x[3]=[2, 8, 54, 67, 24, 683, 25];
x[4] = [-34, -4, -654, 43, 22, 29];
x[5]=[0,-5,2]
var no = x[3].concat(x[4],x[5]);
console.log(no);

//every ()
var marks = [20, 25, 30, 35, 40,50];
function check(value)
{
    return value < 10;
}
console.log(marks.every(check));


//some()
const  demo1 = [15, 3, 19, 36, 33];
function validate(num)
{
    return num < 10;
}
console.log(demo1.some(validate));

//foreach
const item = ["k","a","b","i","t","h","a"];
item.forEach;
console.log(item);

