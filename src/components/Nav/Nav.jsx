import { React, useState } from "react";
import style from "./nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({ items }) => {
  const [active, setActive] = useState(false);

  return (
    <nav className='navbar justify-content-end'>
      <span
        className={`${style.toggler} ${active ? style.active : ""}`}
        onClick={() => {
          setActive((prevActive) => !prevActive);
        }}>
        <span></span>
      </span>
      <ul className={`nav ${style.nav} ${active ? style.active : ""}`}>
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
