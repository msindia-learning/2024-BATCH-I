
//function emp(id, name, salary)
//{

//  this.id = id;
//  this.name=name;
//  this.salary=salary;


//    this.changeSalary=changeSalary;
//    function changeSalary(otherSalary)
//    {
//        this.salary = otherSalary;
//    }
//}
//e=new emp(103,"Sonoo Jaiswal",30000);
//console.log(e.id+" "+e.name+" "+e.salary);
//e.changeSalary(45000);
//console.log(e.id+" "+e.name+" "+e.salary);

const person = {
    name: "Akshaya",
    age: 30,
    grade: 'O',
    greeting: function()
    {
        return this;
    },
    marks: {
        OOPS: 90,
        Maths: 100
    }
}

const pikachu = {
    name: "Pikachu",
    greeting: () =>
    {
        this.name = "Akshaya"

        return this;
    }
}

person.age = 50;
person.interest = "2%";

person = {fname:"akshu",lname:"jeni"};

console.log(person);
console.log(pikachu.greeting());

console.log(pikachu.name);