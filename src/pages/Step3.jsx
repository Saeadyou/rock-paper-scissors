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
    <main className="absolute left-1/2 top-72 grid w-full -translate-x-1/2 grid-cols-3 gap-8 px-12">
      <div className="text-center">You picked</div>
      <div className="col-start-3 text-center">The house picked</div>
      <ShowSelectedItem selection={mySelection} />
      <div className="flex flex-col items-center justify-center">
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
      <ShowSelectedItem selection={houseSelection} />
    </main>
  );
}

export default Step3;
