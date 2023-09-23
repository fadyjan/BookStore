import { createSlice } from "@reduxjs/toolkit";
import ArrayOfData from '../../data/books.json'

const allAuthors = Array.from(
    new Set(ArrayOfData.flatMap((book) => book.authors))
  );

export function countBooksByAuthor(authorName) {
    const booksByAuthor = ArrayOfData.filter(book =>
        book.authors.includes(authorName)
    );
    return booksByAuthor.length;
}


const initialState = {
    OriginalData: ArrayOfData,
    CurrentBooksData: ArrayOfData.slice(1, 10),
    allAuthors: allAuthors,
    searchOutput: ArrayOfData,
    searchStatus: "notIntailezed",
};

export const dataSlice = createSlice({
    name: "DataBase",
    initialState,
    reducers: {
        addNewBook: (state, action) => {
            // Extract book data from the action payload
            const { bookName, numberOfPages, author } = action.payload;
            const currentID = state.OriginalData.length + 2
            // Create a new book object
            const newBook = {
                '_id': currentID,
                'title': bookName,
                'pageCount': numberOfPages,
                'authors': author,
            };

            // Add the new book to OriginalData
            state.OriginalData.push(newBook);
            state.searchOutput.push(newBook);

        },
        deleteBookById: (state, action) => {
            const bookIdToDelete = action.payload;
            state.OriginalData = state.OriginalData.filter(
                (book) => book._id !== bookIdToDelete
            );

            state.searchOutput = state.searchOutput.filter(
                (book) => book._id !== bookIdToDelete
            );
        },

        setSearchOutput: (state, action) => {
            state.searchOutput = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchStatus = action.payload;
        },

    }
});



export const { deleteBookById, addNewBook, setSearchOutput, setSearchTerm } = dataSlice.actions
export default dataSlice.reducer;
