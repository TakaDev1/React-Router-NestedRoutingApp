import React from "react";
import { NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="w-1/2">
      <nav className="w-1/2 flex justify-around mx-auto my-5 gap-4 p-2 bg-gray-200">
        <NavLink
          to="profile"
          className={({ isActive }) => (isActive ? "text-blue-500 font-bold" : "text-gray")}
        >
          Profile
        </NavLink>
        <NavLink
          to="settings"
          className={({ isActive }) => (isActive ? "text-blue-500 font-bold" : "text-gray")}
        >
          Settings
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
