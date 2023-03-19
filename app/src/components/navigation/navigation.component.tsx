import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.styles.scss';

class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <Link className="nav-item" to="/">
          Home page
        </Link>
        <Link className="nav-item" to="/about">
          ABOUT US
        </Link>
      </div>
    );
  }
}

export default Navigation;
