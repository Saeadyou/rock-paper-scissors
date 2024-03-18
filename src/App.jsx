import { useState } from "react";
import Header from "./components/Header";
import RulesButton from "./components/RulesButton";
import Modal from "./components/Modal";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Csissors from "./components/Csissors";
import Rock from "./components/Rock";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
      <Header />

      {/* <Step1 /> */}
      {/* <Step2 /> */}

      <main className="absolute left-1/2 top-72 grid w-full -translate-x-1/2 grid-cols-3 gap-8 px-12">
        <div className="text-center">You picked</div>
        <div className="col-start-3 text-center">The house picked</div>
        <Csissors className="mx-auto h-36 w-36" />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-3xl font-bold">You lose</h1>
          <button className="mt-2 bg-white px-8 uppercase text-gray-400">
            Play again
          </button>
        </div>
        <Rock className="mx-auto h-36 w-36" winner />
      </main>

      <RulesButton setShowModal={setShowModal} />
    </>
  );
}

export default App;
