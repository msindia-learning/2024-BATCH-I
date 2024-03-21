/*var BASE_URL = "file:///C:/Users/IT/Desktop/Kabitha%20Git/KabithaC/00%20-%20Projects/02%20-%20JavaScript/Form%20Validation%20js/";*/

function logIn()
{
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPwd").value;

    // Check email is empty
    if(email === "")
    {
        alert("Please enter your email.");
        return;
    }

    // Check  password is empty
    if(password === "")
    {
        alert("Please enter your password.");
        return;
    }
    var users = JSON.parse(localStorage.getItem("Users_Information"));
    // find user
    var userExists = false;
    for(var i = 0; i < users.length; i++)
    {
        if(users[i].email === email && users[i].password === password)
        {
            userExists = true;
            break;
        }
    }

    // if user is found
    if(userExists)
    {   
        alert("Login successful!");
        location.href ="details.html";
       
    }
    else
    {
        alert("Invalid email or password.");
    }
}
