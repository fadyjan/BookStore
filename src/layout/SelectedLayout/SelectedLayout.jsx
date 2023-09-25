import React from "react";
import module from "./SelectedLayout.module.css";
import HomePage from "../../pages/HomePage/HomePage";
import TittleBar from "../../components/TittleBar/TittleBar";
import { useSelector } from "react-redux";
import AddNewButton from "../../components/AddNewButton/AddNewButton";
import SearchBar from "../../components/SearchBar/SearchBar";
import TableComponent from "../../components/Table/Table";
import BooksGrid from '../../components/BooksGrid/BooksGrid'
const SelectedLayout = () => {
  const SelectedPage = useSelector(
    (state) => state.SideBarSelction.selectedOption
  );
  const WhichPageToRender = () => {
    if (SelectedPage === "Shop") {
      return <HomePage></HomePage>;
    } else if(SelectedPage === "AllBooks"){
      return <BooksGrid></BooksGrid>
    } else {
      return (
        <>
          <div id={module.UpperControleWrapper}>
            <SearchBar key={SelectedPage}></SearchBar>
            <AddNewButton SelectedPage ={SelectedPage}></AddNewButton>
          </div>
          <TableComponent></TableComponent>
        </>
      );
    }
  };

  return (
    <div id={module.SelectedLayoutWrapper}>
      <TittleBar></TittleBar>
      {WhichPageToRender()}
    </div>
  );
};

export default SelectedLayout;
