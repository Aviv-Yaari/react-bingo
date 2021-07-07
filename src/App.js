import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Board from './components/Board';
import DrawnNumber from './components/DrawnNumber';

const gNums = [];
function resetNums() {
  gNums.splice([0]); // empty the array first
  for (let i = 1; i <= 100; i++) {
    gNums.push(i);
  }
}
resetNums();

function App() {
  const [drawnNums, setDrawnNums] = useState([]);
  const drawNum = () => {
    const randomNum = Math.floor(Math.random() * (gNums.length - 1));
    return gNums.splice(randomNum, 1)[0];
  };
  const drawNumHandler = () => {
    const num = drawNum();
    setDrawnNums((drawnNums) => [...drawnNums, num]);
  };

  useEffect(() => {
    resetNums();
  }, []);

  return (
    <main
      className="container text-center d-flex flex-column"
      style={{ maxWidth: '750px' }}
    >
      <h1>Bingo!</h1>
      {drawnNums.length > 0 && (
        <h2>NUMBER: {drawnNums[drawnNums.length - 1]}</h2>
      )}
      <h3>Player 1</h3>
      <Board drawnNums={drawnNums} onDrawNum={drawNum} />
      <h3>Player 2</h3>
      <Board drawnNums={drawnNums} onDrawNum={drawNum} />
      <Button onClick={drawNumHandler}>Draw Number</Button>
      <DrawnNumber drawnNums={drawnNums} />
      <p>Drawn Numbers so far..: {drawnNums}</p>
      <p>possible nums: {gNums}</p>
    </main>
  );
}

export default App;
