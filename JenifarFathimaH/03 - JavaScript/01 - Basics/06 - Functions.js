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

const myObject = {
    firstName: "Jenifar",
    lastName: "Fathima",
    doorno: 121,
    area: "Theni",
    fullName: () => myObject.firstName + " " + myObject.lastName,
    address: () => myObject.doorno + " " + myObject.area,
}

console.log(myObject.fullName()); 
console.log(myObject.address());
