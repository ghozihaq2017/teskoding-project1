// eslint-disable-next-line no-unused-vars
import React from 'react';
import Attractions1 from '../assets/img/attractions1.png';

function Category() {
  return (
    <div className="box h-[13rem] w-full rounded-lg overflow-hidden relative flex flex-wrap justify-around">
      <img src={Attractions1} alt="Dufan Ancol" className="h-full w-full object-cover" />
      <div className="content absolute top-[82%] left-0 h-full w-full ">
        <div className="tag flex items-center h-[2.3rem] w-full pl-[1rem] bg-navy">
          <h5 className="text-[1rem] font-[600]">Dufan Ancol</h5>
        </div>
        <div className="info my-[0.5rem] mx-[1rem]">
          <p className="text-white text-[0.8rem]  md:text-[1rem] leading-[0.7rem]">
            Jakarta Utara, Jakarta
          </p>
          <p className="text-white mt-3 text-[0.8rem]  md:text-[1rem]leading-[0.7rem]">
            Rp.275.000
          </p>
        </div>
        <div className="bttn flex justify-center mt-3">
          <button className="px-[2rem] py-[0.5rem] rounded-lg text-[1rem]  border-none transition duration-300 hover:bg-navy1">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Category;
