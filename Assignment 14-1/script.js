function SwitchMode(){
    var dark = document.getElementById("dark-mode");
    var back = document.getElementById("form");
    if (dark.checked)
        back.style.backgroundColor = "rgb(110, 110, 247)";
    else 
        back.style.backgroundColor = "whitesmoke";
}

function addchild(){
    var childeren = document.getElementById("childeren");

    var new_input = document.createElement("INPUT");
    new_input.setAttribute("type", "text");
    new_input.setAttribute("id", "in");

    childeren.appendChild(new_input);
}
function removechild(){
    var childeren = document.getElementById("childeren");
    if(childeren.childNodes[0])
        childeren.removeChild(childeren.lastChild);
}
function havechild(){
    var child_btn = document.getElementById("child-title");
    if (document.getElementById("child").checked)
    {
        child_btn.style.display = "block";
        document.getElementById("childeren").style.display = "block";
    }
    else
    {
        child_btn.style.display = "none";
        document.getElementById("childeren").style.display = "none";
    }
}
function single(){
    var wife = document.getElementsByClassName("wife");
    wife[0].style.display = "none";
    wife[1].style.display = "none";
}
function married(){
    var wife = document.getElementsByClassName("wife");
    wife[0].style.display = "block";
    wife[1].style.display = "block";
}
function login(){
    var form = document.getElementById("form");
    form.style.display = "block";
}