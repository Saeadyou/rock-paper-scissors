import { useData } from "../contexts/DataContext";
import ShowSelectedItem from "../components/ShowSelectedItem";

function Step3() {
  const { mySelection, houseSelection, setScore } = useData();

  return (
    <main className="absolute left-1/2 top-72 grid w-full -translate-x-1/2 grid-cols-3 gap-8 px-12">
      <div className="text-center">You picked</div>
      <div className="col-start-3 text-center">The house picked</div>
      <ShowSelectedItem selection={mySelection} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-3xl font-bold">You lose</h1>
        <button className="mt-2 bg-white px-8 uppercase text-gray-400">
          Play again
        </button>
      </div>
      <ShowSelectedItem selection={houseSelection} />
    </main>
  );
}

export default Step3;
