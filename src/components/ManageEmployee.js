import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

import Menu from './header/Menu';
import api from '../api/api';
import Employee from './EmployeeModal';

const ManageEmployee = () => {

  const [user, setUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    api.listEmployee().then(res => {
      setUser([...res.data]);
      return res;
    });
  }, []);

  const handleDelete = id =>
    api.removeEmployee(id).then(res => {
      const filteredData = user.filter(ele => ele._id !== id);
      setUser(filteredData);
      return res;
    });

  const handleToggle = () => setShowModal(!showModal);

  const handleId = id => setId(id);

  return (
    <div>
      <Menu />
      {showModal && <Employee show={showModal} id={id} onToggle={(status) => setShowModal(status)} />}
      <div className="container mt-5">
        <h2>Manage Employee</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee Id</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Technology</th>
              <th>Experience</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {(user || []).map((ele, i) =>
              <tr key={i}>
                <td>{ele._id}</td>
                <td>{ele.employeeId}</td>
                <td>{ele.fullName}</td>
                <td>{moment(ele.dateOfBirth).format('DD/MM/YYYY')}</td>
                <td>{ele.technology}</td>
                <td>{ele.experience}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => { handleToggle(); handleId(ele._id) }} >View</button>
                  <Link className="btn btn-success ml-2" to={`/employee/${ele._id}`}>Edit</Link>
                  <button className="btn btn-danger ml-2" onClick={() => handleDelete(ele._id)}>Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageEmployee;