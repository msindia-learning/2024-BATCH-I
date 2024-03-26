let BASE_URL = "file:///C:/Users/ArunthandavanMullain/Desktop/jenifar-github/JenifarFathimaH/00%20-%20Projects/02%20-%20JavaScript/Form%20validation/views/";

let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let users_data = JSON.parse(localStorage.getItem("users_data"));

function signupUser() {
    let username = document.getElementById("signupUsername").value;
    let email = document.getElementById("signupEmail").value;
    let age = document.getElementById("signupAge").value;
    let phone = document.getElementById("signupPhone").value;
    let password = document.getElementById("signupPassword").value;

    let userObj = { username: username, email: email, age: age, phone: phone, password: password };

    document.getElementById("signupUsername").value = "";
    document.getElementById("signupEmail").value = "";
    document.getElementById("signupAge").value = "";
    document.getElementById("signupPhone").value = "";
    document.getElementById("signupPassword").value = "";
    document.getElementById("signupMessage").innerHTML = "Sign Up Successfully!!!";
    let users = JSON.parse(localStorage.getItem("users"));

    if (users == null) {
        users = [userObj];
    }
    else {
        users.push(userObj);
    }

    localStorage.setItem("users", JSON.stringify(users));
    
    return false;
    
}
function loginUser() {
    let users = JSON.parse(localStorage.getItem("users"));
    let loginUsername = document.getElementById("loginUsername").value;
    let loginPassword = document.getElementById("loginPassword").value;

    let bIsValidUser = false;

    for (let user of users) {
        if (user.username === loginUsername && user.password === loginPassword) {
            localStorage.setItem("currentUser", JSON.stringify(user));

            location.href = BASE_URL + "profile.html";

            bIsValidUser = true;

            break;
        }
    }

    if (!bIsValidUser) {
        alert("Invalid Password");
    }
}


function openTab(evt, tabName) {
    
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

var defaultOpen = document.getElementById("defaultOpen");
if (defaultOpen) {
    defaultOpen.click();
}

function updateTable() {
    document.getElementById("submit").type = "hidden";
    document.getElementById("update").type = "button";
    let user = {
        Name: document.getElementById("dUsername").value,
        Email: document.getElementById("dEmail").value,
        Age: document.getElementById("dAge").value,
        Phone: document.getElementById("dPhone").value
    };

    if (users_data == null) {
        users_data = {};
    }

    if (users_data[currentUser.username] == null) {
        users_data[currentUser.username] = [user];
    }
    else {
        users_data[currentUser.username].push(user);
    }

    localStorage.setItem("users_data", JSON.stringify(users_data));
    location.href = 'profile.html';
}

document.addEventListener("DOMContentLoaded", function () {
    editValue();
});

function editValue() {

    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let users_data = JSON.parse(localStorage.getItem("users_data"));
    let editIndex = parseInt(localStorage.getItem("editIndex"));

    //document.getElementById("submit").type = "hidden";
    //document.getElementById("update").type = "button";
    let edit = users_data[currentUser.username][editIndex];

    if (edit) {
        document.getElementById("dUsername").value = edit.Name;
        document.getElementById("dEmail").value = edit.Email;
        document.getElementById("dAge").value = edit.Age;
        document.getElementById("dPhone").value = edit.Phone;
        localStorage.removeItem("editIndex");
    }
}
