const BASE_URL = "file:///C:/Users/Administrator/source/repos/msindia-learning/2024-BATCH-I/AkshayaP/03%20-%20JavaScript/practice/Task-3/";

function logIn()
{
    var obj = JSON.parse(localStorage.getItem("Users_List"));
    var lEmail = document.getElementById("lEmail").value;
    var lPassword = document.getElementById("lPassword").value;

    var userFound = false;
    var passwordMatch = false;

    for(var i = 0; i < obj.length; i++)
    {
        if(obj[i].Email === lEmail)
        {
            userFound = true;
            if(obj[i].Password === lPassword)
            {
                passwordMatch = true;
                alert("Login Successful");
                
                break;
            } else
            {
                alert("Invalid Password");
                return; 
            }
        }
    }

    if(!userFound)
    {
        alert("Invalid User");
        return; 
    }

    if(userFound && passwordMatch)
    {
        location.href = BASE_URL + "Store.html";
    }

    console.log(JSON.parse(localStorage.getItem("Users_List")));

    document.getElementById("lEmail").value = "";
    document.getElementById("lPassword").value = "";
}
