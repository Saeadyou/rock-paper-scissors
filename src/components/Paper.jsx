import { useData } from "../contexts/DataContext";

function Paper({ className }) {
  const { setMySelection, mySelection, houseSelection, showWinner } = useData();

  return (
    <div
      onClick={() => setMySelection("paper")}
      className={`${className} flex h-32 w-32 items-center justify-center rounded-full border-[1rem] border-blue-500 bg-white shadow-[inset_0px_5px_0px_0px_#dedede,0px_5px_0px_0px_#1D57F6]`}
    >
      {((mySelection === "paper" && houseSelection === "rock") ||
        (mySelection === "rock" && houseSelection === "paper")) &&
        showWinner && (
          <div className="winner absolute h-96 w-96 rounded-full"></div>
        )}
      <img src="/images/icon-paper.svg" alt="icon-paper" className="h-12" />
    </div>
  );
}

export default Paper;
