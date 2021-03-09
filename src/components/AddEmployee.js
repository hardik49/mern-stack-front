import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import moment from 'moment';

import Menu from './header/Menu';
import api from '../api/api';
import { toastError, toastSuccess } from '../components/common/Toast';

const employeeDetails = {
  employeeId: "", fullName: "", email: "",
  dateOfBirth: "", technology: "", experience: "",
  otherSkills: "",
}

const AddEmployee = () => {
  let { id } = useParams();
  const [employee, setEmployee] = useState({ ...employeeDetails });

  useEffect(() => {
    id && api.getEmployeeById(id).then(res => {
      setEmployee({ ...res.data });
      return res;
    })
    return () => {
      setEmployee({ ...employeeDetails });
    }
  }, [id]);

  const handleChange = (name, value) =>
    setEmployee({
      ...employee,
      [name]: value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id)
      return api.updateEmployee(id, { ...employee })
        .then(_ => { toastSuccess('Employee Updated!') })
        .catch(_ => { toastError('Can not updated Employee!') });
    else
      return api.addEmployee({ ...employee })
        .then(_ => { toastSuccess('Employee Created!') })
        .catch(_ => { toastError('Can not created Employee!') });
  }

  const {
    employeeId, fullName, email, dateOfBirth,
    technology, experience, otherSkills,
  } = employee;

  return (
    <div>
      <Menu />
      <div className="container mt-5">
        <h2>{id ? "Update" : "Add"} Employee</h2>
        <form className="mt-4">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Employee Id</label>
              <input type="text" name="employeeId" className="form-control" id="txtId" placeholder="301920"
                onChange={(e) => handleChange(e.target.name, e.target.value)} value={employeeId} />
            </div>
            <div className="form-group col-md-6">
              <label>Full Name</label>
              <input type="text" name="fullName" className="form-control" id="txtFullName" placeholder="Evi Jason"
                onChange={(e) => handleChange(e.target.name, e.target.value)} value={fullName} />
            </div>
            <div className="form-group col-md-6">
              <label>Email</label>
              <input type="email" name="email" className="form-control" id="txtEmail" placeholder="Email"
                onChange={(e) => handleChange(e.target.name, e.target.value)} value={email} />
            </div>
            <div className="form-group col-md-6">
              <label>Date of Birth</label>
              <input type="date" name="dateOfBirth" className="form-control" id="txtDob" placeholder="Password"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                value={moment(dateOfBirth).format('YYYY-MM-DD')} />
            </div>
          </div>
          <div className="form-group">
            <label>Technology</label>
            <input type="text" name="technology" className="form-control" id="txtTechnology"
              placeholder="React, Node, ..."
              onChange={(e) => handleChange(e.target.name, e.target.value)} value={technology} />
          </div>
          <div className="form-group">
            <label>Experience (No of Years)</label>
            <input type="text" name="experience" className="form-control" id="txtExperience" placeholder="1 Year"
              onChange={(e) => handleChange(e.target.name, e.target.value)} value={experience} />
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label>Other Skills</label>
              <input type="text" name="otherSkills" className="form-control"
                id="txtSkills" placeholder="UI/UX Design, Marketing, ..."
                onChange={(e) => handleChange(e.target.name, e.target.value)} value={otherSkills} />
            </div>
          </div>
          <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary">
            {id ? "Update" : "Save"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddEmployee;