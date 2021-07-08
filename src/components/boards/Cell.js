import classes from './Cell.module.css';
const Cell = (props) => {
  const { isHit } = props;

  return <td className={isHit ? classes.hit : ''}>{props.value}</td>;
};

export default Cell;
