import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Ball from '../UI/Ball';

const LatestBall = () => {
  const drawnNums = useSelector((state) => state.draw.drawnNums);
  const num = drawnNums.length > 0 && drawnNums[drawnNums.length - 1];
  return (
    <Fragment>
      <Ball num={num} height={'100px'} />
    </Fragment>
  );
};

export default LatestBall;
