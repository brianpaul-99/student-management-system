import React from "react";
import { Outlet, NavLink } from "react-router-dom";
//base layout for the single page navigation
function RootLayout() {
  return (
    <div className="app">
      <header>
        <nav>
          <div className="links">
            <NavLink className="link" to="/">
              Home
            </NavLink>
            <NavLink className="link" to="students">
              Students
            </NavLink>
          </div>
          <h1>Student Result Management System</h1>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
