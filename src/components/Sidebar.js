import React from "react";
import './Sidebar.css';
import { Icon } from "web3uikit";
import { Link } from "react-router-dom";

const Sidebar = () => {
  

  return (
    <>
      <div className="siderContent">
        <div className="menu">
          <div className="details">
          <Icon fill="#fff" size={33} svg="twitter"/>
          </div>

          <Link to='/' className="Link">
          <div className="menuItems">
            <Icon fill="#fff" size={33} svg="list" />
            Home
          </div>
          </Link>

          <Link to='/profile' className="Link">
          <div className="menuItems">
            <Icon fill="#fff" size={33} svg="user" />
            Profile
            </div>
          </Link>

          <Link to='/settings' className="Link">
          <div className="menuItems">
            <Icon fill="#fff" size={33} svg="cog" />
            Settings
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

