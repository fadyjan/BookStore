import React, { useState } from "react";
import module from "./Table.module.css";
import EditIcon from "../../assets/EditIcon.png";
import DelteIcon from "../../assets/deleteIcon.png";

import { useSelector, useDispatch } from "react-redux";
import {
  deleteBookById,
  deleteAuthorById,
} from "../../store/ReduxSlices/DataSlices";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableComponent = () => {
  const dispatch = useDispatch();
  let OriginalData = useSelector((state) => state.DataBase.OriginalData);
  let allAuthors = useSelector((state) => state.DataBase.allAuthors);
  const SearchOutPut = useSelector((state) => state.DataBase.searchOutput);

  const SelectedPage = useSelector(
    (state) => state.SideBarSelction.selectedOption
  );

  let HeaderTittle = [];
  const HandleDelete = (e) => {
    const SelectedID = e.target.closest("button").id;

    if (SelectedPage === "Books") {
      dispatch(deleteBookById(Number(SelectedID)));
    } else if (SelectedPage === "Author") {
      dispatch(deleteAuthorById(Number(SelectedID)));
    }
  };

  if (SelectedPage === "Books") {
    HeaderTittle = ["Book ID", "Name", "Pages", "Author Name", "Actions"];
  } else if (SelectedPage === "Author") {
    HeaderTittle = ["Author ID", "Name", "Actions"];
  }

  debugger

  if (SelectedPage === "Books" && SearchOutPut) {
    OriginalData = SearchOutPut
  } else if (SelectedPage === "Author" && SearchOutPut) {
    allAuthors = SearchOutPut

  }

  const whatToRender = () => {
    if (SelectedPage === "Books") {
      return ( 
        OriginalData.map((row) => (
        <TableRow
          key={row._id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row._id}
          </TableCell>
          <TableCell align="left">{row.title}</TableCell>
          <TableCell align="left">{row.pageCount}</TableCell>
          <TableCell align="left">{row.authors[0]}</TableCell>
          <TableCell align="left">
            <button className={module.BtnIcons}>
              <img src={EditIcon}></img>
            </button>
            <button
              className={module.BtnIcons}
              id={row._id}
              onClick={HandleDelete}
            >
              <img src={DelteIcon}></img>
            </button>
          </TableCell>
        </TableRow>
      )))
    } else if (SelectedPage === "Author") {
      return allAuthors.map((row) => (
        <TableRow
          key={row._id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell align="left">{"#" + row._id}</TableCell>
          <TableCell align="left">{row.AuthorName}</TableCell>
          <TableCell align="left">
            <button className={module.BtnIcons}>
              <img src={EditIcon}></img>
            </button>
            <button
              className={module.BtnIcons}
              id={row._id}
              onClick={HandleDelete}
            >
              <img src={DelteIcon}></img>
            </button>
          </TableCell>
        </TableRow>
      ));
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {HeaderTittle.map((TableCellContent) => {
              return <TableCell align="left">{TableCellContent}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>{whatToRender()}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
