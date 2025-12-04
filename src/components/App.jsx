import { useState } from "react";
import styled from "styled-components";
import Diceimage from "../assets/images/Diceimg.png";
import Home from "./Home";
import "../index.css";
import Maingame from "./Maingame";
function App() {
  const [ishomepage, setishomepage] = useState(false);

  const togglegameplay = () => {
    setishomepage((prev) => !prev);
  };
  return (
    <>{ishomepage ? <Maingame /> : <Home entercomponent={togglegameplay} />}</>
  );
}

export default App;
