import Csissors from "./Csissors";
import Paper from "./Paper";
import Rock from "./Rock";

function ShowSelectedItem({ selection }) {
  return (
    <>
      {selection === "csissors" && <Csissors className="mx-auto scale-110" />}
      {selection === "paper" && <Paper className="mx-auto scale-110" />}
      {selection === "rock" && <Rock className="mx-auto scale-110" />}
    </>
  );
}
export default ShowSelectedItem;
