window.onload = function()
{
    var storedUsers = localStorage.getItem("Users_List");
    if(storedUsers)
    {
        var Users = JSON.parse(storedUsers);
        displayUsersData(users);
    }

}
//function displayUserData(users)
//{
//    var tableBody = document.querySelector("#userData tbody");

//    users.forEach(function(user)
//    {
//        var row = document.createElement("tr");
//        row.innerHTML = `
//            <td>${user.Name}</td>
//            <td>${user.Email}</td>
//            <td>${user.Age}</td>
//            <td>${user.Address}</td>
//            <td>${user.Contact}</td>
//        `;
//        tableBody.appendChild(row);
//    });
//}
//console.log(JSON.parse(localStorage.getItem("Users_List")));
