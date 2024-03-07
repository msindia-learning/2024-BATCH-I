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