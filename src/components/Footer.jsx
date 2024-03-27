import React from 'react';

//assets
import LogoPartner1 from '../assets/img/logo-unsplash.png';
import LogoPartner2 from '../assets/img/logo-freepik.png';
import LogoPartner3 from '../assets/img/logo-google-fonts.png';

function Footer() {
  return (
    <footer>
      <form className="leading-[30px] relative order-0">
        <label
          className="text-[0.8rem] md:text-[1rem] uppercase font-semibold italic w-full"
          htmlFor="Email"
        >
          Sign up to our newsletter
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@gmail.com"
          className="email text-uppercase tracking-[2px] bg-transparent xl:w-[350px] w-[250px] border-none border-b border-darkgray "
          required
        />
        <button
          id="email-submit"
          className="email-submit bg-transparent  w-[50px] h-[19px] p-0 ml-[calc(-50px)] border-none text-[1.3rem] hover:text-navy1"
          type="submit"
          form="form1"
          value="submit"
        >
          &rarr;
        </button>
      </form>
      <div className="footer-social-icons flex gap-[30px] md:order-4 xl:order-2 order-1">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
            fill="#EFEEE9"
            fillRule="nonzero"
          />
        </svg>
        <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
            fill="#EFEEE9"
            fillRule="nonzero"
          />
        </svg>
        <svg
          fill="#EFEEE9"
          height="24"
          width="24"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          // eslint-disable-next-line react/no-unknown-property
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 310 310"
          xmlSpace="preserve"
        >
          <g id="XMLID_834_">
            <path
              id="XMLID_835_"
              d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
            />
          </g>
        </svg>
      </div>
      <div className="footer-links flex flex-col md:flex-row md:gap-[60px] gap-[o] order-2 md:order-1 text-center md:text-left">
        <ul className="flex flex-col  leading-[1rem]">
          <li className="list-none">
            <a
              className=" uppercase text-[0.65rem] tracking-[2px] no-underline hover:font-bold"
              href="#"
            >
              about
            </a>
          </li>
          <li className="list-none">
            <a
              className=" uppercase text-[0.65rem] tracking-[2px] no-underline hover:font-bold"
              href="#"
            >
              careers
            </a>
          </li>
          <li className="list-none">
            <a
              className=" uppercase text-[0.65rem] tracking-[2px] no-underline hover:font-bold"
              href="#"
            >
              press
            </a>
          </li>
          <li className="list-none">
            <a
              className=" uppercase text-[0.65rem] tracking-[2px] no-underline hover:font-bold"
              href="#"
            >
              faq
            </a>
          </li>
        </ul>
        <ul className="flex flex-col md:ml-[-2rem] ml-[0] mt-[1rem] md:mt-[0rem] leading-[1rem]">
          <li className="list-none">
            <a
              className=" uppercase text-[0.65rem] tracking-[2px] no-underline hover:font-bold"
              href="#"
            >
              contact us
            </a>
          </li>
          <li className="list-none">
            <a
              className=" uppercase text-[0.65rem] tracking-[2px] no-underline hover:font-bold"
              href="#"
            >
              tripwise ads
            </a>
          </li>
          <li className="list-none">
            <a
              className=" uppercase text-[0.65rem] tracking-[2px] no-underline hover:font-bold"
              href="#"
            >
              paylater
            </a>
          </li>
        </ul>
        <ul className="flex flex-col md:ml-[-2rem] ml-[0] mt-[1rem] md:mt-[0rem] leading-[1rem]">
          <li className="list-none">
            <a
              className=" uppercase text-[0.65rem] tracking-[2px] no-underline hover:font-bold"
              href="#"
            >
              refund policy
            </a>
          </li>
          <li className="list-none">
            <a
              className=" uppercase text-[0.65rem] tracking-[2px] no-underline hover:font-bold"
              href="#"
            >
              privacy policy
            </a>
          </li>
          <li className="list-none">
            <a
              className=" uppercase text-[0.65rem] tracking-[2px] no-underline hover:font-bold"
              href="#"
            >
              terms of service
            </a>
          </li>
          <li className="list-none">
            <a
              className="uppercase text-[0.65rem] tracking-[2px] no-underline hover:font-bold"
              href="#"
            >
              shipping policy
            </a>
          </li>
          <li className="list-none">
            <a
              className="uppercase text-[0.65rem] tracking-[2px] no-underline hover:font-bold"
              href="#"
            >
              subscription policy
            </a>
          </li>
        </ul>
      </div>
      <address className="md:order-2 xl:order-3 order-3 leading-[1rem] uppercase font-normal text-[0.65rem] tracking-[2px] text-darkgray text-center md:text-left">
        2999 crystal drive arlington, va 10930
        <br />
        859-710-8931-2970
        <br />
        mon-fri: 7:00am-6:00pm
        <br />
        sat & sun: 8:00am-6:00pm
      </address>
      <div className="footer-partners order-4 md:order-3 xl:order-4 flex flex-col items-start gap-[10px] ml-[-2.5rem] md:ml-[0]">
        <span className="uppercase text-[0.65rem] font-[700] tracking-[2px] ">our partners</span>
        <div className="footer-partners-logo flex justify-between gap-[20px]">
          <img className="h-[20px] w-auto" src={LogoPartner1} alt="logo-unsplash" />
          <img className="h-[20px] w-auto" src={LogoPartner2} alt="logo-freepik" />
          <img className="h-[20px] w-auto" src={LogoPartner3} alt="logo-google-fonts" />
        </div>
      </div>
      <span className="copyright order-5 self-center font-normal text-[0.65rem] tracking-[2px] text-gray-600 uppercase">
        &copy;2024 tripwise
      </span>
    </footer>
  );
}

export default Footer;
