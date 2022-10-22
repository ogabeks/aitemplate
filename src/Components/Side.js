import React from "react";
import { Link } from "react-router-dom";

function Side() {
  return (
    <div className="sidebar-content">
      <div className="sidebar-logo">CH</div>
      <div className="sidebar-menu">
        <Link to="/" className="sidebar-menu-item">
          <div className="badges bg-primary text-white">!</div>
          <div className="menu-item">
            <i className="fa fa-home"></i>
            <div>Home</div>
          </div>
        </Link>

        <Link to="/reports" className="sidebar-menu-item">
          <div className="badges bg-danger text-white">4</div>
          <div className="menu-item">
            <i className="fa fa-book"></i>
            <div>Reports</div>
          </div>
        </Link>

        <Link to="/settings" className="sidebar-menu-item">
          <div className="menu-item">
            <i className="fa fa-cog"></i>
            <div>Settings</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Side;
