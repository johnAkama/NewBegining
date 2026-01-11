const books = [
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: "1960"
  },
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: "1949"
  },
  {
    title: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    releaseYear: "1925"
  }
];

function sortByYear(book1, book2) {
  let firstRelease = books.filter(prev => prev.title === book1)
  let secondRelease = books.filter(prev => prev.title === book2)

  if (+firstRelease.releaseYear > +secondRelease.releaseYear) {
    return -1
  }

  return true;
}

