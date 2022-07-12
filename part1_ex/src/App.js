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

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <h3>No feedback given</h3>
      </div>
    );
  }
  return (
    <Statistics good={props.good} bad={props.bad} neutral={props.neutral} />
  );
};

const App = () => {
  // const [value, setValue] = useState(10);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);

  // const setToValue = (newValue) => {
  //   console.log("value now", newValue);
  //   setValue(newValue);
  // };

  const handleGoodClick = () => {
    setAll(allClicks.concat("G"));
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setAll(allClicks.concat("N"));
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setAll(allClicks.concat("B"));
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
      <History allClicks={allClicks} />
      {/* <Statistics good={good} bad={bad} neutral={neutral} /> */}
    </div>
  );
};

export default App;
