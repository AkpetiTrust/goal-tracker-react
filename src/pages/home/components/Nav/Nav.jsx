import React from "react";
import style from "./nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({ items }) => {
  return (
    <nav className='navbar justify-content-end'>
      <ul className='nav'>
        {items.map((item, index) => (
          <li className='nav-item' key={index}>
            <Link className={`nav-link ${style.link}`} to={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
