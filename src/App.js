import { useState } from "react";
import { Imp } from "./Imp";
import "./App.css";
import View from "./View.js";

function App() {
  const [info, setInfo] = useState(Imp);
  console.log(typeof info);
  return (
    <>
      <div className="App">
        <View Imp={Imp} />
      </div>
    </>
  );
}

export default App;
