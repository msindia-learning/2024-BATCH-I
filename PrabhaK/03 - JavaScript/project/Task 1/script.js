var arr = [];

function SaveData()
{
    var data = {
        name: document.getElementById('data1').value,
        email: document.getElementById('data2').value,
        phone: document.getElementById('data3').value,
        age: document.getElementById('data4').value
    };

    arr.push(data);

    ReloadTable();
}

function ReloadTable()
{
    let table_body = document.getElementById("table-body");

    table_body.innerHTML = "";

    for(let data of arr)
    {
        table_body.innerHTML += `
        <tr id="row-data">
        
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.phone}</td>
            <td>${data.age} </td>
            <td><td><button onclick='Delete(\" + data + \")'>Delete</button></td>
            <td><button onclick="editdata()">Edit </button></td>
            
        </tr>
        `;
    }
}


function Delete(data)
{
    let index = arr.indexOf(data);

    obj.splice(index, 1);

    //for(let index in arr)
    //{
    // let data = arr[index];

    //if(data.email == email)
    //{
    //arr.splice(index, 1);
    // break;
    //}


    ReloadTable()
}
