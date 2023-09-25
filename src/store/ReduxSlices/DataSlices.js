import { createSlice } from "@reduxjs/toolkit";
import ArrayOfData from '../../data/books.json'
import ArrayofAuthors from '../../data/Authors.json'
import ArrayofStores from '../../data/Stores.json'



const initialState = {
    OriginalData: ArrayOfData,
    allAuthors: ArrayofAuthors,
    allStores:ArrayofStores,
    searchOutput: undefined,
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

        },

        addNewStore: (state, action) => {
            // Extract book data from the action payload
            const { storeName, storeAddress} = action.payload;
            const currentID = state.allStores.length + 2
            // Create a new book object
            const newBook = {
                '_id': currentID,
                'StoreName': storeName,
                'Address': storeAddress,
    
            };

            // Add the new book to OriginalData
            state.allStores.push(newBook);
        },
        addNewAuthor: (state, action) => {
            // Extract book data from the action payload
            const {author} = action.payload;
            const currentID = state.allAuthors.length + 2
            // Create a new book object
            const newAuthor = {
                '_id': currentID,
                'AuthorName': author,
            };

            // Add the new book to OriginalData
            state.allAuthors.push(newAuthor);

        },
        deleteBookById: (state, action) => {
            const bookIdToDelete = action.payload;
            state.OriginalData = state.OriginalData.filter(
                (book) => book._id !== bookIdToDelete
            );



            if (state.searchOutput) {
                state.searchOutput = state.searchOutput.filter(
                    (book) => book._id !== bookIdToDelete
                );
            }
        },resetSearchOutput: (state, action) => {
            if (action.payload === 'Books') {
              // Reset searchOutput for Books
              state.searchOutput = action.payload.OriginalBooksData
            } else if (action.payload === 'Author') {
              // Reset searchOutput for Author
              state.searchOutput = action.payload.OriginalAuthorsData
            } else if (action.payload === 'Stores') {
                // Reset searchOutput for Author
                state.searchOutput = action.payload.OriginalStoresData
              } 
          
            // You can also add additional conditions or logic as needed
          
            // Return the updated state
            return state;
          },

        deleteAuthorById: (state, action) => {
            const authorIdToDelete = action.payload;
            state.allAuthors = state.allAuthors.filter(
                (author) => author._id !== authorIdToDelete
            );
            if (state.searchOutput) {
                state.searchOutput = state.searchOutput.filter(
                    (author) => author._id !== authorIdToDelete
                );
            }

        },

        deleteStoresById: (state, action) => {
            const storeIdToDelete = action.payload;
            state.allStores = state.allStores.filter(
                (store) => store._id !== storeIdToDelete
            );
            if (state.searchOutput) {
                state.searchOutput = state.searchOutput.filter(
                    (store) => store._id !== storeIdToDelete
                );
            }

        },

        setSearchOutput: (state, action) => {
            state.searchOutput = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchStatus = action.payload;
        },

    }
});



export const {deleteStoresById, addNewStore ,deleteBookById,resetSearchOutput,deleteAuthorById, addNewBook, addNewAuthor,setSearchOutput, setSearchTerm } = dataSlice.actions
export default dataSlice.reducer;
