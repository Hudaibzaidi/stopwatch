var hour = 0;
var min = 0;
var sec = 0;
var millis = 0;

var hrTime = document.getElementById('hour');
var miTime = document.getElementById('min');
var seTime = document.getElementById('sec');
var milTime = document.getElementById('millis');

var interval;

function Timer() {
    millis++
    if (millis == 10) {
        millis = 0
        sec++
        if (sec == 60) {
            sec = 0
            min++
        }
        if (min == 60) {
            min = 0
            hour++
        }
    }
    milTime.innerHTML = millis
    seTime.innerHTML = sec
    miTime.innerHTML = min
    hrTime.innerHTML = hour
}

function startTimer() {
    interval = setInterval(function() {
        Timer();
    }, 100)
}
function stopTimer() {
    clearInterval(interval)
}
function resetTimer() {
    hour = 0
    min = 0
    sec = 0
    millis = 0
    milTime.innerHTML = millis
    seTime.innerHTML = sec
    miTime.innerHTML = min
    hrTime.innerHTML = hour
    stopTimer()
}