import React, { useState } from "react";
import styled from "styled-components";
export default function Dice({
  totalscore,
  selectednumber,
  settotalscore,
  seterror,
}) {
  const [dicevalue, setdicevalue] = useState(1);
  const [showrules, setshowrules] = useState(false);
  const Diceimage = new URL(
    `../assets/images/dice_${dicevalue}.png`,
    import.meta.url
  ).href;
  const data = () => {
    // kal ya error ki funtionallity dalo ga baki phir next dekhtay
    if (selectednumber === 0) {
      console.log("done");
      seterror("you should select a number");

      return;
    }

    seterror("");
    const randomnumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomnumber);
    setdicevalue((prev) => randomnumber);
    if (dicevalue !== selectednumber) {
      settotalscore((prev) => prev - 2);
    } else if (dicevalue === selectednumber) {
      settotalscore((prev) => prev + randomnumber);
    }
  };
  console.log(totalscore);

  const reset = () => {
    settotalscore(0);
  };
  const rulesfunction = () => {
    setshowrules((prev) => !prev);
  };
  return (
    <>
      <Dicejsx>
        <main>
          <div className="imgconatiner">
            <img src={Diceimage} alt="DiceImg" onClick={data} />
          </div>
          <div className="seconddiv">
            <p className="second-div-para">Click on to Roll the Dice</p>
            <button className="firstbtn" onClick={reset}>
              Reset Score
            </button>
            <button className="secondbtn" onClick={rulesfunction}>
              {showrules?"Hide":"Show"} Rules
            </button>
          </div>
        </main>
      </Dicejsx>
<Rulessection>
      {showrules && (
        <div className="rulessection">
          <h3>How to play dice game</h3>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as dice
          </p>
          <p>if you get wrong guess then 2 point will be dedcuted</p>
        </div>
      )}
      </Rulessection>
    </>
  );
}

const Dicejsx = styled.div`
  overflow: hidden;
  max-height: 390px;
  min-width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  .imgcontainer {
    display: flex;
    margin: 0 auto;
  }
  .seconddiv {
    width: 200px;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  .firstbtn {
    height: 34px;
    font-weight: 540;
    margin-bottom: 8px;
    border-radius: 5px;
    border: 2px solid black;
    color: black;
    background-color: white;
  }
  .secondbtn {
    height: 34px;
    border-radius: 5px;
    border: 2px solid black;
    color: white;
    background-color: black;
  }
  .rulessection {
    background-color: black;
    margin-top: 10px;
    height: 200px;
  }
 
`;
const Rulessection=styled.div`
 .rulessection {
    max-height: 300px;
    line-height: 1;
    width: 40%;
    margin: 0 auto;
  }
  
`
