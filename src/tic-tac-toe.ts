import { customElement, property, LitElement, html, css } from 'lit-element';
import { general } from './general';
import { Engine } from './engine';
import type { Board } from './board';
import type { Player } from './player';

@customElement('tic-tac-toe')
export class TicTacToe extends LitElement {
  private readonly engine = new Engine();

  @property({ type: Array })
  board: Board = this.engine.board;

  @property({ type: String })
  winner: Player | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.engine.onBoardChange((board) => {
      this.board = [...board];
    });
    this.engine.onWon((player) => {
      this.winner = player;
    });
  }

  private onCellClicked(index: number) {
    this.engine.play(index);
  }

  static get styles() {
    return [
      general,
      css`
        .game-container {
          height: 100vh;
          background-color: #000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .game-board {
          display: grid;
          grid-template-columns: repeat(3, 100px);
          grid-template-rows: repeat(3, 100px);
          grid-gap: 10px;
        }
        .cell {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.5);
          color: #fff;
          font-size: 50px;
        }
      `,
    ];
  }

  render() {
    return html`<main class="game-container">
      ${this.winner !== null ? html`<h1>${this.winner} you win!</h1>` : html``}
      <div class="game-board">
        ${this.board.map(
          (cell, index) =>
            html`<div class="cell" @click="${() => this.onCellClicked(index)}">
              ${cell}
            </div>`,
        )}
      </div>
    </main>`;
  }
}
