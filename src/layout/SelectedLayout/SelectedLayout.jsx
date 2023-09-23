import React from 'react'
import module from './SelectedLayout.module.css'
import HomePage from '../../pages/HomePage/HomePage'
import TittleBar from '../../components/TittleBar/TittleBar'
import { useSelector } from "react-redux";
import BooksPage from '../../pages/BooksPage/BooksPage';
import AuthorPage from '../../pages/AuthorPage/AuthorPage';
const SelectedLayout = () => {
    const WhichPageToRender = () => {
        const SelectedPage = useSelector(
          (state) => state.SideBarSelction.selectedOption
        );
        if (SelectedPage === "Shop") {
          return <HomePage></HomePage>;
        } else if (SelectedPage === "Books") {
            return <BooksPage></BooksPage>
        } else if(SelectedPage === "Author"){
          return <AuthorPage></AuthorPage>
        }
      };

  return (
    <div id={module.SelectedLayoutWrapper}>
        <TittleBar></TittleBar>
        {WhichPageToRender()}
    </div>
  )
}

export default SelectedLayout