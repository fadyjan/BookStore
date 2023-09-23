import React from 'react'
import module from './SearchBar.module.css'
import { useSelector, useDispatch } from "react-redux";
import { setSearchOutput, setSearchTerm } from "../../store/DataSlices/DataSlices";

const SearchBar = () => {
    const dispatch = useDispatch();
    const OriginalData = useSelector(
      (state) => state.DataBase.OriginalData
    );
      
    const OnChangeHandler = (e) => {
      const SearchInput = e.target.value.toLowerCase();
      dispatch(setSearchTerm(SearchInput));
  
      const filteredData = OriginalData.filter((record) => {
        //if no input the return the original
        if (SearchInput === "") {
          return record;
        } else {
          return record.title.toLowerCase().includes(SearchInput);
        }
      });
  
      if (SearchInput == "") {
        dispatch(setSearchOutput(OriginalData));
      } else {
        dispatch(setSearchOutput(filteredData));
      }

      console.log(filteredData);
    }

  return (
    <div id={module.SearchBarWrapper}>
        <label id={module.BooksTittle}>Books List</label>
        <input id={module.SearchInput} onChange={OnChangeHandler}></input>
    </div>
  )
}

export default SearchBar