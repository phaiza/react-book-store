import { useState } from 'react';

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          value={title}
          placeholder="Enter book title"
          onChange={handleChange}
        />
        <button className="button">Create New</button>
      </form>
    </div>
  );
};

export default BookCreate;
