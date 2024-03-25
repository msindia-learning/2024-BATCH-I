const BASE_URL = "file:///C:/Users/Administrator/Source/Repos/msindia-learning/2024-BATCH-I/AkshayaP/00%20-%20Projects/02%20-%20JavaScript/Formvalidation/";

function logIn()
{
    var obj = JSON.parse(localStorage.getItem("users"));
    var lEmail = document.getElementById("lEmail").value;
    var lPassword = document.getElementById("lPassword").value;

    let bIsValidUser = false;

    for(let user of obj)
    {
        if(user.Email === lEmail && user.Password === lPassword)
        {
            localStorage.setItem("current_user", JSON.stringify(user));

            location.href = BASE_URL + "Store.html";

            bIsValidUser = true;

            break;
        }
    }

    if(!bIsValidUser)
    {
        alert("Invalid Password");
    }
}
