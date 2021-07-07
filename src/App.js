import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Board from './components/Board';
import DrawnNumber from './components/DrawnNumber';
import { drawInitialNum, drawNum, resetPossibleNums } from './store/drawSlice';
import HistoryBalls from './components/Balls/HistoryBalls';
import LatestBall from './components/Balls/LatestBall';
import UpcomingBalls from './components/Balls/UpcomingBalls';
import DrawSection from './components/DrawSection';

function App() {
  const drawnNums = useSelector((state) => state.draw.drawnNums);
  const initialNums = useSelector((state) => state.draw.initialNums);
  const possibleNums = useSelector((state) => state.draw.possibleNums);

  const dispatch = useDispatch();
  const [boards, setBoards] = useState([]);

  // first render: initialize board
  useEffect(() => {
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
    dispatch(resetPossibleNums());
    for (let i = 0; i < 2; i++) {
      setBoards((boards) => [...boards, initBoard()]);
    }
  }, [dispatch]);

  // second render: 1.load the initial nums into the board, 2.reset the possible nums.
  useEffect(() => {
    //1.load the initial nums into the board:
    const initBoardValues = (board, boardIndex) => {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          board[i][j].value =
            initialNums[i * board.length + j + boardIndex * board.length ** 2];
        }
      }
    };

    setBoards((boards) => {
      const updatedBoards = [];
      for (let i = 0; i < 2; i++) {
        if (boards[i]) {
          initBoardValues(boards[i], i);
          updatedBoards.push(boards[i]);
        }
      }
      return updatedBoards;
    });

    // 2.reset the possible nums:
    dispatch(resetPossibleNums());
  }, [initialNums, dispatch]);

  return (
    <main
      className="container align-items-center text-center d-flex flex-column"
      style={{ maxWidth: '750px' }}
    >
      <h1>BINGO!</h1>
      <DrawSection />

      {boards[0] && <Board board={boards[0]} />}
      {boards[1] && <Board board={boards[1]} />}
      <DrawnNumber drawnNums={drawnNums} />
      <HistoryBalls />
      <UpcomingBalls possibleNums={possibleNums} />
    </main>
  );
}

export default App;
