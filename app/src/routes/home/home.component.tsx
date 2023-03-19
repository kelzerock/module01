import React from 'react';
import { Component, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

class Home extends Component {
  render(): ReactNode {
    return (
      <div className="home-component">
        <p>Its a home page</p>
        <Outlet />
      </div>
    );
  }
}

export default Home;
