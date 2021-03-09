import React, { useState } from 'react'

import Menu from './header/Menu';
import api from '../api/api';
import { toastSuccess } from '../components/common/Toast';

const initForm = { email: '', password: '' };

const Login = () => {
  const [user, setUser] = useState({ ...initForm });

  const handleChange = (key, value) =>
    setUser({
      ...user,
      [key]: value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await api.validateUser({ ...user });
    if (token && token.data) {
      localStorage.setItem('tokenValue', token.data);
      toastSuccess('Login Sucessfully...');
    }
  }

  return (
    <div>
      <Menu />
      <div className="container mt-5">
        <h2>Login</h2>
        <form className="mt-4">
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="inputEmail4">Email</label>
              <input type="email" name="email" class="form-control" id="txtEmail"
                onChange={(e) => handleChange(e.target.name, e.target.value)} />
            </div>
            <div class="form-group col-md-12">
              <label for="inputPassword4">Password</label>
              <input type="password" name="password" class="form-control" id="txtPassword"
                onChange={(e) => handleChange(e.target.name, e.target.value)} />
            </div>
          </div>
          <button type="submit" onClick={(e) => handleSubmit(e)} class="btn btn-primary">Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Login;