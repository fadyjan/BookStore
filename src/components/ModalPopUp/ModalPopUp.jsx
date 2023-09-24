import React, { useRef } from "react";
import module from "./ModalPopUp.module.css";

import ModalHeader from "../ModalHeader/ModalHeader";
import ModalActions from "../ModalActions/ModalActions";
import ModalBody from "../ModalBody/ModalBody";

const ModalPopUp = ({ onClose, isModalOpen }) => {
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
        <ModalHeader></ModalHeader>
        <div id={module.ContentPopUp}>
          <ModalBody
            bookNameRef={bookNameRef}
            authorRef={authorRef}
            numberOfPagesRef={numberOfPagesRef}
          ></ModalBody>
          
          <div id={module.Line}></div>

          <ModalActions
            bookNameRef={bookNameRef}
            authorRef={authorRef}
            numberOfPagesRef={numberOfPagesRef}
            onClose={onClose}
          ></ModalActions>
        </div>
      </div>
    </>
  );
};

export default ModalPopUp;
