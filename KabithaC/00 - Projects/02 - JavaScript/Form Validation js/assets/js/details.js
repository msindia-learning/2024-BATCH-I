
function updateTable()
{
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let users_data = JSON.parse(localStorage.getItem("users_data"));
    
    let details = {
        Name: document.getElementById("addUsername").value,
        Email: document.getElementById("addEmail").value,
        Phone: document.getElementById("addPhoneno").value
    };

    if(users_data == null)
    {
        users_data = {};
    }

    if(users_data[currentUser.email] == null)
    {
        users_data[currentUser.email] = [details];
    }
    else
    {
        users_data[currentUser.email].push(details);
    }

    localStorage.setItem("users_data", JSON.stringify(users_data));
    location.href = 'details.html';
}

document.addEventListener("DOMContentLoaded", function(){
    let users_data = JSON.parse(localStorage.getItem("users_data"));
    
    if(users_data)
    {     
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        let current_user_records = users_data[currentUser.email];

        let tableContent = document.getElementById("userdetails");

        for(let record in current_user_records)
        {
            tableContent.innerHTML += `
                    <tr>
                        <td>${current_user_records[record].Name}</td>
                        <td>${current_user_records[record].Email}</td>
                        <td>${current_user_records[record].Phone}</td>
                        <td><button onclick="Edit('${current_user_records[record]}', ${record})">Edit</button></td>
                        <td><button onclick="Delete('${current_user_records[record]}', ${record})">Delete</button></td>
                    </tr>`;
        }
    }
})

