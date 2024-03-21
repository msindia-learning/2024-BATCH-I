let BASE_URL = "file:///C:/Users/ArunthandavanMullain/Desktop/jenifar-github/JenifarFathimaH/00%20-%20Projects/02%20-%20JavaScript/Form%20validation/"; 
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (currentUser) {
    let userDetailsHTML = `
      <p><strong>Username:</strong> ${currentUser.username}</p>
      <p><strong>Email:</strong> ${currentUser.email}</p>
      <p><strong>Age:</strong> ${currentUser.age}</p>
      <p><strong>Phone:</strong> ${currentUser.phone}</p>`;

    document.getElementById("userDetails").innerHTML = userDetailsHTML;
} else {
    alert("No user found. Redirecting to login/signup page.");
    location.href = BASE_URL + 'index.html';
}
