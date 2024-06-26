import { useData } from "../contexts/DataContext";

function Modal() {
  const { showModal, setShowModal } = useData();

  if (!showModal) return null;

  function handleClick() {
    setShowModal(false);
  }

  return (
    <>
      <div
        onClick={handleClick}
        className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[#00000080] "
      ></div>
      <div className="relative z-50 rounded-lg bg-white p-6">
        <span
          onClick={handleClick}
          className="absolute right-6 top-6 cursor-pointer text-3xl leading-5 text-gray-400 hover:text-gray-600"
        >
          &times;
        </span>
        <div className="mb-10 text-2xl font-bold text-black">Rules</div>
        <img src="/images/image-rules.svg" className="px-4" />
      </div>
    </>
  );
}

export default Modal;
