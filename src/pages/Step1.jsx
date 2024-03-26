import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import Csissors from "../components/Csissors";
import Paper from "../components/Paper";
import Rock from "../components/Rock";

function Step1() {
  const { setMySelection } = useData();

  useEffect(
    function () {
      document.addEventListener("click", function (e) {
        const selectedItem =
          e.target.dataset.item || e.target.parentElement.dataset.item;
        setMySelection(selectedItem);
      });
    },
    [setMySelection],
  );

  return (
    <main>
      <img
        src="/images/bg-triangle.svg"
        alt="triangle"
        className="absolute left-1/2 top-72 w-56 -translate-x-1/2"
      />
      <Link to="/step2">
        <Paper className="absolute left-1/2 top-56 -translate-x-40 cursor-pointer transition-all hover:scale-110" />
        <Csissors className="absolute left-1/2 top-56 translate-x-8 cursor-pointer transition-all hover:scale-110" />
        <Rock className="absolute left-1/2 top-56 -translate-x-1/2 translate-y-40 cursor-pointer transition-all hover:scale-110" />
      </Link>
    </main>
  );
}

export default Step1;
