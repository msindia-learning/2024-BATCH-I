document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var userId = generateUniqueId(); 

    
    var userData = {
        userId: userId,
        username: username,
        email: email,
        password: password,
        phoneNumber: phoneNumber
    };
    function generateUniqueId() {
        return  Math.random();
        
    
    }
    let signin_data=JSON.parse(localStorage.getItem("signin_data"));
    if(signin_data==null){
        signin_data=[userData];
    }
    else{
        signin_data.push(userData);
    }

    localStorage.setItem("signin_data", JSON.stringify(signin_data));
    
    
    window.location.href = 'login.html';
});





