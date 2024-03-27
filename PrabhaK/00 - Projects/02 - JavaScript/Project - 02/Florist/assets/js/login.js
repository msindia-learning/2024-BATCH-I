document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

   
    var signInData = JSON.parse(localStorage.getItem("signin_data"));

 
    if (signInData) {
        
        var matchedUser = signInData.find(function(user) {
            return user.username === username && user.password === password;
        });

        if (matchedUser) {
            
            window.location.href = 'order.html?userId=' + matchedUser.userId;
        } else {
            alert('Invalid username or password. Please try again.');
        }
    } else {
        alert('Sign-in data not found. Please sign up first.');
    }
});

