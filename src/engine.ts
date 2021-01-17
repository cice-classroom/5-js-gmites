import type { Player } from './player';
import type { Board } from './board';

export class Engine {
  static TOTAL_CELLS = 9;
  static INITIAL_PLAYER: Player = 'X';

  private currentPlayer = Engine.INITIAL_PLAYER;
  private boardChange = (_board: Board) => {};
  private winner = (_player: Player) => {};

  board: Board = Array(Engine.TOTAL_CELLS).fill(null);

  setBoard(board: Board) {
    this.board = board;
  }

  onBoardChange(callback: (board: Board) => void) {
    this.boardChange = callback;
  }

  play(index: number) {
    if (this.board[index] === null) {
      this.board[index] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      this.boardChange(this.board);
      this.checkForWinner();
    }
  }

  checkForWinner() {
    const columnCellStarts = [0, 3, 6];
    columnCellStarts.forEach((columnCellStart) => {
      if (
        this.board[columnCellStart] !== null &&
        this.board[columnCellStart] === this.board[columnCellStart + 1] &&
        this.board[columnCellStart + 1] === this.board[columnCellStart + 2]
      ) {
        this.winner(this.board[columnCellStart]!);
      }
    });

    const rowOffset = 3;
    const rowCellStarts = [0, 1, 2];
    rowCellStarts.forEach((rowCellStart) => {
      if (
        this.board[rowCellStart] !== null &&
        this.board[rowCellStart] === this.board[rowCellStart + rowOffset] &&
        this.board[rowCellStart + rowOffset] ===
          this.board[rowCellStart + rowOffset * 2]
      ) {
        this.winner(this.board[rowCellStart]!);
      }
    });

    const diagonalRigth = [0, 4, 8];
    const diagonalLeft = [2, 4, 6];
    this.checkDiagonal(diagonalRigth);
    this.checkDiagonal(diagonalLeft);
  }

  checkDiagonal(diagonal: number[]) {
    if (
      this.board[diagonal[0]] !== null &&
      this.board[diagonal[0]] === this.board[diagonal[1]] &&
      this.board[diagonal[1]] === this.board[diagonal[2]]
    ) {
      this.winner(this.board[diagonal[0]]!);
    }
  }

  onWon(callback: (player: Player) => void) {
    this.winner = callback;
  }
}
