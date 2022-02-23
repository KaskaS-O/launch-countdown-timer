import CounterElement from "./CounterElement";

const Counter = (props) => {
  let counterElements = [];

  for (const [key, value] of Object.entries(props.time)) {
    counterElements.push(<CounterElement key={key} name={key} value={value} />);
  }

  return <div className="counter__container">{counterElements}</div>;
};

export default Counter;
