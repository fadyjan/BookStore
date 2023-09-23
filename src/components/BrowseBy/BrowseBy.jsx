import React from "react";
import module from "./BrowseBy.module.css";
import Card from "../Card/Card";
import { useDispatch,useSelector } from "react-redux";
import { setSelected } from "../../store/ReduxSlices/SideBarSlice";
const BrowseBy = ({Tittle}) => {

  const dispatch = useDispatch();
  const HandleSelection = (e)=>{
    const SelectedOption = e.target.getAttribute('tittile') 
    dispatch(setSelected(SelectedOption));
  }
  const data = useSelector((state) => state.DataBase.OriginalData);

  return (
    <div id={module.BrowseByWrapper}>
      <div className={module.UpperDiv}>
        <label >Browse by {Tittle}</label>
        <button onClick={HandleSelection} tittile={Tittle}>View All</button>
      </div>
      <div className={module.LowerDiv}>
            <Card data ={data[0]} Tittle = {Tittle} ></Card>
            <Card data ={data[1]} Tittle = {Tittle}></Card>
            <Card data ={data[2]} Tittle = {Tittle}></Card>
      </div>
    </div>
  );
};

export default BrowseBy;
