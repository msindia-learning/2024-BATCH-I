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

