let BASE_URL = "file:///C:/Users/ArunthandavanMullain/Desktop/jenifar-github/JenifarFathimaH/00%20-%20Projects/02%20-%20JavaScript/Form%20validation/"; 
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (currentUser) {
        let tableContent = document.querySelector("#userDetails tbody");
        tableContent.innerHTML = "";

        for (let i = 0; i < currentUser.length; i++) {
            let assignuser = currentUser[i];
            tableContent.innerHTML += `
              <tr>
                 <td>${assignuser.username}</td>
                 <td>${assignuser.email}</td>
                 <td>${assignuser.age}</td>
                 <td>${assignuser.phone}</td>
                 <td><button onclick = edit(${i})>Edit</button></td>
                 <td><button onclick = deleteEntry(${i})>Delete</button></td>
             </tr>`;
        }
     } else {
     alert("No user found. Redirecting to login/signup page.");
     location.href = BASE_URL + 'index.html';
 }



//function update() {
//    let table_body = document.getElementById("table-body");

//    let strHtmlContent = "";

//    for (let i = 0; i < obj.length; i++) {
//        let data = obj[i];
//        strHtmlContent += "<tr><td>" + data.Name + "</td><td>" + data.Email + "</td><td>" + data.Age + "</td><td>" + data.Phone + "</td>";

//        strHtmlContent += "<td><button onclick='Edit(\"" + i + "\")'>Edit</button></td>";
//        strHtmlContent += "<td><button onclick='Delete(\"" + i + "\")'>Delete</button></td>";

//        strHtmlContent += "</tr>"
//    }

//    table_body.innerHTML = strHtmlContent;
//}


function deleteEntry(data) {
    currentUser.splice(data, 1);
    localStorage.setItem("uploadDetails", JSON.stringify(currentUser)); 
    update();
   
}

function update() {
    if (currentUser) {
        let tableContent = document.querySelector("#userDetails tbody");
        tableContent.innerHTML = "";

        for (let i = 0; i < currentUser.length; i++) {
            let assignuser = currentUser[i];
            tableContent.innerHTML += `
              <tr>
                 <td>${assignuser.username}</td>
                 <td>${assignuser.email}</td>
                 <td>${assignuser.age}</td>
                 <td>${assignuser.phone}</td>
                 <td><button onclick = edit(${i})>Edit</button></td>
                 <td><button onclick = deleteEntry(${i})>Delete</button></td>
             </tr>`;
        }
    } else {
        alert("No user found. Redirecting to login/signup page.");
        location.href = BASE_URL + 'index.html';
    }
}
//function edit(index) {
//    let edit = currentUser[index];

//    document.getElementById("Key").value = edit.Key;
//    document.getElementById("username").value = edit.Name;
//    document.getElementById("email").value = edit.Email;
//    document.getElementById("age").value = edit.Age;
//    document.getElementById("phone").value = edit.Phone;

//    document.getElementById("submit").type = "hidden";
//    document.getElementById("rename").type = "button";
//}

//function reEdit() {
//    let Key = document.getElementById("Key").value;
//    let newUsername = document.getElementById("userame").value;
//    let newEmail = document.getElementById("email").value;
//    let newAge = document.getElementById("age").value;
//    let newPhone = document.getElementById("phone").value;

//    for (let data of obj) {
//        if (data.Key == Key) {
//            data.Key = newEmail;
//            data.Name = newUsername;
//            data.Email = newEmail;
//            data.Age = newAge;
//            data.Phone = newPhone;

//            break;
//        }

//    }

//    update();



//    document.getElementById("username").value = "";
//    document.getElementById("email").value = "";
//    document.getElementById("age").value = "";
//    document.getElementById("phone").value = "";
//}

