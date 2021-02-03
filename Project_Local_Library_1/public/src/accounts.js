function findAccountById(accounts, id) {
  let specAccount= accounts.find((specID)=>specID.id===id);
  return specAccount
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((name1,name2)=>name1.name.last.toLowerCase() > name2.name.last.toLowerCase()? 1:-1)
}

/*function numberOfBorrows(account, books) {
  console.log("account",account.id);
  let borrowList= books.map((booksChecked)=>{
    let local = booksChecked.borrows;
        //console.log(local);
    let idMatches = local.filter((idLocal)=>idLocal.id===account.id); 
    console.log("idmatches",idMatches);
    return idMatches;
  });
  //console.log(booksChecked)
  let notBorrowed= borrowList.filter((empty)=>empty=="")

  console.log("borrowlist",borrowList,borrowList.length)
  console.log("notborrowed",notBorrowed)
  let borrowCount = borrowList.length-notBorrowed.length
  return borrowCount;
}*/
function numberOfBorrows(account, books) {
  let borrowList= books.map((booksChecked)=>{
    let local = booksChecked.borrows;
    let idMatches = local.filter((idLocal)=>idLocal.id===account.id); 
    return idMatches;
  });
  let notBorrowed= borrowList.filter((empty)=>empty=="")
  let borrowCount = borrowList.length-notBorrowed.length
  return borrowCount;
}
function getBooksPossessedByAccount(account, books, authors) {
  //should check books most recent borrows status, if not returned it should check ID w/ account
   let arrayMatches = books.filter((eachBook)=> {
    let borrow=eachBook.borrows[0];
  return !borrow.returned && borrow.id === account.id})
  console.log("matching",arrayMatches)  
  console.log("account to match",account.id)
  //let authorList = 2
 // booksOut.push(...arrayMatches)
    let finalAuthor = arrayMatches.map((specBook)=>{
      let authorObj=authors.find((authorInst)=>authorInst.id===specBook.authorId);
      console.log("authorobject",authorObj)
      return { ...specBook, author:authorObj};
    })
    console.log (finalAuthor)
    return finalAuthor
  }
  //if account matches and not returned it should place the book in an array with the author object inserted btwn author and object



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
