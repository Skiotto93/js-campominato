"use strict";
const boardContainer = document.querySelector(".board");


const start = document.querySelector(".start-button");
start.addEventListener('click', function () {
    for ( let i = 1; i <= 100; i++ ) {
        const boardCell = document.createElement("div");
        boardCell.innerHTML = i;
        boardCell.classList.add("board-cell-100");
        boardCell.addEventListener('click', function() {
            boardCell.classList.add("color-add")
            console.log(this.innerHTML);
        }       
        );            
        boardContainer.append(boardCell);
    };
});

//Creo un arrey vuoto ed inserisco 16 numeri casuali(bombe)

const numBombList = [];

for ( let i = 1; i <=16; i++ ) {
    const numBomb = Math.floor(Math.random() * 100) + 1;
    numBombList.push = numBomb;
    console.log(numBomb)
}
