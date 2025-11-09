let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

function makeMove(cell, index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        cell.innerText = currentPlayer;
        
        if (checkWinner()) {
            document.getElementById("status").innerText = `${currentPlayer} wins!`;
        } else if (board.every(cell => cell !== "")) {
            document.getElementById("status").innerText = "It's a tie!";
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winCombos.some(combo => combo.every(i => board[i] === currentPlayer));
}

function resetGame() {
    board.fill("");
    currentPlayer = "X";
    document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
    document.getElementById("status").innerText = "";
}
