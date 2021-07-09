const NUM_BOARDS = 2;
const BOARD_ROWS = 5;
const BOARD_COLS = 5;

export const initPossibleNums = () => {
  const possibleNumsArr = [];
  for (let i = 1; i <= 100; i++) {
    // temp change to 50, should be 100
    possibleNumsArr.push(i);
  }
  return possibleNumsArr;
};

export const initBoards = (state) => {
  state.boards = [];
  const possibleNums = [...state.possibleNums];
  for (let boardNum = 0; boardNum < NUM_BOARDS; boardNum++) {
    const board = [];
    for (let i = 0; i < BOARD_ROWS; i++) {
      const row = [];
      for (let j = 0; j < BOARD_COLS; j++) {
        const randomNum = Math.floor(Math.random() * (possibleNums.length - 1));
        const num = possibleNums.splice(randomNum, 1)[0];
        row.push({ value: num, isHit: false });
      }
      board.push(row);
    }
    state.boards.push(board);
  }
};

export const initPlayers = (state) => {
  const players = [];
  for (let i = 0; i <= state.boards.length; i++) {
    const name = `Player ${i + 1}`;
    let wins = parseInt(localStorage.getItem(name));
    if (!wins) wins = 0;
    players.push({ name, score: 0, wins });
  }
  state.players = players;
};

export const updateBoards = (state) => {
  for (let boardNum = 0; boardNum < NUM_BOARDS; boardNum++) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const cell = state.boards[boardNum][i][j];
        cell.isHit = state.drawnNums.find((num) => num === cell.value)
          ? true
          : false;
      }
    }
  }
};

export const updateScores = (state) => {
  for (let boardNum = 0; boardNum < NUM_BOARDS; boardNum++) {
    let count = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const cell = state.boards[boardNum][i][j];
        if (cell.isHit) {
          count++;
        }
      }
    }
    state.players[boardNum].score = count;
  }
};

export const checkGameOver = (state) => {
  for (const player of state.players) {
    if (player.score === 3) {
      // should be BOARD_ROWS * BOARD_COLS
      state.isGameOver = true;
      player.wins++;
      localStorage.setItem(player.name, player.wins);
    }
  }
};

export const drawOne = (state) => {
  const randomNum = Math.floor(Math.random() * (state.possibleNums.length - 1));
  const drawnNum = state.possibleNums.splice(randomNum, 1)[0];
  state.drawnNums.push(drawnNum);
  return drawnNum;
};
