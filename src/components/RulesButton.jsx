import { useData } from "../contexts/DataContext";

function RulesButton() {
  const { setShowModal } = useData();

  return (
    <button
      onClick={() => setShowModal(true)}
      className="absolute bottom-12 right-1/2 w-fit translate-x-1/2 border border-green-300 bg-transparent px-8 text-xs uppercase sm:bottom-6 sm:right-6 sm:translate-x-0"
    >
      Rules
    </button>
  );
}

export default RulesButton;
