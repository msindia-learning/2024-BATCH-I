//object

let car = "FLAT";
console.log(car);

//many objects
let house = {
    type: "newhouse",
    flat: "Individual",
    place: "anna nagar",
    rentamount:10000
};
console.log(house);
console.log(house.type);
console.log(house.flat);
console.log(house.place);
console.log(house.rentamount);

//this function
const person = {
    firstName: "Anees",
    lastName :"fathima",
    demo: function()
    {
        return this.firstName + " " +this. lastName;
    }
};
console.log(person.demo());