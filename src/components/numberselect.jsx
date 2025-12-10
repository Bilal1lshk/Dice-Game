import React, { useState } from "react";

export default function Numberselect({ selectedNumber, setSelectedNumber, error }) {
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-full flex justify-center p-5 md:p-4 sm:p-3 box-border">
      <div className="w-full max-w-2xl flex flex-col gap-3 md:gap-2.5 sm:gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2.5">
            {error && (
              <div className="flex justify-end md:justify-center min-h-5">
                <p className="text-red-500 text-sm md:text-xs sm:text-xs font-semibold m-0 animate-shake">
                  {error}
                </p>
              </div>
            )}
            <div className="flex flex-row gap-3 md:gap-2.5 sm:gap-2 items-center justify-center flex-wrap">
              {numbers.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setSelectedNumber(value)}
                  className={`
                    w-12 h-12 md:w-11 md:h-11 sm:w-10 sm:h-10
                    inline-flex items-center justify-center
                    border-2 border-black rounded-lg sm:rounded-md
                    text-lg md:text-base sm:text-base font-bold
                    cursor-pointer transition-all duration-200 ease-in-out
                    ${value === selectedNumber
                      ? "bg-black text-white shadow-lg hover:bg-gray-800"
                      : "bg-white text-black shadow-sm hover:bg-gray-100"
                    }
                    hover:-translate-y-0.5 hover:shadow-md
                    active:translate-y-0 active:shadow-sm
                  `}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center mb-32 justify-end md:justify-center">
            <p className="m-0 text-base md:text-sm sm:text-sm font-semibold text-black">
              Select Number
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}