import { useState } from "react";

// const Display = (props) => <div>{props.value}</div>;

// const Button = (props) => (
//   <button onClick={props.handleClick}>{props.text}</button>
// );

const Statistics = (props) => (
  <div>
    <h1>
      <strong>statistics</strong>
    </h1>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>average {props.good * 1 + props.neutral * 0 - props.bad * 1}</p>
    <p>postive {props.good / (props.good + props.neutral + props.bad)} %</p>
  </div>
);

const App = () => {
  // const [value, setValue] = useState(10);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const setToValue = (newValue) => {
  //   console.log("value now", newValue);
  //   setValue(newValue);
  // };

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>
        <strong>give feedback</strong>
      </h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
