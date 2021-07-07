import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { drawNum } from '../store/drawSlice';
import LatestBall from './Balls/LatestBall';

const DrawSection = () => {
  const dispatch = useDispatch();
  const drawNumHandler = () => {
    dispatch(drawNum());
  };
  return (
    <section className="my-5">
      <LatestBall />
      <Button onClick={drawNumHandler}>Draw Number</Button>
    </section>
  );
};

export default DrawSection;
