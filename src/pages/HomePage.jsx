import React from 'react';

// Componenent
import Header from '../components/Header';
import Footer from '../components/Footer';
import GalleryAbout from '../components/GalleryAbout';

// Assets
import Logo from '../assets/img/logo2.png';

function HomePage() {
  return (
    <section className="home font-monse ">
      <Header />
      <div
        className="tripwise-content rounded-t-3xl xl:min-h-screen min-h-[50vh] mt-[-4rem] relative pb-[3rem]"
        id="about"
      >
        <h2 className="text-center pt-[5rem] text-darkgray text-[1.4rem] font-bold leading-[3rem]">
          Tripwise
          <br />
          Explore Life, Anywhere
        </h2>
        <div className="about-tripwise xl:p-[1rem] md:py-[3rem] md:px-[2rem] py-[3rem] px-[1rem]">
          <div className="desc-tripwise1 flex justify-center items-center md:flex-row flex-col text-justify md:text-left">
            <div className="gallery1  md:mr-[5rem] mr-[0rem]">
              <img className="xl:max-w-[30rem] max-w-[13rem]" src={Logo} alt="logo Tripwise" />
            </div>
            <p
              className="max-w-[38rem] text-darkgray text-base px-[2rem] md:px-[0rem]"
              style={{ wordSpacing: '2px' }}
            >
              Welcome to TripWise, your gateway to the diverse wonders of Indonesia! In a land
              blessed with countless breathtaking destinations, we present TripWise as the ultimate
              travel companion, designed to simplify your journey and elevate your travel
              experience. At TripWise, we understand that Indonesia is a treasure trove of unique
              travel experiences, from the pristine beaches of Bali to the cultural richness of
              Yogyakarta. Inspired by this diversity, we crafted an app that goes beyond mere
              convenience — it&apos;s your key to unlocking the full potential of your adventures.
            </p>
          </div>
          <div className="desc-tripwise1 flex justify-center items-center mt-[2rem] md:flex-row flex-col text-justify md:text-left">
            <p
              className="max-w-[28rem] xl:max-w-[38rem] text-darkgray text-base px-[2rem] md:px-[0rem]"
              style={{ wordSpacing: '2px' }}
            >
              TripWise shares the philosophy that every journey should be tailored to your unique
              aspirations. With over a decade of experience, we bring you a wealth of choices to
              ignite your personal state of happiness. Whether you seek a glamping escape, a
              rejuvenating spa retreat, or an exhilarating holiday adventure, TripWise ensures you
              have everything you need for both domestic and international travel, all conveniently
              within a sing Embark on a seamless and enriching journey with TripWise — where the
              magnificence of Indonesia meets the ease of modern travel. Your adventure awaits, just
              a click away!&quot;
            </p>
            <GalleryAbout />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default HomePage;
