// create a set

const letters = new Set(["p", "q", "r"]);
console.log(letters);

//set and add values


const letter = new Set();
const a = "apple";
const b = "banana";
const c = "cherry";
letter.add(a);
letter.add(b);
letter.add(c);
console.log(letter);

//for each

const naruto= new Set(["dog", "bear", "cat"]);
let vel = "";
naruto.forEach(function(value)
{
    vel += value + "<br>";
})
console.log(vel);



//values
const js= new Set(["teddy", "parrot", "penguin"]);
let text1 = "";
for(const x of js.values())
{
    text1 += x + "<br>";
}
console.log(text1);

// create a map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits);


// set method
const colors = new Map();
colors.set("nippon paints", 400);
colors.set("asian paints", 300);
colors.set("indigo paints", 350);
console.log(colors);
result = colors.get("nippon paints");
console.log(result);

//foreach

const fru = new Map([
    ["app", 500],
    ["ban", 300],
    ["ora", 200]
]);

let pan = "";
fru.forEach(function(value, key)
{
  pan += key + ' = ' + value + "<br>"
})
console.log(pan);

//entries
const f = new Map([
    ["an", 500],
    ["bn", 300],
    ["on", 200]
]);

let te = "";
for(const x of f.entries())
{
    te += x + "<br>";
}
console.log(te);