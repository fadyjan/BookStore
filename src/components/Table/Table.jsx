import React, { useState } from "react";
import module from "./Table.module.css";
import EditIcon from "../../assets/EditIcon.png";
import DelteIcon from "../../assets/deleteIcon.png";

import { useSelector, useDispatch } from "react-redux";
import {
  deleteBookById,
  deleteAuthorById,
  deleteStoresById,
} from "../../store/ReduxSlices/DataSlices";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  prepareTableHeader,
  prepareTableContent,removeUnnecessryKeys
} from "../../utils/utilsFunctions";
const TableComponent = () => {
  const dispatch = useDispatch();
  let OriginalData = useSelector((state) => state.DataBase.OriginalData);
  let allAuthors = useSelector((state) => state.DataBase.allAuthors);
  let allStores = useSelector((state) => state.DataBase.allStores);

  const SearchOutPut = useSelector((state) => state.DataBase.searchOutput);

  const SelectedPage = useSelector(
    (state) => state.SideBarSelction.selectedOption 
  );

  let HeaderTittle,
    TableData = [];
  const HandleDelete = (e) => {
    let SelectedID = e.target.closest("button").id;
    SelectedID = SelectedID.split('#')[1]

    if (SelectedPage === "Books") {
      dispatch(deleteBookById(Number(SelectedID)));
    } else if (SelectedPage === "Author") {
      dispatch(deleteAuthorById(Number(SelectedID)));
    } else if (SelectedPage === "Stores") {
      dispatch(deleteStoresById(Number(SelectedID)));
    }
  };

  const HandleEdit = (e)=>{
    
  }
  HeaderTittle = prepareTableHeader(SelectedPage);
  TableData = prepareTableContent(
    SelectedPage,
    SearchOutPut,
    OriginalData,
    allAuthors,
    allStores
  );
  TableData= removeUnnecessryKeys(SelectedPage,TableData)
  const whatToRender = () => {

      return TableData.map((row) => (
        <TableRow
          key={row._id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          {Object.keys(row).map((key) => {
            return <TableCell align="left">{row[key]}</TableCell>;
          })}

          <TableCell align="left">
            <button className={module.BtnIcons} onClick={HandleEdit}>
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
    
  };

  return (
    <TableContainer component={Paper} style={{ height: "65%" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {HeaderTittle.map((TableCellContent) => {
              return (
                <TableCell key={TableCellContent} align="left">
                  {TableCellContent}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>{whatToRender()}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
