var m = 0;
var s = 0;
var ms = 0;
var timer;

// FUNCTION TO START THE STOPWATCH
function start() {
    // CONDITION WHICH DISABLES START BUTTON WHEN STOPWATCH IS RUNNING
    if(!timer) {
        timer = setInterval(run, 10);
    }
}
// FUNCTION TO RUN AND DISPLAY THE STOPWATCH TIME
function run() {
    // CONVERT "0" TO "00"
    document.getElementById("minute").textContent = (m < 10) ? "0" + m : m;
    document.getElementById("seconds").textContent = (s < 10) ? "0" + s : s;
    document.getElementById("ms").textContent = (ms < 10) ? "0" + ms : ms;
    ms++;
    // SET MS TO "0" AND INCREMENT SECONDS
    if(ms == 100) {
        ms = 0;
        s++;
    }
    // SET SECONDS TO "0" AND INCREMENT MINUTE
    if(s == 60) {
        s = 0;
        m++;
    }
}
// FUNCTION TO CLEAR THE INTERVAL
function stopTimer() {
    clearInterval(timer);
    timer = false;
}
// FUNCTION TO PAUSE THE TIMER
function pause() {
    stopTimer();
}
// FUNCTION TO RESET THE TIMER
function reset() {
    stopTimer();
    // SET THE VARIABLES TO "0"
    m = 0;
    s = 0;
    ms = 0;
    // CONVERT "0" TO "00"
    document.getElementById("minute").textContent = (m < 10) ? "0" + m : m;
    document.getElementById("seconds").textContent = (s < 10) ? "0" + s : s;
    document.getElementById("ms").textContent = (ms < 10) ? "0" + ms : ms;
}