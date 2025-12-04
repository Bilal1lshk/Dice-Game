// ...existing code...
import React, { useState } from "react";
import styled from "styled-components";

export default function Numberselect({ selectedNumber, setSelectedNumber,error }) {
  const numbers = [1, 2, 3, 4, 5, 6, 7];


  return (
    <>
      <Main>
        <div className="wrapper">
          <div className="container">
            <div className="numbers">
              <div className="paragraph">
                <p className="errorpara">{error}</p>
              </div>
              {numbers.map((value) => (
                <Box
                  key={value}
                  type="button"
                  onClick={() => setSelectedNumber(value)}
                  $isselected={value === selectedNumber}
                >
                  {value}
                </Box>
              ))}
            </div>

            <div className="para">
              <p>Select numbers</p>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}

const Main = styled.div`
  min-height: auto;
  display: flex;
  flex-direction: column;

  .wrapper {
    margin-top: 0px;
    display: flex;
    flex-direction: column; /* stack numbers and the paragraph vertically */
    gap: 10px;
  }
  .errorpara{
    color: red;
  }

  .container {
    margin-top: 0px;
    display: flex;
    flex-direction: column; /* paragraph below the numbers */
    gap: 6px;
  }

  .numbers {
    display: flex; /* keep number buttons in a row */
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .para {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .para p {
    margin: 0;
    font-size: 14px;
    color: #000;
  }
`;

const Box = styled.button`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 2px solid #000;
  border-radius: 8px;
  background-color: ${(props) => (props.$isselected ? "black" : "white")};
  color: ${(props) => (props.$isselected ? "white" : "black")};
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.$isselected ? "black" : "#ddd")};
  }
`;
// ...existing code...
