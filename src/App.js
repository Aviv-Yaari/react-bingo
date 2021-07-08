import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  drawInitialNum,
  resetInitialNums,
  resetPossibleNums,
} from './store/drawSlice';
import PrevBalls from './components/balls/PrevBalls';
import BoardsSection from './components/boards/BoardsSection';
import LatestBall from './components/balls/LatestBall';
import DrawButton from './components/UI/DrawButton';

function App() {
  const initialNums = useSelector((state) => state.draw.initialNums);
  const possibleNums = useSelector((state) => state.draw.possibleNums);
  const drawnNums = useSelector((state) => state.draw.drawnNums);
  const isGameOver = useSelector((state) => state.game.isGameOver);
  const dispatch = useDispatch();
  const [boards, setBoards] = useState([]);

  // first render: initialize boards
  useEffect(() => {
    // function decleration:
    const initBoard = () => {
      const board = [];
      for (let i = 0; i < 5; i++) {
        const row = [];
        for (let j = 0; j < 5; j++) {
          dispatch(drawInitialNum());
          row.push({ value: -1, isHit: false });
        }
        board.push(row);
      }
      return board;
    };
    if (isGameOver) return;
    setBoards([initBoard(), initBoard()]);
    dispatch(resetPossibleNums());
  }, [dispatch, isGameOver]);

  // second render: load the initial nums into the board
  useEffect(() => {
    if (!initialNums.length) return;
    // function decleration:
    const initBoardValues = (board, boardIndex) => {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          board[i][j].value =
            initialNums[i * board.length + j + boardIndex * board.length ** 2];
        }
      }
    };

    //1.load the initial nums into the board:
    setBoards((boards) => {
      const updatedBoards = [];
      for (let i = 0; i < 2; i++) {
        if (!boards[i]) continue;
        initBoardValues(boards[i], i);
        updatedBoards.push(boards[i]);
      }
      return updatedBoards;
    });
    //2. reset initialNums
    dispatch(resetInitialNums());
  }, [initialNums, dispatch]);

  return (
    <main className="d-flex flex-column justify-center align-items-center">
      <h1 className="text-center">
        {drawnNums.length > 0 ? `MOVE #${drawnNums.length}` : 'BINGO!'}
      </h1>
      <LatestBall />
      <BoardsSection boards={boards} />
      <DrawButton />
      <PrevBalls />
    </main>
  );
}

export default App;
