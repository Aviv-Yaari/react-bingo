import { useSelector } from 'react-redux';
import Board from './Board';

const BoardsSection = () => {
  const boards = useSelector((state) => state.draw.boards);
  const players = useSelector((state) => state.draw.players);
  return (
    <section className="d-flex flex-column">
      <div className="d-flex my-3">
        {boards.map((board, i) => (
          <Board key={`board${i}`} board={board} player={players[i]} />
        ))}
      </div>
    </section>
  );
};

export default BoardsSection;
