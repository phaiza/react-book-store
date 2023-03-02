import React from 'react';
import BookShow from './BookShow';
import './BookList.css';
const BookList = ({ bookList, deleteBookFunc }) => {
  const displayBook = bookList.map((book, index) => {
    return (
      <li key={book.id}>
        <BookShow book={book} deleteBookFunc={deleteBookFunc} />
      </li>
    );
  });
  return <ul className="booklist-container">{displayBook}</ul>;
};

export default BookList;
