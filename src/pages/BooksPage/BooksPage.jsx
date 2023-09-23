import React from "react";
import module from "./BooksPage.module.css";
import TableComponent from "../../components/Table/Table";
import AddNewButton from "../../components/AddNewButton/AddNewButton";
import SearchBar from "../../components/SearchBar/SearchBar";
const BooksPage = () => {
  return (
    <div id={module.BooksPageWrapper}>
      <div id={module.UpperControleWrapper}>
        <SearchBar></SearchBar>
        <AddNewButton></AddNewButton>
      </div>
      <TableComponent></TableComponent>
    </div>
  );
};

export default BooksPage;
