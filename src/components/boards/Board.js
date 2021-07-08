import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setGameOver } from '../../store/gameSlice';
import Cell from './Cell';

const Board = (props) => {
  const board = props.board;
  const dispatch = useDispatch();
  const drawnNums = useSelector((state) => state.draw.drawnNums);
  const isGameOver = useSelector((state) => state.game.isGameOver);

  // function declerations
  const renderBoard = () => {
    const cells = [];
    for (let i = 0; i < board.length; i++) {
      const row = [];
      for (let j = 0; j < board[i].length; j++) {
        const value = board[i][j].value;
        const isHit = drawnNums.find((num) => num === value) ? true : false;
        board[i][j].isHit = isHit;
        const cell = (
          <Cell key={i * 10 + j} i={i} j={j} value={value} isHit={isHit} />
        );
        row.push(cell);
      }
      // cells.push(row);
      cells.push(<tr key={i}>{row.map((cell) => cell)}</tr>);
    }
    return cells;
  };

  const calcScore = () => {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j].isHit) {
          count++;
        }
      }
    }

    return count;
  };

  // on every render.. execution:
  const cells = renderBoard();
  const score = calcScore();

  useEffect(() => {
    if (score === board.length * board[0].length && !isGameOver) {
      // temp 3 change to board.length !!
      dispatch(setGameOver(true));
      console.log('game over');
    }
  }, [score, isGameOver, board.length, dispatch]);

  return (
    <div className="d-flex flex-column mx-5 p-5 text-center">
      <Table striped bordered hover>
        <tbody>{cells}</tbody>
      </Table>
      <p>Score: {score}</p>
    </div>
  );
};

export default Board;
