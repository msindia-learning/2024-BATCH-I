function logIn()
{   
    var obj = JSON.parse(localStorage.getItem("Users_List"));
    var lEmail = document.getElementById("lEmail").value;
    var lPassword = document.getElementById("lPassword").value;

    

    for(var i = 0; i < obj.length; i++)
    {
        if(obj[i].Email == lEmail)
        {
            if(obj[i].Password === lPassword)
            {
                alert("Login Successful");
            }
            else
            {
                alert("Invalid Password");
            }
        } else
        {
            alert("Invalid User");
        }
        
    }
    
    document.getElementById("lEmail").value = "";
    document.getElementById("lPassword").value = "";

}


console.log(JSON.parse(localStorage.getItem("Users_List")));