import { useSelector } from 'react-redux';
import Ball from '../UI/Ball';

const LatestBall = () => {
  const drawnNums = useSelector((state) => state.draw.drawnNums);
  const isGameOver = useSelector((state) => state.draw.isGameOver);

  let num =
    drawnNums.length > 0
      ? drawnNums[drawnNums.length - 1]
      : 'Hit DRAW button to start';

  if (isGameOver) {
    num = 'GAME OVER!';
  }
  return (
    <div className="m-auto">
      <Ball num={num} type="CURRENT" />
    </div>
  );
};

export default LatestBall;
