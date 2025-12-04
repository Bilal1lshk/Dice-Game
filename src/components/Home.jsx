import React from "react";
import { Component, useState } from "react";
import styled from "styled-components";
import Diceimage from "../assets/images/Diceimg.png";
export default function Home({ entercomponent }) {
  return (
    <HOMESTYLE>
      <div className="wrapper">
        <div className="maincontainer">
          <div className="leftcontainer">
            <img src={Diceimage} alt="diceimage" />
          </div>
          <div className="rigthcontainer">
            <h1>Dice Game</h1>
            <div className="btn-wrapper">
              <button onClick={entercomponent}>Play now</button>
            </div>
          </div>
        </div>
      </div>
    </HOMESTYLE>
  );
}
const HOMESTYLE = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  margin-top: -100px;
  .maincontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 0 auto;
    height: 856px;
    width: 1100px;
  }

  .leftcontainer {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    img {
      width: 90%;
      height: auto;
      object-fit: contain;
    }
  }
  .rigthcontainer {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding-right: 10px;
    h1 {
      font-size: 90px;
    }
    button {
      background-color: black;
      width: 150px;
      height: 40px;
      color: white;
      border: 2px solid;
      margin-top: -60px;
    }
  }
  .btn-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
