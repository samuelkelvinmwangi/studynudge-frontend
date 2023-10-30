import React, { useState, useEffect } from 'react';
import './Modal.css';
import { apiUrl } from '../../apiUrl';

function Modal({ isModalOpen = false, setIsModalOpen, userId = '', clickedContent = {}, setClickedContent, setClickedContentId }) {
  const [title, setTitle] = useState(clickedContent.title === undefined ? '' : clickedContent.title);
  const [body, setBody] = useState(clickedContent.body === undefined ? '' : clickedContent.body);
  const [contentType, setContentType] = useState(clickedContent.content_type === undefined ? '' : clickedContent.content_type);
  const [categoryId, setCategoryId] = useState(clickedContent.category === undefined ? '' : clickedContent.category.id);
  const [mediaFile, setMediaFile] = useState(clickedContent.content_media === undefined ? '' : clickedContent.content_media[0].link);
  const [thumbnail, setThumbnail] = useState(clickedContent.content_media === undefined ? '' : clickedContent.content_media[1].link);
  const [categories, setCategories] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setClickedContent({});
    setClickedContentId('');
    setIsModalOpen(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleContentTypeChange = (event) => {
    setContentType(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryId(event.target.value);
  };

  const handleMediaFileChange = (event) => {
    setMediaFile(event.target.value);
  };

  const handleThumbnailChange = (event) => {
    setThumbnail(event.target.value);
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();

    const formData = {
      title: title,
      body: body,
      content_type: contentType,
      category_id: categoryId,
      user_id: 1,
      content_urls: [mediaFile, thumbnail],
    };

    formData.id = clickedContent.id !== undefined && clickedContent.id;

    fetch(`${apiUrl}/contents/${clickedContent.id === undefined ? '' : clickedContent.id}`, {
      method: clickedContent.id === undefined ? 'POST' : 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    handleCloseModal();
  };

  // Fetch categories
  useEffect(() => {
    fetch(`${apiUrl}/categories`)
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

                <label htmlFor="contentType">Content Type:</label>
                <select
                  id="contentType"
                  name="contentType"
                  value={contentType}
                  onChange={handleContentTypeChange}
                  required
                >
                  <option value="">Select content type</option>
                  <option value="video">Video</option>
                  <option value="audio">Audio</option>
                  <option value="article">Article</option>
                </select>

                <label htmlFor="category">Category:</label>
                <select
                  id="category"
                  name="category"
                  value={categoryId}
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
                  id="media-file"
                  name="mediaFile"
                  value={mediaFile}
                  onChange={handleMediaFileChange}
                  placeholder='URL to the video or audio'
                  required
                />

                <input
                  type="text"
                  id="thumbnail"
                  name="thumbnail"
                  value={thumbnail}
                  onChange={handleThumbnailChange}
                  placeholder='URL to the thumbnail image'
                  required
                />

                <button type="submit">{ clickedContent.id === undefined ? 'Create' : 'Update'}</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;