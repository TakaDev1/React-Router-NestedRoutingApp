import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import DashboardLayout from "./components/DashboardLayout";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <h1>React-Router-NestedRoutingApp</h1>
        <Routes>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
