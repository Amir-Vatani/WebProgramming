f_deg = 0;
function spin(){
    var min = 360;
    var max = 7200;
    var deg = Math.floor(Math.random() * (max - min)) + min;
    deg+=f_deg;
    document.getElementById("wheel").style.transform = "rotate("+deg+"deg)";
    f_deg = deg;
}
