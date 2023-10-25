import React, { useEffect, useState } from 'react';
import './StaffDashboard.css';


const StaffDashboard = () => {

  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://snudgeapi.onrender.com/users")
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  useEffect(() => {
    fetch("https://snudgeapi.onrender.com/categories")
      .then((r) => r.json())
      .then(setCategories);
  }, []);

 return (
    <div>
      <div  className="dashboard">
      <div className="col-10">
            <input
              type="text"
              id="search"
              className="form-control"
              placeholder=""
              />
          </div>
      <h1>Dashboard</h1>
      </div>
      <div className='stats'>
        <div className='users'>
          <h2>Users</h2>
          <p>{users.length}<br></br>New Users</p>
          <p>{users.length}<br></br>Total Users</p>
        </div>
        <div className='posts'>
          <h2>Posts</h2>
          <p>10<br></br>New Posts</p>
          <p>89<br></br>Total Posts</p>
        </div>
      </div>
      <div className='tables'>
      <table>
    <tr>
      <th>New Posts</th>
      <td>View All</td>
    </tr>
    <tr>
      <td>AI's effect on DevOps</td>
      <td>05/10/2023</td>
    </tr>
    <tr>
      <td>Landing a job in tech</td>
      <td>05/10/2023</td>
    </tr>
 </table>

 <table>
    <tr>
      <th>New Users</th>
      <td>View All</td>
    </tr>
    <tbody>
    {/* {users.map((user) => ( */}
          <tr>
            <td>user.full_name</td>
            <td>05/10/2023</td>
          </tr>
        {/* ))} */}
    </tbody>
 </table>

 <table>
    <tr>
      <th>New Categories</th>
      <td>View All</td>
    </tr>
    {/* {categories.map((category) => ( */}
        <tr>
          <td>category.category_name</td>
          <td>05/10/2023</td>
        </tr>
  {/* ))} */}
 </table>
      </div>
    </div>
    
 );
};

export default StaffDashboard;