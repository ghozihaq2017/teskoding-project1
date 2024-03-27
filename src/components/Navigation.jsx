// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components
import NavbarMobile from './NavbarMobile';
import ToggleTheme from './ToggleTheme';

// Assets
import Logo from '../assets/img/logo2.png';

function Navigation() {
  useEffect(() => {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    const handleClick = () => {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
    };

    if (menu_btn) {
      menu_btn.addEventListener('click', handleClick);
    }

    return () => {
      if (menu_btn) {
        menu_btn.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <nav
      id="nav"
      className="top-0 w-screen min-h-[70px] z-10 flex justify-between items-center fixed"
    >
      <a href="#" className="flex justify-center items-center no-underline ml-[2rem]">
        <img src={Logo} width="40px" height="40px" alt="logo-tripwise" />
        <h5 className="text-[1.7rem] font-bold  lowercase tracking-[1px]">Tripwise</h5>
      </a>
      <ul className="mt-[0.5rem] gap-[30px] pl-0 xl:flex justify-center hidden">
        <li className="list-none hover:font-bold text-center transition duration-100">
          <Link to="/">
            <a className="uppercase  tracking-[5px] no-underline text-[1rem] flex justify-center items-center">
              Home
            </a>
          </Link>
        </li>
        <li className="list-none hover:font-bold text-center transition duration-100">
          <Link to="/our-package">
            <a className="uppercase  tracking-[5px] no-underline text-[1rem]">Our Package</a>
          </Link>
        </li>
        <li className="list-none hover:font-bold text-center transition duration-100">
          <Link to="/top-25">
            <a className="uppercase  tracking-[5px] no-underline text-[1rem]">Top 25</a>
          </Link>
        </li>
      </ul>
      <div className="nav-icon-container gap-[1.5rem] mr-[4rem] xl:flex hidden">
        <a href="#">
          <ToggleTheme />
        </a>
      </div>
      <button className="hamburger block xl:hidden">
        <div className="bar"></div>
      </button>
      <NavbarMobile />
    </nav>
  );
}

export default Navigation;
