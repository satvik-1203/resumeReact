import React from "react";

export default function Nav() {
  return (
    <div>
      <nav>
        <div className="navBar">
          <div>
            <a id="logo" href="#">
              Capture
            </a>
          </div>
          <ul>
            <li>
              <a href="#">1. About Us</a>
            </li>
            <li>
              <a href="#">2. Our Work</a>
            </li>
            <li>
              <a href="#">3. Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
