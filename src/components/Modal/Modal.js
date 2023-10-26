import React, { useState } from 'react';
import './Modal.css';

function Modal({ isModalOpen = false, setIsModalOpen }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Title:', title);
    console.log('Body:', body);
    console.log('Category:', category);
    console.log('File:', file);
    handleCloseModal();
  };

  return (
    <div>
      {/* <button onClick={handleOpenModal}>Open Modal</button> */}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Create Content</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={handleTitleChange}
                required
              />

              <label htmlFor="body">Body:</label>
              <textarea
                id="body"
                name="body"
                value={body}
                onChange={handleBodyChange}
                required
              ></textarea>

              <label htmlFor="category">Category:</label>
              <select
                id="category"
                name="category"
                value={category}
                onChange={handleCategoryChange}
                required
              >
                <option value="">Select Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>

              <label htmlFor="fileUpload">File Upload:</label>
              <input
                type="file"
                id="fileUpload"
                name="fileUpload"
                onChange={handleFileChange}
              />

              <button type="submit">Create</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;