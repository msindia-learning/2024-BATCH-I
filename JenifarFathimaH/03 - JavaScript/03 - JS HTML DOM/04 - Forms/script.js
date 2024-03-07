var showParagraphCheckbox = document.getElementById("showParagraph");
var paragraphElement = document.getElementById("paragraph");


showParagraphCheckbox.addEventListener("change", function () {
    if (this.checked) {
        paragraphElement.style.display = "block";
    } else {
        paragraphElement.style.display = "none";
    }
});