import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { returnToHistory } from '../../store/drawSlice';
import classes from './Ball.module.css';
const Ball = (props) => {
  const dispatch = useDispatch();
  const drawnNums = useSelector((state) => state.draw.drawnNums);
  const isGameOver = useSelector((state) => state.game.isGameOver);
  const { index, type, size, num } = props;

  // decide initial css styles to add:
  let initialClass = `${classes.ball}`;
  if (type === 'CURRENT') {
    initialClass += ` ${classes.current}`;
  } else if (type === 'PREV') {
    initialClass += ` ${classes.prev}`;
  }
  const [ballClasses, setBallClasses] = useState(initialClass);

  const clickHandler = () => {
    if (type === 'PREV' && !isGameOver) {
      dispatch(returnToHistory(index));
    }
  };

  // add animation whenever a number is drawn
  useEffect(() => {
    setBallClasses((ballClasses) => ballClasses + ` ${classes.animate}`);
    // remove the animation class after the animation ends,
    // so that it can run again next time a number is drawn
    setTimeout(() => {
      setBallClasses((ballClasses) => {
        return ballClasses.replace(` ${classes.animate}`, '');
      });
    }, 1000);
  }, [drawnNums]);

  return (
    <div className={ballClasses} onClick={clickHandler}>
      <span style={{ fontSize: size }}>{num}</span>
    </div>
  );
};

export default Ball;
