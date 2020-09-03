const body = document.getElementById("contain");
const input = document.getElementById("colorPicker");
const colorCode = document.getElementById("colorCode");

setColor();
input.addEventListener("input",setColor);

function setColor() {
    body.style.backgroundColor = input.value;
    colorCode.innerHTML = input.value;
}