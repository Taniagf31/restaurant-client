import React from 'react'
import { Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header>
        <h1>
          <Link to="/">LOGO</Link>
        </h1>
        <nav>
          <Link to="/login">Login</Link>
        </nav>
        <div className="user">
        <span className="username"></span>
        <button className="btn-logout">Logout</button>

        </div>
      </header>

      <Outlet />
    </>
  );
};
