import { useData } from "../contexts/DataContext";

function Csissors({ className }) {
  const { setMySelection, mySelection, houseSelection, showWinner } = useData();

  return (
    <div
      className={`${className} flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-b from-[#EC9E0D] to-[#EBA822] shadow-[0px_5px_0px_0px_#B27C0F]`}
    >
      <div
        onClick={() => setMySelection("csissors")}
        className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[inset_0px_5px_0px_0px_#dedede]"
      >
        {((mySelection === "csissors" && houseSelection === "paper") ||
          (mySelection === "paper" && houseSelection === "csissors")) &&
          showWinner && (
            <div className="winner absolute h-96 w-96 rounded-full"></div>
          )}
        <img
          src="/images/icon-scissors.svg"
          alt="icon-scissors"
          className="h-12"
        />
      </div>
    </div>
  );
}

export default Csissors;
