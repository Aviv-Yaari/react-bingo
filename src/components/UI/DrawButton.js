import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { drawNum, restartGame } from '../../store/drawSlice';
import { setGameOver } from '../../store/gameSlice';

const DrawButton = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);
  const isGameOver = useSelector((state) => state.game.isGameOver);

  const clickHandler = () => {
    if (isGameOver) {
      dispatch(setGameOver(false));
      dispatch(restartGame());
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
      <Button onClick={clickHandler}>
        {isGameOver ? 'GAME OVER' : 'DRAW'}
      </Button>
    </div>
  );
};

export default DrawButton;
