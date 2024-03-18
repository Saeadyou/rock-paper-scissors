import Csissors from "../components/Csissors";
import Paper from "../components/Paper";
import Rock from "../components/Rock";

function Step1() {
  return (
    <main>
      <img
        src="/images/bg-triangle.svg"
        alt="triangle"
        className="absolute left-1/2 top-72 w-56 -translate-x-1/2"
      />
      <Paper className="absolute left-1/2 top-56 h-32 w-32 -translate-x-40" />
      <Csissors className="absolute left-1/2 top-56 h-32 w-32 translate-x-8" />
      <Rock className="absolute left-1/2 top-56 h-32 w-32 -translate-x-1/2 translate-y-40" />
    </main>
  );
}

export default Step1;
