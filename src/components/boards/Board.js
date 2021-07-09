import { Table } from 'react-bootstrap';
import Cell from './Cell';
import Player from './Player';

const Board = (props) => {
  const { board, player } = props;

  // function declerations
  const renderBoardJSX = () => {
    const cells = [];
    for (let i = 0; i < board.length; i++) {
      const row = [];
      for (let j = 0; j < board[i].length; j++) {
        const value = board[i][j].value;
        const isHit = board[i][j].isHit;
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

  // on every render.. execution:
  const cells = renderBoardJSX();

  return (
    <div className="d-flex flex-column mx-5 p-5 text-center">
      <Table striped bordered hover>
        <tbody>{cells}</tbody>
      </Table>
      <Player player={player} />
    </div>
  );
};

export default Board;
