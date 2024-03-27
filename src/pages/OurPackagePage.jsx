import React from 'react';

// Components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Categories from '../components/Categories';

// utils
import { attractions, tours, hotels } from '../utils/packages';

function OurPackagePage() {
  return (
    <section className="our-package min-h-screen relative font-monse">
      <Navigation />
      <div className="our-package-content py-[3rem]" id="our-package">
        <h2 className="text-center pt-[5rem] text-[1.5rem] font-bold leading-[3rem]">
          Our Package
        </h2>
        <Categories data={attractions} title="Attractions" />
        <Categories data={tours} title="Tours" />
        <Categories data={hotels} title="Hotels" />
      </div>
      <Footer />
    </section>
  );
}

export default OurPackagePage;
