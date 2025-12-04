import React, { useState } from "react";
import styled from "styled-components";
export default function Totalnumber({totalscore,settotalscore,selectedNumber}) {
  {
  
  }
  return (
    <Numbers>
      <h1>{totalscore}</h1>
      <p>TOTAL Score</p>
    </Numbers>
  );
}
const Numbers = styled.div`
 
    display: flex;
  flex-direction: column;
  justify-content: center; /* vertically center inside nav */
  align-items: flex-start;
  padding: 0 12px;
  min-width: 160px; /* keep a consistent width */
  margin: 0;
h1{
    font-size: 50px;
    margin: 0;
    line-height: 1;
}
  p {
     color: black;
    margin-top: 4px;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;
