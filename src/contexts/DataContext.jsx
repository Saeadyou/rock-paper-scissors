import { createContext, useContext, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [mySelection, setMySelection] = useState("");
  const [houseSelection, setHouseSelection] = useState("");
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <DataContext.Provider
      value={{
        mySelection,
        setMySelection,
        houseSelection,
        setHouseSelection,
        score,
        setScore,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("DataContext was used outside the DataProvider");
  return context;
}

export { DataProvider, useData };
