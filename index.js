var playBtn = document.getElementById("play");
var restartBtn = document.getElementById("restart-btn");
var game = document.getElementById("game");
var intro = document.getElementById("intro");
var message = document.getElementById("message");
var id0 , id1 , id2 , id3 , id4 , id5 , id6 , id7 , id8
id0 = document.getElementById("0").value
id1 = document.getElementById("1").value
id2 = document.getElementById("2").value
id3 = document.getElementById("3").value
id4 = document.getElementById("4").value
id5 = document.getElementById("5").value
id6 = document.getElementById("6").value
id7 = document.getElementById("7").value
id8 = document.getElementById("8").value

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

