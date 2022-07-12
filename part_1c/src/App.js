import { useState } from "react";

// const Display = (props) => {
//   return <div>{props.counter}</div>;
// };
const Display = ({ counter }) => <div>{counter}</div>;

// const Button = (props) => {
//   return <button onClick={props.onClick}>{props.text}</button>;
// };

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);

  // Usually defining event handlers within JSX-templates is not a good idea
  const handleClick = () => {
    console.log("clicked");
  };

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);

  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />

      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  );
};

export default App;
