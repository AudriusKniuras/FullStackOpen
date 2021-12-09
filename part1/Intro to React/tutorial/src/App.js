import React, { useState } from "react";

// const Display = (props) => {
//   return <div>{props.counter}</div>;
// };
const Display = ({counter}) => <div>{counter}</div>

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);
  const decreateCounter = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseCounter} text='increase' />
      <Button onClick={decreateCounter} text='decrease' />
      <Button onClick={setToZero} text='reset' />
    </div>
  );
};

export default App;
