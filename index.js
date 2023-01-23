var mill = 0
var sec = 0
var min = 0
var hour = 0
var interval

function twoDigits(digit) {
    if (digit < 10) {
        return ('0' + digit)
    } else {
        return (digit)
    }

}

function start() {
    interval = setInterval(watch, 10)

}

function stop() {
    clearInterval(interval)
}

function reset() {
    clearInterval(interval)
    mill = 0
    sec = 0
    document.getElementById('watch').innerText = '00:00:00:00'
}

function watch() {
    mill++
    if (mill == 100) {
        sec++
        mill = 0
    }
    if (sec == 60) {
        min++
        sec = 0
    }
    if (min == 60) {
        hour++
        min = 0
    }
    document.getElementById('watch').innerText = twoDigits(hour) + ':' + twoDigits(min) + ':' + twoDigits(sec) + ':' + twoDigits(mill)
}