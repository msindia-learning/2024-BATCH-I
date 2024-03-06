const letters = new Set(["a", "b", "c"]);
console.log(letters.size);
letters.add("d");
letters.add("e");
letters.add("f");
console.log(letters);


const letters1 = new Set();
const a = "a";
const b = "b";
const c = "c";
//const d = "d";

letters.add(a);
letters.add(b);
letters.add(c);
//letters.add(d);
console.log(letters1.length);

const letterss = new Set(["a", "b", "c"]);
let textt = "";
letterss.forEach(function(value)
{
    textt += value;
})
console.log(textt);

const fruits = new Map([
    ["apples", 500],
    ["bananas",300],
    ["oranges",200]
]);
console.log(fruits.get("apples"));
console.log(fruits);
console.log("entries");
let value = "";
for(const x of fruits.entries())
{
    value += x;
}

let texttt = "";
fruits.forEach(function(value, key)
{
    texttt += key + "=" + value;
});
console.log(texttt);

const vegtables = new Map();
vegtables.set("tomato",200);
vegtables.set("brinjal", 600);
console.log(vegtables.get("brinjal"));
console.log(vegtables.size);
console.log(vegtables.delete("brinjal"));
console.log(vegtables.has("apples"));
