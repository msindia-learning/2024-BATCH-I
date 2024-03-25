const BASE_URL = "file:///C:/Users/Administrator/Source/Repos/msindia-learning/2024-BATCH-I/AkshayaP/00%20-%20Projects/02%20-%20JavaScript/Formvalidation/";


/*var obj = [];*/
 function addToArray(){
     var arrObj = {};
     arrObj.Key = document.getElementById("Email").value;
    arrObj.Name = document.getElementById("Name").value;
    arrObj.Email = document.getElementById("Email").value;
    arrObj.Age = document.getElementById("Age").value;
    arrObj.Address = document.getElementById("Address").value;
    arrObj.Contact = document.getElementById("Phone").value;
    arrObj.Password = document.getElementById("Password").value;
     
    /* updateTable();*/

     document.getElementById("Name").value = "";
     document.getElementById("Email").value = "";
     document.getElementById("Age").value = "";
     document.getElementById("Address").value = "";
     document.getElementById("Phone").value = "";
     document.getElementById("Password").value = "";



    //obj.push(arrObj);
     //console.log(obj);


     let users = JSON.parse(localStorage.getItem("users"));
     if(users == null)
     {
         users = [arrObj];
     }
     else
     {
         users.push(arrObj);
     }



     localStorage.setItem("users", JSON.stringify(users));


     location.href = BASE_URL + "LogIn.html";
}



