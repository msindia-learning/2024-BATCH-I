/*var BASE_URL = "C:\Users\IT\Desktop\Kabitha Git\KabithaC\03 - JavaScript\Validation using js";*/

var users = [];
function signup()
{
    var username = document.getElementById("signupUsername").value;
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPwd").value;
    var confirmPassword = document.getElementById("signupConfirmPwd").value;
    var phone = document.getElementById("signupPho").value;

    var newUser = {
        username: username,
        email: email,
        password: password,
        phone: phone
    };   
    
  
    if(username === "" || email === "" || password === "" || confirmPassword === "" || phone === "")
    {
        alert("Please fill in all fields.");
        return;
    }

    if(password !== confirmPassword) 
    {
        alert("Passwords do not match.");
        return;
    }
    //  email is already registered
    for(var i = 0; i < users.length; i++)
    {
        if(users[i].email === email)
        {
            alert("Email already registered.");
            return;
        }
    }

    users.push(newUser);
    localStorage.setItem("Users_Information", JSON.stringify(users));

    document.getElementById("signupForm").reset();

    alert("Signup successful!");

    console.log(users);
 
}
/*location.href = BASE_URL + "index.html";*/
