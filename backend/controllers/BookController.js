// bookController.js

// Mock data for books
let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" },
  ];
  
  // Create a new book
  const createBook = (newBook) => {
    const book = { id: books.length + 1, ...newBook };
    books.push(book);
    console.log("Book added:", book);
    return book;
  };
  
  // Get all books
  const getAllBooks = () => {
    console.log("All books:", books);
    return books;
  };
  
  // Get details of a specific book by ID
  const getBookDetail = (bookId) => {
    const book = books.find(b => b.id === bookId);
    if (!book) {
      console.log(`Book with ID ${bookId} not found.`);
      return null;
    }
    console.log(`Details for book ID ${bookId}:`, book);
    return book;
  };
  
  // Update a book by ID
  const updateBook = (bookId, updatedData) => {
    const index = books.findIndex(b => b.id === bookId);
    if (index === -1) {
      console.log(`Book with ID ${bookId} not found.`);
      return null;
    }
    books[index] = { ...books[index], ...updatedData };
    console.log(`Book with ID ${bookId} updated:`, books[index]);
    return books[index];
  };
  
  // Delete a book by ID
  const deleteBook = (bookId) => {
    const index = books.findIndex(b => b.id === bookId);
    if (index === -1) {
      console.log(`Book with ID ${bookId} not found.`);
      return false;
    }
    const deletedBook = books.splice(index, 1)[0];
    console.log(`Book with ID ${bookId} deleted:`, deletedBook);
    return deletedBook;
  };
  
  // Export all CRUD functions
  module.exports = { createBook, getAllBooks, getBookDetail, updateBook, deleteBook };
  