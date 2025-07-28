// --- Books Data (The "Library") ---
// This is our list of books.
const books = [
  { "id": "1", "title": "The Hitchhiker's Guide to the Galaxy", "author": "Douglas Adams", "genre": "Science Fiction", "price": 12.50 },
  { "id": "2", "title": "Pride and Prejudice", "author": "Jane Austen", "genre": "Romance", "price": 9.99 },
  { "id": "3", "title": "1984", "author": "George Orwell", "genre": "Dystopian", "price": 11.25 },
  { "id": "4", "title": "To Kill a Mockingbird", "author": "Harper Lee", "genre": "Southern Gothic", "price": 10.75 },
  { "id": "5", "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "genre": "Classic", "price": 8.50 },
  { "id": "6", "title": "Dune", "author": "Frank Herbert", "genre": "Science Fiction", "price": 14.00 },
  { "id": "7", "title": "Moby Dick", "author": "Herman Melville", "genre": "Adventure", "price": 13.50 },
  { "id": "8", "title": "War and Peace", "author": "Leo Tolstoy", "genre": "Historical Fiction", "price": 18.00 }
];


function areStringsEqualCaseInsensitive(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    if (str1[i].toLowerCase() !== str2[i].toLowerCase()) {
      return false;
    }
  }
  return true; 
}

function copyBook(book) {
  let newBook = {};
  for (let key in book) {
    newBook[key] = book[key];
  }
  return newBook;
}

// --- Library Functions ---

/**
 * @param {string} bookName 
 * @returns {number|null} 
 */
function priceOfBook(bookName) {
  for (let i = 0; i < books.length; i++) {
    const currentBook = books[i];
    if (areStringsEqualCaseInsensitive(currentBook.title, bookName)) {
      return currentBook.price;
    }
  }
  return null; 
}

/**
 * @param {number} budget 
 * @returns {Array<Object>} 
 */
function affordableBooks(budget) {
  let affordableList = [];
  let count = 0; 

  for (let i = 0; i < books.length; i++) {
    const currentBook = books[i];
    if (currentBook.price <= budget) {
      affordableList[count] = copyBook(currentBook); 
      count++;
    }
  }
  return affordableList;
}

/**
 * @param {string} genreName 
 * @returns {Array<Object>} .
 */
function findBookByGenre(genreName) {
  let genreBooks = [];
  let count = 0; 

  for (let i = 0; i < books.length; i++) {
    const currentBook = books[i];
    if (areStringsEqualCaseInsensitive(currentBook.genre, genreName)) {
      genreBooks[count] = copyBook(currentBook); 
      count++;
    }
  }
  return genreBooks;
}

/**

 * @returns {Object} 
 */
function groupByGenre() {
  let groupedBooks = {};

  for (let i = 0; i < books.length; i++) {
    const currentBook = books[i];
    const genre = currentBook.genre;

    
    let genreGroupExists = false;
    for (let key in groupedBooks) {
      if (key === genre) {
        genreGroupExists = true;
        break;
      }
    }

    if (!genreGroupExists) {
      groupedBooks[genre] = [];
    }

    
    groupedBooks[genre][groupedBooks[genre].length] = copyBook(currentBook);
  }
  return groupedBooks;
}

/**

 * @returns {Array<Object>}
 */
function sortBooksByPrice() {
  // Create a copy of the books array to sort, so we don't change the original.
  let sortedBooks = [];
  for (let i = 0; i < books.length; i++) {
    sortedBooks[i] = copyBook(books[i]);
  }

  const numBooks = sortedBooks.length;
  let swapped; 

  // Bubble Sort logic
  do {
    swapped = false; // Assume no swaps for this pass
    for (let i = 0; i < numBooks - 1; i++) {
      // If the current book is more expensive than the next one, swap them
      if (sortedBooks[i].price > sortedBooks[i + 1].price) {
        // Perform the swap
        const temp = sortedBooks[i];
        sortedBooks[i] = sortedBooks[i + 1];
        sortedBooks[i + 1] = temp;
        swapped = true; // Mark that a swap occurred
      }
    }
    // Optimization: If no elements were swapped in a pass, the array is sorted.
  } while (swapped);

  return sortedBooks;
}


// --- Example Usage (for testing) ---
console.log("--- Price of a Book ---");
console.log("Price of '1984':", priceOfBook("1984"));
console.log("Price of 'dune':", priceOfBook("dune")); 
console.log("Price of 'Non-existent Book':", priceOfBook("Non-existent Book"));

console.log("\n--- Affordable Books ---");
console.log("Books under $11:", affordableBooks(11));
console.log("Books under $15:", affordableBooks(15));

console.log("\n--- Books by Genre ---");
console.log("Science Fiction books:", findBookByGenre("Science Fiction"));
console.log("romance books:", findBookByGenre("romance")); 
console.log("Fantasy books:", findBookByGenre("Fantasy")); 
console.log("\n--- Grouping by Genre ---");
console.log("Books grouped:", groupByGenre());

console.log("\n--- Sort Books by Price ---");
console.log("Books sorted by price:", sortBooksByPrice());