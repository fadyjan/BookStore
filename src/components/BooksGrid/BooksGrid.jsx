import React from 'react'
import module from './BooksGrid.module.css'
import { useSelector } from "react-redux";
import Card from '../Card/Card';

const BooksGrid = () => {
    const AllBooks = useSelector(
        (state) => state.DataBase.OriginalData
    );
        console.log(AllBooks);
  return (
    <div id={module.BooksGridWrapper}>
        {AllBooks.map((record)=>{
            return(
                <Card data = {record} Tittle='AllBooks'></Card>
            )
        })}
    </div>
  )
}

export default BooksGrid