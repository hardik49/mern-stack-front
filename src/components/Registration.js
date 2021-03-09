import React, { useState } from 'react';

import Menu from './header/Menu';
import api from '../api/api';

const personDetails = {
  firstName: "", lastName: "", email: "",
  password: "", address: "", city: "",
  state: "Choose...", zip: "",
}

const Registration = () => {

  const [person, setPerson] = useState({ ...personDetails });

  const handleChange = (name, value) =>
    setPerson({
      ...person,
      [name]: value,
    })

  const handleSubmit = (e) => {
    return api.addUser({ ...person })
  }

  const { firstName, lastName, email, password, address, state, city, zip } = person;

  return (
    <div>
      <Menu />
      <div className="container mt-5">
        <h2>Sign Up</h2>
        <form className="mt-4">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>First Name</label>
              <input type="text" name="firstName" className="form-control" id="txtFname"
                onChange={(e) => handleChange(e.target.name, e.target.value)} value={firstName} />
            </div>
            <div className="form-group col-md-6">
              <label>Last Name</label>
              <input type="text" name="lastName" className="form-control" id="txtLname"
                onChange={(e) => handleChange(e.target.name, e.target.value)} value={lastName} />
            </div>
            <div className="form-group col-md-6">
              <label>Email</label>
              <input type="email" name="email" className="form-control" id="txtEmail"
                onChange={(e) => handleChange(e.target.name, e.target.value)} value={email} />
            </div>
            <div className="form-group col-md-6">
              <label>Password</label>
              <input autoComplete="true" type="password" name="password" className="form-control" id="txtPassword"
                onChange={(e) => handleChange(e.target.name, e.target.value)} value={password} />
            </div>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" className="form-control" id="txtAddress"
              onChange={(e) => handleChange(e.target.name, e.target.value)} value={address} />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>City</label>
              <input type="text" name="city" className="form-control" id="txtCity"
                onChange={(e) => handleChange(e.target.name, e.target.value)} value={city} />
            </div>
            <div className="form-group col-md-4">
              <label>State</label>
              <select id="inputState" name="state" className="form-control" value={state}
                onChange={(e) => handleChange(e.target.name, e.target.value)} >
                <option>{state}</option>
                <option>Gujarat</option>
                <option>Maharashtra</option>
                <option>Oddissa</option>
                <option>Banglore</option>
                <option>Tamilnadu</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label>Zip</label>
              <input type="text" className="form-control" name="zip" id="txtZip"
                onChange={(e) => handleChange(e.target.name, e.target.value)} value={zip} />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label">
                Accept all terms & conditions
      </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Registration;