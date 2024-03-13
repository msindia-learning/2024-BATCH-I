let carname = "volvo";

function Scope()
{
    
    console.log(carname);
}
console.log(carname);

let carname1 = "volvo";
myfunction();
function myfunction()
{
    console.log("I Can display " + carname1);
}

let carName = "thar";
console.log(window.carName);