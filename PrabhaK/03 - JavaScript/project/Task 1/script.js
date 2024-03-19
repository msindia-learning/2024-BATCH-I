var arr = [];


function SaveData() {
    var data = {
        name: document.getElementById('data1').value,
        email: document.getElementById('data2').value,
        phone: document.getElementById('data3').value,
        age: document.getElementById('data4').value
    };
    arr.push(data);

    ReloadTable();
    document.getElementById('data1').value = '';
    document.getElementById('data2').value = '';
    document.getElementById('data3').value = '';
    document.getElementById('data4').value = '';
}




function ReloadTable() {
    let table_body = document.getElementById("table-body");

    table_body.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        let data = arr[i];
        table_body.innerHTML += `
        <tr>
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.phone}</td>
            <td>${data.age}</td>
            <td>
                <button onclick="Delete(${i})">Delete</button>
                <button onclick="Edit(${i})">Edit</button>
            </td>
        </tr>
        `;
    }
}




function Delete(index) {
    arr.splice(index, 1);
    ReloadTable();
}



function Edit(index) {
    let data = arr[index];
    document.getElementById('data1').value = data.name;
    document.getElementById('data2').value = data.email;
    document.getElementById('data3').value = data.phone;
    document.getElementById('data4').value = data.age;


    document.getElementById('save-btn').style.display = 'none';
    document.getElementById('save-edit-btn').style.display = 'block';
    document.getElementById('save-edit-btn').setAttribute('data-index', index);
}




function SaveEdit() {
    let index = document.getElementById('save-edit-btn').getAttribute('data-index');
    arr[index] = {
        name: document.getElementById('data1').value,
        email: document.getElementById('data2').value,
        phone: document.getElementById('data3').value,
        age: document.getElementById('data4').value
    };

 
    document.getElementById('data1').value = '';
    document.getElementById('data2').value = '';
    document.getElementById('data3').value = '';
    document.getElementById('data4').value = '';

   
    document.getElementById('save-btn').style.display = 'block';
    document.getElementById('save-edit-btn').style.display = 'none';

    ReloadTable();
}
