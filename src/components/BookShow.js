import { useState } from 'react';
import './BookShow.css';
const BookShow = ({ book, deleteBookFunc }) => {
  const handleDelete = () => {
    deleteBookFunc(book.id);
  };
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BookShow;
