import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import ShowSelectedItem from "../components/ShowSelectedItem";

function Step2() {
  const { mySelection, houseSelection, setHouseSelection } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const rnd = Math.floor(Math.random() * 3);
      setHouseSelection(["csissors", "paper", "rock"][rnd]);

      setTimeout(() => {
        navigate("/step3");
      }, 1000);
    }, 1000);
  }, []);

  return (
    <main className="absolute left-1/2 top-72 grid -translate-x-1/2 grid-cols-2 gap-8">
      <div className="text-center">You picked</div>
      <div>The house picked</div>
      <ShowSelectedItem selection={mySelection} />
      {!houseSelection && (
        <div className="mx-auto my-auto h-28 w-28 rounded-full bg-[#00000030]"></div>
      )}
      <ShowSelectedItem selection={houseSelection} />
    </main>
  );
}

export default Step2;
