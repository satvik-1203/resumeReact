import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <div className="navBar">
          <div>
            <Link id="logo" to="/">
              Capture
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/">1. About Us</Link>
            </li>
            <li>
              <Link to="/work">2. Our Work</Link>
            </li>
            <li>
              <Link to="/contact">3. Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
