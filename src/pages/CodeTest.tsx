import React from "react";
import LeftNav from "../components/LeftNav";

const CodeTest = () => {
  return (
    <>
      <div className="mt-4 mb-2 flex gap-2 w-[97.5vw]">
        <LeftNav />
        <div className="outline outline-1 p-4 outline-neutral-700 w-full myClassName">
          MCQ/Code Test <br />
          <div className="grid grid-rows-2 grid-flow-col gap-y-2">
            <div>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l-md w-full border-r border-neutral-700">
                +Schedule MCQ
              </button>
            </div>

            <div>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l-md w-full border-r border-neutral-700">
                MCQ Leaderboard
              </button>
            </div>
            <div>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r-md w-full">
                +Schedule Code
              </button>
            </div>
            <div>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r-md w-full">
                Code Leaderboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeTest;
