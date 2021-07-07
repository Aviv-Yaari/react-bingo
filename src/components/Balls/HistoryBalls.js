import { useSelector } from 'react-redux';
import Ball from '../UI/Ball';

const HistoryBalls = () => {
  const drawnNums = useSelector((state) => state.draw.drawnNums);
  return (
    <div className="mb-5">
      <h4>Drawn Numbers so far: </h4>
      <div className="d-flex flex-wrap justify-content-center">
        {drawnNums.map((num, i) => (
          <Ball key={i} num={num} size={'small'} />
        ))}
      </div>
    </div>
  );
};

export default HistoryBalls;
