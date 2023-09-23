import React from "react";
import module from "./HomePage.module.css";
import BrowseBy from "../../components/BrowseBy/BrowseBy";
import {useSelector} from "react-redux";

const HomePage = () => {
  
  return (
    <div id={module.HomePageWrapper}>
        <BrowseBy Tittle = 'Stores' ></BrowseBy>
        <BrowseBy Tittle = 'Authors' ></BrowseBy>
        <BrowseBy Tittle= 'Books' ></BrowseBy>
    </div>
  );
};

export default HomePage;
