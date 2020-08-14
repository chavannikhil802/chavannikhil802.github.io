// FUNCTION THAT GENERATES A RANDOM NUMBER COLOR IN RGB FORMAT
function randomColor() {
    // GENERATE A RANDOM NUMBER UPTO 255
    return Math.floor(Math.random() * 255) + 1;
}

function generateRandomColor() {
    // R,G, B VARIABLES TO STORE THE RANDOM GENERATED VALUES
    var r = randomColor();
    var g = randomColor();
    var b = randomColor();

    // APPENDING THE RGB VALUES IN ONE VARIABLE
    var background = "rgb("+r+", "+g+", "+b+")";

    var panel = document.getElementById("row-color-panel");
    var button = document.getElementById("button");

    // APPLYING THE RANDOM COLOR TO THE COLOR PANEL AND BUTTON
    panel.style.backgroundColor = background;
    button.style.color = background;
    button.style.border = background;
    button.style["box-shadow"] = "0 2px 2px 0 "+background+", 5px 6px 40px 5px "+background;
}