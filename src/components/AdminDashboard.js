import React, {useState, useEffect} from 'react';
import './AdminDashboard.css';
import Sidebar from './SideBar';


const AdminDashboard = () => {

  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then(data => setUsers(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((r) => r.json())
      .then(data => setCategories(data));
  }, []);

 return (
    <div className='all'>
      <div  className="dashboard">
        <h1>Dashboard</h1>
      </div>
      <div className='stats'>
        <div className='users'>
          <h2>Users</h2>
          <div className='sidelining'>
          <p>{users.length}<br></br>New Users</p>
          <p>{users.length}<br></br>Total Users</p>
          </div>
        </div>
        <div className='posts'>
          <h2>Posts</h2>
          <div className='side-by-side'>
          <p>10<br></br>New Posts</p>
          <p>89<br></br>Total Posts</p>
          </div>
        </div>
      </div>
      <div className='tables'>
        <div className='table-1'>
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
 </div>
<div className='table-2'>
 <table>
    <tr>
      <th>New Users</th>
      <td>View All</td>
    </tr>
    <tbody>
    {users.map((user) => (
          <tr>
            <td>{user.full_name}</td>
            <td>{user.email}</td>
            <td>05/10/2023</td>
            <td>05/10/2023</td>
          </tr>
        ))}
    </tbody>
 </table>
 </div>



 <div className='table-3'>
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
    </div>
 );
}

export default AdminDashboard;