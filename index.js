window.addEventListener("DOMContentLoaded", () => {
    // setting variable
    let playerDisplay = document.querySelector(".display-player")
    let tiles = Array.from(document.querySelectorAll(".tile"))
    let announcer = document.querySelector(".announcer")
    let reset = document.querySelector("#reset")
    let currentPlayer = "X"

    function changePlayer() {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }
        playerDisplay.innerHTML = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    checkWinner = (board) => {
        let check1 = new Set([board[0], board[1], board[2]])
        let check2 = new Set([board[3], board[4], board[5]])
        let check3 = new Set([board[6], board[7], board[8]])
        let check4 = new Set([board[0], board[3], board[6]])
        let check5 = new Set([board[1], board[4], board[7]])
        let check6 = new Set([board[2], board[5], board[8]])
        let check7 = new Set([board[0], board[4], board[8]])
        let check8 = new Set([board[2], board[4], board[6]])

        if (check1.size == 1 && !(check1.has(-1))) {
            return currentPlayer
        } else if (check2.size == 1 && !(check2.has(-1))) {
            return currentPlayer
        } else if (check3.size == 1 && !(check3.has(-1))) {
            return currentPlayer
        } else if (check4.size == 1 && !(check4.has(-1))) {
            return currentPlayer
        } else if (check5.size == 1 && !(check5.has(-1))) {
            return currentPlayer
        } else if (check6.size == 1 && !(check6.has(-1))) {
            return currentPlayer
        } else if (check7.size == 1 && !(check7.has(-1))) {
            return currentPlayer
        } else if (check8.size == 1 && !(check8.has(-1))) {
            return currentPlayer
        }else if (!board.includes(-1)){
            return "DRAW"
        }else{
            return false
        }
    }

    let board = [-1, -1, -1, -1, -1, -1, -1, -1, -1]
    tiles.forEach((tile, index) => {
        tile.addEventListener("click", () => {
            tile.innerHTML = currentPlayer;
            board[index] = currentPlayer
            tile.classList.add("point");
            tile.classList.add(`player${currentPlayer}`);
            let result = checkWinner(board)
            if (result) {
                announcer.classList.remove("hide");
                if (result === "DRAW") {
                    announcer.innerHTML = result;
                } else {
                    announcer.innerHTML = result + " is the winner"
                }
                // console.log(result + " is the winner")
            } else {
                changePlayer();
            }
        });
    });

    reset.addEventListener("click", () => {
        
    });
});