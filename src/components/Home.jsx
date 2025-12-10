import React, { useState } from "react";
import styled from "styled-components";

export default function Home({ entercomponent }) {
  const [showGame, setShowGame] = useState(false);



  return (
    <HOMESTYLE>
      <div className="wrapper">
        <div className="maincontainer">
          <div className="leftcontainer">
            <div className="dice-placeholder">🎲</div>
          </div>
          <div className="rightcontainer">
            <h1>Dice Game</h1>
            <div className="btn-wrapper">
              <button onClick= { entercomponent }>Play now</button>
            </div>
          </div>
        </div>
      </div>
    </HOMESTYLE>
  );
}

const HOMESTYLE = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;

  .wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .maincontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 100%;
    padding: 20px;
  }

  .leftcontainer {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .dice-placeholder {
      font-size: 200px;
      animation: float 3s ease-in-out infinite;
    }
  }

  .rightcontainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 60px;

    h1 {
      font-size: clamp(48px, 8vw, 96px);
      margin: 0;
      font-weight: bold;
      text-align: right;
      line-height: 1.1;
    }

    button {
      background-color: black;
      min-width: 150px;
      padding: 12px 30px;
      color: white;
      border: 2px solid black;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: white;
        color: black;
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @media (max-width: 768px) {
    .maincontainer {
      flex-direction: column;
      gap: 40px;
      padding: 40px 20px;
    }

    .leftcontainer {
      width: 100%;
      
      .dice-placeholder {
        font-size: 150px;
      }
    }

    .rightcontainer {
      width: 100%;
      align-items: center;
      text-align: center;
      gap: 40px;

      h1 {
        text-align: center;
        font-size: clamp(40px, 12vw, 72px);
      }
    }

    .btn-wrapper {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    .maincontainer {
      padding: 20px 10px;
      gap: 30px;
    }

    .leftcontainer {
      .dice-placeholder {
        font-size: 100px;
      }
    }

    .rightcontainer {
      gap: 30px;

      h1 {
        font-size: clamp(32px, 10vw, 56px);
      }

      button {
        min-width: 120px;
        padding: 10px 24px;
        font-size: 14px;
      }
    }
  }
`;