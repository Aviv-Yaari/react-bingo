const Ball = (props) => {
  // props: num, size
  return (
    <div
      style={{
        borderRadius: '75px',
        backgroundColor: 'orange',
        padding: '10px 20px',
        margin: '10px',
        height: props.height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {props.num}
    </div>
  );
};

export default Ball;
