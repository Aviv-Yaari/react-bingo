const Cell = (props) => {
  const color = props.isHit ? 'red' : 'black';
  return <td style={{ color }}>{props.value}</td>;
};

export default Cell;
