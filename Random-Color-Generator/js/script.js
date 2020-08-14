function randomColor() {
    return Math.floor(Math.random() * 255) + 1;
}

function boxShadow(colorValue) {
    return "0 2px 2px 0"+colorValue+", 5px 6px 40px 5px"+colorValue;
}

function generateRandomColor() {
    var r = randomColor();
    var g = randomColor();
    var b = randomColor();

    var background = "rgb("+r+", "+g+", "+b+")";

    console.log(background);

    var panel = document.getElementById("row-color-panel");
    var button = document.getElementById("button");

    panel.style.backgroundColor = background;
    button.style.color = background;
    button.style.border = background;
    button.style["box-shadow"] = "0 2px 2px 0 "+background+", 5px 6px 40px 5px "+background;
}