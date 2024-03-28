const BASE_URL = "file:///C:/Users/Administrator/Source/Repos/msindia-learning/2024-BATCH-I/AkshayaP/00%20-%20Projects/02%20-%20JavaScript/Formvalidation/";


let table_body = document.getElementById("table-body");
let users = JSON.parse(localStorage.getItem("users"));

let strHtmlContent = "";

for(let i = 0; i < users.length; i++)
{
    let user = users[i];
    strHtmlContent += "<tr><td>" + user.Name + "</td><td>" + user.Email + "</td><td>" + user.Age + "</td><td>" + user.Address + "</td><td>" + user.Contact + "</td>";
    strHtmlContent += "<td><button onclick='Edit(" + i + ")'>Edit</button></td>";
    strHtmlContent += "<td><button onclick='Delete(" + i + ")'>Delete</button></td>";
    strHtmlContent += "</tr>"
}
table_body.innerHTML = strHtmlContent;

function Delete(index)
{
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));

    
    updateTable();
}

function Edit(index)
{
    let user = users[index];

    document.getElementById("Name").value = user.Name;
    document.getElementById("Email").value = user.Email;
    document.getElementById("Age").value = user.Age;
    document.getElementById("Address").value = user.Address;
    document.getElementById("Contact").value = user.Contact;
 
}

function reEdit()
{
    let Key = document.getElementById("Key").value;
    let newName = document.getElementById("Name").value;
    let newEmail = document.getElementById("Email").value;
    let newAge = document.getElementById("Age").value;
    let newAddress = document.getElementById("Address").value;
    let newContact = document.getElementById("Contact").value;


    for(let user of users)
    {
        if(users.Key == Key)
        {
            users.Key = newEmail;
            users.Name = newName;
            users.Email = newEmail;
            users.Age = newAge;
            users.Address = newAddress;
            users.Contact = newPhone;

            break;
        }
    }

    updateTable();



    document.getElementById("Name").value="";
    document.getElementById("Email").value="";
    document.getElementById("Age").value="";
    document.getElementById("Address").value="";
    document.getElementById("Contact").value="";

}

function updateTable()
{
    let strHtmlContent = "";
    for(let i = 0; i < users.length; i++)
    {
        let user = users[i];
        strHtmlContent += "<tr><td>" + user.Name + "</td><td>" + user.Email + "</td><td>" + user.Age + "</td><td>" + user.Address + "</td><td>" + user.Contact + "</td>";
        strHtmlContent += "<td><button onclick='Edit(" + i + ")'>Edit</button></td>";
        strHtmlContent += "<td><button onclick='Delete(" + i + ")'>Delete</button></td>";
        strHtmlContent += "</tr>"
    }
    table_body.innerHTML = strHtmlContent;
}

//localStorage.setItem("users", JSON.stringify(users));
location.href = BASE_URL + "userDetails.html";