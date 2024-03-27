import { useData } from "../contexts/DataContext";
import Csissors from "../components/Csissors";
import Paper from "../components/Paper";
import Rock from "../components/Rock";

function Step2() {
  const { mySelection } = useData();
  console.log(mySelection);

  return (
    <main className="absolute left-1/2 top-72 grid -translate-x-1/2 grid-cols-2 gap-8">
      <div className="text-center">You picked</div>
      <div>The house picked</div>
      {mySelection === "csissors" && <Csissors className="mx-auto scale-110" />}
      {mySelection === "paper" && <Paper className="mx-auto scale-110" />}
      {mySelection === "rock" && <Rock className="mx-auto scale-110" />}
      <div className="mx-auto my-auto h-28 w-28 rounded-full bg-[#00000030]"></div>
    </main>
  );
}

export default Step2;
