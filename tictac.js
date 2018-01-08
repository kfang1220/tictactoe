const readline = require('readline');

class TTT {
  constructor() {
    this.turn = 1;
    this.board = [];
    this.gameOver = false;
    this.player1Turn = true;
  }

  /*
  Tic Tac Toe Game.
  -Create Board
  -Function to simulate player turns
  */



  createBoard() {
    for(var i = 0; i < 3; i++) {
    this.board.push([])
      for(var j = 0; j < 3; j++) {
        this.board[i][j] = '';
      }
    }
    console.log(this.board);
  }
  hasEmptyCells(board) {
    for(var row = 0; row < board.length; row++) {
        for(var row = 0; row < board.length; row++) {
            if(board[row][column]===' '){
                return true;
            }
        }
    }
    return false;
  }

  playAction(xo, row, column) {
    console.log('Please enter coordinates of your placement in row, column')
    console.log('Exaple, x,3,1 is placing an x on the third row first colum')
    // var data = readline();
    // console.log(data);
    
  }

  winCondition() {
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {

      }
    }
  }




}

var game = new TTT();
game.createBoard();
game.playAction();
