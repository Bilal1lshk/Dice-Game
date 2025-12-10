import React, { useState } from "react";
import styled from "styled-components";
import dice1 from "../assets/images/dice_1.png";
import dice2 from "../assets/images/dice_2.png";
import dice3 from "../assets/images/dice_3.png";
import dice4 from "../assets/images/dice_4.png";
import dice5 from "../assets/images/dice_5.png";
import dice6 from "../assets/images/dice_6.png";

export default function Dice({
  totalscore,
  selectednumber,
  settotalscore,
  seterror,
}) {
  const diceImages = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6
  };



  const [dicevalue, setdicevalue] = useState(1);
  const [showrules, setshowrules] = useState(false);
  const [isRolling, setIsRolling] = useState(false);

  const data = () => {
    if (selectednumber === 0) {
      seterror("You should select a number");
      return;
    }

    seterror("");
    setIsRolling(true);

    setTimeout(() => {
      const randomnumber = Math.floor(Math.random() * 6) + 1;
      setdicevalue(randomnumber);

      if (selectednumber !== randomnumber) {
        settotalscore((prev) => prev - 2);
      } else {
        settotalscore((prev) => prev + randomnumber);
      }

      setIsRolling(false);
    }, 300);
  };

  const reset = () => {
    settotalscore(0);
    setdicevalue(1);
  };

  const rulesfunction = () => {
    setshowrules((prev) => !prev);
  };
    const Diceimage = diceImages[dicevalue];


  return (
    <>
      <div className="pt-20">
        <Dicejsx>
          <main>
            <div className="imgcontainer">
              <div
                className={`dice ${isRolling ? 'rolling' : ''}`}
                onClick={data}
              >
                <img src={Diceimage}alt="" />
              </div>
            </div>
            <div className="seconddiv">
              <p className="second-div-para">Click on Dice to Roll</p>
              <button className="firstbtn" onClick={reset}>
                Reset Score
              </button>
              <button className="secondbtn" onClick={rulesfunction}>
                {showrules ? "Hide" : "Show"} Rules
              </button>
            </div>
          </main>
        </Dicejsx>
        <Rulessection>
          {showrules && (
            <div className="rulessection">
              <h3>How to Play Dice Game</h3>
              <div className="rules-content">
                <p>• Select any number from the top</p>
                <p>• Click on the dice to roll</p>
                <p>• If your selected number matches the dice, you earn points equal to the dice value</p>
                <p>• If you guess wrong, 2 points will be deducted</p>
              </div>
            </div>
          )}
        </Rulessection>
      </div>
    </>
  );
}

const Dicejsx = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  box-sizing: border-box;

  main {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .imgcontainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dice {
    width: 150px;
    height: 150px;
    background: white;
    border: 3px solid #000;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    user-select: none;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    &:active {
      transform: scale(0.95);
    }

    &.rolling {
      animation: roll 0.3s ease-in-out;
    }
  }

  @keyframes roll {
    0%, 100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
  }

  .seconddiv {
    width: 100%;
    max-width: 220px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }

  .second-div-para {
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 8px 0;
    text-align: center;
  }

  .firstbtn,
  .secondbtn {
    width: 100%;
    height: 44px;
    font-weight: 600;
    font-size: 15px;
    border-radius: 8px;
    border: 2px solid black;
    cursor: pointer;
    transition: all 0.2s ease;

    &:active {
      transform: scale(0.98);
    }
  }

  .firstbtn {
    color: black;
    background-color: white;

    &:hover {
      background-color: #f0f0f0;
    }
  }

  .secondbtn {
    color: white;
    background-color: black;

    &:hover {
      background-color: #333;
    }
  }

  @media (max-width: 768px) {
    padding: 30px 15px;

    main {
      gap: 25px;
    }

    .dice {
      width: 130px;
      height: 130px;
      font-size: 70px;
    }

    .seconddiv {
      max-width: 200px;
    }

    .second-div-para {
      font-size: 15px;
    }

    .firstbtn,
    .secondbtn {
      height: 40px;
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    padding: 20px 10px;

    main {
      gap: 20px;
    }

    .dice {
      width: 110px;
      height: 110px;
      font-size: 60px;
      border-radius: 12px;
    }

    .seconddiv {
      max-width: 180px;
      gap: 10px;
    }

    .second-div-para {
      font-size: 14px;
      margin-bottom: 5px;
    }

    .firstbtn,
    .secondbtn {
      height: 38px;
      font-size: 13px;
    }
  }
`;

const Rulessection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 20px 40px;
  box-sizing: border-box;

  .rulessection {
    width: 100%;
    max-width: 800px;
    background-color: #ffe6e6;
    border-radius: 10px;
    padding: 25px 30px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    animation: slideDown 0.3s ease-out;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h3 {
    margin: 0 0 20px 0;
    font-size: 22px;
    font-weight: 700;
    color: #000;
  }

  .rules-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    color: #333;
  }

  @media (max-width: 768px) {
    padding: 0 15px 30px;

    .rulessection {
      padding: 20px 25px;
    }

    h3 {
      font-size: 20px;
      margin-bottom: 15px;
    }

    .rules-content {
      gap: 10px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    padding: 0 10px 20px;

    .rulessection {
      padding: 18px 20px;
      border-radius: 8px;
    }

    h3 {
      font-size: 18px;
      margin-bottom: 12px;
    }

    .rules-content {
      gap: 8px;
    }

    p {
      font-size: 13px;
      line-height: 1.5;
    }
  }
`;