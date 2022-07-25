import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const promise = axios.get("http://localhost:3001/notes");

// promise.then((response) => {
//   console.log(response);
// });

// const promise2 = axios.get("http://localhost:3001/foodbar");
// console.log(promise2);

// axios.get("http://localhost:3001/notes").then((response) => {
//   const notes = response.data;
//   console.log(notes);
// });

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
