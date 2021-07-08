import Board from './Board';

const BoardsSection = (props) => {
  const { boards } = props;
  return (
    <section className="d-flex my-3">
      {boards[0] && <Board board={boards[0]} />}
      {boards[1] && <Board board={boards[1]} />}
    </section>
  );
};

export default BoardsSection;
