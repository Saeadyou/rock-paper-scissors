import { useData } from "../contexts/DataContext";

function Rock({ className }) {
  const { setMySelection, mySelection, houseSelection, showWinner } = useData();

  return (
    <div
      className={`${className} flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-b from-[#DB2D4D] to-[#DD405D] shadow-[0px_5px_0px_0px_#B11F3A]`}
    >
      <div
        onClick={() => setMySelection("rock")}
        className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[inset_0px_5px_0px_0px_#dedede]"
      >
        {((mySelection === "rock" && houseSelection === "csissors") ||
          (mySelection === "csissors" && houseSelection === "rock")) &&
          showWinner && (
            <div className="winner absolute h-96 w-96 rounded-full"></div>
          )}
        <img src="/images/icon-rock.svg" alt="icon-rock" className="h-12" />
      </div>
    </div>
  );
}

export default Rock;
