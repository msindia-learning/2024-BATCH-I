const BASE_URL = "file:///C:/Users/ArunthandavanMullain/Desktop/jenifar-github/JenifarFathimaH/00%20-%20Projects/02%20-%20JavaScript/Form%20validation/";
let users = [];

function signupUser() {
    let username = document.getElementById("signupUsername").value;
    let email = document.getElementById("signupEmail").value;
    let age = document.getElementById("signupAge").value;
    let phone = document.getElementById("signupPhone").value;
    let password = document.getElementById("signupPassword").value;

    let userObj = { username: username, email: email, age: age, phone: phone, password: password };
    users.push(userObj);

    document.getElementById("signupUsername").value = "";
    document.getElementById("signupEmail").value = "";
    document.getElementById("signupAge").value = "";
    document.getElementById("signupPhone").value = "";
    document.getElementById("signupPassword").value = "";
    return false;
}

function loginUser() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    for (let i = 0; i < users.length; i++) {
        let currentUser = users[i];
        if (currentUser.username === username) {
            if (currentUser.password === password) {
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                location.href = BASE_URL + 'profile.html';
                alert("login successfully");
                return false;
            } else {
                document.getElementById("loginMessage").innerHTML = "Invalid password!";
            }
        }
    }
    document.getElementById("loginMessage").innerHTML = "Invalid username";
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

