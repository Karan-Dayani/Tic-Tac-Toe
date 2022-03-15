var playBtn = document.getElementById("play");
var restartBtn = document.getElementById("restart-btn");
var game = document.getElementById("game");
var intro = document.getElementById("intro");

playBtn.onclick = () => {
    intro.classList.add("fadeOut");
    game.classList.add("fadeIn");
}
97