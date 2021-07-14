import React, { Component } from 'react';

function Header() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <a className="brand" href="#">
             My Task Management App
            </a>
          </div>
          <div className="nav-right">
            <div className="tabs">
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Header;
  