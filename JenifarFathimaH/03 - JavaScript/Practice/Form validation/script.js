var users = [];

function signupUser() {
    var username = document.getElementById("signupUsername").value;
    var email = document.getElementById("signupEmail").value;
    var age = document.getElementById("signupAge").value;
    var phone = document.getElementById("signupPhone").value;
    var password = document.getElementById("signupPassword").value;

    let userObj = { username: username, email: email, age: age, phone: phone, password: password };
    users.push(userObj);

    document.getElementById("signupMessage").innerHTML = "User signed up successfully!";
    document.getElementById("signupUsername").value = "";
    document.getElementById("signupEmail").value = "";
    document.getElementById("signupAge").value = "";
    document.getElementById("signupPhone").value = "";
    document.getElementById("signupPassword").value = "";
    return false;
}

function redirectToProfile(user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = 'profile.html';
}

function loginUser() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    for (var i = 0; i < users.length; i++) {
        var currentUser = users[i];
        if (currentUser.username === username && currentUser.password === password) {
            redirectToProfile(currentUser);
            return false;
        }
    }

    document.getElementById("loginMessage").innerHTML = "Invalid username/password!";
    return false;
}

