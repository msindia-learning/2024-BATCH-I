let userDetailsArray = [];

function getDetails() {
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

function deleteEntry(index) {
    userDetailsArray.splice(index, 1);
    updateTable();
}

function edit(index) {
    let data = userDetailsArray[index];
    document.getElementById("fname").value = data.firstName;
    document.getElementById("lname").value = data.lastName;
    document.getElementById("useremail").value = data.mail;
    document.getElementById("age").value = data.age;
    document.getElementById("phone").value = data.phone;

    userDetailsArray.splice(index, 1);
    updateTable();
}