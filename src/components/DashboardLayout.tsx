import React from "react";
import { NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
