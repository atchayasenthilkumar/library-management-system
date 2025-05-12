import React, { useState } from "react";

const AddBookForm = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    addBook({ title, author });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;
