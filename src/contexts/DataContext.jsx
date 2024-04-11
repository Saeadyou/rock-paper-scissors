import { createContext, useContext, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [mySelection, setMySelection] = useState("");
  const [houseSelection, setHouseSelection] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showWinner, setShowWinner] = useState(false);

  let point = 0;
  if (mySelection === "rock") {
    houseSelection === "paper" && --point;
    houseSelection === "csissors" && ++point;
  }
  if (mySelection === "paper") {
    houseSelection === "csissors" && --point;
    houseSelection === "rock" && ++point;
  }
  if (mySelection === "csissors") {
    houseSelection === "rock" && --point;
    houseSelection === "paper" && ++point;
  }

  return (
    <DataContext.Provider
      value={{
        mySelection,
        setMySelection,
        houseSelection,
        setHouseSelection,
        point,
        showModal,
        setShowModal,
        showWinner,
        setShowWinner,
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
