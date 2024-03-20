let users = [];

function signupUser() {
    let username = document.getElementById("signupUsername").value;
    let email = document.getElementById("signupEmail").value;
    let age = document.getElementById("signupAge").value;
    let phone = document.getElementById("signupPhone").value;
    let password = document.getElementById("signupPassword").value;

    users.push({ username: username, email: email, age: age, phone: phone, password: password });
    document.getElementById("signupMessage").innerHTML = "User signed up successfully!";
    alert("signup successfully");
    return false;
}

function redirectToProfile(user) {

    sessionStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = 'profile.html';
}

function loginUser() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    let user = users.find(function (user) {
        return user.username === username && user.password === password;
    });

    if (user) {
        redirectToProfile(user);
    } else {
        document.getElementById("loginMessage").innerHTML = "Invalid username/password!";
    }
    return false;
}

document.getElementById("defaultOpen").click();

