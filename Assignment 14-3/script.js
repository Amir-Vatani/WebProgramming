
var out = document.getElementById("bpm");
var p1 = false;
function metronome(){
    var bpm = document.getElementById("Metronome").value;
    out.innerHTML = bpm;
    if(bpm <= 80)
        changeColor("rgb(20, 99, 172)");
    else if (bpm > 180)
        changeColor("rgb(216, 6, 6)");
    else
        changeColor("rgb(20, 172, 20)");

    var status = document.getElementById("play");
    if(status.innerHTML == "Pause")
    {
        clearInterval(t);
        p1 = true;
        play();
    }
    p1 = false;

}
function plus(){
    var bpm = document.getElementById("Metronome");
    bpm.stepUp();
    out.innerHTML = bpm.value;
}
function mines(){
    var bpm = document.getElementById("Metronome");
    bpm.stepDown();
    out.innerHTML = bpm.value;
}
var audio = new Audio("sound.wav");
var p = false;
function sound(){
    var bpm = document.getElementById("Metronome");
    var status = document.getElementById("play");
    audio.play();
}
var t;
function play(){
    var status = document.getElementById("play");
    var bpm = document.getElementById("Metronome").value;
    if(!p || p1)
    {
        t = setInterval(sound, 60000 / bpm);
        status.innerHTML = "Pause";
        p = true;
    }
    else
    {
        clearInterval(t);
        status.innerHTML = "Play";
        p = false;
    }
}
function changeColor(color){
    var mines = document.getElementById("mines");
    var plus = document.getElementById("plus");
    var play = document.getElementById("play");

    mines.style.backgroundColor = color;
    plus.style.backgroundColor = color;
    play.style.backgroundColor = color;

    mines.style.borderColor = color;
    plus.style.borderColor = color;
    play.style.borderColor = color;
}