import CounterElement from "./CounterElement";

const Counter = (props) => {
  const counterElements = props.time.map((element) => (
    <CounterElement
      key={element.name}
      name={element.name}
      value={element.value}
    />
  ));
  return <div className="counter__container">{counterElements}</div>;
};

export default Counter;
