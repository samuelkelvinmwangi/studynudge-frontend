import React from 'react';
import './AdminDashboard.css';


const AdminDashboard = () => {
 return (
    <div className='all'>
      <div  className="dashboard">
        <h1>Dashboard</h1>
      </div>
      <div className='stats'>
        <div className='users'>
          <h2>Users</h2>
          <div className='sidelining'>
          <p>27<br></br>New Users</p>
          <p>131<br></br>Total Users</p>
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
    <tr>
      <td>Samuel Mwangi</td>
      <td>05/10/2023</td>
      </tr>
    <tr>
      <td>Linet Makena</td>
      <td>05/10/2023</td>
    </tr>
 </table>
 </div>



 <div className='table-3'>
 <table>
 
 <tr>
   <th>New Categories</th>
   <td>View All</td>
 </tr>
 <tr>
   <td>Artificial Intalligence</td>
   <td>05/10/2023</td>
 </tr>
 <tr>
   <td>Jobs</td>
   <td>05/10/2023</td>
 </tr>
</table>
 </div>
 
      </div>
    </div>
    
 );
};

export default AdminDashboard;