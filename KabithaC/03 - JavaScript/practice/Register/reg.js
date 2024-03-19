var obj = [];

function submit()
{
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var age = document.getElementById("ageInput").value;
    var phone = document.getElementById("phoneInput").value;


    var rowData = {
        Name: name,
        Email: email,
        Age: age,
        Phone: phone
    };
    obj.push(rowData);
    updateTable();
}

function deleteRow(index)
{
    obj.splice(index, 1);
    updateTable();
}

function editRow(index)
{
    var nameInput = document.getElementById("nameInput");
    var emailInput = document.getElementById("emailInput");
    var ageInput = document.getElementById("ageInput");
    var phoneInput = document.getElementById("phoneInput");

    nameInput.value = obj[index].Name;
    emailInput.value = obj[index].Email;
    ageInput.value = obj[index].Age;
    phoneInput.value = obj[index].Phone;

    document.getElementById("saveButton").onclick = function()
    {

        obj[index].Name = nameInput.value;
        obj[index].Email = emailInput.value;
        obj[index].Age = ageInput.value;
        obj[index].Phone = phoneInput.value;


        updateTable();
        saveButton.parentNode.removeChild(saveButton);
    };

    document.body.appendChild(saveButton);
}


function updateTable()
{
    var tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";


    for(var i = 0; i < obj.length; i++)
    {
        var rowData = obj[i];
        var tr = document.createElement("tr");


        var nameCell = document.createElement("td");
        nameCell.textContent = rowData.Name;
        tr.appendChild(nameCell);

        var emailCell = document.createElement("td");
        emailCell.textContent = rowData.Email;
        tr.appendChild(emailCell);

        var ageCell = document.createElement("td");
        ageCell.textContent = rowData.Age;
        tr.appendChild(ageCell);

        var phoneCell = document.createElement("td");
        phoneCell.textContent = rowData.Phone;
        tr.appendChild(phoneCell);

        var actionsCell = document.createElement("td");
        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function(i)
        {
            return function()
            {
                editRow(i);
            };
        }(i));
        actionsCell.appendChild(editButton);

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function(i)
        {
            return function()
            {
                deleteRow(i);
            };
        }(i));
        actionsCell.appendChild(deleteButton);

        tr.appendChild(actionsCell);
        tableBody.appendChild(tr);
    }
}