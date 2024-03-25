//let users = JSON.parse(localStorage.getItem("Users_Information"));
//let userdetailsDiv = document.getElementById("userdetails");
function displayUserDetails()
{
    let current_user = JSON.parse(localStorage.getItem("current_user"));
    let users_info = JSON.parse(localStorage.getItem("user_info"));

    if(current_user && current_user.length > 0)
    {
        users_info.innerHTML = " ";

        for(var i = 0; i < current_user.length; i++)
        {
            var user = current_user[i];
            users_info.innerHTML += "<td>" + user.username + "</td>" +
                "<td> " + user.email + "</td>" +
                "<td>  " + user.phone + "</td>" +
                "<td><button onclick ='Edit(\"" + i + "\")'>Edit</button></td>" +
                "<td><button onclick='Delete(\"" + i + "\")'>Delete</button></td>";

            users_info.innerHTML += "</tr>"
        }
    }     
  }

const BASE_URL = "file:///C:/Users/IT/Desktop/Kabitha%20Git/KabithaC/00%20-%20Projects/02%20-%20JavaScript/Form%20Validation%20js/"
function Delete(index)
{ 
    localStorage.setItem("Users_Information", JSON.stringify(users));
    users.splice(index, 1);
  /*  displayUserDetails();*/
    updateTable();
}

//function updateTable()
//{
//    let current_user = JSON.parse(localStorage.getItem("current_user"));
//    let users_info = JSON.parse(localStorage.getItem("user_info"));

//    let details = {
//        username: document.getElementById("username").value,
//        email: document.getElementById("email").value,
//        phone: document.getElementById("phone").value
//    };


//    if(users_info == null)
//    {
//        users_info = {};

//    }

//    if(users_info[current_user.email] == null)
//    {
//        users_info[current_user.email] = [details];
//    }

//    else
//    {
//        user_info[current_user.email].push(details);
//    }

    localStorage.setItem("users_info", JSON.stringify(users_info));

    window.location.href = 'details.html';

}
