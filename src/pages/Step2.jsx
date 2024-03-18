import Csissors from "../components/Csissors";

function Step2() {
  return (
    <main className="absolute left-1/2 top-72 grid -translate-x-1/2 grid-cols-2 gap-8">
      <div className="text-center">You picked</div>
      <div>The house picked</div>
      <Csissors className="mx-auto h-36 w-36" />
      <div className="mx-auto my-auto h-28 w-28 rounded-full bg-[#00000030]"></div>
    </main>
  );
}

export default Step2;
