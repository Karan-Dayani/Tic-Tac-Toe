var playBtn = document.getElementById("play");
var restartBtn = document.getElementById("restart-btn");
var game = document.getElementById("game");
var intro = document.getElementById("intro");
var message = document.getElementById("message");

var id0 = document.getElementById("0");
var id1 = document.getElementById("1");
var id2 = document.getElementById("2");
var id3 = document.getElementById("3");
var id4 = document.getElementById("4");
var id5 = document.getElementById("5");
var id6 = document.getElementById("6");
var id7 = document.getElementById("7");
var id8 = document.getElementById("8");

playBtn.onclick = () => {
    intro.classList.add("fadeOut");
    game.classList.add("fadeIn");
}

if((id0 == "X") && (id1 == "X") && (id2 == "X")){
    message.innerHTML = "X"
    document.getElementById("id3").disabled = true;
    document.getElementById("id4").disabled = true;
    document.getElementById("id5").disabled = true;
    document.getElementById("id6").disabled = true;
    document.getElementById("id7").disabled = true;
    document.getElementById("id8").disabled = true;
    window.alert('Player X won');
}

