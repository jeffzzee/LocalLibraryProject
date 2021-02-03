function totalCountHelper(whatToCount) {
  return whatToCount.length
}

function totalBooksCount(books) {
  return totalCountHelper(books)
}

function totalAccountsCount(accounts) {
  return totalCountHelper(accounts)
}

function booksBorrowedCount(books) {
  let borrowedBooks = books.filter((book) => !book.borrows[0].returned)
  //console.log(book)
  //console.log(borrowedBooks)
  let result = totalCountHelper(borrowedBooks)
  return result
}

function getMostCommonGenres(books) {
  let arrayGenres = books.reduce((accumulator, eachBook) => {
    //
    let genreKey = eachBook['genre']
    if (accumulator[genreKey]) {
      accumulator[genreKey] += 1
    } else {
      accumulator[genreKey] = 1
    }
    return accumulator
  }, {});
  eachGenre = Object.keys(arrayGenres)
 sortedArray = eachGenre.sort((a,b,)=>{
   if (arrayGenres[a] > arrayGenres[b]){return -1}
 else if (arrayGenres[a] < arrayGenres[b]){ return 1}
 else{return 0}})
let solutionArray = []
for(i=0;i<sortedArray.length;i++){
  solutionArray.push({name:sortedArray[i],count:arrayGenres[sortedArray[i]]})}
  return solutionArray.slice(0,5)
}
  
//console.log(allGenres)


/*
function getMostPopularBooks(books) {
  let popularTitles = books.reduce((acc,each)=>
{let borrowCount = each.borrows.length  
acc[each.title]=borrowCount 
//console.log(borrowCount)
//console.log(acc)
return acc 
},{})
console.log("titles and occurrance @1",popularTitles) //1
let titles=Object.keys(popularTitles)
console.log("all titles @2",titles) //2
let ordered = titles.sort((a,b)=>{
  if(popularTitles[a]>popularTitles[b]){return -1} 
  else if(popularTitles[a]<popularTitles[b])
{return 1}
 else {return 0}})
 console.log("by popularity @3",ordered)//3
 let orderedPopularity = []
 for (i=0;i<titles.length;i++){
 console.log("index of loop @4",i) //4
  orderedPopularity.push({name:ordered[i],count:popularTitles[ordered[i]]})
console.log("each step addition @5",orderedPopularity)//5
}
 console.log("final answer @6",orderedPopularity)//6
 return orderedPopularity.slice(0,5)
//console.log(ordered)
}*/
function getMostPopularBooks(books) {
  let popularTitles = books.reduce((acc,each)=>
{let borrowCount = each.borrows.length  
acc[each.title]=borrowCount 
return acc 
},{})
let titles=Object.keys(popularTitles)
let ordered = titles.sort((a,b)=>{
  if(popularTitles[a]>popularTitles[b]){return -1} 
  else if(popularTitles[a]<popularTitles[b])
{return 1}
 else {return 0}})
 let orderedPopularity = []
 for (i=0;i<titles.length;i++){
  orderedPopularity.push({name:ordered[i],count:popularTitles[ordered[i]]})
}
 return orderedPopularity.slice(0,5)

}

function getMostPopularAuthors(books, authors) {
  let authorBorrows = books.reduce((acc,book)=>{
    let by = book.authorId;
    acc[by] ? acc[by]+= book.borrows.length
     : acc[by]=book.borrows.length;
     
    return acc;
  },{});
  console.log ("authorBorrows #1",authorBorrows);//1
  let allAuthors = Object.keys(authorBorrows);
  //console.log("allAuthors #2",allAuthors);//2
  let orderedArray= allAuthors.sort((a,b)=>{
    if (authorBorrows[a]>authorBorrows[b]){return -1}
    else if 
      (authorBorrows[a]<authorBorrows[b]){return 1}
      else {return 0}} );
      console.log("orderedArray #3",orderedArray)//3
   
   //console.log("topList #4",topList)//4
      let namesOrder = orderedArray.map((each)=>{
        console.log("each",each)//5
       const thisAuthor=  authors.find((authorsId)=>{
          //console.log("authorsId.id",authorsId.id);//6
           return authorsId.id==each});
           //console.log("AuthorFound",);
           //return AutthorFound
           
           //return AuthorFound.name;
          //console.log("author #7", authorsId.name)//7
        /*return thisAuthor.name*/
          //console.log("ordered names #8", namesOrder)//8
          console.log(thisAuthor.name)
          return thisAuthor.name
        })
//  topList.push({name:thisAuthor.name,count:authorBorrows[authorsId.id]})}
  //return topList.slice(0,5)
  // Use Template Literals for Name production!!!
  console.log("namesorder",namesOrder)
  //return namesOrder
  
  let topList = []
  for (i=0; i<namesOrder.length; i++){
  topList.push({name:`${namesOrder[i].first} ${namesOrder[i].last}`, count: authorBorrows[orderedArray[i]]})
  }
  top5= topList.slice(0,5)
  console.log("topList",top5)
  return top5
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
}
