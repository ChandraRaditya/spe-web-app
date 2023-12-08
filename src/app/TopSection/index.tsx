import React from "react";

function TopSection() {
  return (
    <div>
      <div className="relative">
        <div className="z-40 w-screen absolute top-[-500px] bg-[#111111] border-[20px] border-[#EEEEEE] rounded-[20px] h-[800px] transform rotate-[-30deg] text-[#00FF00] flex flex-col justify-end gap-[200px]">
          <p className="rotate-90 w-[200px] h-auto ml-[-80px]">
            April 21St. 2021 . 15.46.20
          </p>
          <p className="text-[40px] ml-[100px]">&lt; SPE / FRONTEND &gt;</p>
        </div>
        <div className="bg-gradient-to-r from-[#00DBDE] to-[#FC00FF] h-screen"></div>
      </div>
    </div>
  );
}

export default TopSection;
