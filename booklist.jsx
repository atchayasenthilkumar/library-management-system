import React from "react";

const BookList = ({ books, deleteBook }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Book List</h2>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <ul className="space-y-2">
          {books.map((book) => (
            <li key={book.id} className="flex justify-between items-center bg-gray-100 p-3 rounded">
              <div>
                <strong>{book.title}</strong> by {book.author}
              </div>
              <button
                onClick={() => deleteBook(book.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
