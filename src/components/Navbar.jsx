import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-success">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            TRAVEL WEB-SITE
          </a>

          <div className="col-4 d-flex justify-content-around">
            <NavLink className={({isActive})=> isActive ? "text-warning m-3" : "text-white m-3"} to="/list">Shops</NavLink>
            <NavLink className={({isActive})=> isActive ? "text-warning m-3" : "text-white m-3"} to="/add">Control panel</NavLink>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
