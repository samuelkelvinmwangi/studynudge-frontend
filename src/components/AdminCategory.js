import React from 'react';
import './AdminCategory.css';

const AdminCategory = () => {
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
      <button className='newcategory'>Create Category</button>
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
    </div>
    
 );
};

export default AdminCategory;
