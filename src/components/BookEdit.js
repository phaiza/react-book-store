import React, { useState } from 'react';

const BookEdit = ({ book }) => {
  const [updatedBookTitle, setUpdatedBookTitle] = useState(book.title);

  const handleBookTitle = (e) => {
    setUpdatedBookTitle(e.target.value);
  };
  return (
    <div>
      <form>
        <input defaultValue={book.title} onChange={handleBookTitle} />
      </form>
    </div>
  );
};

export default BookEdit;
