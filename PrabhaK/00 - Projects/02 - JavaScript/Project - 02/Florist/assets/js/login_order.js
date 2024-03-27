document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var signInData = JSON.parse(localStorage.getItem("signin_data"));
    var bouquet_data = JSON.parse(localStorage.getItem('bouquet_data'));

    if (signInData) {
        var matchedUser = signInData.find(function(user) {
            return user.username === username && user.password === password;
        });

        if (matchedUser) {
            var userId = matchedUser.userId;

            var matchedBouquetIndex = bouquet_data.findIndex(bouquet => bouquet.userId == userId);

            console.log(matchedBouquetIndex);

            if (matchedBouquetIndex !== -1) {
                var matchedBouquet = bouquet_data[matchedBouquetIndex];
                localStorage.setItem("showdata", JSON.stringify(matchedBouquet));
              
                window.location.href = 'showdata.html';
            } else {
                console.log("No matching bouquet ");
            }
        } else {
            alert('Invalid username or password. Please try again.');
        }
    } else {
        alert('Sign-in data not found. Please sign up first');
    }
});



