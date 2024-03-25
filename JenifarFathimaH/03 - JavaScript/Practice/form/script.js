//let userDetailsArray = [];

//function getDetails() {
//    let firstName = document.getElementById("fname").value;
//    let lastName = document.getElementById("lname").value;
//    let useremail = document.getElementById("useremail").value;
//    let userage = document.getElementById("age").value;
//    let userphone = document.getElementById("phone").value;

//    let userDetailsObject = {
//        firstName : firstName,
//        lastName : lastName,
//        mail : useremail,
//        age : userage,
//        phone : userphone
//    }
//    userDetailsArray.push(userDetailsObject);
//    updateTable();

//    document.getElementById("fname").value = "";
//    document.getElementById("lname").value = "";
//    document.getElementById("useremail").value = "";
//    document.getElementById("age").value = "";
//    document.getElementById("phone").value = "";
//}

//function updateTable() {
//    let tableContent = document.querySelector("#detailTable tbody");
//    tableContent.innerHTML = "";

//    for (let i = 0; i < userDetailsArray.length; i++) {
//        let data = userDetailsArray[i];
//        tableContent.innerHTML += `
//              <tr>
//                 <td>${data.firstName}</td>
//                 <td>${data.lastName}</td>
//                 <td>${data.mail}</td>
//                 <td>${data.age}</td>
//                 <td>${data.phone}</td>
//                 <td><button onclick = edit(${i})>Edit</button></td>
//                 <td><button onclick = deleteEntry(${i})>Delete</button></td>
//             </tr>`;
//    }
//}

//function deleteEntry(index) {
//    userDetailsArray.splice(index, 1);
//    updateTable();
//}

//function edit(index) {
//    let data = userDetailsArray[index];
//    document.getElementById("fname").value = data.firstName;
//    document.getElementById("lname").value = data.lastName;
//    document.getElementById("useremail").value = data.mail;
//    document.getElementById("age").value = data.age;
//    document.getElementById("phone").value = data.phone;

//    userDetailsArray.splice(index, 1);
//    updateTable();
//}

var userDetailsArray = [];


function getDetails() {
    userObject.Key = document.getElementById("useremail").value;
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let useremail = document.getElementById("useremail").value;
    let userage = document.getElementById("age").value;
    let userphone = document.getElementById("phone").value;

    let userDetailsObject = {
        firstName : firstName,
        lastName : lastName,
        mail : useremail,
        age : userage,
        phone : userphone
    }
    userDetailsArray.push(userDetailsObject);
    updateTable();

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("useremail").value = "";
    document.getElementById("age").value = "";
    document.getElementById("phone").value = "";
}

function updateTable() {
    let tableContent = document.querySelector("#detailTable tbody");
    tableContent.innerHTML = "";

    for (let i = 0; i < userDetailsArray.length; i++) {
        let data = userDetailsArray[i];
        tableContent.innerHTML += `
              <tr>
                 <td>${data.firstName}</td>
                 <td>${data.lastName}</td>
                 <td>${data.mail}</td>
                 <td>${data.age}</td>
                 <td>${data.phone}</td>
                 <td><button onclick = edit(${i})>Edit</button></td>
                 <td><button onclick = deleteEntry(${i})>Delete</button></td>
             </tr>`;
    }
}


function deleteEntry(data) {
    let index = userDetailsArray.indexOf(data);

    userDetailsArray.splice(index, 1);

    updateTable();
}


function edit(index) {
    //for(let index in obj)
    //{
    //    let data = obj[index];

    //    if(data.Email == Email)
    //    {
    let edit = userDetailsArray[index];

    document.getElementById("Key").value = edit.Key;
    document.getElementById("fname").value = edit.firstName;
    document.getElementById("lname").value = edit.lastName;
    document.getElementById("useremail").value = edit.mail;
    document.getElementById("age").value = edit.age;
    document.getElementById("phone").value = edit.phone;

    document.getElementById("submit").type = "hidden";
    document.getElementById("rename").type = "button";
    //        break;
    //    }
    //}    
}

function reEdit() {
    let Key = document.getElementById("Key").value;
    let newName = document.getElementById("Name").value;
    let newEmail = document.getElementById("Email").value;
    let newAge = document.getElementById("Age").value;
    let newPhone = document.getElementById("Phone").value;

    for (let data of obj) {
        if (data.Key == Key) {
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
