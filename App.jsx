import React, { useState } from "react";
import BookList from "./assets/components/booklist";
import AddBookForm from "./assets/components/addbook";

const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  ]);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Library Management System</h1>
      <AddBookForm addBook={addBook} />
      <BookList books={books} deleteBook={deleteBook} />
    </div>
  );
};

export default App;
