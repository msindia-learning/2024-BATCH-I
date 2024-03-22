const BASE_URL = "file:///C:/Users/Administrator/Source/Repos/msindia-learning/2024-BATCH-I/AkshayaP/00%20-%20Projects/02%20-%20JavaScript/Formvalidation/";

function logIn()
{
    var obj = JSON.parse(localStorage.getItem("users"));
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

    console.log(JSON.parse(localStorage.getItem("users")));

    document.getElementById("lEmail").value = "";
    document.getElementById("lPassword").value = "";
}
