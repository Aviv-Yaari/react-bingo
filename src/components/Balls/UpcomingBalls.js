import { useSelector } from 'react-redux';
import Ball from '../UI/Ball';

const UpcomingBalls = (props) => {
  return (
    <div>
      <h4>Upcoming:</h4>
      <section className="d-flex flex-wrap justify-content-center">
        {props.possibleNums.map((num, i) => (
          <Ball key={i} num={num} />
        ))}
      </section>
    </div>
  );
};

export default UpcomingBalls;
