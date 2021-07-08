import { useSelector } from 'react-redux';
import Ball from '../UI/Ball';

const PrevBalls = () => {
  const drawnNums = useSelector((state) => state.draw.drawnNums);
  let ballsJSX = [];
  const lastDrawn = drawnNums.length - 1;

  for (let i = lastDrawn; i >= lastDrawn - 5; i--) {
    if (i === -1) break;
    const num = drawnNums[i];
    const moveNumJSX = <span>Move #{i + 1}</span>;
    const ballJSX = <Ball key={`Prev${i}`} index={i} num={num} type={'PREV'} />;
    ballsJSX.unshift(
      <div key={`move${i}`} className="d-flex flex-column text-center mx-5">
        {ballJSX}
        {moveNumJSX}
      </div>
    );
  }

  return (
    <div className="mt-5 text-center">
      <div className="d-flex justify-content-center mb-4">{ballsJSX}</div>
      <i>
        hint: you can click on a previous ball to move back in the history of
        the game
      </i>
    </div>
  );
};

export default PrevBalls;
