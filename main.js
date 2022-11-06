"use strict";


/*----------------
    FUNCTIONS
----------------*/
// Funzione che restituisce un numero intero random 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

/*----------------
    MAIN
----------------*/
const boardContainer = document.querySelector(".board");

const start = document.querySelector(".start-button");

start.addEventListener('click', function () {
    for( let i = 1; i <= 100; i++ ) {
        const boardCell = document.createElement("div");
        boardCell.innerHTML = i;
        boardCell.classList.add("board-cell");
        boardCell.addEventListener('click', function() {
            boardCell.classList.add("color-add");
        }
        );            
        boardContainer.append(boardCell);
    };
    const listBomb = [];
    while( listBomb.length < 16 ) {
        const numberRandom = getRndInteger(1, 100);
        if( listBomb.includes(numberRandom) === false ) {
            listBomb.push(numberRandom);       
        }
    }
    const cells = document.querySelectorAll('.board-cell');
    for( let i = 0; i < cells.length; i++ ) {
        cell[i].addEventListener('click', function () {
            console.log(this.innerHTML);
        })
    }
    
});