//const person = {
//    firstname: "Prabha",
//    lastname: "kannan",
//    age: 50,
//    eyecolor: "blue"
//};

//info = person.age;
//console.log(info);
//console.log("the person age is  " + info);

//var obj = {
//    name: "prabha" ,
//    emailId: "kprabha0710@gmail.com",
//phonenumber: 9790578061

//}
//console.log(obj);




//function m()
//{
//    window.value = 90;

//}
//function n()
//{
//    console.log(window.value);
//}

//n();
function emp(id, name, salary)
{
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.changesalary = changesalary;
    function changesalary(othersalary)
    {
        this.salary = othersalary;
    }

}
user = new emp(87, "Prabha", 300000);
/*console.log(user.id + " " + user.name + " " + user.salary);*/
user.changesalary(456789);

console.log( user.salary);








