var msec = document.getElementById("msec");
var sec = document.getElementById("sec");

var start = document.getElementById("start");
var reset = document.getElementById("reset");
var stop = document.getElementById("stop");
var timer = 00;

var interval;
start.onclick = function milseconds(){

    interval = setInterval(startTimer,10);
}

function startTimer(){
    timer ++;
    msec.innerHTML = timer;
}


stop.onclick = function Stop(){
    clearInterval(interval);
}