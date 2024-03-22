function RulesButton({ setShowModal }) {
  return (
    <button
      onClick={() => setShowModal(true)}
      className="absolute bottom-6 right-6 border border-green-300 bg-transparent px-8 text-xs uppercase"
    >
      Rules
    </button>
  );
}

export default RulesButton;
