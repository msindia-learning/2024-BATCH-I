var userData = [];

function registerUser()
{
    var name = document.getElementById("fname").value;
    var gmail = document.getElementById("gmail").value;
    var age = document.getElementById("age").value;
    var mobileNumber = document.getElementById("phno").value;

    var user = {
        name: name,
        gmail: gmail,
        age: age,
        mobileNumber: mobileNumber
    };

   
    userData.push(user);                          
    updateUI();  
    //deleteUI();

  
}

function updateUI()
{
    var userDataBody = document.getElementById("userDataBody");
    userDataBody.innerHTML = " ";
    userData.forEach(function(user,index)
    {
        var row = userDataBody.insertRow(-1);
        var nameCell = row.insertCell(0);
        var gmailCell = row.insertCell(1);
        var ageCell = row.insertCell(2);
        var mobileNumberCell = row.insertCell(3);

        nameCell.textContent = user.name;
        gmailCell.textContent = user.gmail;
        ageCell.textContent = user.age;
        mobileNumberCell.textContent = user.mobileNumber;

    });
}

