import React from "react";
import module from "./SideBar.module.css";
import BookStoreLogo from "../../assets/BookStoreLogo.png";
import AuthorLogo from "../../assets/AuthorLogo.png";
import BooksLogo from "../../assets/BooksLogo.png";
import StoresLogo from "../../assets/StoresLogo.png";
import ShopLogo from "../../assets/ShopLogo.png";
import { useDispatch } from "react-redux";
import { setSelected } from "../../store/ReduxSlices/SideBarSlice";

export const SideBar = () => {
  const dispatch = useDispatch();

  const HandleSelection = (e)=>{
    const SelectedOption = e.target.closest('li').getAttribute('litittile') 
    dispatch(setSelected(SelectedOption));
  }
  return (
    <div id={module.SideBarWrapper}>
      <div id={module.BookStoreWrapper}>
        <img src={BookStoreLogo} id={module.ShopStoreLogo}></img>
        <label id={module.BookWorldLabel}>
          <span>BOOK</span>
           WORLD
        </label>
      </div>
      <ul id={module.UnOrderdListWrapper}>
        <li className={module.LiElement} onClick={HandleSelection} litittile='Shop'>
          <img src={ShopLogo}></img> <a>Shop</a>
        </li>
        <li className={module.LiElement} onClick={HandleSelection} litittile='Stores'>
          <img src={StoresLogo}></img> <a>Stores</a>
        </li>
        <li className={module.LiElement} onClick={HandleSelection} litittile='Author'>
          <img src={AuthorLogo}></img> <a>Author</a>
        </li>
        <li className={module.LiElement} onClick={HandleSelection} litittile='Books'>
          <img src={BooksLogo}></img> <a>Books</a>
        </li>
      </ul>
    </div>
  );
};
