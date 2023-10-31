import React, { useEffect, useState } from 'react';
import './AdminCategory.css';
import { apiUrl } from '../apiUrl';

const StaffCategory = () => {

  const [showForm, setShowForm] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`${apiUrl}/categories`)
      .then((r) => r.json())
      .then(setCategories);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      category_name: categoryName,
      description: description
    };
    fetch(`${apiUrl}/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
  }

 const toggleForm = () => {
    setShowForm(!showForm);
 };

return (
  <div>
    <div  className="category">
    <div className="searchbox">
          <input
            type="text"
            id="search"
            className="form-control"
            placeholder=""
            />
        </div>
    <h1>Categories</h1>
    <button className='newcategory' onClick={toggleForm}>Create Category</button>
    
    <table>
  <thead>
    <tr>
    <th>Name</th>
    <th>Last Edited On</th>
    <th>Created On</th>
    </tr>
  </thead>
  <tbody>
  {/* {categories.map((category) => ( */}
        <tr>
          <td>category.category_name</td>
          <td>05/10/2023</td>
          <td>05/10/2023</td>
        </tr>
  {/* ))} */}
</tbody>
</table>
  </div>
  {showForm && (
      <form onSubmit={handleSubmit}>
        <h1 id="h1">Add Category</h1>
          <input type="text" className="categoryName" placeholder='Name of Category' value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
          <input type="text" className="description" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
        <button className='dltBtn'>Delete Category</button>
        <button type="submit" className='newCategory'>Create Category</button>
      </form>
    )}
</div>

);
};

export default StaffCategory;