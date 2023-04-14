import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BsFillPersonFill } from 'react-icons/bs';

export default function Rootlayout() {
  return (
    <section className="BookStore-CMS">
      <header>
        <nav className="panel-bg">
          <div className="nav-container">
            <h1 className="logo">BookStore CMS</h1>
            <NavLink to="/">BOOKS</NavLink>
            <NavLink to="category">CATEGORIES</NavLink>
          </div>
          <div className="human-container">
            <BsFillPersonFill className="humanIcon" />
          </div>
        </nav>

      </header>
      <main>
        <Outlet />
      </main>
    </section>
  );
}
