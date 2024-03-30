import { useData } from "../contexts/DataContext";
import ShowSelectedItem from "../components/ShowSelectedItem";
import { useNavigate } from "react-router-dom";

function Step3() {
  const {
    mySelection,
    houseSelection,
    point,
    setShowWinner,
    setHouseSelection,
  } = useData();
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
    setShowWinner(false);
    setHouseSelection("");
  }

  return (
    <main className="absolute left-1/2 top-72 grid w-full max-w-[40rem] -translate-x-1/2 grid-cols-2 grid-rows-[2fr_1fr_2fr] gap-8 sm:top-60 sm:grid-cols-3 sm:grid-rows-2">
      <div className="order-1 text-center sm:col-start-1 sm:row-start-1 sm:self-end">
        You picked
      </div>
      <div className="order-1 text-center sm:col-start-3 sm:row-start-1 sm:self-end">
        The house picked
      </div>
      <div className="sm:row-start-2">
        <ShowSelectedItem selection={mySelection} />
      </div>
      <div className="order-2 col-span-2 flex flex-col items-center justify-center sm:col-span-1 sm:col-start-2 sm:row-start-2">
        <h1 className="text-center text-3xl font-bold">
          {point === 0 && "You draw😐"}
          {point > 0 && "You win😍"}
          {point < 0 && "You lose😞"}
        </h1>

        <button
          onClick={handleClick}
          className="mt-2 bg-white px-12 text-xs font-bold uppercase text-gray-400"
        >
          Play again
        </button>
      </div>
      <div className="sm:row-start-2">
        <ShowSelectedItem selection={houseSelection} />
      </div>
    </main>
  );
}

export default Step3;
