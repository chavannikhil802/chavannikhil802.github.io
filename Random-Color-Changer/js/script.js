// FUNCTION THAT GENERATES A RANDOM NUMBER COLOR IN RGB FORMAT FOR BACKGROUND PANEL
function randomBackgroundColor() {
    // GENERATE A RANDOM NUMBER UPTO 255
    return Math.floor(Math.random() * 255) + 1;
}

// FUNCTION THAT GENERATES A RANDOM NUMBER COLOR IN RGB FORMAT FOR TITLE
function randomHeadingColor() {
    // GENERATE A RANDOM NUMBER UPTO 255
    return Math.floor(Math.random() * 255) + 1;
}

// FUNCTION THAT GENERATES A RANDOM NUMBER COLOR IN RGB FORMAT FOR BACKGROUND PANEL
function generateRandomBackgroundColor() {
    // R,G, B VARIABLES TO STORE THE RANDOM GENERATED VALUES 
    var r = randomBackgroundColor();
    var g = randomBackgroundColor();
    var b = randomBackgroundColor();

    // APPENDING THE RGB VALUES IN ONE VARIABLE
    var background = "rgb("+r+", "+g+", "+b+")";

    var panel = document.getElementById("row-color-panel");

    // APPLYING THE RANDOM COLOR TO THE COLOR PANEL
    panel.style.backgroundColor = background;
}

// FUNCTION THAT GENERATES A RANDOM NUMBER COLOR IN RGB FORMAT FOR TITLE
function generateRandomHeadingColor() {
    // R,G, B VARIABLES TO STORE THE RANDOM GENERATED VALUES
    var r = randomHeadingColor();
    var g = randomHeadingColor();
    var b = randomHeadingColor();

    // APPENDING THE RGB VALUES IN ONE VARIABLE
    var heading = "rgb("+r+", "+g+", "+b+")";

    var title = document.getElementById("heading");

    // APPLYING THE RANDOM COLOR TO THE HEADING
    title.style.color = heading;
}

// FUNCTION TO CALL ABOVE FUNCTIONS WITH THE TIME INTERVAL OF 2 SECONDS
function callFunctions() {
    generateRandomBackgroundColor();
    generateRandomHeadingColor();

    // TIME INTERVAL OF 2 SECONDS
    setTimeout(callFunctions, 2000);
}
