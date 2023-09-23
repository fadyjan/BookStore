import React from 'react'
import module from './TittleBar.module.css'
import UserLogo from '../../assets/UserLogo.png'
import { useSelector } from "react-redux";

const TittleBar = () => {
    const SelectedPage = useSelector(
        (state) => state.SideBarSelction.selectedOption
      );
      
  return (
    <div id={module.TittleBarWrapper}>
        <div id={module.SelectedTittleWrapper}>
            <label id={module.TittleBar}>{SelectedPage}</label>
            <label id={module.MiniTittleBar}>Shop</label>
        </div>
        <div id={module.CustomerTittleWrapper}>
            <img src={UserLogo}></img>
            <label>Jacob Jones</label>
        </div>

    </div>
  )
}

export default TittleBar