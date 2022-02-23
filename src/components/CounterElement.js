const CounterElement = (props) => {
  return (
    <div className="counter__element counterElement">
      <div className="counterElement__card card">
        <span className="card__value">
          {props.value > 9 ? props.value : "0" + props.value}
        </span>
        <div className="card__bg bg" aria-hidden="true">
          <div className="bg__rect bg__rect--upper"></div>
          <div className="bg__rect bg__rect--lower"></div>
          <div className="bg__dot bg__dot--left"></div>
          <div className="bg__dot bg__dot--right"></div>
        </div>
      </div>
      <span className="counterElement__name">{props.name}</span>
    </div>
  );
};

export default CounterElement;
