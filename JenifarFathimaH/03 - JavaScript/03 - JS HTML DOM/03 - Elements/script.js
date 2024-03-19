var headingElement = document.getElementById("heading");
var paragraphElement = document.querySelector("p");
var buttonElement = document.getElementById("myButton");

headingElement.textContent = "Im Jenifar";
paragraphElement.style.color = "blue";
buttonElement.innerHTML = "Click!";

buttonElement.addEventListener("click", function () {
    alert("Button clicked!");
});