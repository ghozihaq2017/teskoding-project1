import React from 'react';
import { Link } from 'react-router-dom';

// Component
import ToggleTheme from './ToggleTheme';

function NavbarMobile() {
  return (
    <nav className="mobile-nav relative">
      <Link to="/">Home</Link>
      <Link to="/our-package">Our Package</Link>
      <Link to="/top-25">Top 25</Link>
      <div className="toggle-nav absolute top-[1rem] md:top-[2rem] px-[0.5rem] py-[0.3rem] rounded-full left-[2rem] md:left-[3rem]">
        <ToggleTheme />
      </div>
    </nav>
  );
}

export default NavbarMobile;
