const CounterElement = (props) => {
  return (
    <div className="counter__element counterElement">
      <div className="counterElement__bg counter__bg--upper"></div>
      <div className="counterElement__bg counter__bg--lower"></div>
      <span className="counterElement__value">{props.value}</span>
      <span className="counterElement__name">{props.name}</span>
    </div>
  );
};

export default CounterElement;
