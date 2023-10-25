import React, { useState, useEffect } from 'react';
import './AdminUsers.css';

const AdminUsers = () => {

  const [showForm, setShowForm] = useState(false);
  const [display, setDisplay] = useState('Admin');
  const [active, setActive] = useState('Admin');
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    fetch("https://snudgeapi.onrender.com/users")
      .then((r) => r.json())
      .then(setUsers);
  }, []);

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

function handleSubmit(e) {
  e.preventDefault();
  const formData = {
    username: userName,
    email: userEmail,
    role: role
  };
  fetch("https://snudgeapi.onrender.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
}

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
        className={`button ${active === 'Student' ? 'active' : ''}`}
        onClick={(e) => {changeDisplay('Student'); handleClick(e);}}>Student</button>
        <button 
        id="Admin"
        className={`button ${active === 'Admin' ? 'active' : ''}`}
        onClick={(e) => {changeDisplay('Admin'); handleClick(e)}}>Admin
        </button>
        <button
        id="Staff"
        className={`button ${active === 'Staff' ? 'active' : ''}`}
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
        {/* {users.map((user) => ( */}
          <tr>
            <td>user.full_name</td>
            <td>user.email</td>
            <td>05/10/2023</td>
            <td>05/10/2023</td>
          </tr>
        {/* ))} */}
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
        {/* {users.map((user) => ( */}
          <tr>
            <td>user.full_name</td>
            <td>user.email</td>
            <td>05/10/2023</td>
            <td>05/10/2023</td>
          </tr>
        {/* ))} */}
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
        {/* {users.map((user) => ( */}
          <tr>
            <td>user.full_name</td>
            <td>user.email</td>
            <td>05/10/2023</td>
            <td>05/10/2023</td>
          </tr>
        {/* ))} */}
      </tbody>
      </table>
    )}
  </div>
  {showForm && (
      <form onSubmit={handleSubmit}>
        <h1>Create User</h1>
          <input type="text" className="userName" placeholder='Name of User' value={userName} onChange={(e) => setUserName(e.target.value)} />
          <input type="text" className="email" placeholder='Email Address' value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
          <select id="select" className="select"
          value={role}
          onChange={(e) => setRole(e.target.value)}>
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

export default AdminUsers;