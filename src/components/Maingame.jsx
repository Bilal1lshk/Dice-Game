import React, { useState } from "react";
import Totalnumber from "./Totalnumber";
import Numberselect from "./numberselect";
import styled from "styled-components";
import Dice from "./Dice";

export default function Maingame() {
  const [totalscore, settotalscore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(0);
    const [error,seterror]=useState(false)

  return (
    <>
      <Mainstyle>
        <nav>
          <Totalnumber
            totalscore={totalscore}
            settotalscore={settotalscore}
            selectedNumber={selectedNumber}
          />
          <Numberselect
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            error={error}
            seterror={seterror}
          />
        </nav>
        <br />
      </Mainstyle>
      <Dice
        totalscore={totalscore}
        selectednumber={selectedNumber}
        settotalscore={settotalscore}
        seterror={seterror}
      />
    </>
  );
}
const Mainstyle = styled.div`
  display: flex;
  width: 1100px;
  height: auto;
  margin: 0 auto;
  color: black;

  nav {
    width: 1100px;
    height: 100px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    align-items: center; /* center items vertically */
    justify-content: space-between; /* put Totalnumber at left and Numberselect at right */
    padding: 0 20px;
    box-sizing: border-box;
  }
`;
