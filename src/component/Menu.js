import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div class="menu">
      <ul>
        <li>
          <NavLink title="Home" class="active" to="/">
            <i class="home"></i>
          </NavLink>
        </li>
        <li>
          <NavLink title="YouTube" to="/videos">
            <div class="video">
              <i class="videos"></i>
              <i class="videos1"></i>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink title="Watching" to="/reviews">
            <div class="cat">
              <i class="watching"></i>
              <i class="watching1"></i>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink title="Booking" to="/error">
            <div class="bk">
              <i class="booking"></i>
              <i class="booking1"></i>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink title="Contact" to="/contact">
            <div class="cnt">
              <i class="contact"></i>
              <i class="contact1"></i>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
