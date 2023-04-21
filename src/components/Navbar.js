import React from 'react';
import { FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="logo">BOOKSTORE CMS</div>
          <ul>
            <li><NavLink to="/" className="book-link">BOOKS</NavLink></li>
            <li><NavLink to="/Categories" className="categories-link">CATEGORIES</NavLink></li>
          </ul>
          <div className="oval">
            <FaUser className="user-oval" />
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;
