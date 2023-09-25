# Project Name: Bookstore App

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Project Folder Architecture](#project-folder-architecture)
- [Functionality](#functionality)

## Introduction
Welcome to the Bookstore App GitHub repository! This project is a Vite React-based application that serves as a virtual bookstore. Users can explore and interact with a collection of books, authors, and stores. The app provides features such as listing all books, authors, and stores, searching within these categories, and adding new entries.

## Installation
To run this project on your local machine, follow these steps:

1. **Clone the Repository**:
2. cd BookStore
3. npm install
4. npm run dev

## Project Folder Architecture

src
|-- components
|-- layouts
|-- pages
|-- store
|-- utils
|-- fonts
|-- assets
|-- data

components: This folder contains reusable React components that can be used across multiple pages or features in the application.

layouts: Layout components are housed here, defining the structure and arrangement of elements on different pages.

pages: Individual pages of the application are organized in this folder, with each page representing a specific view or feature.

store: The store folder is used for state management, and it may contain code related to React's context or Redux for managing the global state of the application.

utils: Utility functions and helper modules that provide various functionalities and support tasks across the application.

fonts: Font files are stored here, which are used for styling and typography within the application.

assets: This folder contains images, icons, and other static assets used for visual elements in the application.

data: Data-related files, such as JSON files, may be stored here to provide sample data or serve as a database for the application's content.



## Functionality
The Bookstore App offers the following functionality:

- **Listing Books**: View a list of available books, including their titles, authors, and other relevant information.

- **Listing Authors**: Browse a list of authors and their respective works.

- **Listing Stores**: Explore a list of stores where the books are available.

### Searching
- **Search**: Search for books, authors, and stores using a search bar, with results displayed in real-time.

### Adding Entries
- **Adding Entries**: Add new books, authors, and stores to the database.


