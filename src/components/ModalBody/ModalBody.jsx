import React from "react";
import module from "./ModalBody.module.css";
import { useSelector } from "react-redux";

const ModalBody = ({ bookNameRef, authorRef, numberOfPagesRef }) => {
  const authors = useSelector((state) => state.DataBase.allAuthors);
  const selectedOption = useSelector(
    (state) => state.SideBarSelction.selectedOption
  );

  const WhatToRender = () => {
    if (selectedOption === "Books") {
      return (
        <>
          <div className={module.Row}>
            <label>Book Name</label>
            <input
              className={module.InputRow}
              ref={bookNameRef}
              placeholder="Enter Book Name"
            ></input>
          </div>

          <div className={module.Row}>
            <label>Number Of Pages</label>
            <input
              className={module.InputRow}
              type="number"
              ref={numberOfPagesRef}
              placeholder="Enter Number of Pages"
            ></input>
          </div>

          <div className={module.Row}>
            <label>Author</label>
            <select ref={authorRef} id={module.selectElemen}>
              {authors &&
                authors.map((author) => (
                  <option key={author._id} value={author.AuthorName}>
                    {author.AuthorName}
                  </option>
                ))}
            </select>
          </div>
        </>
      );
    } else if (selectedOption === "Author") {
      return (
        <div className={module.OnlyRow}>
          <label>Author Name</label>
          <input
            className={module.InputRow}
            ref={authorRef}
            placeholder="Enter Author Full Name"
          ></input>
        </div>
      );
    } else if (selectedOption === "Stores") {
      return (
        <>
          <div className={module.Row}>
            <label>Store Name</label>
            <input
              className={module.InputRow}
              ref={bookNameRef}
              placeholder="Enter Store Name"
            ></input>
          </div>

          <div className={module.Row}>
            <label>Enter Store Name</label>
            <input
              className={module.InputRow}
              ref={authorRef}
              placeholder="Enter Store Address"
            ></input>
          </div>
        </>
      );
    }
  };

  return <>{WhatToRender()}</>;
};

export default ModalBody;
