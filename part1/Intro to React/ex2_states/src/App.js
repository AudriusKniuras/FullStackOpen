import React, { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Stats = (props) => {
  if (props.percent) {
    return (
      <p>
        {props.text} {props.count} %
      </p>
    );
  }
  return (
    <p>
      {props.text} {props.count}
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  // TODO: create feedback functions

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />
      <Stats text="good" count={good} />
      <Stats text="neutral" count={neutral} />
      <Stats text="bad" count={bad} />
      <Stats text="all" count={good + neutral + bad} />
      <Stats text="average" count={(good - bad) / (good + neutral + bad)} />
      <Stats
        percent="true"
        text="positive"
        count={good / (good + neutral + bad)}
      />
    </div>
  );
};

export default App;
