function findAuthorById(authors, id) {
  let result = authors.find((testAuth)=>testAuth.id===id);
  return result;
}


function findBookById(books, id) {
  for (let Book in books){
  if (books[Book].id === id){
    let result = books[Book]
    return result
  }
}
return result
}



function partitionBooksByBorrowedStatus(books) {
  //filter books by borrowed or not via .borrows[0].returned with boolean true or false
    let filterOut = books.filter((book)=>!book.borrows[0].returned);
    let filterIn= books.filter((book)=>book.borrows[0].returned);
    let result =[filterOut,filterIn];
  return result;
}

function getBorrowersForBook(book, accounts) {
  let allCheckOuts = book.borrows.map((borrowings)=>{
  let specificUser = accounts.find((thisReader)=>thisReader.id===borrowings.id)
  return {...borrowings,...specificUser}})

  
  return allCheckOuts.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
