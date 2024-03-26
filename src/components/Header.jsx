/* eslint-disable no-unused-vars */
import React from 'react';
import HeaderVideo from '../assets/video/back-header.mp4';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="min-h-[110vh] bg-black bg-opacity-70 flex justify-center relative">
      <video autoPlay loop muted playsInline className="w-screen h-[110vh] object-cover z-[-1]">
        <source src={HeaderVideo} />
      </video>
      <Navigation />
      <div className="hero gap-y-[20px] absolute bottom-0 lg:mb-[10rem] md:mb-[20rem] mb-[10rem] flex flex-col justify-center items-center">
        <h1 className="xl:text-[2.2rem] md:text-[2.5rem] text-[1.7rem]  font-normal text-white text-center py-[1.5rem] md:py-[3rem] xl:py-[0]">
          The Dream Destination Awaits, We Are Here To Make It Happen
        </h1>
        <button className="mt-8 uppercase tracking-[0.3em]  border-none px-[1.5rem] py-[1rem] md:px-[2rem] md:py-[1.6rem] xl:px-[1.6rem] xl:py-[1rem] rounded-full shadow-md font-bold md:text-[1.5rem] xl:text-base text-base hover:opacity-50">
          Discover Now
        </button>
      </div>
    </header>
  );
}

export default Header;
