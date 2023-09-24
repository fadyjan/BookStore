import React from "react";
import module from "./SearchBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchOutput,
  setSearchTerm,
} from "../../store/ReduxSlices/DataSlices";
import iconsearch from "../../assets/icon-search.svg";

const SearchBar = () => {
  const dispatch = useDispatch();
  const OriginalBooksData = useSelector((state) => state.DataBase.OriginalData);
  const OriginalAuthorsData = useSelector((state) => state.DataBase.allAuthors);

  let CurrentData = []

  let SearchTerm = '' 
  const selectedOption = useSelector(
    (state) => state.SideBarSelction.selectedOption
  );

  if (selectedOption === "Books") {
    CurrentData =  OriginalBooksData
    SearchTerm = 'title'
  } else if (selectedOption === "Author") {
    CurrentData = OriginalAuthorsData
    SearchTerm = 'AuthorName'

  }

  const OnChangeHandler = (e) => {
    const SearchInput = e.target.value.toLowerCase();
    // dispatch(setSearchTerm(SearchInput));

    const filteredData = CurrentData.filter((record) => {
      //if no input the return the original
      if (SearchInput === "") {
        return record;
      } else {
        return record[SearchTerm].toLowerCase().includes(SearchInput);
      }
    });

    if (SearchInput == "") {
      dispatch(setSearchOutput(CurrentData));
    } else {
      dispatch(setSearchOutput(filteredData));
    }

    console.log(filteredData)
  };

  return (
    <div id={module.SearchBarWrapper}>
      <label id={module.BooksTittle}>{selectedOption + " List"}</label>
      <div id={module.SearchContainer}>
        <img src={iconsearch} id={module.SearchIcon}></img>
        <input
          placeholder="Search"
          id={module.SearchInput}
          onChange={OnChangeHandler}
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
