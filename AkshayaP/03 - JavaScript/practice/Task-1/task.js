var obj = [];


function addToArray()
    {
    var userObject = {};
    userObject.Key = document.getElementById("Email").value;
        userObject.Name = document.getElementById("Name").value;
        userObject.Email = document.getElementById("Email").value;
        userObject.Age = document.getElementById("Age").value;
        userObject.Phone = document.getElementById("Phone").value;

        obj.push(userObject);

    update();
    document.getElementById("Name").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("Phone").value = "";
   }
   
function update()
{
    let table_body = document.getElementById("table-body");
    
    let strHtmlContent = "";

    for(let i = 0; i < obj.length;i++)
    {   
        let data = obj[i];
        strHtmlContent += "<tr><td>" + data.Name + "</td><td>" + data.Email + "</td><td>" + data.Age + "</td><td>" + data.Phone + "</td>";

        strHtmlContent += "<td><button onclick='Edit(\"" + i + "\")'>Edit</button></td>";
        strHtmlContent += "<td><button onclick='Delete(\"" + i + "\")'>Delete</button></td>";

        strHtmlContent += "</tr>"
    }

    table_body.innerHTML = strHtmlContent;
}


function Delete(data)
{
    let index = obj.indexOf(data);

    obj.splice(index, 1);
    
    update();
}


function Edit(index)
{
    //for(let index in obj)
    //{
    //    let data = obj[index];

    //    if(data.Email == Email)
    //    {
            let edit = obj[index];

    document.getElementById("Key").value = edit.Key;
            document.getElementById("Name").value = edit.Name;
            document.getElementById("Email").value = edit.Email;
            document.getElementById("Age").value = edit.Age;
            document.getElementById("Phone").value = edit.Phone;

    document.getElementById("submit").type = "hidden";
    document.getElementById("rename").type = "button";
    //        break;
    //    }
    //}    
}

function reEdit()
{
    let Key = document.getElementById("Key").value;
    let newName = document.getElementById("Name").value;
    let newEmail = document.getElementById("Email").value;
    let newAge = document.getElementById("Age").value;
    let newPhone = document.getElementById("Phone").value;

    for(let data of obj)
    {
        if(data.Key == Key)
        {
            data.Key = newEmail;
            data.Name = newName;
            data.Email = newEmail;
            data.Age = newAge;
            data.Phone = newPhone;

            break;
        }
        
    }

    update();

    

    document.getElementById("Name").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("Phone").value = "";
}


//function reEdit() {
    
//    let newName = document.getElementById("Name").value;
//    let newEmail = document.getElementById("Email").value;
//    let newAge = document.getElementById("Age").value;
//    let newPhone = document.getElementById("Phone").value;

    
//    for (let index in obj) {
//        let data = obj[index];
        
//        data.Name = newName;
//        data.Email = newEmail;
//        data.Age = newAge;
//        data.Phone = newPhone;
//    }

    
//    update();

    
//    document.getElementById("Name").value = "";
//    document.getElementById("Email").value = "";
//    document.getElementById("Age").value = "";
//    document.getElementById("Phone").value = "";
//}

//function toggle()
//{
//    let element = document.getElementById("button");
//    let hidden = element.getAttribute("hidden");


//    if(Edit)
//    {
//        element.setAttribute("hidden");
//    }
//    else
//    {
//        element.setAttribute("hidden");
//    }
//}
