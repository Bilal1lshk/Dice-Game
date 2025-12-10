import React, { useState } from "react";
import Totalnumber from "./Totalnumber";
import Numberselect from "./numberselect";
import Dice from "./Dice";

export default function Maingame() {
  const [totalscore, settotalscore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [error, seterror] = useState(false);

  return (
    <>
      <div className="flex w-full pt-2.5 max-w-[1100px] space-x-28 h-auto mx-auto text-black">
        <nav className="w-full md:mb-0   max-w-[1100px] h-25 grid md:grid-cols-2 z-30 grid-rows-2 px-5 box-border">
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
      </div>
      <br />
      <Dice
        totalscore={totalscore}
        selectednumber={selectedNumber}
        settotalscore={settotalscore}
        seterror={seterror}
      />
    </>
  );
}