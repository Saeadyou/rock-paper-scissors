import { useState } from "react";
import Header from "./components/Header";
import RulesButton from "./components/RulesButton";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
      <Header />
      <main>
        <img
          src="/images/bg-triangle.svg"
          alt="triangle"
          className="absolute left-1/2 top-72 w-56 -translate-x-1/2"
        />
        <div className="absolute left-1/2 top-56 flex h-32 w-32 -translate-x-40 items-center justify-center rounded-full border-[1rem] border-blue-500 bg-white shadow-[inset_0px_5px_0px_0px_#dedede,0px_5px_0px_0px_#1D57F6]">
          <img src="/images/icon-paper.svg" alt="icon-paper" className="h-12" />
        </div>
        <div className="absolute left-1/2 top-56 flex h-32 w-32 translate-x-8 items-center justify-center rounded-full border-[1rem] border-yellow-500 bg-white shadow-[inset_0px_5px_0px_0px_#dedede,0px_5px_0px_0px_#CA9A07]">
          <img
            src="/images/icon-scissors.svg"
            alt="icon-scissors"
            className="h-12"
          />
        </div>
        <div className="absolute left-1/2 top-56 flex h-32 w-32 -translate-x-1/2 translate-y-40 items-center justify-center rounded-full border-[1rem] border-red-500 bg-white shadow-[inset_0px_5px_0px_0px_#dedede,0px_5px_0px_0px_#C43838]">
          <img src="/images/icon-rock.svg" alt="icon-rock" className="h-12" />
        </div>
      </main>

      <RulesButton setShowModal={setShowModal} />
    </>
  );
}

export default App;
