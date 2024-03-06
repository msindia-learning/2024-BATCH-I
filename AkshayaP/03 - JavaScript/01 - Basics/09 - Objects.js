
function emp(id, name, salary)
{
  this.id = id;
  this.name=name;
  this.salary=salary;


    this.changeSalary=changeSalary;
    function changeSalary(otherSalary)
    {
        this.salary = otherSalary;
    }
}
e=new emp(103,"Sonoo Jaiswal",30000);
console.log(e.id+" "+e.name+" "+e.salary);
e.changeSalary(45000);
console.log(e.id+" "+e.name+" "+e.salary);

const person = {
    name: "Akshaya",
    age: 30,
    grade: 'O',
    greeting: function()
    {
        return "Hello, " + this.name;
    },
    marks: {
        OOPS: 90,
        Maths: 100
    }
}

const pikachu = {
    name: "Pikachu",
    greeting: function()
    {
        return "Hello, " + this.name;
    }
}

console.log(person.greeting());
console.log(pikachu.greeting());