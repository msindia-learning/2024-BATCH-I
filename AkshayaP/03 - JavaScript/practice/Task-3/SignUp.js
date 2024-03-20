const BASE_URL = "file:///C:/Users/Administrator/source/repos/msindia-learning/2024-BATCH-I/AkshayaP/03%20-%20JavaScript/practice/Task-3/";

var obj = [];
 function addToArray(){
    var arrObj = {};
    arrObj.Name = document.getElementById("Name").value;
    arrObj.Email = document.getElementById("Email").value;
    arrObj.Age = document.getElementById("Age").value;
    arrObj.Address = document.getElementById("Address").value;
    arrObj.Contact = document.getElementById("Phone").value;
    arrObj.Password = document.getElementById("Password").value;
     


     document.getElementById("Name").value = "";
     document.getElementById("Email").value = "";
     document.getElementById("Age").value = "";
     document.getElementById("Address").value = "";
     document.getElementById("Phone").value = "";
     document.getElementById("Password").value = "";


    obj.push(arrObj);
    console.log(obj);



     localStorage.setItem("Users_List", JSON.stringify(obj));

     location.href = BASE_URL + "LogIn.html";
}



