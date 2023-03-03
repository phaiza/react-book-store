import { useState } from 'react';
import BookEdit from './BookEdit';
import './BookShow.css';
const BookShow = ({ book, deleteBookFunc }) => {
  const [showEdit, setShowEdit] = useState(false);
  if (showEdit) {
    content = <BookEdit />;
  }
  const handleDelete = () => {
    deleteBookFunc(book.id);
  };
  let content = <h2>{book.title}</h2>;
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };
  return (
    <div className="book-show">
      {content}
      <div className="actions">
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default BookShow;
