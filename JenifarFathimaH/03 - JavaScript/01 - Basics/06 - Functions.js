let age = 19;
let eligible = Election(age);
console.log(eligible);

function Election(age) {
    if (age < 18) {
        return "You are not eligible to vote";
    }
    else {
        return "You are eligible to vote!!";
    }
}
