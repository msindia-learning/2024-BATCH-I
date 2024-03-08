function changeColor() {

    var divElement = document.querySelector(".colorful-div");

    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    divElement.style.backgroundColor = randomColor;
}

function resetColor() {
    var divElement = document.querySelector(".colorful-div");

    divElement.style.backgroundColor = "lightblue";
}