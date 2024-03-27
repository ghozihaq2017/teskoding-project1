import React from 'react';
import PropTypes from 'prop-types';

// Component
import Category from './Category';

function Categories({ data, title }) {
  return (
    <div className="category mx-[4rem] mt-[3rem] flex flex-col justify-center items-center">
      <div className="title-category ">
        <h4 className=" font-bold text-lg">{title}</h4>
      </div>
      <div
        className="container-category grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] mt-[1rem] mx-auto"
        style={{ maxWidth: '80%' }}
      >
        {data.map((item) => (
          <Category key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

// Prop Validation
Categories.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Categories;
