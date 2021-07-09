import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame } from './store/drawSlice';
import PrevBalls from './components/balls/PrevBalls';
import BoardsSection from './components/boards/BoardsSection';
import LatestBall from './components/balls/LatestBall';
import DrawButton from './components/UI/DrawButton';

function App() {
  const drawnNums = useSelector((state) => state.draw.drawnNums);
  const dispatch = useDispatch();

  // first render: initialize boards
  useEffect(() => {
    dispatch(startGame());
  }, [dispatch]);

  return (
    <main className="d-flex flex-column justify-center align-items-center">
      <h1 className="text-center">
        {drawnNums.length > 0 ? `MOVE #${drawnNums.length}` : 'BINGO!'}
      </h1>
      <LatestBall />
      <BoardsSection />
      <DrawButton />
      <PrevBalls />
    </main>
  );
}

export default App;
