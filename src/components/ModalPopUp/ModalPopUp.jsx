import React, { useRef } from "react";
import module from "./ModalPopUp.module.css";

import ModalHeader from "../ModalHeader/ModalHeader";
import ModalActions from "../ModalActions/ModalActions";
import ModalBody from "../ModalBody/ModalBody";
import { useSelector } from "react-redux";

const ModalPopUp = ({ onClose, isModalOpen }) => {
  const selectedOption = useSelector(
    (state) => state.SideBarSelction.selectedOption
  );

  const bookNameRef = useRef(null);
  const numberOfPagesRef = useRef(null);
  const authorRef = useRef(null);

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {isModalOpen && (
        <div className={module.Backdrop} onClick={handleClose}></div>
      )}
      <div id={module.ModalPopUpWrapper}>
        <ModalHeader selectedOption = {selectedOption}></ModalHeader>
        <div id={module.ContentPopUp}>
          <ModalBody
          selectedOption ={selectedOption}
            bookNameRef={bookNameRef}
            authorRef={authorRef}
            numberOfPagesRef={numberOfPagesRef}
          ></ModalBody>
         </div>

          <div id={module.Line}></div>

          <ModalActions
            bookNameRef={bookNameRef}
            authorRef={authorRef}
            numberOfPagesRef={numberOfPagesRef}
            onClose={onClose}
          ></ModalActions>
      </div>
    </>
  );
};

export default ModalPopUp;
