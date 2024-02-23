let timer;
let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("second");
let displays = document.getElementById("display");

function start(){
    if(timer){
        clearInterval(timer);
    }
    let h = parseInt(hours.value) || 0;
    let m = parseInt(minutes.value) || 0;
    let s = parseInt(seconds.value) || 0;

    let totalSeconds = h * 3600 + m * 60 + s;

    timer = setInterval(function(){
        totalSeconds--;
        if(totalSeconds >= 0){
            updateTimer(totalSeconds);
        }
        else{
            clearInterval(timer);
        }
    },1000);
}

function pause(){
    clearInterval(timer);
}

function reset(){
    clearInterval(timer);
    displays.textContent = '00:00:00';
    hours.value = '0';
    minutes.value = '0';
    seconds.value = '0';
}

function updateTimer(totalSeconds){
    let h = Math.floor(totalSeconds / 3600)
    let m = Math.floor((totalSeconds % 3600) / 60 );
    let s = totalSeconds % 60;

    displays.innerText = `${h}:${m}:${s}`
}

