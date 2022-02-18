import { Component } from "react";
import Footer from "./Footer";
import Counter from "./Counter";

class App extends Component {
  state = {
    time: [
      {
        name: "days",
        value: 8,
      },
      {
        name: "hours",
        value: 23,
      },
      {
        name: "minutes",
        value: 55,
      },
      {
        name: "seconds",
        value: 41,
      },
    ],
  };

  render() {
    const { time } = this.state;

    return (
      <>
        <h1 className="title">We're launching soon</h1>
        <Counter time={time} />
        <Footer />
      </>
    );
  }
}

export default App;
