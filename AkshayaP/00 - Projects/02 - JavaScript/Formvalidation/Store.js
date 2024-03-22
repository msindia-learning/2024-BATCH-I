let table_body = document.getElementById("table-body");
var users = JSON.parse(localStorage.getItem("users"));

let strHtmlContent = "";

for(let i = 0; i < users.length; i++)
{
    let user = users[i];
    strHtmlContent += "<tr><td>" + user.Name + "</td><td>" + user.Email + "</td><td>" + user.Age + "</td><td>" + user.Address + "</td><td>"+user.Contact + "</td><td>" +"</td>";

    strHtmlContent += "</tr>"

}
table_body.innerHTML = strHtmlContent;


