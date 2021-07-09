import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { drawNum, startGame } from '../../store/drawSlice';

const DrawButton = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);
  const isGameOver = useSelector((state) => state.draw.isGameOver);

  const clickHandler = () => {
    if (isGameOver) {
      dispatch(startGame());
      return;
    }
    if (!active) return;
    dispatch(drawNum());

    // don't let the user click the button until the animations end
    setActive(false);
    setTimeout(() => {
      setActive(true);
    }, 1000);
  };

  return (
    <div className="m-auto">
      <Button onClick={clickHandler}>{isGameOver ? 'RESTART' : 'DRAW'}</Button>
    </div>
  );
};

export default DrawButton;
