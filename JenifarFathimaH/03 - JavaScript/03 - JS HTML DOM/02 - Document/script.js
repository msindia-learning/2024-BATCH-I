var headingElement = document.getElementById("heading");
var paragraphElement = document.getElementsByClassName("paragraph");
var buttonElement = document.getElementById("btn");

headingElement.innerHTML = "This is Jenifar Fathima";
headingElement.style.color = "blue";

for (var i = 0; i < paragraphElement.length; i++) {
    paragraphElement[i].style.fontWeight = "bold";
}
buttonElement.onclick = () => alert("Warning");