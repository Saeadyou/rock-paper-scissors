import { useEffect, useRef } from "react";

import { useData } from "../contexts/DataContext";

function Header() {
  const { point } = useData();

  const score = useRef(
    JSON.parse(window.localStorage.getItem("totalScore")) || 0,
  );

  useEffect(
    function () {
      window.localStorage.setItem("totalScore", score.current);
    },
    [score.current],
  );

  useEffect(
    function () {
      score.current += point;
    },
    [point],
  );

  return (
    <header className="absolute left-1/2 top-10 flex w-[40rem] max-w-[80%] -translate-x-1/2 justify-between rounded-lg border-2 border-[#606E85] p-4">
      <div className="text-xs font-[700] tracking-tighter sm:text-sm">
        <h1>Rock</h1>
        <h1>paper</h1>
        <h1>scissors</h1>
      </div>
      <div className="flex flex-col items-center justify-center rounded-md bg-white px-8">
        <span className="text-[.7rem] font-bold text-[#2A45C0]">Score</span>
        <span className="text-5xl font-[700] text-[#3B4262]">
          {score.current}
        </span>
      </div>
    </header>
  );
}

export default Header;
