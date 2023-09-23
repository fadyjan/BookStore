import React, { useRef } from "react";
import module from "./ModalPopUp.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addNewBook } from "../../store/DataSlices/DataSlices";
const ModalPopUp = ({ onClose , isModalOpen }) => {
  const dispatch = useDispatch();
  const bookNameRef = useRef(null);
  const numberOfPagesRef = useRef(null);
  const authorRef = useRef(null);
  const authors = useSelector((state) => state.DataBase.allAuthors);
    console.log(authors);
  const handleClose = () => {
    // Add any cleanup or additional actions you need before closing
    onClose(); // Call the onClose function to close the modal
  };

  const handleAddingNewBook = () => {
    // Access the input values using the ref objects
    const bookName = bookNameRef.current.value;
    const numberOfPages = numberOfPagesRef.current.value;
    const author = authorRef.current.value;

    // Dispatch the addNewBook action to add the new book
    dispatch(addNewBook({ bookName, numberOfPages, author }));

    // Close the modal
    handleClose();
  };

  return (
    <>
      {isModalOpen && (
        <div className={module.Backdrop} onClick={handleClose}></div>
      )}      <div id={module.ModalPopUpWrapper}>
        <label id={module.TittleBar}>New Book</label>
        <div id={module.ContentPopUp}>
          <div>
            <label>Book Name</label>
            <input ref={bookNameRef} placeholder="Enter Book Name"></input>
          </div>

          <div>
            <label>Number Of Pages</label>
            <input
              type="number"
              ref={numberOfPagesRef} // Attach the ref to the input element
              placeholder="Enter Number of Pages"
            ></input>
          </div>

          <div>
            <label>Author</label>
            <select ref={authorRef} name="cars" id="cars">
              {authors &&
                authors.map((author, index) => (
                  <option key={index} value={author}>
                    {author}
                  </option>
                ))}
            </select>
          </div>

          <div id={module.ActionSection}>
            <button onClick={handleClose}>Cancel</button>
            <button onClick={handleAddingNewBook}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPopUp;
