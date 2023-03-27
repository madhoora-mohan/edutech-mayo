import React from "react";
import LeftNav from "../components/LeftNav";

const Articles = () => {
  return (
    <>
      <div className="mt-4 mb-2 flex gap-2 w-[97.5vw]">
        <LeftNav />
        <div className="outline outline-1 outline-neutral-700 w-full myClassName">
          Articles
        </div>
      </div>
    </>
  );
};

export default Articles;
