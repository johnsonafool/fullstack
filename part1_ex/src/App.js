import { useState } from "react";

// const Display = (props) => <div>{props.value}</div>;

// const Button = (props) => (
//   <button onClick={props.handleClick}>{props.text}</button>
// );

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

      <h1>
        <strong>statistics</strong>
      </h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>average {good * 1 + neutral * 0 - bad * 1}</p>
      <p>postive {good / (good + neutral + bad)} %</p>
      {/* <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" /> */}
    </div>
  );
};

export default App;
