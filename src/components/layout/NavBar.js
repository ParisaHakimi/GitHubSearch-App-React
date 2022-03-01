import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="bg-danger text-white p-4">
        <div className="logo">
          <i className="fab fa-github me-2"></i>
          GitHub Finder
        </div>
      </nav>
    );
  }
}

export default NavBar;
