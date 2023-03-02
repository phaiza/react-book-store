import React, { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './index.css';
const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const newBook = [
      ...books,
      { id: Math.round(Math.random() * 1986 * books.length + 1), title: title },
    ];
    setBooks(newBook);
  };
  const deleteBook = (id) => {
    console.log('Delete Book', id);
    const deleteBook = books.filter((book) => {
      if (book.id != id) return book;
    });
    setBooks(deleteBook);
  };
  return (
    <div>
      App
      <BookCreate onCreate={createBook} />
      <BookList bookList={books} deleteBookFunc={deleteBook} />
    </div>
  );
};

export default App;
