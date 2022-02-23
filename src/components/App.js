import { Component } from "react";
import Footer from "./Footer";
import Counter from "./Counter";

class App extends Component {
  state = {
    time: this.getInitTimeRemainig(),
    currentTime: this.getCurrentTime(),
  };

  initialTime = this.getCurrentTime();

  getInitTimeRemainig() {
    const days = 8;
    const hours = 23;
    const minutes = 55;
    const seconds = 41;

    return { days, hours, minutes, seconds };
  }

  getCurrentTime() {
    const currentTime = Date.now();
    return currentTime;
  }

  getDeadTime() {
    const { days, hours, minutes, seconds } = this.getInitTimeRemainig();
    const initialTime = this.initialTime;

    const msSeconds = seconds * 1000;
    const msMinutes = minutes * 60 * 1000;
    const msHours = hours * 60 * 60 * 1000;
    const msDays = days * 24 * 60 * 60 * 1000;
    const msTotalTimeRemaining = msSeconds + msMinutes + msHours + msDays;
    const msDeadTime = initialTime + msTotalTimeRemaining;

    return { msDeadTime, msDays, msHours, msMinutes, msSeconds };
  }

  getTimeRemaining() {
    const deadTime = this.getDeadTime();
    const currentTime = this.state.currentTime;

    const msRemainingTime = deadTime.msDeadTime - currentTime;

    return { deadTime, msRemainingTime };
  }

  getTimeRemainingForState() {
    const { msRemainingTime } = this.getTimeRemaining();

    let days = Math.floor(msRemainingTime / 1000 / 60 / 60 / 24);
    let hours = Math.floor((msRemainingTime / 1000 / 60 / 60) % 24);
    let minutes = Math.floor((msRemainingTime / 1000 / 60) % 60);
    let seconds = Math.floor((msRemainingTime / 1000) % 60);
    if (msRemainingTime < 1000) {
      clearInterval(this.interval);
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    }
    return { days, hours, minutes, seconds };
  }

  setCountdown() {
    this.setState({
      currentTime: this.getCurrentTime(),
      time: this.getTimeRemainingForState(),
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setCountdown(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <h1 className="title">We're launching soon</h1>
        <Counter time={this.state.time} />
        <Footer />
      </>
    );
  }
}

export default App;
