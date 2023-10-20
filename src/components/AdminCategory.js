import React, { useState } from 'react';
import './AdminCategory.css';

const AdminCategory = () => {

  const [showForm, setShowForm] = useState(false);

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
  <tr>
    <td>Artificial Intelligence</td>
    <td>05/10/2023</td>

<td>05/10/2023</td>
</tr>
<tr>
  <td>Jobs</td>
  <td>05/10/2023</td>
  <td>05/10/2023</td>
</tr>
</tbody>
</table>
  </div>
  {showForm && (
      <form>
        <h1>Add Category</h1>
          <input type="text" className="categoryName" placeholder='Name of Category' />
          <input type="text" className="description" placeholder='Description' />
        <button className='dltBtn'>Delete Category</button>
        <button type="submit" className='newCategory'>Create Category</button>
      </form>
    )}
</div>

);
};

export default AdminCategory;
