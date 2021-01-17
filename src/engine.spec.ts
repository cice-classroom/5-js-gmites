import { Engine } from './engine';

describe('Engine', () => {
  it('should start with an empty board', () => {
    const engine = new Engine();

    const actual = engine.board;

    expect(actual).toEqual([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
  });

  it('should set a value in the board when a player plays', () => {
    const engine = new Engine();

    engine.play(7);

    const actual = engine.board;

    expect(actual).toEqual([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      'X',
      null,
    ]);
  });

  it('should alternate players', () => {
    const engine = new Engine();

    engine.play(7);
    engine.play(1);

    const actual = engine.board;

    expect(actual).toEqual([
      null,
      'O',
      null,
      null,
      null,
      null,
      null,
      'X',
      null,
    ]);
  });

  it('should not be able to play if there is a player in that cell', () => {
    const engine = new Engine();
    engine.setBoard(['X', 'O', 'X', null, null, null, null, null, null]);

    engine.play(0);

    const actual = engine.board;
    expect(actual).toEqual(['X', 'O', 'X', null, null, null, null, null, null]);
  });

  it('should be able to play if there is not a player in that cell', () => {
    const engine = new Engine();
    engine.setBoard(['X', 'O', 'X', null, null, null, null, null, null]);

    engine.play(3);

    const actual = engine.board;
    expect(actual).toEqual(['X', 'O', 'X', 'X', null, null, null, null, null]);
  });

  it('should alternate players', () => {
    const engine = new Engine();
    engine.setBoard([null, null, null, null, null, null, null, null, null]);

    engine.play(0);
    engine.play(1);
    engine.play(2);

    const actual = engine.board;
    expect(actual).toEqual(['X', 'O', 'X', null, null, null, null, null, null]);
  });

  it('should alternate players when a player can play', () => {
    const engine = new Engine();
    engine.setBoard([null, null, null, null, null, null, null, null, null]);

    engine.play(0);
    engine.play(0);
    engine.play(1);

    const actual = engine.board;
    expect(actual).toEqual([
      'X',
      'O',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
  });

  it('should check if the for a winner when there is a row completed', () => {
    const engine = new Engine();
    const mock = jest.fn();
    engine.onWon(mock);
    engine.setBoard(['X', 'X', null, null, null, null, null, null, null]);

    engine.play(2);

    expect(mock).toHaveBeenCalledWith('X');
  });

  it('should check for a winner when there is a row completed', () => {
    const engine = new Engine();
    const mock = jest.fn();
    engine.onWon(mock);
    engine.setBoard(['X', 'X', null, null, null, null, null, null, null]);

    engine.play(2);

    expect(mock).toHaveBeenCalledWith('X');
  });

  it('should check for a winner when there is a row other than the first completed', () => {
    const engine = new Engine();
    const mock = jest.fn();
    engine.onWon(mock);
    engine.setBoard(['X', 'O', 'X', 'O', 'O', null, 'X', null, null]);

    engine.play(8);
    engine.play(5);

    expect(mock).toHaveBeenCalledWith('O');
  });

  it('should check for a winner when the last row is the same', () => {
    const engine = new Engine();
    const mock = jest.fn();
    engine.onWon(mock);
    engine.setBoard(['O', 'O', 'X', 'O', 'O', 'X', 'X', 'X', null]);

    engine.play(8);

    expect(mock).toHaveBeenCalledWith('X');
  });
});
