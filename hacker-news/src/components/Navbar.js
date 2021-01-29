import React from 'react';

import '../css/Navbar.css';

const Navbar = () => {
  return (
    <div>
      <div className="navBar">
        <header className="navBar__header">
          <div className="navBar__logo">
            <p>Hacker News</p>
          </div>
          <nav className="navBar__stories">
            <div>
              <p>Login</p>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
