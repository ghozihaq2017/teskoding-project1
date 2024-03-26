// eslint-disable-next-line no-unused-vars
import React from 'react';
import Category from './Category';

function Categories() {
  return (
    <div className="category mx-[4rem] mt-[3rem] flex flex-col justify-center items-center">
      <div className="title-category ">
        <h4 className=" font-bold text-lg">Attractions</h4>
      </div>
      <div
        className="container-category grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] mt-[1rem] mx-auto"
        style={{ maxWidth: '80%' }}
      >
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
}

export default Categories;
