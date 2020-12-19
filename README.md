# 5-js

Create the Tic Tac Toe game. One player is represented by "X" and the other player by "O". The first player that plays is assigned the "X". The first player that has 3 contiguos cells occupied wins (vertically, horizontally or diagonally). If no player has 3 contiguos cells the game and all the cells are occupied, the game is drawn. If one of the players wins a message is shown to the user and scored of that player increments by one (scores start at 0 for both players). A player can't play in a cell that is occupied. If a player wins or draws a button appears so that they can play again.

## Extra

Add a play against computer mode, it should always make the best play.

## Technical requirements

The game must be build using [LitElement](https://lit-element.polymer-project.org/) and [TypeScript](https://www.typescriptlang.org/). You can create the project using Snowpack's [template](https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app/cli). The game rules must be tested using [Jest](https://jestjs.io/). The project has to be configured with [Prettier](https://prettier.io/), [ESLint](https://eslint.org/) and must include a [.nvmrc](https://github.com/nvm-sh/nvm) file stating the supported NodeJS version.  

## Example test

````typescript
import { Engine } from './engine'

describe('Engine', () => {
  it('should start with an empty board', () => {
    const engine = new Engine()

    const actual = engine.board

    expect(actual).toEqual([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ])
  })

  it('should set a value in the board when a player plays', () => {
    const engine = new Engine()

    engine.play(1, 2)
    const actual = engine.board

    expect(actual).toEqual([
      [null, null, null],
      ['O', null, null],
      [null, null, null]
    ])
  })

  it('should alternate players', () => {
    const engine = new Engine()

    engine.play(1, 2)
    engine.play(1, 1)
    const actual = engine.board

    expect(actual).toEqual([
      [null, null, null],
      ['O', null, null],
      ['X', null, null]
    ])
  })
})
````
