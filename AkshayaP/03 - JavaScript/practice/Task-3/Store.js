function displayUserData(users, inputEmail)
{
    var tableBody = document.querySelector("#userData tbody");
    tableBody.innerHTML = "";

    var foundUser = false;

    for(var i = 0; i < users.length; i++)
    {
        var user = users[i];

        if(user.Email === inputEmail)
        {
            foundUser = true;
            var row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.Name}</td>
                <td>${user.Email}</td>
                <td>${user.Age}</td>
                <td>${user.Address}</td>
                <td>${user.Contact}</td>
            `;
            tableBody.appendChild(row);

            // No need to break the loop here, as we want to keep searching for potential duplicates
        }
    }

    if(!foundUser)
    {
        console.log("No user found with the provided email:", inputEmail);
        var row = document.createElement("tr");
        row.innerHTML = "<td colspan='5'>No user found with the provided email.</td>";
        tableBody.appendChild(row);
    }
}

var storedUsers = localStorage.getItem("Users_List");
if(storedUsers)
{
    var users = JSON.parse(storedUsers);
    console.log("Parsed users from localStorage:", users); // Debugging

    // Assuming you want to display the first user found if there are duplicates
    if(users.length > 0)
    {
        var inputEmail = users[0].Email; // Get email from the first user
        displayUserData(users, inputEmail);
    } else
    {
        console.log("No users found in the list.");
    }
} else
{
    console.log("No user data found in localStorage.");
}
