

displayUserDetails();
function displayUserDetails()
{
    var users = JSON.parse(localStorage.getItem("Users_Information"));
    var userdetailsDiv = document.getElementById("userdetails");

    
    if(users && users.length > 0)
    {
      
        userdetailsDiv.innerHTML = "";

        for(var i = 0; i < users.length; i++)
        {
            var user = users[i];
            userdetailsDiv.innerHTML += "<td>" + user.username + "</td>" +
                "<td> " + user.email + "</td>" +
                "<td>  " + user.phone + "</td>";
        }
    }
}


