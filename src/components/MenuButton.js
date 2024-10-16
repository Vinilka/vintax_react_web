import React from 'react';
import { NavLink } from "react-router-dom";
import './MenuButton.css'


export default function MenuButton({ href, text, onClick}) {
  return (
    <li>
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive ? "menu-item active" : "menu-item"} onClick={onClick}>
        {text}
      </NavLink>
    </li>
  );
  };