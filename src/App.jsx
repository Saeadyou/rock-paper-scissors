import { useState } from "react";
import Header from "./components/Header";
import RulesButton from "./components/RulesButton";
import Modal from "./components/Modal";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Csissors from "./components/Csissors";
import Rock from "./components/Rock";
import Step3 from "./pages/Step3";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
      <Header />

      {/* <Step1 /> */}
      {/* <Step2 /> */}
      <Step3 />

      <RulesButton setShowModal={setShowModal} />
    </>
  );
}

export default App;
