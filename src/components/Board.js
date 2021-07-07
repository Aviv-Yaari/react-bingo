import { Fragment } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Cell from './Cell';

const Board = (props) => {
  const board = props.board;
  const drawnNums = useSelector((state) => state.draw.drawnNums);

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

  // on every render.. :
  const cells = renderBoard();
  const score = calcScore();

  return (
    <Fragment>
      <h3>Score: {score}</h3>
      <Table striped bordered hover>
        <tbody>{cells}</tbody>
      </Table>
    </Fragment>
  );
};

export default Board;
