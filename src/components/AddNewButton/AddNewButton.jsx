import React, { useState } from "react";
import ModalPopUp from "../ModalPopUp/ModalPopUp";
import module from "./AddNewButton.module.css";
const AddNewButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const HandleShowPopUp = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <button onClick={HandleShowPopUp} id={module.ButtonWrapper}>Add New Book</button>
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
