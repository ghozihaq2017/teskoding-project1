import React from 'react';

// Components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TableData from '../components/TableData';

function Top25Page() {
  return (
    <section className="top-25 min-h-screen relative font-monse">
      <Navigation />
      <div className="top-25-content py-[3rem]" id="our-package">
        <h2 className="text-center pt-[5rem] md:text-[1.5rem] text-base font-bold leading-[3rem]">
          Top 25 Destination In Indonesia
        </h2>
        <TableData />
      </div>
      <Footer />
    </section>
  );
}

export default Top25Page;
