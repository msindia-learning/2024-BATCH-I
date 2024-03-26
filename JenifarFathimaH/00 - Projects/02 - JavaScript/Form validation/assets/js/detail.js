
let users_data = JSON.parse(localStorage.getItem("users_data"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

document.addEventListener("DOMContentLoaded", function () {

    renderTable();

});


function renderTable() {
    let tableContent = document.querySelector("#userDetails tbody");
    tableContent.innerHTML = "";

    if (users_data && users_data[currentUser.username]) {
        for (let i = 0; i < users_data[currentUser.username].length; i++) {
            let assignuser = users_data[currentUser.username][i];
            tableContent.innerHTML += `
                <tr>
                    <td>${assignuser.Name}</td>
                    <td>${assignuser.Email}</td>
                    <td>${assignuser.Age}</td>
                    <td>${assignuser.Phone}</td>
                    <td><button onclick="edit(${i})">Edit</button></td>
                    <td><button onclick="deleteEntry(${i})">Delete</button></td>
                </tr>`;
        }
    }
}

function edit(index) {
    localStorage.setItem("editIndex", index);
    window.location.href = "detail.html";
}

function deleteEntry(index) {

    if (currentUser && users_data && users_data[currentUser.username]) {
        users_data[currentUser.username].splice(index, 1);

        localStorage.setItem("users_data", JSON.stringify(users_data));
        renderTable();
    }
}

function updateItem() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let users_data = JSON.parse(localStorage.getItem("users_data"));
    let editIndex = parseInt(localStorage.getItem("editIndex"));

    let newName = document.getElementById("dUsername").value;
    let newEmail = document.getElementById("dEmail").value;
    let newAge = document.getElementById("dAge").value;
    let newPhone = document.getElementById("dPhone").value;

    let item = users_data[currentUser.username][editIndex];

    if (item) {
        item.Name = newName;
        item.Email = newEmail;
        item.Age = newAge;
        item.Phone = newPhone;

        localStorage.setItem("users_data", JSON.stringify(users_data));
        window.location.href = "profile.html";

    } else {
        console.error("Item not found for editing!");
    }
}
