const BASE_URL = "file:///C:/Users/Administrator/Source/Repos/msindia-learning/2024-BATCH-I/AkshayaP/00%20-%20Projects/02%20-%20JavaScript/Formvalidation/";




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

function UpdateUserData()
{
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
                    <td>${newUser.Email}</td>
                    <td>${newUser.Age}</td>
                    <td>${newUser.Address}</td>
                    <td>${newUser.Contact}</td> 
                    <td><button onclick="Edit(${index})">Edit</button></td>
                    <td><button onclick="Delete(${index})">Delete</button></td>
                </tr>`;
            });
        }
    }
}



function Delete(Email,index){
    let user_data = JSON.parse(localStorage.getItem("users_data"));
    let current_user = JSON.parse(localStorage.getItem("current_user"));
    user_data[current_user.Key].splice(index, 1);
    localStorage.setItem("users_data", JSON.stringify(user_data));

    window.location.href = "store.html";
}

document.addEventListener("DOMContentLoaded", function()
{
    let table_content = document.getElementById("table-body");

    if(table_content)
    {
        UpdateUserData();
    }
    else
    {
        let EditIndex = parseInt(localStorage.getItem("EditIndex"));
        let currentUser = JSON.parse(localStorage.getItem("current_user"));
        let users_data = JSON.parse(localStorage.getItem("users_data"));

        let current_user_records = users_data[currentUser.Email];
        let record_need_to_edit = current_user_records[EditIndex];

        localStorage.setItem("record_need_to_edit", EditIndex);

        document.getElementById("Name").value = record_need_to_edit.Name;
        document.getElementById("Email").value = record_need_to_edit.Email;
        document.getElementById("Age").value = record_need_to_edit.Age;
        document.getElementById("Address").value = record_need_to_edit.Address;
        document.getElementById("Phone").value = record_need_to_edit.Phone;

        document.getElementById("update").type = "button";
        document.getElementById("submit").type = "hidden";
    }
})


function Edit(index)
{
    let currentUser = JSON.parse(localStorage.getItem("current_user"));
    let users_data = JSON.parse(localStorage.getItem("users_data"));

    localStorage.setItem("EditIndex", index);    

    window.location.href = "userDetails.html";
}


function update_user_records()
{
    let EditIndex = parseInt(localStorage.getItem("EditIndex"));
    let currentUser = JSON.parse(localStorage.getItem("current_user"));
    let users_data = JSON.parse(localStorage.getItem("users_data"));

    let current_user_records = users_data[currentUser.Email];

    let user = {
        Name: document.getElementById("Name").value,
        Email: document.getElementById("Email").value,
        Age: document.getElementById("Age").value,
        Address: document.getElementById("Address").value,
        Contact: document.getElementById("Phone").value
    };

    current_user_records[EditIndex] = user;

    localStorage.removeItem("EditIndex");
    localStorage.setItem("users_data", JSON.stringify(users_data));

    window.location.href = "store.html";
}