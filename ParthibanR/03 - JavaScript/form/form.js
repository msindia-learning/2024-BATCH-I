var serialNo = 1;

document.getElementById('userInfo').addEventListener('submit', function (event) {
    event.preventDefault();

    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;

    var table = document.getElementById('userInfoTable').getElementsByTagName('tbody')[0];
    var newRows = table.insertRow(table.rows.length);

    var R0 = newRows.insertCell(0); 
    var R1 = newRows.insertCell(1);
    var R2 = newRows.insertCell(2);
    var R3 = newRows.insertCell(3);
    var R4 = newRows.insertCell(4);
    var R5 = newRows.insertCell(5);

    R0.innerHTML = serialNo++;
    R1.innerHTML = firstname;
    R2.innerHTML = lastname;
    R3.innerHTML = email;
    R4.innerHTML = age;
    R5.innerHTML = '<button onclick="editRow(this)"><i class="fa-solid fa-pen"></i></button>  <button onclick = "deleteRow(this)" > <i class="fa-solid fa-trash"></i></button > ';

    document.getElementById('firstname').value = " ";
    document.getElementById('lastname').value = " ";
    document.getElementById('email').value = " ";
    document.getElementById('age').value = " ";
    

});


function editRow(button) {
    var row = button.parentNode.parentNode;
    var firstname = row.cells[1].innerHTML;
    var lastname = row.cells[2].innerHTML;
    var email = row.cells[3].innerHTML;
    var age = row.cells[4].innerHTML;

    document.getElementById('firstname').value = firstname;
    document.getElementById('lastname').value = lastname;
    document.getElementById('email').value = email;
    document.getElementById('age').value = age;

    row.editRow();
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.remove();
}