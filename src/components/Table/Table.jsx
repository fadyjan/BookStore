import React, { useState } from "react";
import module from "./Table.module.css";
import EditIcon from "../../assets/EditIcon.png";
import DelteIcon from "../../assets/deleteIcon.png";

import { useSelector, useDispatch } from "react-redux";
import { deleteBookById } from "../../store/DataSlices/DataSlices";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableComponent = () => {
  const dispatch = useDispatch();
  const OriginalData = useSelector((state) => state.DataBase.searchOutput);
  const allAuthors = useSelector((state) => state.DataBase.allAuthors);
  const SelectedPage = useSelector(
    (state) => state.SideBarSelction.selectedOption
  );

  let HeaderTittle = [];
  const HandleDelete = (e) => {
    const SelectedID = e.target.closest("button").id;
    dispatch(deleteBookById(Number(SelectedID)));
  };

  if (SelectedPage === "Books") {
    HeaderTittle = ["Book ID", "Name", "Pages", "Author Name", "Actions"];
  } else if (SelectedPage === "Author") {
    HeaderTittle = ["Name"];
  }

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
        <TableBody>
          {SelectedPage === "Books"
            ? OriginalData.map((row) => (
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
              ))
            : SelectedPage === "Author"
            ? allAuthors.map((row) => (
                <TableRow
                  key={row + "ID"}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row}</TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
