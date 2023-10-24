import React, { useState } from 'react';
import './AdminUsers.css';

const AdminUsers = () => {

  const [showForm, setShowForm] = useState(false);
  const [display, setDisplay] = useState('Admin');
  const [active, setActive] = useState('Admin');

 const toggleForm = () => {
    setShowForm(!showForm);
 };

 const changeDisplay = (table) => {
    setDisplay(table);
 };

 const handleClick = (e) => {
    setDisplay(e.target.id);
    setActive(e.target.id);
 };

return (
  <div>
    <div  className="">
    <div className="searchbox">
          <input
            type="text"
            id="search"
            className="form-control"
            placeholder=""
            />
        </div>
    <h1>Users</h1>
    <button className='newuser' onClick={toggleForm}>Create User</button>

    <div className='navRole'>
        <button
        id="Student"
        className={button ${active === 'Student' ? 'active' : ''}}
        onClick={(e) => {changeDisplay('Student'); handleClick(e);}}>Student</button>
        <button 
        id="Admin"
        className={button ${active === 'Admin' ? 'active' : ''}}
        onClick={(e) => {changeDisplay('Admin'); handleClick(e)}}>Admin</button>
        <button
        id="Staff"
        className={button ${active === 'Staff' ? 'active' : ''}}
        onClick={(e) => {changeDisplay('Staff'); handleClick(e)}}>Staff</button>
      </div>
    
    {display === 'Admin' && (
        <table className='Admin'>
        <thead>
          <tr>
          <th>Name</th>
          <th>Email Address</th>
          <th>Last Edited On</th>
          <th>Created On</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Brian Waweru</td>
          <td>bwaweru@gmail.com</td>
          <td>05/10/2023</td>
          <td>05/10/2023</td>
      </tr>
      <tr>
          <td>Jeff Mwaura</td>
          <td>bwaweru@gmail.com</td>
          <td>05/10/2023</td>
          <td>05/10/2023</td>
      </tr>
      <tr>
          <td>Linet Makena</td>
          <td>bwaweru@gmail.com</td>
          <td>05/10/2023</td>
          <td>05/10/2023</td>
      </tr>
      </tbody>
      </table>
    )}

    {display === 'Student' && (
        <table className='Students'>
        <thead>
          <tr>
          <th>Name</th>
          <th>Email Address</th>
          <th>Last Edited On</th>
          <th>Created On</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Student Waweru</td>
          <td>bwaweru@gmail.com</td>
          <td>05/10/2023</td>
          <td>05/10/2023</td>
      </tr>
      <tr>
          <td>Student Mwaura</td>
          <td>bwaweru@gmail.com</td>
          <td>05/10/2023</td>
          <td>05/10/2023</td>
      </tr>
      <tr>
          <td>Student Makena</td>
          <td>bwaweru@gmail.com</td>
          <td>05/10/2023</td>
          <td>05/10/2023</td>
      </tr>
      </tbody>
      </table>
    )}
    {display === 'Staff' && (
        <table className='Staff'>
        <thead>
          <tr>
          <th>Name</th>
          <th>Email Address</th>
          <th>Last Edited On</th>
          <th>Created On</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Staff Waweru</td>
          <td>bwaweru@gmail.com</td>
          <td>05/10/2023</td>
          <td>05/10/2023</td>
      </tr>
      <tr>
          <td>Staff Mwaura</td>
          <td>bwaweru@gmail.com</td>
          <td>05/10/2023</td>
          <td>05/10/2023</td>
      </tr>
      <tr>
          <td>Staff Makena</td>
          <td>bwaweru@gmail.com</td>
          <td>05/10/2023</td>
          <td>05/10/2023</td>
      </tr>
      </tbody>
      </table>
    )}
  </div>
  {showForm && (
      <form>
        <h1>Create User</h1>
          <input type="text" className="userName" placeholder='Name of User' />
          <input type="text" className="email" placeholder='Email Address' />
          <select id="select" className="select">
            <option value="" disabled selected hidden>Role</option>
            <option value="option1">Admin</option>
            <option value="option2">Student</option>
            <option value="option3">Staff</option>
          </select>
        <button className='dltBtn'>Deactivate User</button>
        <button type="submit" className='newUser'>Create User</button>
      </form>
    )}
</div>

);
};

export default AdminUsers;