import React from 'react'

import Menu from './header/Menu';
import './style.scss';

const Home = () => {
  return (
    <div>
      <Menu />
      <div className="jumbotron w-100">
        <h1 className="text-center">Everything you need to know about Employee Management</h1>
      </div>
      <p className="w-50 text-center mx-auto">
        Employee management is a process that helps your workers perform at their best and achieve your business goals.
        It's a holistic process that covers almost everything related to human resources such as new employee recruitment,
        payroll management, performance management and more.
          <br />
        <a href="#">Read More..</a>
      </p>
    </div>
  )
}

export default Home;