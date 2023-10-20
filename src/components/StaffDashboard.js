import React from 'react';
import './StaffDashboard.css';


const StaffDashboard = () => {
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
          <p>27<br></br>New Users</p>
          <p>131<br></br>Total Users</p>
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
    <tr>
      <td>Samuel Mwangi</td>
      <td>05/10/2023</td>
      </tr>
    <tr>
      <td>Linet Makena</td>
      <td>05/10/2023</td>
    </tr>
 </table>

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
    
 );
};

export default StaffDashboard;