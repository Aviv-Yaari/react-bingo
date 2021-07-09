const Player = (props) => {
  const { name, score, wins } = props.player;
  return (
    <div>
      <p>{name}</p>
      <p>Score: {score}</p>
      <p>Total Wins: {wins}</p>
    </div>
  );
};

export default Player;
