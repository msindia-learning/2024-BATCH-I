

displayUserDetails();
function displayUserDetails()
{
    var users = JSON.parse(localStorage.getItem("Users_Information"));
    var userdetailsDiv = document.getElementById("userdetails");

    // Check if users array exists and has elements
    if(users && users.length > 0)
    {
        // Clear the content of userdetailsDiv
        userdetailsDiv.innerHTML = "";

        // Iterate through each user and display their details
        for(var i = 0; i < users.length; i++)
        {
            var user = users[i];
            userdetailsDiv.innerHTML += "<p>Name: " + user.username + "</p>" +
                "<p>Email: " + user.email + "</p>" +
                "<p>Phone Number: " + user.phone + "</p>";
        }
    }
}


