import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <Link to='/' className="navbar-brand">Context</Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to='/' className="nav-link active">Home</Link>
            <Link to='/about' className="nav-link active">About</Link>
            <Link to='/login' className="nav-link active">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
