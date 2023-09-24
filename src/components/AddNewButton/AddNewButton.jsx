import React, { useState } from "react";
import ModalPopUp from "../ModalPopUp/ModalPopUp";
import module from "./AddNewButton.module.css";
import { HandleButtonSpan } from "../../store/ReduxSlices/SideBarSlice";
const AddNewButton = ({ SelectedPage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let ButtonSpan = HandleButtonSpan(SelectedPage);

  const HandleShowPopUp = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <button onClick={HandleShowPopUp} id={module.ButtonWrapper}>{"Add New "+ ButtonSpan}</button>
      {isModalOpen && (
        <ModalPopUp
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default AddNewButton;
