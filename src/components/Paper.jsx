import { useData } from "../contexts/DataContext";

function Paper({ className }) {
  const { setMySelection, mySelection, houseSelection, showWinner } = useData();

  return (
    <div
      className={`${className} flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-b from-[#4764F4] to-[#5670F5] shadow-[0px_5px_0px_0px_#0E33F0]`}
    >
      <div
        onClick={() => setMySelection("paper")}
        className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[inset_0px_5px_0px_0px_#dedede]"
      >
        {((mySelection === "paper" && houseSelection === "rock") ||
          (mySelection === "rock" && houseSelection === "paper")) &&
          showWinner && (
            <div className="winner absolute h-96 w-96 rounded-full"></div>
          )}
        <img src="/images/icon-paper.svg" alt="icon-paper" className="h-12" />
      </div>
    </div>
  );
}

export default Paper;
