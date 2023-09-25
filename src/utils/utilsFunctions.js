import LargeBookstore from "../assets/LargeBookstore.png";
import ArrayOfData from '../data/books.json'


export function HandleHeader(selectedOption){
let header = ''
    if (selectedOption == 'Books') {
        header ='Book'
    }
    else if(selectedOption == 'Stores'){
        header ='Store'
    } else{
        header=selectedOption
    }

    return header
}

export function countBooksByAuthor(authorName) {
    const booksByAuthor = ArrayOfData.filter(book =>
        book.authors.includes(authorName)
    );
    return booksByAuthor.length;
}

export function prepareTableHeader(SelectedPage) {
    let HeaderTittle = []
    if (SelectedPage === "Books") {
        HeaderTittle = ["Book ID", "Name", "Pages", "Author Name", "Actions"];
    } else if (SelectedPage === "Author") {
        HeaderTittle = ["Author ID", "Name", "Actions"];
    } else if (SelectedPage === "Stores") {
        HeaderTittle = ["Store ID", "Name", "Address", "Actions"];
    }
    return HeaderTittle
}


export function prepareTableContent(SelectedPage, SearchOutPut,OriginalData,allAuthors,allStores) {
    let TableData = []

    if (SelectedPage === "Books" && SearchOutPut) {
        TableData = SearchOutPut
    } else if (SelectedPage === "Books" && SearchOutPut == undefined) {
         TableData =OriginalData
     }


    else if (SelectedPage === "Author" && SearchOutPut) {
        TableData = SearchOutPut
    }  else if(SelectedPage === "Author" && SearchOutPut == undefined){
        TableData = allAuthors

    }
    
    else if (SelectedPage === "Stores" && SearchOutPut) {
        TableData = SearchOutPut
    }     else if (SelectedPage === "Stores" && SearchOutPut == undefined) {
        TableData = allStores
    }

    return TableData
}

export function removeUnnecessryKeys(SelectedPage,TableData){
    let FiltredTableData = []
    if (SelectedPage === "Books" ) {

        FiltredTableData = TableData.map(item => ({
            _id:"#" + item._id,
            title: item.title,
            pageCount: item.pageCount,
            authors: item.authors
        }));
    } 

    else if (SelectedPage === "Author") {
        FiltredTableData = TableData.map(item => ({
            _id:"#"+ item._id,
            AuthorName: item.AuthorName,
        }));
    } 
    
    else if (SelectedPage === "Stores" ) {
        FiltredTableData = TableData.map(item => ({
            _id: "#"+item._id,
            StoreName: item.StoreName,
            Address: item.Address,

        }));
    }  

    return FiltredTableData
}


export function HandleTittleNames(SelectedOption){
    if (SelectedOption =="Authors") {
        return 'Author'
    } 
    return SelectedOption
}

export function HandleChoosingData(AuthorData,Booksdata,Tittle){
    let data = []
    if (Tittle == "Authors") {
        data = AuthorData;
      } else {
        data = Booksdata;
    
      }

      return data
}


export function DestructruingData(data,Tittle){
    let MainTittle,SecondaryTittle,WhereToBuy,IamgeSource,ID
    if (Tittle == "Stores") {
        MainTittle = data.title;
        SecondaryTittle = data.authors[0];
        WhereToBuy = data.stores;
        ID = data.isbn

        IamgeSource = LargeBookstore
    
      } else if (Tittle == "Authors") {
        MainTittle = data.AuthorName;
        SecondaryTittle = "Publish books :" + countBooksByAuthor(data.AuthorName);
        IamgeSource = data.authorImage
    
      } else if (Tittle == "Books") {
        MainTittle = data.title;
        SecondaryTittle = data.authors[0];
        IamgeSource = data.thumbnailUrl
        WhereToBuy = data.stores;
        ID = data._id
      } else if(Tittle == "AllBooks"){
        MainTittle = data.title;
        SecondaryTittle = data.authors[0];
        IamgeSource = data.thumbnailUrl
        WhereToBuy = data.stores;
        ID = data._id
      }

      return [MainTittle,SecondaryTittle,WhereToBuy,IamgeSource,ID]
}
