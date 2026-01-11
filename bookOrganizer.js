const books = [
    {
        title: 'To Kill a Mockingbird',
        authorName: 'Harper Lee',
        releaseYear: 1920,
    },
    {
        title: '1984',
        authorName: 'George Orwell',
        releaseYear: 1970,
    },
    {
        title: 'The Great Gatsby',
        authorName: 'F. Scott Fitzgerald',
        releaseYear: 1925,
    },
    {
        title: 'The Great',
        authorName: 'F. Fitzgerald',
        releaseYear: 1959,
    },
    {
        title: 'The Small Book',
        authorName: 'F. Fizgerald',
        releaseYear: 1999,
    },
];

function sortByYear(book1, book2) {
    if (book1.releaseYear < book2.releaseYear) {
        return -1;
    } else if (book1.releaseYear > book2.releaseYear) {
        return 1;
    } else {
        return 0;
    }
}
let filteredBooks = books.filter((book) => book.releaseYear <= 1950);

// Sorting the filtered array by release year
filteredBooks.sort(sortByYear);
console.log(sort);
