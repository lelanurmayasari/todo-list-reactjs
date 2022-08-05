import React from "react";
import "./App.css";
import TodoLists from "./Components/TodoLists";

const App = () => {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoLists />
    </div>
  );
}

export default App;