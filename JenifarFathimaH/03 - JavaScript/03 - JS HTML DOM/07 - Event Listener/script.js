function handleClick() {
    alert("Button clicked!");
}

var button = document.getElementById("myButton");

document.getElementById("addButton").addEventListener("click", function () {
    button.addEventListener("click", handleClick);
    alert("Event listener added");
});

document.getElementById("removeButton").addEventListener("click", function () {
    button.removeEventListener("click", handleClick);
    alert("Event listener removed");
});