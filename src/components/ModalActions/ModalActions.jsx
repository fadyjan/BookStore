import React from 'react'
import module from './ModalActions.module.css'
import { useDispatch,useSelector } from "react-redux";
import { addNewBook,addNewAuthor,addNewStore } from "../../store/ReduxSlices/DataSlices";

const ModalActions = ({onClose , bookNameRef ,authorRef,numberOfPagesRef}) => {
    const dispatch = useDispatch();
    const selectedOption = useSelector(
        (state) => state.SideBarSelction.selectedOption
      );
    const handleClose = () => {
        onClose(); 
      };
    const handleAddingNewBook = () => {
        if (selectedOption === "Books") {
            const bookName = bookNameRef.current.value;
            const numberOfPages = numberOfPagesRef.current.value;
            const author = authorRef.current.value;
            dispatch(addNewBook({ bookName, numberOfPages, author }));

        } else if(selectedOption === "Author"){
            const author = authorRef.current.value;
            dispatch(addNewAuthor({ author }));

        } else if(selectedOption === "Stores"){
          const storeName = bookNameRef.current.value;
          const storeAddress = authorRef.current.value;

          dispatch(addNewStore({ storeName , storeAddress}));
        }
        handleClose();
      };

  return (
    <div id={module.ActionSection}>
    <button id={module.Cancel} onClick={handleClose}>
      Cancel
    </button>
    <button id={module.Submit} onClick={handleAddingNewBook}>
      Submit
    </button>
  </div>
  )
}

export default ModalActions