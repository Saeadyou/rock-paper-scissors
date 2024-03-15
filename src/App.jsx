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
      <main></main>
      <RulesButton setShowModal={setShowModal} />
    </>
  );
}

export default App;
