var x = 5; // Using var (function scoped)
function uFunc(){
    let  y = 10; // Using let (block scoped)
    const PI = 3.14; // Using const (block scoped, constant value)
    var z = x * y * PI;
    return z;
}
var result = uFunc();
console.log(result);
