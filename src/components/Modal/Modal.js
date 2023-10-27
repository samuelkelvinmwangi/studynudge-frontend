import React, { useState, useEffect } from 'react';
import './Modal.css';

function Modal({ isModalOpen = false, setIsModalOpen }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);

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
    setFile(event.target.value);
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();

    const formData = {
      title: title,
      body: body,
      category_id: category,
      user_id: 1,
      content_urls: [file]
    };

    fetch("https://snudgeapi.onrender.com/contents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    handleCloseModal();
  };

  useEffect(() => {
    fetch("https://snudgeapi.onrender.com/categories")
      .then((r) => r.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div>
      {/* <button onClick={handleOpenModal}>Open Modal</button> */}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className='modal-header'>
              <h2>Create Content</h2>
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
            </div>
            <div className='content-form'>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={handleTitleChange}
                  placeholder='Title'
                  required
                />

                <textarea
                  id="body"
                  name="body"
                  value={body}
                  onChange={handleBodyChange}
                  placeholder='Description or article'
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
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.category_name}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  id="title"
                  name="title"
                  value={file}
                  onChange={handleFileChange}
                  placeholder='URL to the video or audio'
                  required
                />

                <button type="submit">Create</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;