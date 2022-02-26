// mili seconds, seconds and minutes variables.
var appendMsec = document.getElementById("msec");
var appendSec = document.getElementById("sec");
var appendMin = document.getElementById("min");

//buttons variables
var btnStart = document.getElementById("button-start");
var btnReset = document.getElementById("button-reset");
var btnStop = document.getElementById("button-stop");

// helper values.
var tens = 00;
var seconds = 00;
var minutes = 00;

// interval for looping a function
var interval;

btnStart.onclick = function (){
    clearInterval(interval);
    interval = setInterval(startTimer,10);
}

btnStop.onclick = function (){
    clearInterval(interval);
}

btnReset.onclick = function res(){
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    minutes = "00";

    appendMsec.innerHTML = tens;
    appendSec.innerHTML = seconds;
    appendMin.innerHTML = minutes;
}
// this function will work the main functionality of our stopwatch app
function startTimer(){
    
    tens ++;
    if(tens <= 9){
        appendMsec.innerHTML = "0" + tens;
    }
    if(tens > 9){
        appendMsec.innerHTML = tens;
    }
    if(tens > 99){
        seconds ++;

        appendSec.innerHTML = "0" + seconds;
        tens = 0;
        appendMsec.innerHTML = "0" + tens;
    }
    if(seconds > 9){
        appendSec.innerHTML = seconds;
    }

    if(seconds >= 59 ){
        minutes ++;
       
        appendMin.innerHTML = "0"+minutes;
        seconds = 0;
        appendSec.innerHTML = "0" + seconds;

    }
    if(minutes > 9){
        appendMin.innerHTML = minutes;
    }
}

