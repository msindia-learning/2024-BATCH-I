let userDataArray = [];

function getDetails() {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("useremail").value;
    let age = document.getElementById("age").value;
    let userphone = document.getElementById("phone").value;

    let userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age,
        phone: userphone
    };
    userDataArray.push(userData);

    updateTable();

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("useremail").value = "";
    document.getElementById("age").value = "";
    document.getElementById("phone").value = "";
}

function updateTable() {
    let tableBody = document.querySelector("#detailTable tbody");
    let strHtmlContent = "";

    for (let i = 0; i < userDataArray.length; i++) {
        let data = userDataArray[i];
        strHtmlContent += "<tr><td>" + data.firstName + "</td><td>" + data.lastName + "</td><td>" + data.email + "</td><td>" + data.age + "</td><td>" + data.phone + "</td>";
        strHtmlContent += "<td><button onclick='edit(" + i + ")'>Edit</button></td>";
        strHtmlContent += "<td><button onclick='deleteEntry(" + i + ")'>Delete</button></td>";
        strHtmlContent += "</tr>";
    }

    tableBody.innerHTML = strHtmlContent;
}

function deleteEntry(index) {
    userDataArray.splice(index, 1);
    updateTable();
}

function edit(index) {
    let data = userDataArray[index];
    document.getElementById("fname").value = data.firstName;
    document.getElementById("lname").value = data.lastName;
    document.getElementById("useremail").value = data.email;
    document.getElementById("age").value = data.age;
    document.getElementById("phone").value = data.phone;

    userDataArray.splice(index, 1);
    updateTable();
}