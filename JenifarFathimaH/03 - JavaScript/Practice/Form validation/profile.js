var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
if (currentUser) {
    let userDetailsHTML = "";
    userDetailsHTML += `
                  <p><strong>Username:</strong> ${currentUser.username}<p>
                  <p><strong>Email:</strong> ${currentUser.email}<p>
                  <p><strong>Age:</strong> ${currentUser.age}<p>
                  <p><strong>Phone:</strong> ${currentUser.phone}<p>`

    document.getElementById("userDetails").innerHTML = userDetailsHTML;
} else {
    alert("No user found. Redirecting to login/signup page.");
    window.location.href = 'index.html';
}