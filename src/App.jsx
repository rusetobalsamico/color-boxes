import { useState } from "react";
import BoxContainer from "./BoxContainer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <BoxContainer />
      </div>
    </>
  );
}

export default App;
