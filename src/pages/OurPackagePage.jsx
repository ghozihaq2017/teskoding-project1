// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Categories from '../components/Categories';

function OurPackagePage() {
  return (
    <section className="our-package min-h-screen relative font-monse">
      <Navigation />
      <div className="our-package-content py-[3rem]" id="our-package">
        <h2 className="text-center pt-[5rem] text-[1.5rem] font-bold leading-[3rem]">
          Our Package
        </h2>
        <Categories />
        <Categories />
        <Categories />
      </div>
      <Footer />
    </section>
  );
}

export default OurPackagePage;
