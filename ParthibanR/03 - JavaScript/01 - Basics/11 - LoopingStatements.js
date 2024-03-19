            /*
             * 1.for loop
             * 2.while loop
             * 3.do while loop
             * 4.for in loop
             * */


                                                        //1.for loop

for (i = 0; i <= 10; i++) {
    console.log(i);
}

const person = ["Name", "Age", "Rollno", "Contacts"];
for (i = 0; i < person.length; i++) {
    console.log(person[i]);
}


var sports = ["cricket", "football", "kabadi", "vollyball"];
for (i = 2; i < sports.length; i++) {
    console.log(sports[i]);
}


                                                    //2.while loop

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}


const sports = ["cricket", "football", "kabadi", "vollyball"];
let i = 0;
while (i < sports.length) {
    console.log(sports[i]);
    i++;
}


                                                //3.do while loop
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10)



const bike = ["KTM", "YAMAHA", "FZ", "DUKE"];
let i = 0;
do {
    console.log(bike[i]);
    i++;
} while (i < bike.length)



                                              //4.foreach loop

const mobile = ["VIVO", "OPPO", "SAMSUNG", "REDMI"];
mobile.forEach(myFunction)

function myFunction(values) {
    console.log(values);
}

                                              //5.forin loop


const person = {
    name: "vijay",
    age: 18,
    sports: "cricket",
    player: "india",
}

for (let i in person) {
    console.log(i);
}


const bike = {
    Bike: "KTM",
    year: 2020,
    model: "ultra",
    pin:2345,
}

for (let i in bike) {
    console.log(i);
}