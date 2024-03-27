import React from 'react';

// Assets
import Img1 from '../assets/img/img1.jpg';
import Img2 from '../assets/img/img2.jpg';
import Img3 from '../assets/img/img3.jpg';
import Img4 from '../assets/img/img4.jpg';
import Img5 from '../assets/img/img5.jpg';
import Img6 from '../assets/img/img6.jpg';
import Img7 from '../assets/img/img7.jpg';
import Img8 from '../assets/img/img8.jpg';
import Img9 from '../assets/img/img9.jpg';

function GalleryAbout() {
  return (
    <div className=" mt-[1rem] md:mt-0rem md:ml-[5rem] ml-[0rem] grid grid-cols-3 gap-[0.3rem]">
      <img src={Img1} alt="foto1" className=" xl:max-w-[8rem] max-w-[5rem]" />
      <img src={Img2} alt="foto2" className="xl:max-w-[8rem] max-w-[5rem] " />
      <img src={Img3} alt="foto3" className="xl:max-w-[8rem] max-w-[5rem]" />
      <img src={Img4} alt="foto4" className="xl:max-w-[8rem] max-w-[5rem]" />
      <img src={Img5} alt="foto5" className="xl:max-w-[8rem] max-w-[5rem]" />
      <img src={Img6} alt="foto6" className="xl:max-w-[8rem] max-w-[5rem]" />
      <img src={Img7} alt="foto7" className="xl:max-w-[8rem] max-w-[5rem]" />
      <img src={Img8} alt="foto8" className="xl:max-w-[8rem] max-w-[5rem]" />
      <img src={Img9} alt="foto9" className="xl:max-w-[8rem] max-w-[5rem]" />
    </div>
  );
}

export default GalleryAbout;
