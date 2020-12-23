import React, { useState } from 'react';


const Radius = ({radius, setRadius}) => {


  const onChangeHandler = (e) => {
    setRadius(e.target.value);
  };

  return (
    <div className='my-6 text-center'>
      <input type='number'
        className='w-full py-4 md:px-20 px-7 text-xl text-center'
        placeholder={'Радиус (R)'}
        value={radius}
        onChange={onChangeHandler}
        // onKeyDown={onKeyDownHandler}
      />
    </div>
  )
}

export default Radius;
