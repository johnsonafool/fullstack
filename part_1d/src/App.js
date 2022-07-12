import { useState } from "react";

const App = () => {
  // const [clicks, setClick] = useState({
  //   left: 0,
  //   right: 0,
  // });
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const History = (props) => {
    if (props.allClicks.length === 0) {
      return <div>the app is used by pressing the buttons</div>;
    }
    return <div>button press history: {props.allClicks.join(" ")}</div>;
  };
  // const handleLeftClick = () => {
  //   const newClicks = {
  //     ...clicks,
  //     left: clicks.left + 1,
  //   };
  //   setClick(newClicks);
  // };
  // const handleRightClick = () => {
  //   const newClicks = {
  //     ...clicks,
  //     right: clicks.right + 1,
  //   };
  //   setClick(newClicks);
  // };
  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div className="App">
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks} />

      {/* {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right} */}
    </div>
  );
};

export default App;
