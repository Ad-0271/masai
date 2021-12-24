import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Counter";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  console.log(count);

  const changeCount = (value) => {
    setCount(count + value);
  };

  const doubleCount = () => {
    setCount(count * 2);
  };
  return (
    <div className="App">
      <Counter
        count={count}
        changeCount={changeCount}
        doubleCount={doubleCount}
      />
    </div>
  );
}

export default App;
