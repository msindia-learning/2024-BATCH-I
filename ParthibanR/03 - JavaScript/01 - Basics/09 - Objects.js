                                          // Object Literal

const car =
{
    type: "BMW",
    model: "500Cdt",
    color: "White"
}

console.log(car.model);
console.log(car.color);
console.log(car.type);

console.log(car);
console.log(typeof (car));


                                    //Creating instance of object

var person = new Object();
person.name = "vijay";
person.age = 18;
person.degree = "Engineering";
console.log(person.name + " " + person.age + " " + person.degree);


                                  //object constructor

function person(id, name, salery) {
    this.id = id;
    this.name = name;
    this.salery = salery;
}

var vijay = new person(18, "vijay", 1200000);
var pandi = new person(18, "pandi", 110000);

console.log(vijay);
console.log(pandi);




function person(id, name, salery) {
    this.id = id;
    this.name = name;
    this.salery = salery;

    this.changesalery = changeSalery;
    function changeSalery(otherSalery) {
        this.salery = otherSalery;
    }
}

e = new person(18, 'vijay', 1200000);
document.write(e.id, e.name, e.salery);
e.changeSalery(130000000);
doucment.write(e.id, e.name, e.salery);
