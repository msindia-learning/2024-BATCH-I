let john = { name: "john" };
let ben = { name: "Ben" };
let visitCountObj = {};
visitCountObj[ben] = 234;
visitCountObj[john] = 123;
console.log(visitCountobj["object object]"]);



let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);


for(let vegetable of recipeMap.keys())
{
    console.log(vegetable); 
}


for(let amount of recipeMap.values())
{
    console.log(amount);
}


for(let entry of recipeMap)
{ 
    console.log(entry); 
}