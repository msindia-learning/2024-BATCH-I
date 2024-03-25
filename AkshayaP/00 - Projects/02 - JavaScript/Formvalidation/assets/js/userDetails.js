const BASE_URL = "file:///C:/Users/Administrator/Source/Repos/msindia-learning/2024-BATCH-I/AkshayaP/00%20-%20Projects/02%20-%20JavaScript/Formvalidation/";


function Delete(Email, index)
{
    let user_data = JSON.parse(localStorage.getItem("users_data"));
    user_data[Email].splice(index, 1);
    localStorage.setItem("users_data", JSON.stringify(users_data));

    updateTable();
}
function updateTable()
{
    let current_user = JSON.parse(localStorage.getItem("current_user"));
    let users_data = JSON.parse(localStorage.getItem("users_data"));

    let user = {
        Name : document.getElementById("Name").value,
        Email : document.getElementById("Email").value,
        Age : document.getElementById("Age").value,
        Address : document.getElementById("Address").value,
        Contact : document.getElementById("Phone").value
    };

    if(users_data == null)
    {
        users_data = {};
    }

    if(users_data[current_user.Email] == null)
    {
        users_data[current_user.Email] = [user];
    }
    else
    {
        users_data[current_user.Email].push(user);
    }

    localStorage.setItem("users_data", JSON.stringify(users_data));

    window.location.href = 'store.html';
}
let currentUser = JSON.parse(localStorage.getItem('users_data'));
if(currentUser)
{
    let table_content = document.getElementById("table-body");
    for(let Email in currentUser)
    { 
        currentUser[Email].forEach((newUser, index) =>
        {
            table_content.innerHTML += `
                <tr>
                    <td>${newUser.Name}</td>
                    <td>${Email}</td>
                    <td>${newUser.Age}</td>
                    <td>${newUser.Address}</td>
                    <td>${newUser.Contact}</td> 
                    <td><button onclick="Edit('${Email}', ${index})">Edit</button></td>
                    <td><button onclick="Delete('${Email}', ${index})">Delete</button></td>
                </tr>`;
        });
    }
}




