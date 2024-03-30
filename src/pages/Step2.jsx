import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import ShowSelectedItem from "../components/ShowSelectedItem";

function Step2() {
  const { mySelection, houseSelection, setHouseSelection, setShowWinner } =
    useData();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const rnd = Math.floor(Math.random() * 3);
      setHouseSelection(["csissors", "paper", "rock"][rnd]);

      setTimeout(() => {
        navigate("/step3");
        setShowWinner(true);
      }, 1000);
    }, 1000);
  }, [setHouseSelection, setShowWinner, navigate]);

  return (
    <main className="top-72 grid grid-cols-2 grid-rows-2 gap-8 sm:absolute sm:left-1/2 sm:top-60 sm:-translate-x-1/2">
      <div className="order-2 text-center sm:order-1">You picked</div>
      <div className="order-2 text-center sm:order-1">The house picked</div>
      <ShowSelectedItem selection={mySelection} />
      {!houseSelection && (
        <div className="mx-auto my-auto h-28 w-28 rounded-full bg-[#00000030]"></div>
      )}
      <ShowSelectedItem selection={houseSelection} />
    </main>
  );
}

export default Step2;
