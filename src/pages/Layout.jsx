// import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import Header from "../components/Header";
import Modal from "../components/Modal";
import RulesButton from "../components/RulesButton";

function Layout() {
  const { showModal } = useData();

  return (
    <>
      {showModal && <Modal />}
      <Header />

      <Outlet />

      <RulesButton />
    </>
  );
}

export default Layout;
