window.addEventListener("DOMContentLoaded", () => {
    const cells = Array.from(document.querySelectorAll(".col"));
    const message = document.getElementById("message");
    const restartBtn = document.getElementById("restart-btn");
    var playBtn = document.getElementById("play");
    var intro = document.getElementById("intro");
    var game = document.getElementById("game");

    playBtn.onclick = () => {
    intro.classList.add("fadeOut");
    game.classList.add("fadeIn");
    }

    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let isGameActive = true;

    const PLAYERX_WON = "PlayerX_Won";
    const PLAYERO_WON = "PlayerO_Won";
    const TIE = "TIE";

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === "" || b === "" || c === "") {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            announce(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

        if (!board.includes("")) {
            announce(TIE);
        }
    }

    const announce = (type) => {
        switch(type) {
            case PLAYERO_WON:
                message.innerHTML = "Player O Won";
                break;
            case PLAYERX_WON:
                message.innerHTML = "Player X Won";
                break;
            case TIE:
                message.innerText = "TIE";
        }
    }

    const isValidAction = (cell) => {
        if (cell.innerText === "X" || cell.innerText === "O") {
            return false;
        }

        return true;
    }

    const updateBoard = (index) => {
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        message.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        message.innerText = `it's ${currentPlayer}'s turn.`;
        message.classList.add(`player${currentPlayer}`);
    }

    const userAction = (cell, index) => {
        if (isValidAction(cell) && isGameActive) {
            cell.innerText = currentPlayer;
            cell.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    const restartBoard = () => {
        message.innerText = "";
        board = ["", "", "", "", "", "", "", "", ""];
        isGameActive = true;

        if (currentPlayer === "O") {
            changePlayer();
        }

        cells.forEach(cell => {
            cell.innerText = "";
            cell.classList.remove("playerX");
            cell.classList.remove("playerO");
        });
    }

    cells.forEach( (cell, index) => {
        cell.addEventListener("click", () => userAction(cell, index));
    });


    restartBtn.addEventListener("click", restartBoard);
});





// var restartBtn = document.getElementById("restart-btn");


// var message = document.getElementById("message");
// var cells = document.querySelectorAll(".col");


